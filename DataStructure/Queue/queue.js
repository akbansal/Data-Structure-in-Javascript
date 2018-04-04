/**
 * Created by ambansa2 on 3/23/18.
 */

function Queue() {
	this.head = null;
	this.tail = null;

	function Node(data) {
		this.data = data;
		this.next = null;
	}

	this.enqueue = function(data) {
		const newNode = new Node(data);

		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
	};

	this.dequeue = function() {
		let newNode;
		if (this.head !== null) {
			newNode = this.head.data;
			this.head = this.head.next;
		}
		return newNode;
	};

	this.print = function() {
		let curr = this.head;
		while (curr !== null) {
			console.log(curr.data);
			curr = curr.next;
		}
	};

	this.isEmpty = function() {
		return (this.head === null && this.tail === null);
	};
}

module.exports = Queue;