export type Subscriber<T> = (vm: T) => void

export abstract class Presenter<VM> {
  protected subscriber?: Subscriber<VM>;

  protected constructor(public vm: VM) {
  }

  protected notifyVM(): void {
    this.subscriber?.call(this.subscriber, this.vm);
  }

  subscribeVM(subscriber: Subscriber<VM>) {
    this.subscriber = subscriber;
    this.subscriber(this.vm);
  }
}