var Task = require('./task');
var repoFactory = require('./repoFactory');



var task1 = new Task(repoFactory.getRepo('task').get(1));
var taskCache = new Task(repoFactory.getRepo('task').get(2));

var task2 = new Task({name: 'task two - modules'});
var task3 = new Task({name: 'task three - singletons'});
var task4 = new Task({name: 'task four - prototype'});

task1.complete();
task2.save();
task3.save();
task4.save();