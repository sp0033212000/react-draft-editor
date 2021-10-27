/// <reference types="react" />
import { ContentBlock, DraftStyleMap } from 'draft-js';
export declare function getBlockStyle(defaultType: string): (block: ContentBlock) => string;
export declare const styleMap: DraftStyleMap;
export declare const colorMap: DraftStyleMap;
export declare const customStyleMap: {
    [x: string]: import("react").CSSProperties;
};
