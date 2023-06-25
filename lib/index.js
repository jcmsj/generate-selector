export function toSafeCSSID(id) {
    return '#' + id.replace(".", "\\.");
}
export function indexOf(elem) {
    if (elem.parentElement) {
        let i = 1; // CSS nth-child starts at 1
        for (const child of elem.parentElement.children) {
            if (elem.isSameNode(child))
                return i;
            i++;
        }
    }
    return 0;
}
export function nthChild(l) {
    return `${l.tagName}:nth-child(${indexOf(l)})`;
}
/**
 * Based on: https://stackoverflow.com/questions/8588301/how-to-generate-unique-css-selector-for-dom-element
 * @param {Element} ancestor stops here, defaults to `document.body`
 */
export default function generateSelector(elem, ancestor = document.body) {
    let path = [], parent;
    while (parent = elem.parentElement) {
        if (ancestor.isSameNode(parent))
            break;
        if (elem.id) {
            path.unshift(toSafeCSSID(elem.id));
            break;
        }
        path.unshift(nthChild(elem));
        elem = parent;
    }
    return path.join(' > ');
}
