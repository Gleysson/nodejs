const consign = require('consign')

const Worker = {};

consign()
    .include('./src/config')
    .then('./src/libs')
    .then('./src/jobs')
    .then('./src/queues')
    .into(Worker);

const MailQueue = Worker.src.queues.MailQueue.index;
const MailJob = Worker.src.jobs.MailJob.index;


MailQueue.process(MailJob.handle);

