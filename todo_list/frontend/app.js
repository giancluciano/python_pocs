const API_BASE = window.API_BASE || '';

// --- DOM references ---
const addForm = document.getElementById('add-form');
const itemNameInput = document.getElementById('item-name');
const itemQtyInput = document.getElementById('item-qty');
const itemList = document.getElementById('item-list');
const errorBanner = document.getElementById('error-banner');
const emptyMsg = document.getElementById('empty-msg');

// --- API helpers ---
async function apiFetch(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error || 'Unknown error');
  return json.data;
}

function showError(msg) {
  errorBanner.textContent = msg;
  errorBanner.classList.remove('hidden');
  setTimeout(() => errorBanner.classList.add('hidden'), 4000);
}

// --- Render ---
function renderItem(item) {
  const li = document.createElement('li');
  li.className = `item${item.done ? ' done' : ''}`;
  li.dataset.id = item.id;

  const info = document.createElement('div');
  info.className = 'item-info';

  const name = document.createElement('span');
  name.className = 'item-name';
  name.textContent = item.name;
  info.appendChild(name);

  if (item.quantity) {
    const qty = document.createElement('div');
    qty.className = 'item-qty';
    qty.textContent = item.quantity;
    info.appendChild(qty);
  }

  const actions = document.createElement('div');
  actions.className = 'item-actions';

  if (!item.done) {
    const doneBtn = document.createElement('button');
    doneBtn.className = 'btn-icon btn-done';
    doneBtn.title = 'Mark as done';
    doneBtn.textContent = '✓';
    doneBtn.addEventListener('click', () => markDone(item.id));
    actions.appendChild(doneBtn);
  } else {
    const undoBtn = document.createElement('button');
    undoBtn.className = 'btn-icon btn-undo';
    undoBtn.title = 'Undo done';
    undoBtn.textContent = '↩';
    undoBtn.addEventListener('click', () => undoDone(item.id));
    actions.appendChild(undoBtn);
  }

  const delBtn = document.createElement('button');
  delBtn.className = 'btn-icon btn-delete';
  delBtn.title = 'Remove item';
  delBtn.textContent = '✕';
  delBtn.addEventListener('click', () => removeItem(item.id));
  actions.appendChild(delBtn);

  li.appendChild(info);
  li.appendChild(actions);
  return li;
}

function renderList(items) {
  itemList.innerHTML = '';
  if (items.length === 0) {
    emptyMsg.classList.remove('hidden');
  } else {
    emptyMsg.classList.add('hidden');
    items.forEach(item => itemList.appendChild(renderItem(item)));
  }
}

// --- Actions ---
async function loadItems() {
  try {
    const items = await apiFetch('/items');
    renderList(items);
  } catch (e) {
    showError(`Failed to load items: ${e.message}`);
  }
}

async function addItem(name, quantity) {
  try {
    const item = await apiFetch('/items', {
      method: 'POST',
      body: JSON.stringify({ name, quantity: quantity || null }),
    });
    // Prepend pending item at top, or just reload
    await loadItems();
  } catch (e) {
    showError(`Failed to add item: ${e.message}`);
  }
}

async function removeItem(id) {
  try {
    await apiFetch(`/items/${id}`, { method: 'DELETE' });
    document.querySelector(`.item[data-id="${id}"]`)?.remove();
    if (itemList.children.length === 0) emptyMsg.classList.remove('hidden');
  } catch (e) {
    showError(`Failed to remove item: ${e.message}`);
  }
}

async function markDone(id) {
  try {
    const updated = await apiFetch(`/items/${id}/done`, { method: 'PATCH' });
    const li = document.querySelector(`.item[data-id="${id}"]`);
    if (li) li.replaceWith(renderItem(updated));
  } catch (e) {
    showError(`Failed to mark item done: ${e.message}`);
  }
}

async function undoDone(id) {
  try {
    const updated = await apiFetch(`/items/${id}/undo`, { method: 'PATCH' });
    const li = document.querySelector(`.item[data-id="${id}"]`);
    if (li) li.replaceWith(renderItem(updated));
  } catch (e) {
    showError(`Failed to undo item: ${e.message}`);
  }
}

// --- Events ---
addForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = itemNameInput.value.trim();
  const qty = itemQtyInput.value.trim();
  if (!name) return;
  itemNameInput.value = '';
  itemQtyInput.value = '';
  await addItem(name, qty);
});

// --- Init ---
loadItems();
