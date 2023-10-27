import { css, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators';
import { TextField } from '@material/mwc-textfield';

import '@material/mwc-textfield';

type MwcInput<T> = T & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean };

/**
 * Material design input with color display and validation.
 * Most properties and events supported by mwc-textfield will also be supported.
 *
 * @element titanium-color-input
 *
 * @fires input - Fired when the textfield receives user input.
 *
 * @cssprop {Color} [--app-border-color=#dadce0] - Chip border color
 */
@customElement('titanium-color-input')
export class TitaniumColorInput extends LitElement {
  /**
   *  Value for preselecting or getting the color on the input
   */
  @property({ type: String }) value: string | null;
  /**
   *  Label passed to the textfield
   */
  @property({ type: String }) label: string;
  /**
   *  Passes iconTrailing to the inner mwc-textfield
   */
  @property({ type: String }) iconTrailing: string;
  /**
   *  Passes icon to the inner mwc-textfield
   */
  @property({ type: String }) icon: string;
  /**
   *  Passes helper to the inner mwc-textfield
   */
  @property({ type: String }) helper: string;
  /**
   *  passes helperPersistent to the inner mwc-textfield
   */
  @property({ type: Boolean }) helperPersistent: boolean;
  /**
   *  Set to true if value is required to be a valid color
   */
  @property({ type: Boolean }) required: boolean;
  /**
   *  Validation message passed to the textfield
   */
  @property({ type: String }) validationMessage: string = 'Please use a valid CSS color string';
  @query('color-preview') protected colorPreview!: HTMLElement;
  @query('mwc-textfield') protected input!: MwcInput<TextField>;

  static styles = css`
    :host {
      position: relative;
    }

    mwc-textfield {
      display: flex;
      flex: 1;
    }

    color-preview {
      position: absolute;
      top: 8px;
      right: 8px;
      padding: 18px;
      border: 1px solid var(--app-border-color, #dadce0);
      border-radius: 8px;
    }

    [hidden] {
      display: none;
    }
  `;

  updated(changedProps: Map<keyof this, unknown>) {
    if (changedProps.has('value')) {
      this.colorPreview.style.background = this.value || '';
    }
  }

  reportValidity() {
    return this.input.reportValidity();
  }

  reset() {
    this.input.isUiValid = true;
    this.input.mdcFoundation?.setValid?.(true);
  }

  render() {
    return html`
      <mwc-textfield
        outlined
        label=${this.label}
        .value=${this.value ?? ''}
        .validityTransform=${(val: string, state: ValidityState) => ({ ...state, valid: state.valid && (val.length === 0 || isCssColor(val)) })}
        .required=${this.required}
        .icon=${this.icon}
        .iconTrailing=${this.iconTrailing}
        .helper=${this.helper}
        .helperPersistent=${this.helperPersistent}
        validationMessage=${this.validationMessage}
        @input=${e => {
          e.stopPropagation();
          this.value = e.target.value;
          this.dispatchEvent(new CustomEvent<string | null>('input', { detail: e.target.value }));
        }}
      >
      </mwc-textfield>
      <color-preview></color-preview>
    `;
  }
}

const CSS_COLOR_NAMES = [
  'AliceBlue',
  'AntiqueWhite',
  'Aqua',
  'Aquamarine',
  'Azure',
  'Beige',
  'Bisque',
  'Black',
  'BlanchedAlmond',
  'Blue',
  'BlueViolet',
  'Brown',
  'BurlyWood',
  'CadetBlue',
  'Chartreuse',
  'Chocolate',
  'Coral',
  'CornflowerBlue',
  'Cornsilk',
  'Crimson',
  'Cyan',
  'DarkBlue',
  'DarkCyan',
  'DarkGoldenRod',
  'DarkGray',
  'DarkGrey',
  'DarkGreen',
  'DarkKhaki',
  'DarkMagenta',
  'DarkOliveGreen',
  'DarkOrange',
  'DarkOrchid',
  'DarkRed',
  'DarkSalmon',
  'DarkSeaGreen',
  'DarkSlateBlue',
  'DarkSlateGray',
  'DarkSlateGrey',
  'DarkTurquoise',
  'DarkViolet',
  'DeepPink',
  'DeepSkyBlue',
  'DimGray',
  'DimGrey',
  'DodgerBlue',
  'FireBrick',
  'FloralWhite',
  'ForestGreen',
  'Fuchsia',
  'Gainsboro',
  'GhostWhite',
  'Gold',
  'GoldenRod',
  'Gray',
  'Grey',
  'Green',
  'GreenYellow',
  'HoneyDew',
  'HotPink',
  'IndianRed',
  'Indigo',
  'Ivory',
  'Khaki',
  'Lavender',
  'LavenderBlush',
  'LawnGreen',
  'LemonChiffon',
  'LightBlue',
  'LightCoral',
  'LightCyan',
  'LightGoldenRodYellow',
  'LightGray',
  'LightGrey',
  'LightGreen',
  'LightPink',
  'LightSalmon',
  'LightSeaGreen',
  'LightSkyBlue',
  'LightSlateGray',
  'LightSlateGrey',
  'LightSteelBlue',
  'LightYellow',
  'Lime',
  'LimeGreen',
  'Linen',
  'Magenta',
  'Maroon',
  'MediumAquaMarine',
  'MediumBlue',
  'MediumOrchid',
  'MediumPurple',
  'MediumSeaGreen',
  'MediumSlateBlue',
  'MediumSpringGreen',
  'MediumTurquoise',
  'MediumVioletRed',
  'MidnightBlue',
  'MintCream',
  'MistyRose',
  'Moccasin',
  'NavajoWhite',
  'Navy',
  'OldLace',
  'Olive',
  'OliveDrab',
  'Orange',
  'OrangeRed',
  'Orchid',
  'PaleGoldenRod',
  'PaleGreen',
  'PaleTurquoise',
  'PaleVioletRed',
  'PapayaWhip',
  'PeachPuff',
  'Peru',
  'Pink',
  'Plum',
  'PowderBlue',
  'Purple',
  'RebeccaPurple',
  'Red',
  'RosyBrown',
  'RoyalBlue',
  'SaddleBrown',
  'Salmon',
  'SandyBrown',
  'SeaGreen',
  'SeaShell',
  'Sienna',
  'Silver',
  'SkyBlue',
  'SlateBlue',
  'SlateGray',
  'SlateGrey',
  'Snow',
  'SpringGreen',
  'SteelBlue',
  'Tan',
  'Teal',
  'Thistle',
  'Tomato',
  'Turquoise',
  'Violet',
  'Wheat',
  'White',
  'WhiteSmoke',
  'Yellow',
  'YellowGreen',
].map(o => o.toLowerCase());

export function isCssColor(color: string) {
  return (
    CSS_COLOR_NAMES.includes(color.toLowerCase()) ||
    /^(#(?:[0-9a-f]{2}){2,4}|#[0-9a-f]{3}|(?:rgba?|hsla?)\((?:\d+%?(?:deg|rad|grad|turn)?(?:,|\s)+){2,3}[\s\/]*[\d\.]+%?\))$/i.test(color.toLowerCase())
  );
}
