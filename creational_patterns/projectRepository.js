//task_repository - holds all "db" calls

var repo = function() {
    // revealing module pattern example
    var db = {} // all your db code would "go" here

    var get = function(id) {
        console.log('Getting project ' + id);
        return {
            name : 'new project from db'
        }
    }

    var save = function(task)  {
        console.log('Saving ' + task.name);
    }
    return {
        get: get,
        save: save
    }
    // return {
    //     get: function(id) {
    //         console.log('Getting task ' + id);
    //         return {
    //             name: 'new db task'
    //         }
    //     },
    //     save: function(task) {
    //         console.log('Saving ' + task.name + ' to the db');
    //     }
    // }
}

module.exports = repo();