import '@leavittsoftware/titanium-data-table/lib/titanium-data-table';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-header';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-item';
import '@leavittsoftware/titanium-search-input';
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
export default class DataTableDemo extends LitElement {
  private page;
  private resultTotal;
  private searchTerm;
  private cars;
  private selected;
  _reload(): void;
  static styles: import('lit').CSSResult[];
  render(): import('lit').TemplateResult<1>;
}
export declare const smallSet: Car[];
export declare const largeSet: Car[];
export {};
