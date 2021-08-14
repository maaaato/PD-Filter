function getStorageLocalData() {
    // Immediately return a promise and start asynchronous work
    return new Promise((resolve, reject) => {
      // Asynchronously fetch all data from storage.sync.
      chrome.storage.local.get('filter_value', items => {
        // Pass any observed errors down the promise chain.
        if (chrome.runtime.lastError) {
          return reject(chrome.runtime.lastError);
        }
        // Pass the data retrieved from storage down the promise chain.
        resolve(items.filter_value);
      });
    });
}

async function execFilter(){
    var disc = document.getElementsByClassName('x-column-description');
    var len = disc.length;
    var val = await getStorageLocalData();

    for (var i = 0; i < len; i++) {
        var ans = disc[i].firstChild.textContent.indexOf(val);
        if (ans === -1){
            disc[i].parentNode.setAttribute('style','display: none;');
        }
    }
}