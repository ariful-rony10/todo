const routeDontExitsHander = (req, res, next) => {
    res.status(404).send('Request url not found.')
}
module.exports = routeDontExitsHander