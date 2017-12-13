var Repo = require('./taskRepository');

var Task = function(data) {
    this.name = data.name;
    this.completed = false;
}

Task.prototype.complete = function() {
    console.log('completing ' + this.name);
    this.completed = true;
}

Task.prototype.save = function() {
   Repo.save(this); //this is the task
}

module.exports = Task;