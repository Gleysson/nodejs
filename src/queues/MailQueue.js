const Queue = require('bull')

module.exports = function(app){

    const redisConfig =  app.src.config.redis.index;
    const jobMail = app.src.jobs.MailJob.index;
    
    this.index = new Queue(jobMail.key, redisConfig)

    this.index.on('completed', function(job){
       console.log('MailJob::Completed', job.data)
    })

    this.index.on('failed', function(job, err){
        console.log('MailJob::Failed', job.data, err)
    })

    this.index.on('active', function(job,){
        console.log('MailJob::Active', job.data)
    })

    this.index.on('wait', function(job){
        console.log('MailJob::Wait', job.id , job.data)
    })

    return this
}