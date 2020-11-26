const Queue = require('bull')

module.exports = function(app){

    const redisConfig =  app.src.config.redis.index;
    const jobMail = app.src.jobs.MailJob.index;
    
    this.index = new Queue(jobMail.key, redisConfig)
    return this
}