var repoFactory = function() {
    this.getRepo = function(repoType) {
            
            if (repoType === 'task') {
                if (this.taskRepo) {
                    console.log('Retrieving from cache');
                    return this.taskRepo;
                } else {
                    console.log('initializing cache')
                    this.taskRepo = require('./taskRepository');

                    // config might go here
                    return this.taskRepo;
                }
            }
            
            if (repoType === 'user') {
                var userRepo = require('./userRepository')();
                return userRepo;
            }
            
            if (repoType === 'project') {
                var projRepo = require('./projectRepository')();
                return projRepo;
            }
        }
        
    }

module.exports = new repoFactory;