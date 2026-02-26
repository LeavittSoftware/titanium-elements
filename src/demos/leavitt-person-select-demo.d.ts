import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@material/web/button/filled-tonal-button';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@leavittsoftware/web/leavitt/profile-picture/profile-picture';
import '@leavittsoftware/web/leavitt/person-select/person-select';
import { LitElement } from 'lit';
import { LeavittPersonSelect } from '@leavittsoftware/web/leavitt/person-select/person-select';
export declare class LeavittPersonSelectDemo extends LitElement {
    private accessor apiService;
    protected accessor methodsSelect: LeavittPersonSelect;
    constructor();
    static styles: import("lit").CSSResult[][];
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=leavitt-person-select-demo.d.ts.map