import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@material/web/button/filled-tonal-button';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@leavittsoftware/web/leavitt/person-company-select/person-company-select';
import '@leavittsoftware/web/titanium/snackbar/snackbar-stack';
import { LitElement } from 'lit';
import { LeavittPersonCompanySelect } from '@leavittsoftware/web/leavitt/person-company-select/person-company-select';
export declare class LeavittPersonCompanySelectDemo extends LitElement {
    private accessor apiService;
    protected accessor methodsSelect: LeavittPersonCompanySelect;
    constructor();
    static styles: import("lit").CSSResult[][];
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=leavitt-person-company-select-demo.d.ts.map