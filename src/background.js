const onClick = () => (_, tab) => chrome.tabs.sendMessage(tab.id, '');

chrome.contextMenus.create({
    title : 'DRMaker',
    type : 'normal',
    contexts : ['all'],
    id: 'parent_id',
    onclick : onClick()
});