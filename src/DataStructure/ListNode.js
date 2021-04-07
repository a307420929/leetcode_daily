/** 
 * 链表：JS的实现方式
 * 1. 单向链表：线性的数据结构，不是连续的
 * 2. 双向链表：
 * 3. 单向循环链表：尾部的next指向head
 * 4. 双向循环链表：头部指向尾部
 * 5. 环形链表
 */

class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

export class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    append(element) {
        var node = new Node(element)
        if (this.head == null) {
            this.head = node
        } else {
            var current = head;
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        length++
    }
    getHead() {
        return this.head
    }
}


