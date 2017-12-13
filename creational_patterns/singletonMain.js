var taskHandler = require('./taskhandler');
var myrepo = require('./repoSingleton');


myrepo.save('fromMain');
myrepo.save('fromMain');
myrepo.save('fromMain');

taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();