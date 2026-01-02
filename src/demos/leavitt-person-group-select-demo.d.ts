import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@material/web/button/filled-tonal-button';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@leavittsoftware/web/leavitt/person-group-select/person-group-select';
import { LitElement } from 'lit';
import { LeavittPersonGroupSelect } from '@leavittsoftware/web/leavitt/person-group-select/person-group-select';
export declare class LeavittPersonGroupSelectDemo extends LitElement {
    private accessor apiService;
    protected accessor methodsSelect: LeavittPersonGroupSelect;
    constructor();
    static styles: import("lit").CSSResult[][];
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=leavitt-person-group-select-demo.d.ts.map