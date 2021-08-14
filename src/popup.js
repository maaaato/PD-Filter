window.onload = ()  => {
    const filterValue = document.getElementById('filter_value');
    const messageEl = document.getElementById('message');
    const submitBtnEl = document.getElementById('submit');

    // すでに保存されている情報があればそれを設定する処理
    chrome.storage.local.get('filter_value', items => {
      filterValue.value = items.filter_value;
    });

    submitBtnEl.onclick = () => {
      chrome.storage.local.set({
        filter_value: filterValue.value,
      }, () => {
        execFilter();
        messageEl.textContent = 'Saved';
        setTimeout(() => messageEl.textContent = '', 750);
      });
    }
  };