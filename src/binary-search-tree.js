const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */


class BinarySearchTree {
    constructor() {
        this.head = null;
    }

    root() {
        return this.head;
    }

    add(data) {
        this.head = addWithin(this.head, data);

        function addWithin(node, value) {
            if (!node) {
                return new Node(value);
            }

            if (node.value === value) {
                return node;
            }

            if (value < node.value) {
                node.left = addWithin(node.left, value);
            } else {
                node.right = addWithin(node.right, value);
            }

            return node;
        }
    }

    has(data) {
        return !!this.find(data);
    }

    find(data) {
        return findWithin(this.head, data);

        function findWithin(node, value) {
            if (!node) {
                return null;
            }

            if (node.data === data) {
                return node;
            }

            return (data < node.value) ? findWithin(node.left, data) : findWithin(node.right, value);
        }
    }

    remove(data) {
        this.head = removeNode(this.head, data);

        function removeNode(node, value) {
            if (node === null) {
                return null;
            } else if (value < node.value) {
                node.left = removeNode(node.left, value);
                return node;
            } else if (value > node.value) {
                node.right = removeNode(node.right, value);
                return node;
            } else {
                if (!node.left && !node.right) {
                    return null;
                }

                if (!node.left) {
                    node = node.right;
                    return node;
                }

                if (!node.right) {
                    node = node.left;
                    return node;
                }

                let maxFromLeft = this.max(node.right);
                node.value = maxFromLeft.value;

                node.right= removeNode(node.right, maxFromLeft.value);

                return node;
            }
        }
    }

    min() {
        let node = this.head;

        if (!node.right) {
            return node.data;
        }
        while (node.right) {
            node = node.right;
        }

        return node.data;
    }


    max() {
        let node = this.head;

        if (!node.left) {
            return node.data;
        }

        while (node.left) {
            node = node.left;
        }

        return node.data;
    }
}

module.exports = {
    BinarySearchTree
};