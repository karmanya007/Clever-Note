/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: isCheckObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isCheckObj\", function() { return isCheckObj; });\n/* harmony import */ var _views_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/base */ \"./src/js/views/base.js\");\n/* harmony import */ var _views_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/toolbar */ \"./src/js/views/toolbar.js\");\n/* harmony import */ var _views_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/utilities */ \"./src/js/views/utilities.js\");\n\n\n\n\nlet isCheckObj = {\n\tisCheck : false\n};\n\nconst state = {};\n\n// Button handeling\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].bold.addEventListener('click', () => {\n\t_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].bold.classList.toggle('isActive');\n\t_views_toolbar__WEBPACK_IMPORTED_MODULE_1__[\"exec\"]('bold');\n});\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].italic.addEventListener('click', () => {\n\t_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].italic.classList.toggle('isActive');\n\t_views_toolbar__WEBPACK_IMPORTED_MODULE_1__[\"exec\"]('italic');\n});\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].underline.addEventListener('click', () => {\n\t_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].underline.classList.toggle('isActive');\n\t_views_toolbar__WEBPACK_IMPORTED_MODULE_1__[\"exec\"]('underline');\n});\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].strikethrough.addEventListener('click', () => {\n\t_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].strikethrough.classList.toggle('isActive');\n\t_views_toolbar__WEBPACK_IMPORTED_MODULE_1__[\"exec\"]('strikethrough');\n});\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].unorderedlist.addEventListener('click', () => {\n\t_views_toolbar__WEBPACK_IMPORTED_MODULE_1__[\"exec\"]('insertUnorderedList');\n});\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].orderedlist.addEventListener('click', () => {\n\t_views_toolbar__WEBPACK_IMPORTED_MODULE_1__[\"exec\"]('insertOrderedList');\n});\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].indentDecrease.addEventListener('click', () => {\n\t_views_toolbar__WEBPACK_IMPORTED_MODULE_1__[\"exec\"]('outdent');\n});\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].indentIncrease.addEventListener('click', () => {\n\t_views_toolbar__WEBPACK_IMPORTED_MODULE_1__[\"exec\"]('indent');\n});\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].link.addEventListener('click', () => {\n\t_views_toolbar__WEBPACK_IMPORTED_MODULE_1__[\"exec\"]('link');\n});\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].unlink.addEventListener('click', () => {\n\t_views_toolbar__WEBPACK_IMPORTED_MODULE_1__[\"exec\"]('unlink');\n});\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].attach.addEventListener('click', () => {\n\t_views_toolbar__WEBPACK_IMPORTED_MODULE_1__[\"exec\"]('attach');\n});\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].fontStyleID.addEventListener('change', () => {\n\t_views_toolbar__WEBPACK_IMPORTED_MODULE_1__[\"changeFont\"]();\n});\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].fontSizeID.addEventListener('change', () => {\n\t_views_toolbar__WEBPACK_IMPORTED_MODULE_1__[\"changeSize\"]();\n});\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].color.addEventListener('change', () => {\n\t_views_toolbar__WEBPACK_IMPORTED_MODULE_1__[\"chooseColor\"]();\n});\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].alignID.addEventListener('change', () => {\n\t_views_toolbar__WEBPACK_IMPORTED_MODULE_1__[\"changeAlignment\"]();\n});\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].rule.addEventListener('click', () => {\n\t_views_toolbar__WEBPACK_IMPORTED_MODULE_1__[\"insertRule\"]();\n});\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].codeblock.addEventListener('click', () => {\n\t_views_toolbar__WEBPACK_IMPORTED_MODULE_1__[\"codeBlock\"]();\n});\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].checkbox.addEventListener('click', () => {\n\t_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].checkbox.classList.toggle('isActive');\n\tisCheckObj.isCheck = !isCheckObj.isCheck;\n\t_views_toolbar__WEBPACK_IMPORTED_MODULE_1__[\"createCheckbox\"]();\n});\n_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].highlight.addEventListener('click', () => {\n\t_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].highlight.classList.toggle('isActive');\n\t_views_toolbar__WEBPACK_IMPORTED_MODULE_1__[\"toggleHighlight\"]();\n});\n\n// Checkbox creation on key press when isCheckboxPresent is true\ndocument.addEventListener('keypress', (event) => {\n\t// To handle the ENTER key press event\n\tif (event.keyCode === 13 || event.which === 13) {\n\t\t// If checkbox is present\n\t\tif (document.querySelector('#chkbox') && isCheckObj.isCheck) {\n\t\t\tif (document.querySelectorAll('#chkbox').length === 1) _views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].editor.innerHTML += '<br>';\n\t\t\t_views_base__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].editor.innerHTML += `<br>`;\n\t\t\t_views_toolbar__WEBPACK_IMPORTED_MODULE_1__[\"createCheckbox\"]();\n\t\t}\n\t}\n});\n\n// To handle the TAB key event to prevent it from moving the selection around the browser\ndocument.addEventListener('keydown', (event) => {\n\tif (event.keyCode === 9) {\n\t\tevent.preventDefault();\n\n\t\tconst currentElement = window.getSelection().baseNode;\n\t\tconst doc = currentElement.ownerDocument.defaultView;\n\t\tconst sel = doc.getSelection();\n\t\tconst range = sel.getRangeAt(0);\n\n\t\tconst tabNode = document.createTextNode('\\u00a0\\u00a0\\u00a0\\u00a0');\n\t\trange.insertNode(tabNode);\n\n\t\trange.setStartAfter(tabNode);\n\t\trange.setEndAfter(tabNode);\n\t\tsel.removeAllRanges();\n\t\tsel.addRange(range);\n\t} else if (event.key === 'Backspace') {\n\t\t// To delete the codeBlock when backspace is pressed if it is empty\n\t\tif (\n\t\t\twindow.getSelection().baseNode.className === 'codeBlock' &&\n\t\t\twindow.getSelection().baseNode.innerHTML === ''\n\t\t) {\n\t\t\twindow.getSelection().baseNode.remove();\n\t\t}\n\t}\n});\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/views/base.js":
/*!******************************!*\
  !*** ./src/js/views/base.js ***!
  \******************************/
