import { LitElement } from 'lit';
import '@material/web/button/text-button';
import '@leavittsoftware/web/titanium/smart-attachment-input/smart-attachment-input';
import { TitaniumSmartAttachmentInput } from '@leavittsoftware/web/titanium/smart-attachment-input/smart-attachment-input';
export declare class TitaniumSmartAttachmentInputPlayground extends LitElement {
    protected getFilesResult: string | null;
    protected hasChanges: boolean;
    protected accessor getFilesInput: TitaniumSmartAttachmentInput;
    protected accessor preselectFilesInput: TitaniumSmartAttachmentInput;
    protected accessor preselectDisabledFilesInput: TitaniumSmartAttachmentInput;
    protected accessor resetInput: TitaniumSmartAttachmentInput;
    static styles: import("lit").CSSResult[];
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=titanium-smart-attachment-input-playground.d.ts.map