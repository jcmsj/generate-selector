export function toSafeCSSID(id: string) {
	return '#' + id.replaceAll(/./g, "\\.")
}

/**
 * @param elem 
 * Note that CSS nth-child starts at 1
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child#syntax
 */
export function indexOf(elem: Element) {
	let i = 1; 
	for (const child of elem.parentElement!.children) {
		if (elem.isSameNode(child))
			return i;

		i++;
	}
}

export function nthChild(l: Element) {
	return `${l.tagName}:nth-child(${indexOf(l)})`
}

/**
 * Based on: https://stackoverflow.com/questions/8588301/how-to-generate-unique-css-selector-for-dom-element
 * @param {Element} ancestor stops here, defaults to `document.body`
 */
export default function generateSelector(elem: Element, ancestor: Element = document.body): string {
	let path: String[] = [],
		parent: Element | null;
	while (parent = elem.parentElement) {
		if (ancestor.isSameNode(parent))
			break;
		if (elem.id) {
			const safeID = toSafeCSSID(elem.id);
			try {
				const found = document.querySelector(safeID);
				if (found && found.isSameNode(elem)) {
					path.push(safeID);
					break;
				}
			} catch {
				// ignoring invalid id
			}
		}

		path.push(nthChild(elem))
		elem = parent;
	}

	return path
		.reverse()
		.join(' > ');
}
