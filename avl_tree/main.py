class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
        self.height = 1

    @staticmethod
    def get_height(node):
        if not node:
            return 0
        return node.height

    @staticmethod
    def get_balance(node):
        if not node:
            return 0
        return Node.get_height(node.left) - Node.get_height(node.right)

    def update_height(self):
        self.height = 1 + max(Node.get_height(self.left), Node.get_height(self.right))

    def rotate_right(self):
        new_root = self.left
        self.left = new_root.right
        new_root.right = self

        self.update_height()
        new_root.update_height()

        return new_root

    def rotate_left(self):
        new_root = self.right
        self.right = new_root.left
        new_root.left = self

        self.update_height()
        new_root.update_height()

        return new_root

    def insert(self, data):
        if data < self.data:
            if self.left:
                self.left = self.left.insert(data)
            else:
                self.left = Node(data)
        elif data > self.data:
            if self.right:
                self.right = self.right.insert(data)
            else:
                self.right = Node(data)
        else:
            return self  # duplicate, no insert

        self.update_height()
        return self._rebalance()

    def _rebalance(self):
        balance = Node.get_balance(self)

        # Left-Left case
        if balance > 1 and Node.get_balance(self.left) >= 0:
            return self.rotate_right()

        # Left-Right case
        if balance > 1 and Node.get_balance(self.left) < 0:
            self.left = self.left.rotate_left()
            return self.rotate_right()

        # Right-Right case
        if balance < -1 and Node.get_balance(self.right) <= 0:
            return self.rotate_left()

        # Right-Left case
        if balance < -1 and Node.get_balance(self.right) > 0:
            self.right = self.right.rotate_right()
            return self.rotate_left()

        return self
