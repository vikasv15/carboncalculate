const gwcID=e=>document.getElementById(e),gwcU=encodeURIComponent(window.location.href),newRequest=function(e=!0){fetch("https://api.websitecarbon.com/b?url="+gwcU).then(function(e){if(!e.ok)throw Error(e);return e.json()}).then(function(t){vv=1,e&&renderResult(t),t.t=(new Date).getTime(),localStorage.setItem("gwcb_"+gwcU,JSON.stringify(t))}).catch(function(e){e.ok||(gwcID("cresult").innerHTML="No Result",console.log(e),localStorage.removeItem("gwcb_"+gwcU))})},renderResult=function(e){var t="",n="";e.c<1&&(t="ECO-FRIENDLY WEBSITE",n="Less than 1 G CO2"),gwcID("cresult").innerHTML=t+'<br/><span style="color:#79CE98;">'+e.c+"G CO2/page,</span> <br/>"+n},gwcC="<style>.cbadge {width: auto;margin: 0 auto;display: table;background-color: #ffffff;max-width: 300px;border: 1px solid #666666;}.cbadge .cbadge_inn{padding: 0px 10px;float:left;width:100%;} .cbadge .cleaf_image {float: left; background-image: url(https://cdn.jsdelivr.net/gh/vikasv15/carboncalculate/leaf.png); height: 70px;width: 56px;background-repeat: no-repeat; background-repeat: no-repeat; background-size: 100%;padding: 8px 0;background-position: center; } .cbadge #cresult {float: left;padding: 10px 5px;color: #666666;font-size: 0.9em !important;font-family:inherit;}.cbadge.dark { background-color: #000000;border: none; } .cbadge.dark .cleaf_image {float: left; }.cbadge.dark #cresult { color:#ffffff; font-family:inherit;}</style>",gwcb=gwcID("gwcb");if("fetch"in window){gwcb.insertAdjacentHTML("beforeEnd",gwcC),gwcb.insertAdjacentHTML("beforeEnd",'<div class="cbadge_inn"><div class="cleaf_image"></div><div id="cresult">Calculating CO2...</div></div>');let e=localStorage.getItem("gwcb_"+gwcU);const t=(new Date).getTime();if(e){const n=JSON.parse(e);renderResult(n),t-n.t>864e5&&newRequest(!1)}else newRequest()}
