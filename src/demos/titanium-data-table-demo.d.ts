import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/data-table/data-table-item';
import '@leavittsoftware/web/titanium/data-table/data-table-header';
import '@leavittsoftware/web/titanium/search-input/search-input';
import '@material/web/dialog/dialog';
import '@material/web/button/outlined-button';
import '@material/web/button/filled-tonal-button';
import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '@material/web/menu/menu';
import '@material/web/menu/menu-item';
import '@material/web/switch/switch';
import '@material/web/chips/input-chip';
import '@material/web/button/text-button';
import { LitElement } from 'lit';
import '@leavittsoftware/web/titanium/data-table/data-table';
import { FilterController } from '@leavittsoftware/web/titanium/data-table/filter-controller';
import { TitaniumDataTable } from '@leavittsoftware/web/titanium/data-table/data-table';
type FilterKeys = 'Appearance';
type Car = {
    Name: string;
    Appearance: 'Plaid' | 'Ugly' | 'Slick';
};
export declare class TitaniumDataTableDemo extends LitElement {
    #private;
    protected accessor allItems: Array<Partial<Car>>;
    protected accessor items: Array<Partial<Car>>;
    protected accessor selected: Array<Partial<Car>>;
    protected accessor searchTerm: string;
    protected accessor resultTotal: number;
    protected accessor sortDirection: '' | 'asc' | 'desc';
    protected accessor sortBy: string;
    protected accessor filterController: FilterController<FilterKeys>;
    protected accessor singleSelect: boolean;
    protected accessor disableSelect: boolean;
    protected accessor disablePaging: boolean;
    protected accessor draggableItems: Array<Partial<Car>>;
    protected accessor dataTable: TitaniumDataTable;
    protected accessor filterModal: DataTableDemoFilterModal;
    constructor();
    firstUpdated(): void;
    getItemsAsync(searchTerm: string): Promise<void>;
    static styles: (import("lit").CSSResult | import("lit").CSSResult[])[];
    render(): import("lit-html").TemplateResult<1>;
}
export declare class DataTableDemoFilterModal extends LitElement {
    #private;
    protected accessor filterController: FilterController<FilterKeys>;
    protected accessor appearance: string;
    private accessor dialog;
    firstUpdated(): Promise<void>;
    open(): Promise<void>;
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
export {};
//# sourceMappingURL=titanium-data-table-demo.d.ts.map