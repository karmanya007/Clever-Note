import { buttons } from './views/base';
import * as toolbar from './views/toolbar';
import * as utilities from './views/utilities';

export let isCheckObj = {
	isCheck : false
};

const state = {};

// Button handeling
buttons.bold.addEventListener('click', () => {
	buttons.bold.classList.toggle('isActive');
	toolbar.exec('bold');
});
buttons.italic.addEventListener('click', () => {
	buttons.italic.classList.toggle('isActive');
	toolbar.exec('italic');
});
buttons.underline.addEventListener('click', () => {
	buttons.underline.classList.toggle('isActive');
	toolbar.exec('underline');
});
buttons.strikethrough.addEventListener('click', () => {
	buttons.strikethrough.classList.toggle('isActive');
	toolbar.exec('strikethrough');
});
buttons.unorderedlist.addEventListener('click', () => {
	toolbar.exec('insertUnorderedList');
});
buttons.orderedlist.addEventListener('click', () => {
	toolbar.exec('insertOrderedList');
});
buttons.indentDecrease.addEventListener('click', () => {
	toolbar.exec('outdent');
});
buttons.indentIncrease.addEventListener('click', () => {
	toolbar.exec('indent');
});
buttons.link.addEventListener('click', () => {
	toolbar.exec('link');
});
buttons.unlink.addEventListener('click', () => {
	toolbar.exec('unlink');
});
buttons.attach.addEventListener('click', () => {
	toolbar.exec('attach');
});
buttons.fontStyleID.addEventListener('change', () => {
	toolbar.changeFont();
});
buttons.fontSizeID.addEventListener('change', () => {
	toolbar.changeSize();
});
buttons.color.addEventListener('change', () => {
	toolbar.chooseColor();
});
buttons.alignID.addEventListener('change', () => {
	toolbar.changeAlignment();
});
buttons.rule.addEventListener('click', () => {
	toolbar.insertRule();
});
buttons.codeblock.addEventListener('click', () => {
	toolbar.codeBlock();
});
buttons.checkbox.addEventListener('click', () => {
	buttons.checkbox.classList.toggle('isActive');
	isCheckObj.isCheck = !isCheckObj.isCheck;
	toolbar.createCheckbox();
});
buttons.highlight.addEventListener('click', () => {
	buttons.highlight.classList.toggle('isActive');
	toolbar.toggleHighlight();
});

// Checkbox creation on key press when isCheckboxPresent is true
document.addEventListener('keypress', (event) => {
	// To handle the ENTER key press event
	if (event.keyCode === 13 || event.which === 13) {
		// If checkbox is present
		if (document.querySelector('#chkbox') && isCheckObj.isCheck) {
			if (document.querySelectorAll('#chkbox').length === 1) buttons.editor.innerHTML += '<br>';
			buttons.editor.innerHTML += `<br>`;
			toolbar.createCheckbox();
		}
	}
});

// To handle the TAB key event to prevent it from moving the selection around the browser
document.addEventListener('keydown', (event) => {
	if (event.keyCode === 9) {
		event.preventDefault();

		const currentElement = window.getSelection().baseNode;
		const doc = currentElement.ownerDocument.defaultView;
		const sel = doc.getSelection();
		const range = sel.getRangeAt(0);

		const tabNode = document.createTextNode('\u00a0\u00a0\u00a0\u00a0');
		range.insertNode(tabNode);

		range.setStartAfter(tabNode);
		range.setEndAfter(tabNode);
		sel.removeAllRanges();
		sel.addRange(range);
	} else if (event.key === 'Backspace') {
		// To delete the codeBlock when backspace is pressed if it is empty
		if (
			window.getSelection().baseNode.className === 'codeBlock' &&
			window.getSelection().baseNode.innerHTML === ''
		) {
			window.getSelection().baseNode.remove();
		}
	}
});
