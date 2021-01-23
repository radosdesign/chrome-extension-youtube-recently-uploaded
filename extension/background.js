//
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status !== 'complete') {
        return;
    }

    // Check the URL and if equals to "youtube.com", click on "Recently uploaded" button
    if (isYoutubeHome(tab.url)) {
        chrome.tabs.executeScript(tab.id, {file: 'click_recently_uploaded.js'});
    }
});

/**
 * Returns 'true' if site is on the Fake news list
 */
function isYoutubeHome(url) {
    console.log('Is youtube home? ' + url);
    if (url === "https://www.youtube.com/") {
        return true;
    }
    return false;
}
