chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
       
        // "https://yingxiao.pinduoduo.com/mms-gateway/venus/api/subway/keyword/listKeywordPage",
        if (request.request.request.url == "https://yingxiao.pinduoduo.com/mms-gateway/venus/api/subway/unitBid/list"){
           console.log("检测到"+request.request.request.url);
           chrome.notifications.create(null, {
    type: 'basic',
    iconUrl: 'icon/128.png',
    title: '监听到了',
    message: '您刚才点击了自定义右键菜单！'
});
            console.log(JSON.parse(request.request.response.body.content));
            return true;
        }
    }
);