// Problem - Implement A Queue using two stacks. what if we only use one stack.

let Queue = function(stack){
	var size = 0;
	return {
		enqueue: function(val){
			stack.push(val);
			this.size ++;
		},
		dequeue: function() {
			if(stack.length !== 0) {
				return deq_recursion();
			} else {
				console.error('Stack is empty !!')
			}
			this.size --;
		},
		getSize: function() {
			return this.size;
		}

	}
}
function deq_recursion(stack){
	if(stack.length === 1) {
		return stack.pop();
	}
	currentVal = stack.pop();
	deq_recursion(stack);
	stack.push(currentVal);
}

let q = new Queue([]);
console.log(q.getSize());
console.log(q.enqueue(5));
console.log(q.enqueue(6));
console.log(q.enqueue(1));
console.log(q.enqueue(2));
console.log(q.enqueue(3));
console.log(q.getSize());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.enqueue(8));
console.log(q.enqueue(9));


