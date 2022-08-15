
// @ts-nocheck

console.log("hello from background.js");

console.log(chrome);

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
	console.log(message, sender, sendResponse, chrome);

	const tabId = sender.tab.id;

	chrome.scripting.executeScript({
		target: {
			tabId,
		},
		func: () => {
			navigator.brave = { isBrave: async () => true };

			(async () => {
				// await new Promise((resolve) => setTimeout(resolve, 2_000));
				const javaScript = await (await fetch([...document.scripts].find(({ src }) => src.startsWith("https://talk.brave.com/static/main.")).src)).text();
				const body = new DOMParser().parseFromString(await (await fetch(location.href)).text(), "text/html").body.innerHTML;
				document.body.innerHTML = body;
				window.eval(javaScript);
			})();
		},
		world: "MAIN",
		injectImmediately: true,
	});
});
