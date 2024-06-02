function mincost(arr) {
    // Create a min-heap to store the lengths of ropes
    const minHeap = new MinHeap(arr);
    
    // Initialize the cost to 0
    let cost = 0;
    
    // Continue until there is only one rope left in the heap
    while (minHeap.size() > 1) {
        // Remove the two shortest ropes from the heap
        const min1 = minHeap.extractMin();
        const min2 = minHeap.extractMin();
        
        // Merge the two ropes and calculate the cost
        const newRope = min1 + min2;
        cost += newRope;
        
        // Add the merged rope back to the heap
        minHeap.insert(newRope);
    }
    
    // The remaining rope in the heap is the final merged rope
    // No need to add its length to the cost since it's already merged with other ropes
    return cost;
}

// MinHeap class to implement the min-heap data structure
class MinHeap {
    constructor(arr = []) {
        this.heap = arr;
        this.buildHeap();
    }
    
    size() {
        return this.heap.length;
    }
    
    isEmpty() {
        return this.size() === 0;
    }
    
    parent(i) {
        return Math.floor((i - 1) / 2);
    }
    
    leftChild(i) {
        return 2 * i + 1;
    }
    
    rightChild(i) {
        return 2 * i + 2;
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    insert(val) {
        this.heap.push(val);
        this.heapifyUp(this.size() - 1);
    }
    
    extractMin() {
        if (this.isEmpty()) return null;
        if (this.size() === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }
    
    heapifyUp(i) {
        let current = i;
        while (current > 0 && this.heap[current] < this.heap[this.parent(current)]) {
            this.swap(current, this.parent(current));
            current = this.parent(current);
        }
    }
    
    heapifyDown(i) {
        let current = i;
        let next = null;
        while (current < this.size()) {
            let left = this.leftChild(current);
            let right = this.rightChild(current);
            next = current;
            
            if (left < this.size() && this.heap[left] < this.heap[next]) {
                next = left;
            }
            if (right < this.size() && this.heap[right] < this.heap[next]) {
                next = right;
            }
            if (next === current) break;
            
            this.swap(current, next);
            current = next;
        }
    }
    
    buildHeap() {
        for (let i = Math.floor(this.size() / 2); i >= 0; i--) {
            this.heapifyDown(i);
        }
    }
}