/*! exports provided: buttons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttons\", function() { return buttons; });\nconst buttons = {\r\n\tfontStyleID    : document.querySelector('#input-font'),\r\n\tfontSizeID     : document.querySelector('#fontSize'),\r\n\tcolor          : document.querySelector('.color-apply'),\r\n\tbold           : document.querySelector('.bold'),\r\n\titalic         : document.querySelector('.italic'),\r\n\tunderline      : document.querySelector('.underline'),\r\n\tstrikethrough  : document.querySelector('.strikethrough'),\r\n\thighlight      : document.querySelector('.Hightlight'),\r\n\tcodeblock      : document.querySelector('.Code'),\r\n\tunorderedlist  : document.querySelector('.insertUnorderedList'),\r\n\torderedlist    : document.querySelector('.insertOrderedList'),\r\n\tcheckbox       : document.querySelector('.checkBox'),\r\n\talignID        : document.querySelector('#align'),\r\n\tindentDecrease : document.querySelector('.outdent'),\r\n\tindentIncrease : document.querySelector('.indent'),\r\n\ttable          : document.querySelector('.table'),\r\n\trule           : document.querySelector('.rule'),\r\n\tlink           : document.querySelector('.Link'),\r\n\tunlink         : document.querySelector('.unlink'),\r\n\tattach         : document.querySelector('.attach'),\r\n\teditor         : document.querySelector('.editor')\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/views/base.js?");

/***/ }),

/***/ "./src/js/views/toolbar.js":
/*!*********************************!*\
  !*** ./src/js/views/toolbar.js ***!
  \*********************************/
