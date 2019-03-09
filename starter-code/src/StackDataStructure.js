stack = new StackDataStructure();

function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 10;
} 

StackDataStructure.prototype.isEmpty = function () { 
    if (this.stackControl.length == 0) {
        return true;
    } 
        return false;
                
}

StackDataStructure.prototype.canPush = function () { 
    if(this.stackControl.length < this.MAX_SIZE) {
        return true;
    } 
    return false;
}

StackDataStructure.prototype.push = function (num) {
    if( this.canPush() == false) {
        return 'Stack Overflow';
    } else {
        this.stackControl.push(num);
        return this.stackControl;
    }   
}

StackDataStructure.prototype.pop = function (num) {
    if(this.isEmpty() == true) {
        return 'Stack Underflow';
    } else {
        return this.stackControl.pop(num);
    }; 
}  




