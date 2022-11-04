const BadRequestError = require("../error/baderror");
const RequestNotFoundError = require("../error/notfound");
const invalidInput = require("../error/InvalidInput");
let onError = (err, req, res, next) => {
    res.status(err.status);
    if (err instanceof BadRequestError || err instanceof RequestNotFoundError || err instanceof invalidInput) {
        res.json(err.json);
        return next();
    }
}
module.exports = {
    onError: onError
};