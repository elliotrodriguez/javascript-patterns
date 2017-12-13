'use strict'

class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }

    complete() {
        console.log('Complete via class' + this.name)
        this.completed = true;
    }

    save() {
        console.log('Save via class - ' + this.name)
        this.save = true;
    }
}

var task1 = new Task("task one - constructors");
var task2 = new Task("task two - modules");
var task3 = new Task("task three - singletons");
var task4 = new Task("task four - prototype");

task1.complete();
task2.save();
task3.save();
task4.save();