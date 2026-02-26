import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/data-table/page-control';
import '@material/web/chips/suggestion-chip';
import { LitElement } from 'lit';
export declare class TitaniumPageControlDemo extends LitElement {
    #private;
    private accessor pageControl;
    protected accessor count: number;
    protected accessor data: any;
    protected accessor filteredData: any;
    firstUpdated(): void;
    static styles: (import("lit").CSSResult | import("lit").CSSResult[])[];
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=titanium-page-control-demo.d.ts.map