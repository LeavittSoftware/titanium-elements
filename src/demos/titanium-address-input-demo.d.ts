import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/button/filled-tonal-button';
import '@material/web/icon/icon';
import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/address-input/address-input';
import '@leavittsoftware/web/titanium/address-input/google-address-input';
import { LitElement } from 'lit';
import { TitaniumAddressInput } from '@leavittsoftware/web/titanium/address-input/address-input';
import { GoogleAddressInput } from '@leavittsoftware/web/titanium/address-input/google-address-input';
export declare class TitaniumAddressInputDemo extends LitElement {
    protected accessor setLocationResult: string | null;
    protected accessor googleAddressInputDemoA: GoogleAddressInput;
    protected accessor googleAddressInputDemoAFilled: GoogleAddressInput;
    protected accessor titaniumAddressInputDemoA: TitaniumAddressInput;
    protected accessor titaniumAddressInputDemoAFilled: TitaniumAddressInput;
    accessor allowInternational: boolean;
    static styles: (import("lit").CSSResult | import("lit").CSSResult[])[];
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=titanium-address-input-demo.d.ts.map