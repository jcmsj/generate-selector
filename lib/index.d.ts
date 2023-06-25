export declare function toSafeCSSID(id: string): string;
export declare function indexOf(elem: Element): number;
export declare function nthChild(l: Element): string;
/**
 * Based on: https://stackoverflow.com/questions/8588301/how-to-generate-unique-css-selector-for-dom-element
 * @param {Element} ancestor stops here, defaults to `document.body`
 */
export default function generateSelector(elem: Element, ancestor?: Element): string;
