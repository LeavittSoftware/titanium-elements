import { ElementMixin } from '@polymer/polymer/lib/mixins/element-mixin';
declare type Constructable = new (...args: any[]) => ElementMixin;
export interface TitaniumDevDetectionMixinConstructor {
    new (...args: any[]): TitaniumDevDetectionMixin;
}
export interface TitaniumDevDetectionMixin {
    isDevelopment(url: string): boolean;
    isDev: boolean;
}
export declare const titaniumDevDetectionMixin: <T extends Constructable>(superClass: T) => T & TitaniumDevDetectionMixinConstructor;
export declare const isDevelopment: (url: string) => boolean;
export {};
