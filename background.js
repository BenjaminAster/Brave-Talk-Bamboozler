// @ts-nocheck

chrome.runtime.onMessage.addListener(async ({ type: messageType }, { tab: { id: tabId } }) => {
	if (messageType === "start-bamboozling") {
		chrome.scripting.executeScript({
			target: { tabId },
			world: "MAIN",
			injectImmediately: true,
			func: async () => {
				navigator.brave = { isBrave: async () => true };
				const javaScript = await (await window.fetch([...document.scripts].find(({ src }) => src.startsWith("https://talk.brave.com/static/main.")).src)).text();
				const body = new DOMParser().parseFromString(await (await window.fetch(location.href)).text(), "text/html").body.innerHTML;
				document.body.innerHTML = body;
				window.eval(javaScript);
			},
		});
	}
});
