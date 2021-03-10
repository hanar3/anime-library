export default class AppError {
  public message: string;
  public code: number;
  constructor({ message, code }: { message: string; code: number }) {
    this.message = message;
    this.code = code;
  }
}
