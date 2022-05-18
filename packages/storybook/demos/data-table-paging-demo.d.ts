import '@leavittsoftware/titanium-data-table/lib/titanium-data-table';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-header';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-item';
import '@leavittsoftware/titanium-chip';
import { LitElement } from 'lit';
declare type Car = {
  id: number;
  name: string;
  miles: string | number;
  price: string;
  metadata?: string;
  withSlot?: boolean;
};
export default class DataTablePagingDemo extends LitElement {
  private resultTotal;
  private cars;
  private filteredCars;
  private selected;
  private dataTable;
  firstUpdated(): void;
  _reload(): Promise<void>;
  _later(delay: any): Promise<unknown>;
  static styles: import('lit').CSSResult[];
  render(): import('lit').TemplateResult<1>;
}
export declare const smallSet: Car[];
export declare const largeSet: Car[];
export {};
