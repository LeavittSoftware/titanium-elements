import { LitElement } from 'lit';
import '@leavittsoftware/web/titanium/data-table/data-table-item';
import '@leavittsoftware/web/titanium/data-table/data-table-header';
import '@leavittsoftware/web/titanium/data-table/data-table';
type Car = {
    Name: string;
    Appearance: 'plaid' | 'ugly' | 'slick';
};
export declare class DraggablePlayground extends LitElement {
    protected accessor draggableItems: Array<Partial<Car>>;
    firstUpdated(): void;
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
export {};
//# sourceMappingURL=draggable.d.ts.map