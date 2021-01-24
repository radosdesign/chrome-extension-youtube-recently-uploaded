//
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status !== 'complete') {
        return;
    }

    // Check the URL and if it equals to "youtube.com", click on "Recently uploaded" button
    if (isYoutubeHome(tab.url)) {
        chrome.tabs.executeScript(tab.id, {file: 'click_recently_uploaded.js'});
    }
});

/**
 * Returns 'true' if this is YouTube home page
 */
function isYoutubeHome(url) {
    if (url === "https://www.youtube.com/") {
        return true;
    }
    return false;
}
