import { LitElement } from 'lit';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@material/web/button/outlined-button';
import LeavittEmailHistoryViewer from '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer';
import '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer';
import '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer-filled';
import LeavittEmailHistoryViewerFilled from '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer-filled';
declare const LeavittEmailHistoryViewerPlayground_base: import("@leavittsoftware/web/leavitt/theme/theme-preference").Constructor<import("@leavittsoftware/web/leavitt/theme/theme-preference").ThemePreferenceInterface> & typeof LitElement;
export declare class LeavittEmailHistoryViewerPlayground extends LeavittEmailHistoryViewerPlayground_base {
    private accessor apiService;
    protected accessor demo1: LeavittEmailHistoryViewer;
    protected accessor demo2: LeavittEmailHistoryViewerFilled;
    constructor();
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
export {};
//# sourceMappingURL=leavitt-email-history-viewer-playground.d.ts.map