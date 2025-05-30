import { LitElement } from 'lit';
import '@material/web/button/text-button';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@leavittsoftware/web/leavitt/person-company-select/person-company-select';
import { LeavittPersonCompanySelect } from '@leavittsoftware/web/leavitt/person-company-select/person-company-select';
export declare class LeavittPersonCompanySelectPlayground extends LitElement {
    private accessor apiService;
    protected accessor inputs: NodeListOf<LeavittPersonCompanySelect>;
    protected accessor methodsSelect: LeavittPersonCompanySelect;
    constructor();
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=leavitt-person-company-select-playground.d.ts.map