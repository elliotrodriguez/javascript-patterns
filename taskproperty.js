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
    configurable: true
});

console.log(Object.keys(task));