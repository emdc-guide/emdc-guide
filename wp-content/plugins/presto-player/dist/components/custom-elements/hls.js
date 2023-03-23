import{_ as _asyncToGenerator,a as _regeneratorRuntime,P as PrestoPlayer,b as _objectSpread2}from"./index.js";var loadHLS=function(e){var r=e.config,n=e.selector,t=e.src,a=e.preload;return new Promise(function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function e(o,i){var u,s,l;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.Hls){e.next=6;break}case 1:if(window.hasOwnProperty("Hls")){e.next=6;break}return e.next=4,new Promise((function(e){return setTimeout(e,50)}));case 4:e.next=1;break;case 6:if(!window.Hls.isSupported()){e.next=16;break}return s=!["metadata","none"].includes(a),null!==(u=wp)&&void 0!==u&&u.blocks&&(s=!0),(l=new window.Hls({autoStartLoad:s})).loadSource(t),l.on(window.Hls.Events.LEVEL_SWITCHED,(function(e,r){var t=n.closest(".presto-player__wrapper").querySelector(".plyr__menu__container [data-plyr='quality'][value='0'] span");l.autoLevelEnabled?t.innerHTML="AUTO (".concat(l.levels[r.level].height,"p)"):t.innerHTML="AUTO"})),l.on(window.Hls.Events.MANIFEST_PARSED,(function(e,t){var a=l.levels.map((function(e){return e.height}));a.unshift(0);var i=a.findIndex((function(e){var r;return e===parseInt(null===(r=prestoPlayer)||void 0===r?void 0:r.hls_start_level)}));l.startLevel=i?i-1:2,r.quality={default:0,options:a,forced:!0,onChange:function(e){0===e?prestoHLS.currentLevel=-1:prestoHLS.levels.forEach((function(r,n){r.height===e&&(console.log("Found quality match with "+e),prestoHLS.currentLevel=n)}))}},l.attachMedia(n),window.prestoHLS=l;var u=new PrestoPlayer(n,_objectSpread2({},r));return u.hls=l,u.on("waiting",(function e(){l.startLoad(-1),u.off("waiting",e)})),u.on("languagechange",(function(){setTimeout((function(){return l.subtitleTrack=u.currentTrack}),50)})),o(u)})),e.abrupt("return");case 16:if(!n.canPlayType("application/vnd.apple.mpegurl")){e.next=18;break}return e.abrupt("return",o(new PrestoPlayer(n,_objectSpread2({},r))));case 18:return e.abrupt("return",o(new PrestoPlayer(n,_objectSpread2({},r))));case 19:case"end":return e.stop()}}),e)})));return function(_x,r){return e.apply(this,arguments)}}())};export default loadHLS;