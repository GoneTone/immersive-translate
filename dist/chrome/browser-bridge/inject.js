(()=>{var m={BUILD_TIME:"2025-04-16T09:49:52.000Z",VERSION:"1.16.2",PROD:"1",REDIRECT_URL:"https://dash.immersivetranslate.com/auth-done/",PROD_API:"1",BETA:"0",userscript_domains:'["google.com","translate.googleapis.com","api-edge.cognitive.microsofttranslator.com","edge.microsoft.com","transmart.qq.com","translate.yandex.net","tmt.tencentcloudapi.com","www2.deepl.com","w.deepl.com","immersive-translate.owenyoung.com","generativelanguage.googleapis.com","chat.openai.com","bing.com","www.bing.com","open.volcengineapi.com","fanyi.baidu.com","api.fanyi.baidu.com","api.interpreter.caiyunai.com","api-free.deepl.com","api.deepl.com","api.openl.club","openapi.youdao.com","translate.volcengine.com","api.niutrans.com","immersivetranslate.com","test-api2.immersivetranslate.com","api2.immersivetranslate.com","config.immersivetranslate.com","app.immersivetranslate.com","dash.immersivetranslate.com","api.immersivetranslate.com","immersive-translate.deno.dev","www.googleapis.com","www.google-analytics.com","translate-pa.googleapis.com","api.cognitive.microsofttranslator.com","api.groq.com","api.x.ai","api.papago-chrome.com","api.openai.com","api.interpreter.caiyunai.com","api.cognitive.microsofttranslator.com","aidemo.youdao.com","dict.youdao.com","openai.azure.com","mt.aliyuncs.com","subhub.weixin.so","api.anthropic.com","localhost","127.0.0.1","ai.immersivetranslate.com","test-ai.immersivetranslate.com","openrouter.ai","dashscope.aliyuncs.com","api.deepseek.com","aip.baidubce.com","ark.cn-beijing.volces.com","hunyuan.tencentcloudapi.com","public-beta-api.siliconflow.cn","api.siliconflow.cn","open.bigmodel.cn"]',MOCK:"0",DEBUG:"0",INSTALL_FROM:"chrome_zip"};var ne="";function se(){return ne||globalThis.navigator.userAgent}function N(){let t=se();return t.includes("ImtFxAndroid")||t.includes("ImtFxAOS")}var R=class{bridge;waitForBridge(e=1e4){return N()?globalThis.WebViewJavascriptBridge?(this.bridge=globalThis.WebViewJavascriptBridge,Promise.resolve(!0)):new Promise(r=>{let n=Date.now(),s=()=>{if(globalThis.WebViewJavascriptBridge)return this.bridge=globalThis.WebViewJavascriptBridge,r(!0);if(Date.now()-n>e)return r(!1);requestAnimationFrame(s)};s()}):Promise.resolve(!1)}registerHandler(e,r){if(!this.bridge){console.error("Bridge not initialized");return}this.bridge.registerHandler(e,r)}callHandler(e,r,n){if(!this.bridge){console.error("Bridge not initialized");return}this.bridge.doSend({type:e,...r},n)}},c=new R;function h(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():m}var M=h();function x(){return M.PROD==="1"}function S(){return M.PROD_API==="1"}function D(){if(M.IMMERSIVE_TRANSLATE_SAFARI==="1")return!0;if(typeof globalThis.immersiveTranslateBrowserAPI<"u"&&globalThis.immersiveTranslateBrowserAPI.runtime&&globalThis.immersiveTranslateBrowserAPI.runtime.getManifest){let e=globalThis.immersiveTranslateBrowserAPI.runtime.getManifest();return!!(e&&e._isSafari)}else return!1}var Ae=h().PROD==="1",Re=h().PROD!=="1";var o="immersiveTranslate";var i="immersive-translate",B="imt",ae="immersivetranslate";var u="immersivetranslate.com",ie=`https://config.${u}/`,Ce=`https://app.${u}/`,l=x()||S()?`https://${u}/`:`https://test.${u}/`,I=`https://dash.${u}/`,Le=x()||S()?`https://api2.${u}/`:`https://test-api2.${u}/`,Ue=x()||S()?`https://ai.${u}/`:`https://test-ai.${u}/`,we=`https://assets.${ae}.cn/`,G=l+"accounts/login?from=plugin",F=l+"profile/",d=l+"auth/pricing/",f=l+"pricing/";D()&&(d=l+"accounts/safari-iap/",f=l+"accounts/safari-iap/");var k=`https://github.com/${i}/${i}/`,Ne=`https://s.${u}/`,De=`https://onboarding.${u}/`;var Be=o+"DeeplGlobalState",Ge=o+"BingGlobalState",Fe=o+"YandexGlobalState",ke=o+"BaiduQianfanGlobalConfigStorageKey",$e=o+"SiliconCloudGlobalConfigStorageKey",He=o+"ZhipuGlobalConfigStorageKey";var We=o+"GoogleAccessToken",Je=o+"AuthFlow",Ve=i+"-config-latest.json",qe=o+"AuthState",Ke=o+"IframeMessage",je=o+"WaitForRateLimit",Ye=o+"DocumentMessageAsk",v=o+"DocumentMessageTellThirdParty",Qe=o+"showError",ze=o+"showModal",Xe=o+"showToast",$=o+"DocumentMessageThirdPartyTell",Ze=o+"DocumentMessageEventUpload",et=o+"DocumentMessageTypeStopJsSDK",tt=o+"DocumentMessageHandler",rt=o+"DocumentSetFloatBallActive",ot=`${o}Share`,nt=`${o}ShowFloatBallGuide`,st=o+"DocumentMessageTempEnableSubtitleChanged",at=o+"DocumentMessageUpdateQuickButtonAiSubtitle",it=`${o}ToggleMouseHoverTranslateDirectly`,lt=`${o}ReqDraft`,ct=`${o}ResDraft`,ut=`${o}Container`,mt=`${o}SpecifiedContainer`;var gt=`${o}PageTranslatedStatus`,pt=`${o}MangaTranslatedStatus`,dt=`${o}PageUrlChanged`,ft=`${o}ReceiveCommand`,_t=o+"LastUseMouseHoverTime",ht=o+"LastUseInputTime",xt=o+"LastUseManualTranslatePageTime",Tt=`${o}PopupReceiveMessage`,yt=o+"DocumentMessageEventTogglePopup",Et=`${ie}default_config.json`,St=`${o}Mark`,It=`${o}Root`,bt=`${o}Walked`,At=`data-${i}-walked`,Rt=`${o}Paragraph`,Mt=`data-${i}-paragraph`,vt=`data-${i}-translation-element-mark`,Pt=`${o}TranslationElementMark`,Ot=`${o}TranslatedMark`,Ct=`${i}-input-injected-css`,Lt=`${o}LoadingId`,Ut=`data-${i}-loading-id`,wt=`${o}ErrorId`,Nt=`data-${i}-error-id`,Dt=`${o}AtomicBlockMark`,Bt=`${o}ExcludeMark`,Gt=`data-${i}-exclude-mark`,Ft=`${o}StayOriginalMark`,kt=`${o}PreWhitespaceMark`,$t=`${o}InlineMark`,Ht=`${o}BlockMark`,Wt=`${o}Left`,Jt=`${o}Right`,Vt=`${o}Width`,qt=`${o}Height`,Kt=`${o}Top`,jt=`${o}FontSize`;var Yt=`${o}GlobalStyleMark`;var Qt=`${i}-target-wrapper`,zt=`${i}-pdf-target-container`,Xt=`${i}-target-inner`,Zt=`${i}-source-wrapper`,er=`${i}-target-translation-block-wrapper`,tr=`${i}-root-translation-theme`,rr=`${o}RootTranslationTheme`,or=`${i}-target-translation-vertical-block-wrapper`,nr=`${i}-target-translation-pdf-block-wrapper`,sr=`${i}-target-translation-pre-whitespace`,ar=`${i}-target-translation-inline-wrapper`;var ir=["https://immersive-translate.owenyoung.com/options/","https://immersive-translate.owenyoung.com/auth-done/",I,I+"auth-done/","http://localhost:8000/dist/userscript/options/","http://localhost:8000/auth-done/","http://192.168.50.9:8000/dist/userscript/options/","http://192.168.31.51:8000/dist/userscript/options/","http://192.168.1.72:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com","http://localhost:8000/options/","http://192.168.50.9:8000/options/","http://192.168.31.51:8000/options/","http://192.168.1.72:8000/options/"];var lr=l+"docs/communities/",cr=k+"issues/1809",ur=k+"issues/1179",mr={type:o+"ChildFrameToRootFrameIdentifier"};var gr=x()?I+"#general":"http://localhost:8000/dist/userscript/options/#general";var le=I+"#general",pr=l+"accounts/login?from=plugin&return_url="+encodeURIComponent(le),dr=G+"&utm_source=extension&utm_medium=extension&utm_campaign=error_modal",fr=G+"&utm_source=extension&utm_medium=extension&utm_campaign=manga_guide",ce=l+"download/",ue=l+"topup?type=open_ai&",me=l+"topup?type=deepl&",_r=l+"topup?type=comics&",hr=f+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_more",xr=f+"?utm_source=extension&utm_medium=extension&utm_campaign=manga_guide",Tr=ce+"?utm_source=extension&utm_medium=extension&utm_campaign=options_nav",yr=f+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_footer",Er=f+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal",Sr=f+"?utm_source=extension&utm_medium=extension&utm_campaign=float_ball",Ir=F+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal",br=d+"?utm_source=extension&utm_medium=extension&utm_campaign=subtitle_download",Ar=ue+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",Rr=me+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",Mr=l+"topup?utm_source=extension&utm_medium=extension&utm_campaign=error_modal",vr=f+"?utm_source=extension&utm_medium=extension&utm_campaign=option_sync_config",Pr=F+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal&upgradeFromTrial=true",Or=d+"?utm_source=extension&utm_medium=extension&utm_campaign=manga_intro",Cr=d+"?utm_source=extension&utm_medium=extension&utm_campaign=image_intro",Lr=d+"?utm_source=extension&utm_medium=extension&utm_campaign=image_client",Ur=d+"?utm_source=extension&utm_medium=extension&utm_campaign=yt_ai_asr",wr=d+"?utm_source=extension&utm_medium=extension&utm_campaign=",Nr=l+"docs/usage/",Dr=l+"docs/communities/",T=h().TRANSLATE_FILE_URL,Br=T+"?utm_source=extension&utm_medium=extension&utm_campaign=options_nav",Gr=T+"?utm_source=extension&utm_medium=extension&utm_campaign=float_ball",Fr=`${T}download-subtitle/`,kr=`${T}pdf-pro/`,$r=`${T}text/`;var Hr=l+"docs/usage/";var Wr=`https://analytics.${u}/collect`,Jr=`https://analytics.${u}/internal`,Vr=`${l}activities/components/image-pro`;var qr=50*1e4,Kr=`[${B}-ctx-divider]`,jr=`${B}_context_preview`;var P=class{constructor(){}getRandomId(){return(new Date().getTime()+Math.random())*Math.random()}sendAsyncMessages({type:e,data:r}){return new Promise(n=>{let s=this.getRandomId(),a=this.handleMessage(e,p=>{p.id===s&&(a(),n(p.payload))});this.sendMessages({type:e,id:s,data:r})})}sendMessages(e){globalThis.document.dispatchEvent(new CustomEvent($,{detail:JSON.stringify({id:e.id||this.getRandomId(),type:e.type,data:e.data})}))}handleMessages(e){let r=n=>{let s=n;if(s.detail)try{let a=JSON.parse(s.detail);e(a)}catch(a){console.error(a)}};return globalThis.document.addEventListener(v,r),()=>{globalThis.document.removeEventListener(v,r)}}handleMessage(e,r){return this.handleMessages(n=>{n.type===e&&r(n)})}},ge=new P,pe={get(t,e,r){return e in t?(...n)=>{let s=t[e];return typeof s=="function"?s.apply(t,n):Reflect.get(t,e,r)}:n=>{if(e.startsWith("getAsync")||e.endsWith("Async"))return t.sendAsyncMessages({type:e,data:n});t.sendMessages({type:e,data:n})}}},g=new Proxy(ge,pe);function H(t,e){let r="right: unset; bottom: unset; left: 50%; top: 0; transform: translateX(-50%);";globalThis.innerWidth>450&&(r="left: unset; top: 0; right: 20px; bottom: unset; transform: none;"),g.togglePopup({style:t.style||r,isSheet:t.isSheet||!1,overlayStyle:t.overlayStyle||"background-color: transparent;"}),e({result:!0})}function W(t,e){let r="right: unset; bottom: unset; left: 50%; top: 0; transform: translateX(-50%);";globalThis.innerWidth>450&&(r="left: unset; top: 0; right: 20px; bottom: unset; transform: none;"),g.openPopup({style:t.style||r,isSheet:t.isSheet||!1,overlayStyle:t.overlayStyle||"background-color: transparent;"}),e({result:!0})}function J(t,e){g.closePopup(),e({result:!0})}function V(t,e){g.translatePage(),e({result:!0})}function q(t,e){g.restorePage(),e({result:!0})}async function K(t,e){let r=await g.getPageStatusAsync();e({result:!0,status:r,pageTranslated:r=="Translated"})}function j(t,e){g.openImageTranslationFeedback(),e({result:!0})}var b=[];function Y(t,e){try{console.log("translateImage",JSON.stringify(t));let{imageUrl:r}=t;if(!C(r))return e({result:!1,errMsg:"\u56FE\u7247\u4E0D\u5B58\u5728"});L({originalUrl:r,triggerResultCallback:e}),g.triggerTranslateImageBySrc(r)}catch(r){console.error("translateImage error:",r),e({result:!1,errMsg:"\u7FFB\u8BD1\u8FC7\u7A0B\u53D1\u751F\u9519\u8BEF"})}}function Q(t,e){let{imageId:r,imageUrl:n}=t;console.log("restoreImage",JSON.stringify(t));let s="";if(n){let a=C(n);a||e({result:!1,errMsg:"\u627E\u4E0D\u5230\u539F\u56FE"}),s=a?.getAttribute("bak_src")||""}else{let a=y({urlHash:r});if(!a){e({result:!1,errMsg:"\u627E\u4E0D\u5230\u7FFB\u8BD1\u540E\u7684\u56FE"});return}if(!C(a.originalUrl)){e({result:!1,errMsg:"\u627E\u4E0D\u5230\u539F\u56FE"});return}s=a.originalUrl}console.log("restore_image originalUrl",s),g.cleanTranslateImageBySrc(s)}function z(t){console.log("triggerClientTranslateImage",JSON.stringify(t));let{urlHash:e,imgData:r,originalUrl:n}=t,s=y({originalUrl:n});s||(s={originalUrl:n,urlHash:e}),s.urlHash=e,L(s),console.log("trigger urlHash",e,"base64",r),O(e,{state:"extension_uploading",errorMsg:""}),c.callHandler("imageTextRecognition",{imageId:e,imageUrl:n,imageData:r},function(a){let{imageId:p,boxes:_,result:U,errMsg:w}=a;U&&_&&O(p,{state:"saved",errorMsg:"",result:{ocrTime:0,boxesWithText:_}}),!U&&w&&O(p,{state:"error",errorMsg:w})})}function X(t){let{urlHash:e}=t;console.log("queryImageTranslateState",JSON.stringify(t));let r=y({urlHash:e});if(!r){console.log("queryImageTranslateState item not found",e);return}let n=r.imgState;return{urlHash:e,state:n}}function Z(t){console.log("notifyClientImageTranslatedResult",JSON.stringify(t));let{imgHash:e,originalUrl:r,ok:n,errMsg:s}=t,a=y({originalUrl:r});if(!a){console.log("notifyClientImageTranslatedResult item not found",e);return}L(a),a.triggerResultCallback?.({result:n,errMsg:s})}function L(t){let e=de(t);if(e!==-1){b[e]=t;return}b.push(t)}function O(t,e){let r=y({urlHash:t});r&&(r.imgState=e)}function de(t){return b.findIndex(e=>t.urlHash===e.urlHash||t.originalUrl===e.originalUrl)}function y(t){return b.find(e=>t.urlHash===e.urlHash||t.originalUrl===e.originalUrl)}function C(t){console.log("findImageElementByUrl 0",t);let e=document.querySelector(`img[src="${t}"]`)||document.querySelector(`img[bak_src="${t}"]`);if(console.log("findImageElementByUrl 1"),e)return e;console.log("findImageElementByUrl 2");let r=document.querySelector(`[srcset*="${t}"]`)||document.querySelector(`[bak_srcset*="${t}"]`);return r instanceof HTMLSourceElement?r.parentElement?.querySelector("img"):(console.log("findImageElementByUrl 3"),r instanceof HTMLImageElement?r:(console.log("findImageElementByUrl 4"),r instanceof HTMLPictureElement?r.querySelector("img"):(console.log("findImageElementByUrl 5"),null)))}var E=class{from;to;constructor(e){this.from=e.from,this.to=e.to}sendMessages(e){let r={type:e.type,data:e.data,id:e.id||this.getRandomId(),isAsync:!1};globalThis.document.dispatchEvent(new CustomEvent(this.to,{detail:JSON.stringify(r)}))}getRandomId(){return Math.random()*1e17+new Date().getTime()}sendAsyncMessages({type:e,data:r}){return new Promise(n=>{let s=this.handleMessages(_=>{_.id===a&&(n(_.data),s())}),a=this.getRandomId(),p={type:e,data:r,id:a,isAsync:!0};globalThis.document.dispatchEvent(new CustomEvent(this.to,{detail:JSON.stringify(p)}))})}handleMessageOnce(e){return new Promise(r=>{let n=this.handleMessage(e,s=>{r(s.data),n()})})}handleMessage(e,r){return this.handleMessages(n=>{n.type===e&&r(n)})}handleMessages(e){let r=n=>{let a=JSON.parse(n.detail||"{}");a&&typeof a=="object"&&e(a)};return globalThis.document.addEventListener(this.from,r),()=>{globalThis.document.removeEventListener(this.from,r)}}},ee={get(t,e,r){return e in t?(...n)=>{let s=t[e];return typeof s=="function"?s.apply(t,n):Reflect.get(t,e,r)}:n=>t.sendAsyncMessages({type:e,data:n})}};var te="imt-browser-bridge-event-to-content-script",re="imt-browser-bridge-event-to-inject",fe=new E({from:te,to:re}),A=new E({from:re,to:te}),io=new Proxy(fe,ee);async function _e(){try{if(!await c.waitForBridge())return;c.registerHandler("translateImage",Y),c.registerHandler("restoreImage",Q),c.registerHandler("translatePage",V),c.registerHandler("restorePage",q),c.registerHandler("getPageStatus",K),c.registerHandler("togglePopup",H),c.registerHandler("openPopup",W),c.registerHandler("closePopup",J),c.registerHandler("openImageTranslationFeedback",j),he(),A.sendMessages({type:"bridgeReady"})}catch(t){console.error("\u521D\u59CB\u5316 WebViewJavascriptBridge \u5931\u8D25:",t)}}function he(){A.handleMessages(async t=>{try{let{type:e,data:r}=t,n=null;if(e==="triggerClientTranslateImage")z(r);else if(e==="queryImageTranslateState")n=X(r);else if(e==="notifyClientImageTranslatedResult")Z(r);else if(e==="getUserInfo")n=await xe();else return;A.sendMessages({type:e,id:t.id,data:n})}catch(e){console.error("browser-bridge handleMessage error:",e)}})}function xe(){return new Promise(t=>{c.callHandler("getUserInfo",{},e=>{e.data?t(e.data):t(null)})})}_e();})();
