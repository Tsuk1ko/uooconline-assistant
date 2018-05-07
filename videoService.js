!function(){videojs.userConfig={player:{stype:"standard"}},app.factory("videoService",["uoocService","$http","$filter",function(e,t,n){videojs.addLanguage("zh",{Play:"GOGOGO",Pause:"ちょどまで～","Current Time":"已经放完这么多了呢","Duration Time":"这个视频有～这么长～","Remaining Time":"还没放完，不要着急哦","Stream Type":"数据类型desu～",Silenciar:"静音",LIVE:"直播",Loaded:"加载完啦！",Progress:"进度条",Fullscreen:"固有结界，展开！","Non-Fullscreen":"固有结界，解除！",Mute:"呜！",Unmuted:"喵～","Playback Rate":"那个，你想和我签订契约，成为魔法少女吗？",Subtitles:"这里是副标题","subtitles off":"关闭副标题",Captions:"这里是字幕","captions off":"关闭字幕",Chapters:"这里是章节","You aborted the video playback":"终止了视频回放","A network error caused the video download to fail part-way.":"网络错误导致视频加载失败","The video could not be loaded, either because the server or network failed or because the format is not supported.":"视频加载失败, 服务或网络网络链接失败或浏览器不支持","The video playback was aborted due to a corruption problem or because the video used features your browser did not support.":"视频回放失败, 可能由于世界线的收束或浏览器不支持","No compatible source was found for this video.":"这个视频没有发现兼容的版本"});var r={};return r.nocontextmenu=function(e){function t(){return event.cancelBubble=!0,event.returnValue=!1,!1}function n(e){if(window.Event){if(2==e.which||3==e.which)return!1}else if(2==event.button||3==event.button)return event.cancelBubble=!0,event.returnValue=!1,!1}window.Event&&document.captureEvents&&document.captureEvents(Event.MOUSEUP),e.oncontextmenu=t,e.onmousedown=n},r.resize=function(e,t,n){var r=$(e.el_),i=parseInt(t)||r.width(),a=parseInt(n)||r.height();return e.width(1*i),e.height(1*a),e},r.toggleMask=function(e,t){var n=$(e.el_);return t?n.find(".vjs-mask").remove():(n.append('<div class="vjs-mask"></div>'),n.find(".vjs-mask").click(function(e){e.stopPropagation()})),e},r.timeCallback=function(e,t,n){if(t<0)return!1;var r=function(){var i=this.currentTime();parseInt(i)==t&&(n(this,t),e.off("timeupdate",r))};return e.on("timeupdate",r),e},r.timeCollectionCallback=function(e,t,n){var i=angular.isArray(t);if(!i)throw TypeError("points: 必须为数组");if(t.length<=0)return e;for(var a=0;a<t.length;a++)r.timeCallback(e,t[a],n);return e},r.addProgressPoints=function(e,t,n,i){var a;if(n&&!e.hasProgrssPoints){for(seekBar=$(e.controlBar.progressControl.seekBar.el_),e.hasProgrssPoints=!0,a=0;a<t.length;a++){var s=t[a]/n*100;seekBar.append('<span class="vjs-seekbar-point" style="left: '+s+'%"></span>')}r.timeCollectionCallback(e,t,i)}},r.setBlurPause=function(e){/*防止视频暂停，清除此函数*/},r.getCDNsource=function(e,t,n){var r=(videojs.userConfig.player,null),i=null;n=n||"standard";for(var a=0;a<e.length;a++)if(e[a].cdn==t){i=e[a];break}i=i||e[0];for(var s=0;s<i.source.length;s++){var o=i.source[s];if(o.stype==n){r=o;break}}return r||(r=i.source[i.source.length-1]),r},r.PARSE_SRT=function(e,t){function n(e){return(Math.floor(e/l)+1)*l+""}function a(e){var t=e.split(","),n=t[0].split(":");return 3600*n[0]*1e3+60*n[1]*1e3+1e3*n[2]+1*t[1]}function s(e){var t=e.match(f);return caption_=(e+"").replace(p,""),{startTime:a(t[0]),endTime:a(t[1]),caption:caption_.replace(m,"")}}r.addTip(t,"字幕解析中...");var o,c,d=[],u={},l=2e4,v=/[\n\s]*((\d{1,2}):(\d{1,2}):(\d{1,2}).(\d{1,3}))\s*-->\s*((\d{1,2}):(\d{1,2}):(\d{1,2}).(\d{1,3}))[\n\s]+[\d\D]*?((?=\n+\d)|(?=\n*$))/g;v.compile(v);var p=/([\n\s]*((\d{1,2}):(\d{1,2}):(\d{1,2}).(\d{1,3}))\s*-->\s*((\d{1,2}):(\d{1,2}):(\d{1,2}).(\d{1,3}))[\s\n]*)|(\s*\n*$)/g;p.compile(p);var f=/((\d{1,2}):(\d{1,2}):(\d{1,2}).(\d{1,3}))/g;f.compile(f);var m=/(\{(.+)?\})+/g;m.compile(m);this.getResult=function(e,t){e=e||[];var n="";for(i=0;i<e.length;i++){var r=e[i];if(t<=r.endTime&&t>=r.startTime)return n=r.caption.replace("<br>",""),this.lastGetCaptionObj=r,n}return n},this.getCaption=function(e){var t,r=n(e);if(this.lastGetCaptionObj&&e<=this.lastGetCaptionObj.endTime&&e>=this.lastGetCaptionObj.startTime)return this.lastGetCaptionObj.caption;if(o&&c==r||(o=u[r],c=r),!o)return"";if(t=this.getResult(o,e)){u[n(e+l-1)];t=this.getResult(i,e)}else{var i=u[n(e-l)];t=this.getResult(i,e)}return t=""},this.formateSRT=function(e,t){var i,a;if(captionsAr=e.match(v),!captionsAr)return void r.addTip(t,"字幕解析失败");for(i=0;i<captionsAr.length;i++){var o=captionsAr[i],c=s(o);d.push(c)}for(a=0;a<d.length;a++){var l=d[a],p=n(d[a].startTime);u[p]=u[p]||[],u[p].push(l)}return this.CAPTIONS_FiNAL_OBJ=u,u},arguments.length>0&&this.formateSRT(arguments[0],t)},r.getSrt=function(e,t){return $.ajax({method:"GET",url:n("escapeURL")(e),headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",XSRF:$("meta[name=_xsrf]").attr("content")},dataType:"text"}).error(function(){r.addTip(t,"字幕加载失败")})},r.animate=function(e,t,n){var r=t.split(",");e.show(),e.addClass(r[0]+" animated"),setTimeout(function(){e.removeClass(r[0]),r[1]?e.addClass(r[1]).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e.removeClass(r[1]),e.hide()}):e.hide()},n||3e3)},r.addTip=function(e,t,n){var i=$(e.el_);i.find(".vjs-tip").remove();i.append('<div class="vjs-tip" style="display: none">'+t+"</div>"),r.animate(i.find(".vjs-tip"),"fadeInLeftBig,fadeOutLeftBig")},r.uoocPlayerComponent=function(){var e=videojs.getComponent("Component"),t=videojs.extend(e,{constructor:function(t,n){e.call(this,t,n);var i,a=(videojs.userConfig.player,$(t.el_));a.append('<div id="vjs-toggle-play-btn"></div>'),i=a.find("#vjs-toggle-play-btn"),r.nocontextmenu(t.el_),r.setBlurPause(t),i.click(function(){i.hasClass("zoomIn")?t.play():t.pause()}),t.isPause=!0,t.on("play",function(){}),t.on("error",function(){var e=this.error_?this.error_.message:"视频加载失败",t=a.find(".vjs-modal-dialog-content");t.html('<div class="vjs-model-wrongmsg">抱歉, &ensp;视频播放失败,&ensp;您可以尝试<span class="fu" onclick="location.reload();">刷新页面</span>操作 。<br> 如问题仍然未解决, 请<a class="fu" href="/index/service" target="_blank">反馈给我们</a>。<p class="emsg">'+e+"。</p></div>")}),t.on("pause",function(){}),a.bind("dblclick",function(e){"video"==e.target.nodeName.toLowerCase()&&(t.isFullscreen_?t.exitFullscreen():t.requestFullscreen(),t.play())})}});return videojs.registerComponent("UoocPlayer",t),videojs},r.addSubtitle=function(e,t,n){if(t=t||[],t.length&&!(t.length<=0)){var i=(videojs.userConfig.player,t||[]);t=angular.copy(t);var a=$(e.el_);a.find(".vjs-fullscreen-control").after('<div class="vjs-track"></div>'),a.append('<div class="vjs-caption"></div>');var s=a.find(".vjs-track");s.append('<div class="vjs-track-list"><div class="vjs-track-txt">选择字幕</div><div style="display: none;" class="vjs-track-panle"></div>');var o=s.find(".vjs-track-list"),c=o.find(".vjs-track-panle"),d=s.find(".vjs-track-txt"),u=a.find(".vjs-caption");angular.forEach(t,function(e){c.append('<span class="vjs-track-item" title="'+e.title+'" uri="'+e.uri+'">'+e.title+"</span>")});var l=o.find(".vjs-track-item");o.hover(function(){c.show()},function(){c.hide()}),l.click(function(){var t=$(this),n=t.attr("uri"),r=t.attr("title");e.trigger("trackChange",{title:r,uri:n})});var v={};curSubtitle="",e.on("trackChange",function(n,a){for(var o=0;o<t.length;o++)if(t[o].title==a.title){v=i[o];break}return v?(d.html(v.title),s.find('.vjs-track-item[title="'+v.title+'"]').addClass("active").siblings().removeClass("active"),u.show(),void(v.srt||(r.addTip(e,"字幕: "+v.title),r.getSrt(a.uri,e).then(function(t){v.SRT=new r.PARSE_SRT(t,e)})))):void u.hide()});var p=$(e.el_);e.on("timeupdate",function(t,r){if(v.SRT){var i=e.currentTime(),a=p.width(),s=100,o=0,c=1,d=0;curSubtitle=v.SRT.getCaption(parseInt(1e3*i)),c=Math.ceil(curSubtitle.length/o),d=n&&n>0?n:a>1600?40:a>1e3?24:a>500?22:18;var l=a-s>0?a-s:a;o=parseInt(l/d),c>0?u.html(curSubtitle).css({fontSize:d+"px"}).show():u.hide()}}),t.length>0&&e.trigger("trackChange",{title:t[0].title,uri:t[0].uri})}},r.getCndSource=function(e){var t,e=e||[],n=_.sortBy(e,"weight"),r=_.reduce(n,function(e,t){var n=t.weight,r=e+1+"-"+(t.weight+e);return t.wkey=r,e+n},0);randomNumber=_.random(1,r);for(var i=0;i<n.length;i++){var a=n[i],s=a.wkey.split("-"),o=s[0],c=s[1];if(randomNumber>=o&&randomNumber<=c){t=a;break}}return t},r.sourceComponent=function(){var e=videojs.getComponent("Component"),t=videojs.extend(e,{constructor:function(t,n){if(e.call(this,t,n),n.length&&!(n.length<=0)){var i=videojs.userConfig.player;n.currentTime=n.currentTime||0;var a=$(this.el_);a.addClass("vjs-source-cdn"),a.append('<div class="vjs-source-cdn-head"></div><div class="vjs-source-cdn-bd"></div>');var s=a.find(".vjs-source-cdn-head"),o=a.find(".vjs-source-cdn-bd");o.append('<div class="vjs-source-txt"></div>');var c=o.find(".vjs-source-txt");angular.forEach(n,function(e,t){var n=e.cdn,r=o.append('<div class="vjs-source-cdn-cont" cdn="'+n+'" style="display: none;"></div>'),i=r.find(".vjs-source-cdn-cont").eq(t);s.append('<span class="vjs-source-cdn-item " index="'+t+'" cdn="'+n+'">'+e.name+"</span>"),angular.forEach(e.source,function(e,t){i.append('<span class="vjs-menu-content" uri="'+e.uri+'" ftype="'+e.ftype+'" name="'+e.name+'" stype="'+e.stype+'" cdn="'+n+'">'+e.name+"</span>")})});var d=a.find(".vjs-source-cdn-item");a.find(".vjs-source-cdn-cont");d.click(function(){t.trigger("cdnChange",{cdn:n[$(this).index()].cdn})}),o.hover(function(){var e=a.find('.vjs-source-cdn-cont[cdn="'+i.cdn+'"]');e.show().siblings(".vjs-source-cdn-cont").hide()},function(){o.find(".vjs-source-cdn-cont").hide()}),o.find(".vjs-menu-content").click(function(){var e=$(this),n=e.attr("cdn"),r=e.attr("stype");t.trigger("cdnChange",{cdn:n,stype:r})});var u=0;if(t.on("cdnChange",function(e,a){t.cdn=a.cdn,angular.extend(i,a);var s=r.getCDNsource(n,a.cdn,a.stype);if(!s)return void t.src({type:"video/mp4",src:"nosource"});var d=o.find('.vjs-menu-content[cdn="'+s.cdn+'"][stype="'+s.stype+'"]'),l=$('.vjs-source-cdn-item[cdn="'+s.cdn+'"]');if(l.addClass("active").siblings("span").removeClass("active"),d.addClass("active").siblings("span").removeClass("active"),c.html(s.name),t.src({type:s.ftype,src:s.uri}),r.addTip(t,"资源: "+s.cdn+" "+s.name),u||n.currentTime){var v=u>n.currentTime?u:n.currentTime;setTimeout(function(){t.currentTime(v),t.play()},400)}}),t.on(["timeupdate"],function(){var e=t.currentTime();u=u>e&&0==e?u:e}),n.length>0){var l=r.getCndSource(n);l||(firtSource={cdn:"cdn1",ftype:"video/mp4",name:"原画",stype:"source",uri:"nosource"}),t.on("ready",function(){var e=t.options_.controlBar.trackSource,i=angular.isArray(e)?e:e[l.cdn];r.addSubtitle(t,i,n.playerOptions.fontsize),t.trigger("cdnChange",{cdn:l.cdn,stype:l.stype})})}}}});return videojs.registerComponent("VideoSource",t),videojs},r.uoocPlayerComponent(),r.sourceComponent(),r}])}();