import { Presenter, Subscriber } from '@clean/adapters';

export abstract class Controller<VM> {
  protected constructor(protected readonly abstractPresenter: Presenter<VM>) {}

  get vm() {
    return this.abstractPresenter.vm;
  }

  subscribeVM(subscriber: Subscriber<VM>) {
    this.abstractPresenter.subscribeVM(subscriber);
  }
}
