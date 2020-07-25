import * as utilities from './utilities';
import { buttons } from './base';
import { isCheckObj } from '../index';

// Uses ececCommand for various changes
export const exec = (cmd) => {
	document.execCommand(cmd, false, null);
	utilities.setEndOfContenteditable(buttons.editor);
};
// Changes Font style
export const changeFont = () => {
	const myFont = document.getElementById('input-font').value;
	document.execCommand('fontName', false, myFont);
	utilities.setEndOfContenteditable(buttons.editor);
};
// Changes the font size
export const changeSize = () => {
	const mySize = document.getElementById('fontSize').value;
	document.execCommand('fontSize', false, mySize);
	utilities.setEndOfContenteditable(buttons.editor);
};
// Changes the font color
export const chooseColor = () => {
	const myColor = document.getElementById('myColor').value;
	document.execCommand('foreColor', false, myColor);
	utilities.setEndOfContenteditable(buttons.editor);
};
// Changes the text alignment
export const changeAlignment = () => {
	const myAlign = document.getElementById('align').value;
	document.execCommand(`${myAlign}`, false, null);
	utilities.setEndOfContenteditable(buttons.editor);
};
// Inserts an horizontal rule
export const insertRule = () => {
	buttons.editor.innerHTML += '<hr><br>';
	utilities.setEndOfContenteditable(buttons.editor);
};
// Creates a codeBlock
export const codeBlock = () => {
	const codeBlock = document.createElement('p');
	codeBlock.setAttribute('class', 'codeBlock');
	codeBlock.setAttribute('contenteditable', true);
	buttons.editor.innerHTML += '<br>';
	buttons.editor.appendChild(codeBlock);
	buttons.editor.innerHTML += '<br>';
	// document.querySelectorAll('.codeBlock')[document.querySelectorAll('.codeBlock').length - 1].focus();
	// console.log(window.getSelection().baseNode.parentNode.contents());
	utilities.setEndOfContenteditable(buttons.editor);
};
// Creates a checkbox
export const createCheckbox = () => {
	if (isCheckObj.isCheck) {
		console.log(isCheckObj.isCheck);
		let checkBox = document.createElement('input');
		checkBox.setAttribute('type', 'checkbox');
		checkBox.setAttribute('id', `chkbox`);
		checkBox.setAttribute('readonly', true);

		// buttons.editor.innerText = buttons.editor.innerText.trim();
		buttons.editor.appendChild(checkBox);

		buttons.editor.innerHTML += '&nbsp;&nbsp;';
		buttons.editor.innerHTML += '<br>';
		// console.log(window.getSelection().getRangeAt(0).startContainer.childNodes);
	}
	utilities.setEndOfContenteditable(buttons.editor);
};

// Creates a highlight based on the safeRange
export const toggleHighlight = () => {
	const userSelection = window.getSelection().getRangeAt(0);
	const safeRanges = utilities.getSafeRange(userSelection);
	for (let i = 0; i < safeRanges.length; i++) {
		highlightRange(safeRanges[i]);
	}
};
// For toggling highlighting a selection (Still  a WIP)
const highlightRange = (userSelection) => {
	if (!(window.getSelection().baseNode.parentNode.className === 'highlightedText')) {
		const newNode = document.createElement('div');
		newNode.className = 'highlightedText';
		newNode.style.background = 'yellow';
		newNode.style.display = 'inline';
		userSelection.surroundContents(newNode);
	} else {
		let contentLenght = $(window.getSelection().baseNode.parentNode).contents().length;
		for (let i = 0; i < contentLenght; i++) {
			contentLenght = $(window.getSelection().baseNode.parentNode).contents().length;

			if ($(window.getSelection().baseNode.parentNode)[i].className === 'highlightedText')
				$(window.getSelection().baseNode.parentNode).contents().unwrap();
		}
	}
};
