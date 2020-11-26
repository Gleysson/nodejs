module.exports = function(app) {

    const MailLib =  app.src.libs.Mail.index;

    this.index = {

        key: "MailJob",
        handle: async function({ data }){

            try {
                await MailLib.sendMail({
                    from: 'App Job Mail <contato@mail.com>',
                    to: ` <${data.name}> <${data.email}>`,
                    subject: "Envio de Email Node",
                    html: "<p> Você recebeu um email </p>"
                })

                return Promise.resolve();

            } catch (error) {
                return Promise.reject(error);
            }
          
        }
    }

    return this;

}