import { LitElement } from 'lit';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@material/web/button/outlined-button';
import '@leavittsoftware/web/leavitt/company-select/company-select';
import { LeavittCompanySelect } from '@leavittsoftware/web/leavitt/company-select/company-select';
export declare class LeavittPersonCompanySelectPlayground extends LitElement {
    private accessor apiService;
    private accessor disableMenuOpenOnFocus;
    protected accessor methodsSelect: LeavittCompanySelect;
    protected accessor inputs: NodeListOf<LeavittCompanySelect>;
    constructor();
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=leavitt-company-select-playground.d.ts.map