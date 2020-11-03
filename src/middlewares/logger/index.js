module.exports = function(app) {

    app.use((req, res, next) => {
        console.log(req.body)
        next()
    });

    return this;
}