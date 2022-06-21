class ExpressError extends Error {
    constructor(message, status) {
        this.message = message;
        this.status = status;
    }
}

class BadRequestError extends Error {
    constructor(message = "Bad request") {
        super(message, 400)
    }
}

class NotFoundError extends Error {
    constructor(message = "Not found") {
        super(message, 404)
    }
}

module.exports = {
    ExpressError,
    NotFoundError,
    BadRequestError
}