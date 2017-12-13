// method one - simple object creation
var task = {};

task.title = 'My title';
task.description = 'My description';

// method two - Object.create
var taskObj = Object.create(Object.prototype);
taskObj.title = "Object Create Title"
console.log(taskObj.title);