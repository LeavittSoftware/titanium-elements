import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@material/web/divider/divider';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer';
import '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer-filled';
import { LitElement } from 'lit';
import LeavittEmailHistoryViewer from '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer';
import LeavittEmailHistoryViewerFilled from '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer-filled';
declare const LeavittEmailHistoryViewerDemo_base: import("@leavittsoftware/web/leavitt/theme/theme-preference").Constructor<import("@leavittsoftware/web/leavitt/theme/theme-preference").ThemePreferenceInterface> & typeof LitElement;
export declare class LeavittEmailHistoryViewerDemo extends LeavittEmailHistoryViewerDemo_base {
    private accessor apiService;
    protected accessor demo1: LeavittEmailHistoryViewer;
    protected accessor demo2: LeavittEmailHistoryViewerFilled;
    constructor();
    static styles: (import("lit").CSSResult | import("lit").CSSResult[])[];
    render(): import("lit-html").TemplateResult<1>;
}
export {};
//# sourceMappingURL=leavitt-email-history-viewer-demo.d.ts.map