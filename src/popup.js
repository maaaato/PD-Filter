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
        updateChild("child1", filterValue.value);
        execFilter();
        messageEl.textContent = "Saved";
        setTimeout(() => (messageEl.textContent = ""), 750);
      }
    );
  };
};

function updateChild(childId, title) {
  chrome.contextMenus.update(childId, { title: title });
}
