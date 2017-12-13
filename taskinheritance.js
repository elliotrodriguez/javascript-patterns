var task = {
    title: 'Elliots Task',
    description: 'Elliots description'
}

Object.defineProperty(task, 'toString', {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});

var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
    value: function() {
        return this.title + ' is urgent: ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(urgentTask.toString());