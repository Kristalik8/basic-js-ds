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

    add(/* data */) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    has(data) {
        return !!this.find(data);
    }

    find(data) {

        return search(this.head, data);

        function search(node, data) {


            if (node === null) return null;

            else if (data < node.data)
                return this.find(node.left, data);

            else if (data > node.data)
                return this.find(node.right, data);

            else return node;
        }
    }

    remove(/* data */) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    min() {
        if (this.head) {
            let node = this.head;
            while (node.left) {
                node = this.head.left;
            }
        } else return null;
    }

    max() {
        if (this.head) {
            while (this.head.right) {
                this.head = this.head.right;
            }
        } else return null;
    }
}

module.exports = {
    BinarySearchTree
};