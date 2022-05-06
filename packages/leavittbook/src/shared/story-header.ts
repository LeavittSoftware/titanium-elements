import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { h1, h2, p } from '@leavittsoftware/titanium-styles';
import '@leavittsoftware/titanium-chip';

@customElement('story-header')
export default class StoryHeaderElement extends LitElement {
  @property({ type: String }) name: string;
  @property({ type: String }) tagName: string;
  @property({ type: String }) klass: string;

  static styles = [
    h1,
    h2,
    p,
    css`
      :host {
        display: block;
        padding-bottom: 48px;
        border-bottom: 1px solid var(--app-border-color);
        margin-bottom: 48px;
      }

      h1,
      h2 {
        padding: 0;
        margin: 0;
      }

      h2 {
        font-family: Consolas, monospace;
        color: var(--app-light-text-color);
        font-size: 20px;
      }

      h1 {
        font-size: 36px;
        line-height: 65px;
        font-weight: 400;
        padding: 0;
        margin: 0;
      }

      info-container {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      chip-container {
        display: flex;
        margin-top: 12px;
        gap: 6px;
      }

      titanium-chip {
        height: 24px;
        padding: 0px 6px;
        --app-text-color: #f5f5f5;
      }

      titanium-chip[black] {
        --titanium-chip-label-background-color: #212121;
      }

      titanium-chip[blue] {
        --titanium-chip-label-background-color: var(--app-primary-color);
      }
    `,
  ];
  render() {
    return html`
      <h1>${this.name}</h1>
      <info-container>
        <h2>${'<'}${this.tagName}${'>'}</h2>
        <h2>|</h2>
        <h2>${this.klass}</h2>
      </info-container>
      <chip-container>
        <titanium-chip readonly black label="Version 1.x.x"></titanium-chip>
        <titanium-chip readonly blue label="Stable"></titanium-chip>
      </chip-container>
    `;
  }
}
