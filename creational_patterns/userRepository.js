//task_repository - holds all "db" calls

var repo = function() {
    // revealing module pattern example
    var db = {} // all your db code would "go" here

    var get = function(id) {
        console.log('Getting user ' + id);
        return {
            name : 'new user from db'
        }
    }

    var save = function(user)  {
        console.log('Saving ' + user.name);
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