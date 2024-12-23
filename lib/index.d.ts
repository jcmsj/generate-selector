/**
 * @param elem
 * Note that CSS nth-child starts at 1
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child#syntax
 */
export declare function indexOf(elem: Element): number | undefined;
export declare function nthChild(l: Element): string;
/**
 * Based on: https://stackoverflow.com/questions/8588301/how-to-generate-unique-css-selector-for-dom-element
 * @param {Element} ancestor stops here, defaults to `document.body`
 */
export default function generateSelector(elem: Element, ancestor?: Element): string;
