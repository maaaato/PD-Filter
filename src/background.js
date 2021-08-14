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
    execFilter();
  }
});
