import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/data-table/data-table-core';
import '@leavittsoftware/web/titanium/data-table/data-table-action-bar';
import '@material/web/button/filled-tonal-button';
import '@material/web/button/filled-button';
import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';
import { LitElement } from 'lit';
export declare class TitaniumDataTableCoreDemo extends LitElement {
    private accessor sort;
    private accessor items;
    private accessor selected;
    private accessor tableCore;
    /**
     * Sorts items based on multiple sort criteria
     * @param items Array of items to sort
     * @param sortCriteria Array of sort criteria
     * @returns Sorted array of items
     */
    private sortItems;
    private accessor tableMetaData;
    static styles: (import("lit").CSSResult | import("lit").CSSResult[])[];
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=titanium-data-table-core-demo.d.ts.map