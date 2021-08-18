window.onload = () => {
  const filterValue = document.getElementById("filter_value");
  const messageEl = document.getElementById("message");
  const submitBtnEl = document.getElementById("submit");

  // Get data from storage in local, if it exsist already.
  chrome.storage.local.get("filter_value", (items) => {
    filterValue.value = items.filter_value;
  });

  submitBtnEl.onclick = () => {
    chrome.storage.local.set(
      {
        filter_value: filterValue.value,
      },
      () => {
        execContent();
        messageEl.textContent = "Saved";
        setTimeout(() => (messageEl.textContent = ""), 750);
      }
    );
  };
};

function execContent() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { message: "hello" }, function (item) {
      console.log(item);
    });
  });
}
