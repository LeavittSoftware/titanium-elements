import { LitElement } from 'lit';
import '@leavittsoftware/web/titanium/snackbar/snackbar-stack';
import '@leavittsoftware/web/leavitt/user-feedback/user-feedback';
import '@leavittsoftware/web/leavitt/user-feedback/report-a-problem-dialog';
import '@leavittsoftware/web/leavitt/user-feedback/provide-feedback-dialog';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import { LeavittUserFeedback } from '@leavittsoftware/web/leavitt/user-feedback/user-feedback';
import { ReportAProblemDialog } from '@leavittsoftware/web/leavitt/user-feedback/report-a-problem-dialog';
import { ProvideFeedbackDialog } from '@leavittsoftware/web/leavitt/user-feedback/provide-feedback-dialog';
export declare class LeavittPersonCompanySelectPlayground extends LitElement {
    protected accessor methodsSelect: LeavittUserFeedback;
    protected accessor reportAProblemDialog: ReportAProblemDialog;
    protected accessor provideFeedbackDialog: ProvideFeedbackDialog;
    protected accessor inputs: NodeListOf<LeavittUserFeedback>;
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=leavitt-user-feedback-playground.d.ts.map