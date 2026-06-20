import { AppError } from "../utils/AppError.js";
export const error = (err, req, res, next) => {
    if (err instanceof AppError) {
        const statusCode = err.statusCode ?? 500;
        const message = err.message ?? "Something went wrong try again later";
        return res.status(statusCode).json({ success: err.success, message });
    }
    if (err instanceof Error) {
        console.error(`Unexpected Error  ${err} ${err.stack}`);
        return res.status(500).json({ success: false, message: "Something went wrong try again later" });
    }
};
