import sqlite3
from typing import List, Optional
from models import GroceryItem

DB_PATH = "grocery.db"


def get_connection() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db() -> None:
    with get_connection() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS grocery_items (
                id       INTEGER PRIMARY KEY AUTOINCREMENT,
                name     TEXT    NOT NULL,
                quantity TEXT,
                done     INTEGER NOT NULL DEFAULT 0
            )
            """
        )
        conn.commit()


class GroceryRepository:
    def find_all(self) -> List[GroceryItem]:
        with get_connection() as conn:
            rows = conn.execute(
                "SELECT id, name, quantity, done FROM grocery_items ORDER BY id"
            ).fetchall()
        return [GroceryItem(r["id"], r["name"], r["quantity"], bool(r["done"])) for r in rows]

    def find_by_id(self, item_id: int) -> Optional[GroceryItem]:
        with get_connection() as conn:
            row = conn.execute(
                "SELECT id, name, quantity, done FROM grocery_items WHERE id = ?",
                (item_id,),
            ).fetchone()
        if row is None:
            return None
        return GroceryItem(row["id"], row["name"], row["quantity"], bool(row["done"]))

    def create(self, name: str, quantity: Optional[str]) -> GroceryItem:
        with get_connection() as conn:
            cursor = conn.execute(
                "INSERT INTO grocery_items (name, quantity, done) VALUES (?, ?, 0)",
                (name, quantity),
            )
            conn.commit()
            new_id = cursor.lastrowid
        return self.find_by_id(new_id)

    def delete(self, item_id: int) -> bool:
        with get_connection() as conn:
            cursor = conn.execute(
                "DELETE FROM grocery_items WHERE id = ?", (item_id,)
            )
            conn.commit()
        return cursor.rowcount > 0

    def set_done(self, item_id: int, done: bool) -> Optional[GroceryItem]:
        with get_connection() as conn:
            cursor = conn.execute(
                "UPDATE grocery_items SET done = ? WHERE id = ?",
                (1 if done else 0, item_id),
            )
            conn.commit()
        if cursor.rowcount == 0:
            return None
        return self.find_by_id(item_id)
