// Fast & Slow Pointers (Floyd’s Cycle Detection)
// ------------------------------------------------------
// 
// Imagine two runners on a circular track — one runs fast,
// the other runs slow. If there’s a cycle, they will meet;
// if not, the fast runner will finish and stop.
//
// Use Case: Detecting loops in linked lists or arrays.
// ------------------------------------------------------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function hasCycle(head) {
    let slow = head, fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}
