from dataclasses import dataclass
from typing import Optional


@dataclass(frozen=True)
class GroceryItem:
    id: int
    name: str
    quantity: Optional[str]
    done: bool

    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "name": self.name,
            "quantity": self.quantity,
            "done": self.done,
        }
