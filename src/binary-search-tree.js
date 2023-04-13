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
        this.head = addElem(this.head, data);

        function addElem(node, data) {
            if (!node) {
                return new Node(data);
            }
            if (node.data === data) {
                return node;
            }
            if (data > node.data) {
                node.right = addElem(node.right, data);
            } else {
                node.left = addElem(node.left, data);
            }
            return node;
        }
    }

    has(data) {
        return !!this.find(data);
    }

    find(data) {
        return findWithin(this.head, data);

        function findWithin(node, data) {
            if (!node) {
                return null;
            }
            if (node.data === data) {
                return node;
            }
            return (data < node.data) ? findWithin(node.left, data) : findWithin(node.right, data);
        }
    }

    remove(data) {
        this.head = removeElem(this.head, data);

        function removeElem(node, data) {
            if (!node) {
                return null;
            }

            if (data > node.data) {
                node.right = removeElem(node.right, data);
                return node;
            } else if (data < node.data) {
                node.left = removeElem(node.left, data);
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

                let maxLeft = node.left;
                while (maxLeft.right) {
                    maxLeft = maxLeft.right;
                }
                node.data = maxLeft.data;
                node.left = removeElem(node.left, maxLeft.data);
                return node;
            }
        }
    }

    min() {
        if (this.head) {
            let node = this.head;
            while (node.left) {
                node = node.left;
            }
            return node.data;
        } else {
            return null;
        }
    }

    max() {
        if (this.head) {
            let node = this.head;
            while (node.right) {
                node = node.right;
            }
            return node.data;
        } else {
            return null
        }
    }
}

module.exports = {
    BinarySearchTree
};