import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/button/filled-tonal-button';
import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/date-range-selector/date-range-selector';
import { LitElement } from 'lit';
import { TitaniumDateRangeSelector } from '@leavittsoftware/web/titanium/date-range-selector/date-range-selector';
export declare class TitaniumDateRangeSelectorDemo extends LitElement {
    protected accessor eventsDemoInput: TitaniumDateRangeSelector;
    protected accessor startDate: string;
    protected accessor endDate: string;
    protected accessor eventFired: boolean;
    static styles: (import("lit").CSSResult | import("lit").CSSResult[])[];
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=titanium-date-range-selector-demo.d.ts.map