import { LitElement } from 'lit';
import '@material/web/button/outlined-button';
import '@material/web/icon/icon';
import '@leavittsoftware/web/titanium/address-input/address-input';
import '@leavittsoftware/web/titanium/address-input/google-address-input';
import { TitaniumAddressInput } from '@leavittsoftware/web/titanium/address-input/address-input';
import { GoogleAddressInput } from '@leavittsoftware/web/titanium/address-input/google-address-input';
export declare class TitaniumAddressInputPlayground extends LitElement {
    protected accessor setLocationResult: string | null;
    protected accessor googleAddressInputDemoA: GoogleAddressInput;
    protected accessor titaniumAddressInputDemoA: TitaniumAddressInput;
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=titanium-address-input-playground.d.ts.map