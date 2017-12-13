var myrepo = require("./repoSingleton");


var taskHandler = function() {
    return {
        save: function() {
            myrepo.save('From task handler');
        }
    }
}

module.exports = taskHandler();