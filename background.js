function desktop_notification(msg){
    chrome.notifications.create("id", { 
        type : 'basic',
        title : ' ',  // 这里我故意使显示这个为空，显得没那么拥挤
        message : msg,
        iconUrl : 'icon/128.png'
    });
}


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
       
        // "https://yingxiao.pinduoduo.com/mms-gateway/venus/api/subway/keyword/listKeywordPage",
        if (request.request.request.url == "https://yingxiao.pinduoduo.com/mms-gateway/venus/api/subway/unitBid/list"){
           console.log("检测到"+request.request.request.url);
           desktop_notification(request.request.request.url);
           // 通知定时2秒进行清理
           setTimeout(function(e){
            chrome.notifications.clear("id");
            }, 2000);
            console.log(JSON.parse(request.request.response.body.content));
            return true;
        }
    }
);