/*! exports provided: exec, changeFont, changeSize, chooseColor, changeAlignment, insertRule, codeBlock, createCheckbox, toggleHighlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exec\", function() { return exec; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeFont\", function() { return changeFont; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeSize\", function() { return changeSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chooseColor\", function() { return chooseColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeAlignment\", function() { return changeAlignment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertRule\", function() { return insertRule; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"codeBlock\", function() { return codeBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCheckbox\", function() { return createCheckbox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleHighlight\", function() { return toggleHighlight; });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ \"./src/js/views/utilities.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./src/js/views/base.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n\r\n\r\n\r\n\r\n// Uses ececCommand for various changes\r\nconst exec = (cmd) => {\r\n\tdocument.execCommand(cmd, false, null);\r\n\t_utilities__WEBPACK_IMPORTED_MODULE_0__[\"setEndOfContenteditable\"](_base__WEBPACK_IMPORTED_MODULE_1__[\"buttons\"].editor);\r\n};\r\n// Changes Font style\r\nconst changeFont = () => {\r\n\tconst myFont = document.getElementById('input-font').value;\r\n\tdocument.execCommand('fontName', false, myFont);\r\n\t_utilities__WEBPACK_IMPORTED_MODULE_0__[\"setEndOfContenteditable\"](_base__WEBPACK_IMPORTED_MODULE_1__[\"buttons\"].editor);\r\n};\r\n// Changes the font size\r\nconst changeSize = () => {\r\n\tconst mySize = document.getElementById('fontSize').value;\r\n\tdocument.execCommand('fontSize', false, mySize);\r\n\t_utilities__WEBPACK_IMPORTED_MODULE_0__[\"setEndOfContenteditable\"](_base__WEBPACK_IMPORTED_MODULE_1__[\"buttons\"].editor);\r\n};\r\n// Changes the font color\r\nconst chooseColor = () => {\r\n\tconst myColor = document.getElementById('myColor').value;\r\n\tdocument.execCommand('foreColor', false, myColor);\r\n\t_utilities__WEBPACK_IMPORTED_MODULE_0__[\"setEndOfContenteditable\"](_base__WEBPACK_IMPORTED_MODULE_1__[\"buttons\"].editor);\r\n};\r\n// Changes the text alignment\r\nconst changeAlignment = () => {\r\n\tconst myAlign = document.getElementById('align').value;\r\n\tdocument.execCommand(`${myAlign}`, false, null);\r\n\t_utilities__WEBPACK_IMPORTED_MODULE_0__[\"setEndOfContenteditable\"](_base__WEBPACK_IMPORTED_MODULE_1__[\"buttons\"].editor);\r\n};\r\n// Inserts an horizontal rule\r\nconst insertRule = () => {\r\n\t_base__WEBPACK_IMPORTED_MODULE_1__[\"buttons\"].editor.innerHTML += '<hr><br>';\r\n\t_utilities__WEBPACK_IMPORTED_MODULE_0__[\"setEndOfContenteditable\"](_base__WEBPACK_IMPORTED_MODULE_1__[\"buttons\"].editor);\r\n};\r\n// Creates a codeBlock\r\nconst codeBlock = () => {\r\n\tconst codeBlock = document.createElement('p');\r\n\tcodeBlock.setAttribute('class', 'codeBlock');\r\n\tcodeBlock.setAttribute('contenteditable', true);\r\n\t_base__WEBPACK_IMPORTED_MODULE_1__[\"buttons\"].editor.innerHTML += '<br>';\r\n\t_base__WEBPACK_IMPORTED_MODULE_1__[\"buttons\"].editor.appendChild(codeBlock);\r\n\t_base__WEBPACK_IMPORTED_MODULE_1__[\"buttons\"].editor.innerHTML += '<br>';\r\n\t// document.querySelectorAll('.codeBlock')[document.querySelectorAll('.codeBlock').length - 1].focus();\r\n\t// console.log(window.getSelection().baseNode.parentNode.contents());\r\n\t_utilities__WEBPACK_IMPORTED_MODULE_0__[\"setEndOfContenteditable\"](_base__WEBPACK_IMPORTED_MODULE_1__[\"buttons\"].editor);\r\n};\r\n// Creates a checkbox\r\nconst createCheckbox = () => {\r\n\tif (_index__WEBPACK_IMPORTED_MODULE_2__[\"isCheckObj\"].isCheck) {\r\n\t\tconsole.log(_index__WEBPACK_IMPORTED_MODULE_2__[\"isCheckObj\"].isCheck);\r\n\t\tlet checkBox = document.createElement('input');\r\n\t\tcheckBox.setAttribute('type', 'checkbox');\r\n\t\tcheckBox.setAttribute('id', `chkbox`);\r\n\t\tcheckBox.setAttribute('readonly', true);\r\n\r\n\t\t// buttons.editor.innerText = buttons.editor.innerText.trim();\r\n\t\t_base__WEBPACK_IMPORTED_MODULE_1__[\"buttons\"].editor.appendChild(checkBox);\r\n\r\n\t\t_base__WEBPACK_IMPORTED_MODULE_1__[\"buttons\"].editor.innerHTML += '&nbsp;&nbsp;';\r\n\t\t_base__WEBPACK_IMPORTED_MODULE_1__[\"buttons\"].editor.innerHTML += '<br>';\r\n\t\t// console.log(window.getSelection().getRangeAt(0).startContainer.childNodes);\r\n\t}\r\n\t_utilities__WEBPACK_IMPORTED_MODULE_0__[\"setEndOfContenteditable\"](_base__WEBPACK_IMPORTED_MODULE_1__[\"buttons\"].editor);\r\n};\r\n\r\n// Creates a highlight based on the safeRange\r\nconst toggleHighlight = () => {\r\n\tconst userSelection = window.getSelection().getRangeAt(0);\r\n\tconst safeRanges = _utilities__WEBPACK_IMPORTED_MODULE_0__[\"getSafeRange\"](userSelection);\r\n\tfor (let i = 0; i < safeRanges.length; i++) {\r\n\t\thighlightRange(safeRanges[i]);\r\n\t}\r\n};\r\n// For toggling highlighting a selection (Still  a WIP)\r\nconst highlightRange = (userSelection) => {\r\n\tif (!(window.getSelection().baseNode.parentNode.className === 'highlightedText')) {\r\n\t\tconst newNode = document.createElement('div');\r\n\t\tnewNode.className = 'highlightedText';\r\n\t\tnewNode.style.background = 'yellow';\r\n\t\tnewNode.style.display = 'inline';\r\n\t\tuserSelection.surroundContents(newNode);\r\n\t} else {\r\n\t\tlet contentLenght = $(window.getSelection().baseNode.parentNode).contents().length;\r\n\t\tfor (let i = 0; i < contentLenght; i++) {\r\n\t\t\tcontentLenght = $(window.getSelection().baseNode.parentNode).contents().length;\r\n\r\n\t\t\tif ($(window.getSelection().baseNode.parentNode)[i].className === 'highlightedText')\r\n\t\t\t\t$(window.getSelection().baseNode.parentNode).contents().unwrap();\r\n\t\t}\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/views/toolbar.js?");

/***/ }),

