import '@leavittsoftware/titanium-data-table/lib/titanium-data-table';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-header';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-item';
import '@leavittsoftware/titanium-search-input';
import '@leavittsoftware/titanium-chip';
import { LitElement } from 'lit-element';
export default class DataTableDemo extends LitElement {
    private page;
    private resultTotal;
    private searchTerm;
    private cars;
    private selected;
    _reload(): void;
    static styles: import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
}
