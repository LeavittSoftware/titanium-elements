import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@material/web/button/filled-tonal-button';
import '@leavittsoftware/web/titanium/snackbar/snackbar-stack';
import '@leavittsoftware/web/leavitt/user-feedback/user-feedback';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@leavittsoftware/web/leavitt/user-feedback/report-a-problem-dialog';
import '@leavittsoftware/web/leavitt/user-feedback/provide-feedback-dialog';
import { LitElement } from 'lit';
import { ReportAProblemDialog } from '@leavittsoftware/web/leavitt/user-feedback/report-a-problem-dialog';
import { ProvideFeedbackDialog } from '@leavittsoftware/web/leavitt/user-feedback/provide-feedback-dialog';
export declare class LeavittUserFeedbackDemo extends LitElement {
    protected accessor reportAProblemDialog: ReportAProblemDialog;
    protected accessor provideFeedbackDialog: ProvideFeedbackDialog;
    static styles: import("lit").CSSResult[][];
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=leavitt-user-feedback-demo.d.ts.map