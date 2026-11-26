/******/ (() => { // webpackBootstrap
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
// Debug: in about:debugging#/runtime/this-firefox, click on "Inspect" for the extension.

chrome.runtime.onInstalled.addListener(function () {
  console.log('onInstalled');
});
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // Check if the tab has finished loading
  if (changeInfo.status === 'complete' && tab.url) {
    console.log('onComplete');
    // Check if the URL matches the patterns specified in the manifest
    if (tab.url.match(/\/\/([^/]+\.)?(linkedin|facebook|instagram|tumblr|twitter|x)\.com\b/)) {
      // Inject content.js as a module
      console.log('executeScript: ' + tab.url);
      chrome.scripting.executeScript({
        target: {
          tabId: tabId
        },
        files: ['dist/content.bundle.js'],
        injectImmediately: true // This option allows to inject the script immediately
      });
    }
  }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.loginsSkipped !== undefined) {
    console.log('onMessage loginsSkipped');
    chrome.storage.local.get('loginsSkipped', function (data) {
      var newCount = (data.loginsSkipped || 0) + 1;
      chrome.storage.local.set({
        loginsSkipped: newCount
      });
    });
  } else if (request.message === "is_active_tab") {
    sendResponse({
      isActiveTab: sender.tab.active
    });
  }
});
/******/ })()
;
//# sourceMappingURL=background.bundle.js.map