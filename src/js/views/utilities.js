// Moves the cursor to the end of the editor
export const setEndOfContenteditable = (contentEditableElement) => {
	let range, selection;
	if (document.createRange) {
		//Firefox, Chrome, Opera, Safari, IE 9+
		range = document.createRange();
		range.selectNodeContents(contentEditableElement);
		range.collapse(false);
		selection = window.getSelection();
		selection.removeAllRanges();
		selection.addRange(range);
	} else if (document.selection) {
		//IE 8 and lower
		range = document.body.createTextRange();
		range.moveToElementText(contentEditableElement);
		range.collapse(false);
		range.select();
	}
};

// Returns a array of safe ranges i.e. for node to node
export const getSafeRange = (range) => {
	let a = range.commonAncestorContainer;

	// Starts -- Work inward from the start, selecting the largest safe range
	let s = new Array(0),
		rs = new Array(0);
	if (range.startContainer != a) for (let i = range.startContainer; i != a; i = i.parentNode) s.push(i);
	if (0 < s.length)
		for (let i = 0; i < s.length; i++) {
			let xs = document.createRange();
			if (i) {
				xs.setStartAfter(s[i - 1]);
				xs.setEndAfter(s[i].lastChild);
			} else {
				xs.setStart(s[i], range.startOffset);
				xs.setEndAfter(s[i].nodeType == Node.TEXT_NODE ? s[i] : s[i].lastChild);
			}
			rs.push(xs);
		}

	// Ends -- basically the same code reversed
	let e = new Array(0),
		re = new Array(0);
	if (range.endContainer != a) for (let i = range.endContainer; i != a; i = i.parentNode) e.push(i);
	if (0 < e.length)
		for (let i = 0; i < e.length; i++) {
			let xe = document.createRange();
			if (i) {
				xe.setStartBefore(e[i].firstChild);
				xe.setEndBefore(e[i - 1]);
			} else {
				xe.setStartBefore(e[i].nodeType == Node.TEXT_NODE ? e[i] : e[i].firstChild);
				xe.setEnd(e[i], range.endOffset);
			}
			re.unshift(xe);
		}

	// Middle -- the uncaptured middle
	if (0 < s.length && 0 < e.length) {
		var xm = document.createRange();
		xm.setStartAfter(s[s.length - 1]);
		xm.setEndBefore(e[e.length - 1]);
	} else {
		return [
			range
		];
	}

	// Concat
	rs.push(xm);
	response = rs.concat(re);

	return response;
};

// Returns the index of the last checkbox in the selection
export const returnLastInput = () => {
	let inputIndex;
	const childnodes = window.getSelection().getRangeAt(0).startContainer.childNodes;
	const lengthOfList = childnodes.length;
	let i;
	for (i = lengthOfList - 1; i >= 0; i--) {
		// console.log(childnodes[i]);
		if (childnodes[i].type === 'checkbox') {
			inputIndex = i;
			break;
		}
	}
	return inputIndex;
};
