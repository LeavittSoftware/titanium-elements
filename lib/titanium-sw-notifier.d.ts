import { PolymerElement } from '@polymer/polymer';
export declare class TitanuimServiceWorkerNotifierElement extends PolymerElement {
    notificationsStatus: string;
    ready(): Promise<void>;
    _reload(): void;
    static readonly template: HTMLTemplateElement;
}
