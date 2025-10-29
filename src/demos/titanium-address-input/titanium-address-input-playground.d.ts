import { LitElement } from 'lit';
import '@material/web/button/outlined-button';
import '@material/web/icon/icon';
import '@material/web/select/outlined-select';
import '@material/web/select/select-option';
import '@leavittsoftware/web/titanium/address-input/address-input';
import '@leavittsoftware/web/titanium/address-input/google-address-input';
import { TitaniumAddressInput } from '@leavittsoftware/web/titanium/address-input/address-input';
import { GoogleAddressInput } from '@leavittsoftware/web/titanium/address-input/google-address-input';
export declare class TitaniumAddressInputPlayground extends LitElement {
    protected accessor setLocationResult: string | null;
    protected accessor googleAddressInputDemoA: GoogleAddressInput;
    protected accessor googleAddressInputDemoAFilled: GoogleAddressInput;
    protected accessor titaniumAddressInputDemoA: TitaniumAddressInput;
    protected accessor titaniumAddressInputDemoAFilled: TitaniumAddressInput;
    accessor allowInternational: boolean;
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=titanium-address-input-playground.d.ts.map