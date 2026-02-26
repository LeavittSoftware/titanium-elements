import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@material/web/button/filled-tonal-button';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@leavittsoftware/web/leavitt/company-select/company-select';
import { LitElement } from 'lit';
import { LeavittCompanySelect } from '@leavittsoftware/web/leavitt/company-select/company-select';
declare const LeavittCompanySelectDemo_base: import("@leavittsoftware/web/leavitt/theme/theme-preference").Constructor<import("@leavittsoftware/web/leavitt/theme/theme-preference").ThemePreferenceInterface> & typeof LitElement;
export declare class LeavittCompanySelectDemo extends LeavittCompanySelectDemo_base {
    private accessor disableMenuOpenOnFocus;
    protected accessor methodsSelect: LeavittCompanySelect;
    static styles: import("lit").CSSResult[][];
    render(): import("lit-html").TemplateResult<1>;
}
export {};
//# sourceMappingURL=leavitt-company-select-demo.d.ts.map