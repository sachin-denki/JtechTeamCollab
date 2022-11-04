'use strict';



class invalidInput extends Error {
    constructor(message, extra) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = 'invalid input';
        this.message = message;
        this.json = { message: message, status: 401 };
        this.status = 401;
        if (extra) {
            this.extra = extra;
        }
    }
}

module.exports = invalidInput;