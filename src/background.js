chrome.runtime.onInstalled.addListener(function () {
  (async () => {
    const val = await getStorageLocalData();
    const parent = chrome.contextMenus.create({
      id: "parent",
      title: "PD Filter",
    });
    const child = chrome.contextMenus.create({
      id: "child1",
      parentId: "parent",
      title: val ? val : "undefined",
    });
  })();
});

chrome.contextMenus.onClicked.addListener(function (item) {
  if (item.menuItemId === "child1") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { message: "hello" },
        function (item) {
          console.log(item);
          console.log("from background");
        }
      );
    });
  }
});
