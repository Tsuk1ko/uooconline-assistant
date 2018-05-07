//提示音
var au = document.createElement("audio");
au.preload = "auto";
au.src = "https://res.hibikiii.com/uooc/msg.mp3";
//变量
var sId;
var sVolume = 0;
var sPalybackRate = 1.99;
var runff = true;
//去下一节课
function gotonextcourse() {
    //首先检测是否有没看的视频
    var nowScopes = $(".basic.ng-scope:not(.complete)");
    //没有成员说明这是刚刚打开的章节
    if(nowScopes.length === 0){
        $($("ul.ng-scope").children("li")[0]).children(".basic").click();
        //展开列表后，余下操作可以递归完成，因此直接返回
        return false;
    }
    for(var i=0;i<nowScopes.length;i++){
        var scope = $(nowScopes[i]);
        var ngif = scope.children(".tag-source-ico").attr("ng-if");
        //如果当前小节内仍有没看过的视频
        if(ngif == "source.type == 10"){
            scope.click();
            return true;
        }
    }
    //否则应当跳到下一节
    var nextScopes = $(".basic.active").parents("li:not(.catalogItem)").next();
    if(nextScopes.length>0){
        nextScopes.children(".basic").click();
        //展开列表后，余下操作可以递归完成，因此直接返回
        return false;
    }
    //如果没有下一节，则说明应该跳到下一章
    nextScopes = $(".basic.active").parents("li.catalogItem").next();
    if(nextScopes.length>0){
        nextScopes.children(".basic").click();
        //展开列表后，余下操作可以递归完成，因此直接返回
        return false;
    }
    //如果连下一章都没了，那就没了
    if (window.Notification && runff) {
        au.play();
        Notification.requestPermission(function(status) {
            var n = new Notification("那个~主人~", {
                body: "视频都放完了喵！该做测验了喵！",
                icon: "https://res.hibikiii.com/uooc/nof.png"
            });
        });
    }
    return true;
}
function gotonextcoursen() {
    if (!gotonextcourse()) {
        setTimeout("gotonextcoursen()", 2000)
    }
};


/*mod-start*/
if (sId != n.curSource.id) {
    e.volume(sVolume);
    e.playbackRate(sPalybackRate);
    sId = n.curSource.id;
}
if (sVolume != e.volume()) sVolume = e.volume();
if (sPalybackRate != e.playbackRate()) sPalybackRate = e.playbackRate();
if ((e.duration() - e.currentTime() < 5) && (e.currentTime() > 1)) {
    if (runff) {
        runff = false;
        setTimeout(function() {
            gotonextcoursen();
            runff = true;
        }, 2000);
    }
}
/*mod-end*/