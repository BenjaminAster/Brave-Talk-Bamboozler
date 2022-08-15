
// @ts-nocheck

console.log("hello from script.js", chrome);


// const injectScriptURL = chrome.runtime.getURL("./inject.js");
// console.log(chrome, chrome.scripting, document, injectScriptURL);
// const script = document.createElement("script");
// // script.src = injectScriptURL;
// script.src = "https://benjaminaster.com/home/script.js";
// document.head.append(script);

// window.location = `javascript:window.bar=42;`;

// chrome.sripting.executeScript

// const script = document.createElement("script");
// const codeFunction = () => {
// 	class Brave {
// 		async isBrave() {
// 			return true;
// 		};
// 	};

// 	Navigator.prototype.brave = new Brave();
// };
// // script.src = "data:application/javascript;charset=utf-8," + encodeURIComponent(`(${codeFunction.toString()})()`);
// const codeString = `(${codeFunction.toString()})()`;
// script.src = URL.createObjectURL(new Blob([codeString], { type: "application/javascript" }));
// document.head.append(script);


chrome.runtime.sendMessage({
	type: "test",
});

// console.log("sent message")
