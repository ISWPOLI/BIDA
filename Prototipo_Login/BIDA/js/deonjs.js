var frameWnd = null;
var mainDeonjs = null;
var manager = new deonManager();
var intervalForDevelopMode;

function deonManager() {
	deonManager.functions = new Array();
	deonManager.addFunction = function(func) {
		deonManager.functions.push(func);
	};
}

function loaded() {
	for ( var module in window.__gwt_activeModules) {
		if (!document.getElementById(module))
			return false;
		if (!document.getElementById(module).contentWindow.__gwtInstallCode)
			return false;
	}
	return true;
}

window.addEventListener('load', new function() {
	intervalForDevelopMode = setInterval(function() {
		onLoadScript();
	}, 50);
}, true);

function onLoadScript() {
	if (loaded()) {
		if (intervalForDevelopMode)
			clearInterval(intervalForDevelopMode);
		deonjs.__installRunAsyncCode();
		mainDeonjs = document.getElementById('deonjs');
		frameWnd = mainDeonjs.contentWindow;
		for (var i = 0; i < deonManager.functions.length; i++)
			deonManager.functions[i]();
	}
}

function apply(array, func) {
	if (array.length!="undefined") {
		for (var i = 0; i < array.length; i++)
			if (array[i] && !(array[i].__listener))
				func(array[i]);
	} else if (array && !(array.__listener))
		func(array);
}

function textboxDeon(from) {
	new frameWnd.TextBoxDeon_1(from);
}

function buttonDeon(from) {
	new frameWnd.ButtonDeon_1(from);
}

function scrollDeon(from) {
	new frameWnd.ScrollPanelDeon_0(from);
}

function spinnerDeon(from) {
	new frameWnd.SpinnerDeon_1(from);
}

function checkBoxDeon(from) {
	new frameWnd.CheckBoxDeon_0(from);
}

function suggestBoxDeon(from) {
	frameWnd.getSuggestBoxMemoryDeon(from);
}

function multiSuggestDeon(from) {
	frameWnd.getMultiSuggestMemoryDeon(from);
}

function multiSuggestDeonUp(from) {
	frameWnd.getMultiSuggestMemoryDeonUp(from);
}

function listboxDeon(from) {
	frameWnd.getListBoxMemoryDeon(from);
}

function cropToolRectangle(from) {
	new frameWnd.CropToolRectangle_0(from);
}

function cropToolCircle(from) {
	new frameWnd.CropToolCircle_0(from);
}

function ready(func) {
	deonManager.addFunction(func);
}