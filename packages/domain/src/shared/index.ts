export interface Request {
}

export interface Presentation {
}

export interface UseCase<R extends Request|void, P extends Presentation> {
  execute(request: R, presenter: P): Promise<void>;
}