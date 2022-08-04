const anyKindOfErrorHandler = (err, req, res, next) => {
    // Headers error here
    if (req.headersSent) {
        return next('Opps! - someting is wrong. Please try again later.')
    } else {
        if (err.message) {
            res.status(500).send(err.message)
        } else {
            res.status(500).send('Opps! - someting is wrong. Please try again later.')
        }
    }
}

module.exports = anyKindOfErrorHandler;