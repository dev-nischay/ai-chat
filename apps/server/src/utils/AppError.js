export class AppError extends Error {
    statusCode;
    isOperational;
    message;
    success;
    constructor(statusCode, isOperational = true, message, success = false) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.message = message;
        this.success = success;
    }
}
