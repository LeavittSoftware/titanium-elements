import { LitElement } from 'lit';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@material/web/button/text-button';
import '@leavittsoftware/web/leavitt/person-select/person-select';
import { LeavittPersonSelect } from '@leavittsoftware/web/leavitt/person-select/person-select';
export declare class LeavittPersonSelectPlayground extends LitElement {
    private accessor apiService;
    protected accessor inputs: NodeListOf<LeavittPersonSelect>;
    protected accessor methodsSelect: LeavittPersonSelect;
    constructor();
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=leavitt-person-select-playground.d.ts.map