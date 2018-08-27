import {ElementMixin} from '@polymer/polymer/lib/mixins/element-mixin';

type Constructable = new (...args: any[]) => ElementMixin;

export interface TitaniumDevDetectionMixinConstructor {
  new(...args: any[]): TitaniumDevDetectionMixin;
}

export interface TitaniumDevDetectionMixin {
  determineIsDevelopment(url: string): boolean;
  isDev: boolean;
}

export const titaniumDevDetectionMixin =
    <T extends Constructable>(superClass: T): T&
    TitaniumDevDetectionMixinConstructor => class extends superClass {
  determineIsDevelopment(url: string): boolean {
    return determineIsDevelopment(url);
  }

  /**
   *
   */
  constructor(..._params: any[]) {
    super(_params);
    this.isDev = determineIsDevelopment(window.location.origin);
  }

  isDev: boolean;

  static get properties() {
    return {roles: {type: Boolean, notify: true}};
  }
};

export const determineIsDevelopment = (url: string): boolean => {
  const allowedUrlRegularExpressions = [
    new RegExp('^https://10[\\.]'),
    new RegExp('^http://10[\\.]'),
    new RegExp('^http://192.168[\\.]'),
    new RegExp(
        '^http://localhost[:]0*(?:6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{1,3}|[0-9])'),
    new RegExp(
        '^https://localhost[:]0*(?:6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{1,3}|[0-9])')
  ];

  return !url || url.indexOf('dev') > -1 ||
      allowedUrlRegularExpressions.some(o => o.exec(url) !== null);
};