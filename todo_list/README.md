# Grocery List

A simple full-stack grocery list application with a Flask REST API backend, SQLite database, and a vanilla HTML/CSS/JS frontend served via Nginx — deployed on Kubernetes.

## Features

- Add grocery items with an optional quantity
- Mark items as done / undo done
- Delete items
- Persistent storage with SQLite
- Responsive, minimal UI

## Tech Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Backend  | Python 3.11, Flask 3, Flask-CORS  |
| Database | SQLite (via Python stdlib)        |
| Frontend | Vanilla HTML5, CSS3, JavaScript   |
| Server   | Nginx (Alpine)                    |
| Runtime  | Kubernetes (kubectl)              |

## Project Structure

```
todo_list/
├── backend/
│   ├── app.py            # Flask application & route handlers
│   ├── models.py         # GroceryItem frozen dataclass
│   ├── repository.py     # GroceryRepository — all DB access
│   ├── requirements.txt  # Flask, Flask-CORS
│   └── Dockerfile        # python:3.11-slim + gunicorn
├── frontend/
│   ├── index.html        # Single-page markup
│   ├── style.css         # Styles
│   ├── app.js            # All UI logic (fetch, render, events)
│   ├── nginx.conf        # Proxy /items → backend:5000
│   └── Dockerfile        # nginx:alpine
└── manifests/            # Kubernetes manifests
```

## Screenshots

_[Add screenshots here once the app is running]_

- **Main view** — list of grocery items with add form at the top
- **Done state** — completed items appear with strikethrough styling and an undo button
## Deploy with kubectl

```bash
# Build images
docker build -t todo-backend:latest ./backend
docker build -t todo-frontend:latest ./frontend

# Create namespace and apply manifests
kubectl create namespace todo-app
kubectl apply -f manifests/ -n todo-app

# Check services
k9s -n todo-app
```
