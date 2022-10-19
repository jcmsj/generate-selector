function toSafeCSSID(id:string) {
	return '#' + id.replace(".", "\\.")
}

function indexOf(elem:Element, parent:Element) {
	let i = 1; //CSS nth-child starts at 1
	for (const child of parent.children) {
		if (elem.isSameNode(child))
			break;

		i++
	}
	return i;
}

function nthChild(l:Element, parent:Element) {
	return `${l.tagName}:nth-child(${indexOf(l, parent)})`
}
/**
 * From: https://stackoverflow.com/questions/8588301/how-to-generate-unique-css-selector-for-dom-element
 * @param {Element} ancestor Optional ancestor to stop at
 */
export default function generateSelector(elem: Element, ancestor: Element|null = null):string {
	let path: Array<String> = [], 
		parent: Element|null;
	while (parent = elem.parentElement) {
		if (ancestor?.isSameNode(parent))
			break;
		
		if (elem.id) {
			path.unshift(toSafeCSSID(elem.id))
			break;
		}

		path.unshift(nthChild(elem, parent))
		elem = parent;
	};
	return path.join(' > ').toLowerCase();
};