import { LitElement } from 'lit';
import '@material/web/button/text-button';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@leavittsoftware/web/leavitt/person-group-select/person-group-select';
import { LeavittPersonGroupSelect } from '@leavittsoftware/web/leavitt/person-group-select/person-group-select';
export declare class LeavittPersonGroupSelectPlayground extends LitElement {
    private accessor apiService;
    protected accessor inputs: NodeListOf<LeavittPersonGroupSelect>;
    protected accessor methodsSelect: LeavittPersonGroupSelect;
    constructor();
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=leavitt-person-group-select-playground.d.ts.map