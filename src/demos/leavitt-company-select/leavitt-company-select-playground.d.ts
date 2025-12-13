import { LitElement } from 'lit';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@material/web/button/outlined-button';
import '@leavittsoftware/web/leavitt/company-select/company-select';
import { LeavittCompanySelect } from '@leavittsoftware/web/leavitt/company-select/company-select';
declare const LeavittPersonCompanySelectPlayground_base: import("@leavittsoftware/web/leavitt/theme/theme-preference").Constructor<import("@leavittsoftware/web/leavitt/theme/theme-preference").ThemePreferenceInterface> & typeof LitElement;
export declare class LeavittPersonCompanySelectPlayground extends LeavittPersonCompanySelectPlayground_base {
    private accessor disableMenuOpenOnFocus;
    protected accessor methodsSelect: LeavittCompanySelect;
    protected accessor inputs: NodeListOf<LeavittCompanySelect>;
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
export {};
//# sourceMappingURL=leavitt-company-select-playground.d.ts.map