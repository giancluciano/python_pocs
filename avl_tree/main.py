class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
        self.height = 0

    def get_height(node):
        if not node:
            return 0
        return node.height

    def get_balance(node):
        if not node:
            return 0
        return get_height(node.left) - get_height(node.right)