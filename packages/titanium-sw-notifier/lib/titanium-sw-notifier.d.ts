import { LitElement } from 'lit-element';
export declare class TitanuimServiceWorkerNotifierElement extends LitElement {
    notificationsStatus: string;
    firstUpdated(): Promise<void>;
    private _showUpdatedSnackbar;
    private _showInstalledSnackbar;
    render(): import("lit-element").TemplateResult;
}
