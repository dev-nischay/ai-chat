export class AppError extends Error {
  constructor(
    public statusCode: number,
    public isOperational = true,
    public message: string,
    public success: boolean = false,
  ) {
    super(message);
  }
}
