import '@leavittsoftware/web/titanium/data-table/data-table-core';
import '@leavittsoftware/web/titanium/data-table/data-table-action-bar';
import '@material/web/button/filled-tonal-button';
import '@material/web/button/filled-button';
import '@material/web/iconbutton/icon-button';
import { LitElement } from 'lit';
export declare class DataTableCorePlayground extends LitElement {
    private accessor sort;
    private accessor items;
    private accessor selected;
    private accessor countOfCustomSettingsApplied;
    private accessor tableCore;
    /**
     * Sorts items based on multiple sort criteria
     * @param items Array of items to sort
     * @param sortCriteria Array of sort criteria
     * @returns Sorted array of items
     */
    private sortItems;
    private accessor tableMetaData;
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=data-table-core-playground.d.ts.map