export interface UseCase<R extends object | void, P extends object> {
  execute(request: R, presenter: P): Promise<void>;
}
