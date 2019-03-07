
function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 15;
}

QueueDataStructure.prototype.isEmpty = function () {
    if (this.queueControl.length == 0) {
        return true;
    } 
        return false;
}

QueueDataStructure.prototype.canEnqueue = function () {
    if(this.queueControl.length < this.MAX_SIZE) {
        return true;
    } 
    return false;

}

QueueDataStructure.prototype.enqueue = function (num) {
    if (this.canEnqueue() == false) {
        return 'Queue Overflow';
    } else {
    this.queueControl.unshift(num);
    return this.queueControl;
    }

}

QueueDataStructure.prototype.dequeue = function (num) {
    if (this.isEmpty() == true) {
        return 'Queue Underflow';
    } else {
    return this.queueControl.pop(num);
    }
}