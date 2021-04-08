const meaddlewares = {
    saySomething: function (req, res, next) {
        console.log('Meaddleware-saySomething: Hey this is a msg')
        next()
    },
    showMethodNUrl: function(req, res, next) {
        console.log(`Middleware-method: '${req.method}' url: '${req.url}'`)
        next();
    }
}

module.exports = meaddlewares;