/***/ "./src/js/views/utilities.js":
/*!***********************************!*\
  !*** ./src/js/views/utilities.js ***!
  \***********************************/
/*! exports provided: setEndOfContenteditable, getSafeRange, returnLastInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setEndOfContenteditable\", function() { return setEndOfContenteditable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSafeRange\", function() { return getSafeRange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"returnLastInput\", function() { return returnLastInput; });\n// Moves the cursor to the end of the editor\r\nconst setEndOfContenteditable = (contentEditableElement) => {\r\n\tlet range, selection;\r\n\tif (document.createRange) {\r\n\t\t//Firefox, Chrome, Opera, Safari, IE 9+\r\n\t\trange = document.createRange();\r\n\t\trange.selectNodeContents(contentEditableElement);\r\n\t\trange.collapse(false);\r\n\t\tselection = window.getSelection();\r\n\t\tselection.removeAllRanges();\r\n\t\tselection.addRange(range);\r\n\t} else if (document.selection) {\r\n\t\t//IE 8 and lower\r\n\t\trange = document.body.createTextRange();\r\n\t\trange.moveToElementText(contentEditableElement);\r\n\t\trange.collapse(false);\r\n\t\trange.select();\r\n\t}\r\n};\r\n\r\n// Returns a array of safe ranges i.e. for node to node\r\nconst getSafeRange = (range) => {\r\n\tlet a = range.commonAncestorContainer;\r\n\r\n\t// Starts -- Work inward from the start, selecting the largest safe range\r\n\tlet s = new Array(0),\r\n\t\trs = new Array(0);\r\n\tif (range.startContainer != a) for (let i = range.startContainer; i != a; i = i.parentNode) s.push(i);\r\n\tif (0 < s.length)\r\n\t\tfor (let i = 0; i < s.length; i++) {\r\n\t\t\tlet xs = document.createRange();\r\n\t\t\tif (i) {\r\n\t\t\t\txs.setStartAfter(s[i - 1]);\r\n\t\t\t\txs.setEndAfter(s[i].lastChild);\r\n\t\t\t} else {\r\n\t\t\t\txs.setStart(s[i], range.startOffset);\r\n\t\t\t\txs.setEndAfter(s[i].nodeType == Node.TEXT_NODE ? s[i] : s[i].lastChild);\r\n\t\t\t}\r\n\t\t\trs.push(xs);\r\n\t\t}\r\n\r\n\t// Ends -- basically the same code reversed\r\n\tlet e = new Array(0),\r\n\t\tre = new Array(0);\r\n\tif (range.endContainer != a) for (let i = range.endContainer; i != a; i = i.parentNode) e.push(i);\r\n\tif (0 < e.length)\r\n\t\tfor (let i = 0; i < e.length; i++) {\r\n\t\t\tlet xe = document.createRange();\r\n\t\t\tif (i) {\r\n\t\t\t\txe.setStartBefore(e[i].firstChild);\r\n\t\t\t\txe.setEndBefore(e[i - 1]);\r\n\t\t\t} else {\r\n\t\t\t\txe.setStartBefore(e[i].nodeType == Node.TEXT_NODE ? e[i] : e[i].firstChild);\r\n\t\t\t\txe.setEnd(e[i], range.endOffset);\r\n\t\t\t}\r\n\t\t\tre.unshift(xe);\r\n\t\t}\r\n\r\n\t// Middle -- the uncaptured middle\r\n\tif (0 < s.length && 0 < e.length) {\r\n\t\tvar xm = document.createRange();\r\n\t\txm.setStartAfter(s[s.length - 1]);\r\n\t\txm.setEndBefore(e[e.length - 1]);\r\n\t} else {\r\n\t\treturn [\r\n\t\t\trange\r\n\t\t];\r\n\t}\r\n\r\n\t// Concat\r\n\trs.push(xm);\r\n\tresponse = rs.concat(re);\r\n\r\n\treturn response;\r\n};\r\n\r\n// Returns the index of the last checkbox in the selection\r\nconst returnLastInput = () => {\r\n\tlet inputIndex;\r\n\tconst childnodes = window.getSelection().getRangeAt(0).startContainer.childNodes;\r\n\tconst lengthOfList = childnodes.length;\r\n\tlet i;\r\n\tfor (i = lengthOfList - 1; i >= 0; i--) {\r\n\t\t// console.log(childnodes[i]);\r\n\t\tif (childnodes[i].type === 'checkbox') {\r\n\t\t\tinputIndex = i;\r\n\t\t\tbreak;\r\n\t\t}\r\n\t}\r\n\treturn inputIndex;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/views/utilities.js?");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js?");

/***/ })

/******/ });