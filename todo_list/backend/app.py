from flask import Flask, jsonify, request
from flask_cors import CORS
from repository import GroceryRepository, init_db

app = Flask(__name__)
CORS(app)

repo = GroceryRepository()


def ok(data):
    return jsonify({"success": True, "data": data, "error": None})


def err(message: str, status: int = 400):
    return jsonify({"success": False, "data": None, "error": message}), status


# Initialize DB on startup
with app.app_context():
    init_db()


@app.route("/items", methods=["GET"])
def list_items():
    items = repo.find_all()
    return ok([item.to_dict() for item in items])


@app.route("/items", methods=["POST"])
def add_item():
    body = request.get_json(silent=True) or {}
    name = body.get("name", "").strip()
    if not name:
        return err("'name' is required and must be a non-empty string")
    quantity = body.get("quantity")
    if quantity is not None:
        quantity = str(quantity).strip() or None
    item = repo.create(name, quantity)
    return ok(item.to_dict()), 201


@app.route("/items/<int:item_id>", methods=["DELETE"])
def remove_item(item_id: int):
    deleted = repo.delete(item_id)
    if not deleted:
        return err("Item not found", 404)
    return ok(None)


@app.route("/items/<int:item_id>/done", methods=["PATCH"])
def mark_done(item_id: int):
    item = repo.set_done(item_id, done=True)
    if item is None:
        return err("Item not found", 404)
    return ok(item.to_dict())


@app.route("/items/<int:item_id>/undo", methods=["PATCH"])
def undo_done(item_id: int):
    item = repo.set_done(item_id, done=False)
    if item is None:
        return err("Item not found", 404)
    return ok(item.to_dict())


if __name__ == "__main__":
    app.run(debug=True, port=5000)
