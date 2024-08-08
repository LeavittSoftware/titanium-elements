import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import themePreferenceEvent from './theme-preference-event';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type Constructor<T = {}> = new (...args: any[]) => T;

export type ThemePreferenceOption = 'light' | 'dark';

export declare class ThemePreferenceInterface {
  themePreference: 'light' | 'dark';
}

/*
   Adds reflected attribute / property (theme-preference) to host that reflects 
   users currently selected theme preference

   ex. css :host([theme-preference='dark'])
*/
export const ThemePreference = <T extends Constructor<LitElement>>(superClass: T) => {
  class ThemePreference extends superClass {
    @property({ attribute: 'theme-preference', reflect: true }) themePreference: ThemePreferenceOption;

    connectedCallback() {
      super.connectedCallback();
      themePreferenceEvent.subscribe('theme-preference', 'change', (themePreference: ThemePreferenceOption) => {
        this.themePreference = themePreference;
      });
      this.themePreference = document.firstElementChild?.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    }
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return ThemePreference as Constructor<ThemePreferenceInterface> & T;
};
