(()=>{var p={BUILD_TIME:"2025-03-19T11:06:58.000Z",VERSION:"1.15.7",PROD:"1",REDIRECT_URL:"https://dash.immersivetranslate.com/auth-done/",PROD_API:"1",BETA:"0",userscript_domains:'["google.com","translate.googleapis.com","api-edge.cognitive.microsofttranslator.com","edge.microsoft.com","transmart.qq.com","translate.yandex.net","tmt.tencentcloudapi.com","www2.deepl.com","w.deepl.com","immersive-translate.owenyoung.com","generativelanguage.googleapis.com","chat.openai.com","bing.com","www.bing.com","open.volcengineapi.com","fanyi.baidu.com","api.fanyi.baidu.com","api.interpreter.caiyunai.com","api-free.deepl.com","api.deepl.com","api.openl.club","openapi.youdao.com","translate.volcengine.com","api.niutrans.com","immersivetranslate.com","test-api2.immersivetranslate.com","api2.immersivetranslate.com","config.immersivetranslate.com","app.immersivetranslate.com","dash.immersivetranslate.com","api.immersivetranslate.com","immersive-translate.deno.dev","www.googleapis.com","www.google-analytics.com","translate-pa.googleapis.com","api.cognitive.microsofttranslator.com","api.groq.com","api.x.ai","api.papago-chrome.com","api.openai.com","api.interpreter.caiyunai.com","api.cognitive.microsofttranslator.com","aidemo.youdao.com","openai.azure.com","mt.aliyuncs.com","subhub.weixin.so","api.anthropic.com","localhost","127.0.0.1","ai.immersivetranslate.com","test-ai.immersivetranslate.com","openrouter.ai","dashscope.aliyuncs.com","api.deepseek.com","aip.baidubce.com","ark.cn-beijing.volces.com","hunyuan.tencentcloudapi.com","public-beta-api.siliconflow.cn","api.siliconflow.cn","open.bigmodel.cn"]',MOCK:"0",DEBUG:"0",INSTALL_FROM:"chrome_zip"};function x(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():p}var C=x();function h(){return C.PROD==="1"}function E(){return C.PROD_API==="1"}var me=x().PROD==="1",pe=x().PROD!=="1";var r="immersiveTranslate";var s="immersive-translate",U="imt";var c="immersivetranslate.com",X=`https://config.${c}/`,xe=`https://app.${c}/`,l=h()||E()?`https://${c}/`:`https://test.${c}/`,S=`https://dash.${c}/`,he=h()||E()?`https://api2.${c}/`:`https://test-api2.${c}/`,Te=h()||E()?`https://ai.${c}/`:`https://test-ai.${c}/`,N=l+"accounts/login?from=plugin",D=l+"profile/",_=l+"auth/pricing/",f=l+"pricing/";var G=`https://github.com/${s}/${s}/`,ye=`https://s.${c}/`,Ee=`https://onboarding.${c}/`;var Se=r+"DeeplGlobalState",Ie=r+"BingGlobalState",be=r+"YandexGlobalState",Ae=r+"BaiduQianfanGlobalConfigStorageKey",Re=r+"SiliconCloudGlobalConfigStorageKey",ve=r+"ZhipuGlobalConfigStorageKey";var Pe=r+"GoogleAccessToken",Me=r+"AuthFlow",Oe=s+"-config-latest.json",Le=r+"AuthState",Ce=r+"IframeMessage",Ue=r+"WaitForRateLimit",Ne=r+"DocumentMessageAsk",g=r+"DocumentMessageTellThirdParty",De=r+"showError",Ge=r+"showModal",Fe=r+"showToast",F=r+"DocumentMessageThirdPartyTell",we=r+"DocumentMessageEventUpload",Be=r+"DocumentMessageTypeStopJsSDK",ke=r+"DocumentMessageHandler",$e=r+"DocumentSetFloatBallActive",We=`${r}Share`,He=`${r}ShowFloatBallGuide`,Ve=r+"DocumentMessageTempEnableSubtitleChanged",Je=`${r}ToggleMouseHoverTranslateDirectly`,qe=`${r}ReqDraft`,Ke=`${r}ResDraft`,je=`${r}Container`,Ye=`${r}SpecifiedContainer`;var Qe=`${r}PageTranslatedStatus`,ze=`${r}MangaTranslatedStatus`,Xe=`${r}PageUrlChanged`,Ze=`${r}ReceiveCommand`,et=r+"LastUseMouseHoverTime",tt=r+"LastUseInputTime",rt=r+"LastUseManualTranslatePageTime",ot=`${r}PopupReceiveMessage`,nt=r+"DocumentMessageEventTogglePopup",at=`${X}default_config.json`,st=`${r}Mark`,it=`${r}Root`,lt=`${r}Walked`,ct=`data-${s}-walked`,ut=`${r}Paragraph`,mt=`data-${s}-paragraph`,pt=`data-${s}-translation-element-mark`,gt=`${r}TranslationElementMark`,dt=`${r}TranslatedMark`,_t=`${s}-input-injected-css`,ft=`${r}LoadingId`,xt=`data-${s}-loading-id`,ht=`${r}ErrorId`,Tt=`data-${s}-error-id`,yt=`${r}AtomicBlockMark`,Et=`${r}ExcludeMark`,St=`data-${s}-exclude-mark`,It=`${r}StayOriginalMark`,bt=`${r}PreWhitespaceMark`,At=`${r}InlineMark`,Rt=`${r}BlockMark`,vt=`${r}Left`,Pt=`${r}Right`,Mt=`${r}Width`,Ot=`${r}Height`,Lt=`${r}Top`,Ct=`${r}FontSize`;var Ut=`${r}GlobalStyleMark`;var Nt=`${s}-target-wrapper`,Dt=`${s}-pdf-target-container`,Gt=`${s}-target-inner`,Ft=`${s}-source-wrapper`,wt=`${s}-target-translation-block-wrapper`,Bt=`${s}-root-translation-theme`,kt=`${r}RootTranslationTheme`,$t=`${s}-target-translation-vertical-block-wrapper`,Wt=`${s}-target-translation-pdf-block-wrapper`,Ht=`${s}-target-translation-pre-whitespace`,Vt=`${s}-target-translation-inline-wrapper`;var Jt=["https://immersive-translate.owenyoung.com/options/","https://immersive-translate.owenyoung.com/auth-done/",S,S+"auth-done/","http://localhost:8000/dist/userscript/options/","http://localhost:8000/auth-done/","http://192.168.50.9:8000/dist/userscript/options/","http://192.168.31.51:8000/dist/userscript/options/","http://192.168.1.72:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com","http://localhost:8000/options/","http://192.168.50.9:8000/options/","http://192.168.31.51:8000/options/","http://192.168.1.72:8000/options/"];var qt=l+"docs/communities/",Kt=G+"issues/1809",jt=G+"issues/1179",Yt={type:r+"ChildFrameToRootFrameIdentifier"};var Qt=h()?S+"#general":"http://localhost:8000/dist/userscript/options/#general";var Z=S+"#general",zt=l+"accounts/login?from=plugin&return_url="+encodeURIComponent(Z),Xt=N+"&utm_source=extension&utm_medium=extension&utm_campaign=error_modal",Zt=N+"&utm_source=extension&utm_medium=extension&utm_campaign=manga_guide",ee=l+"download/",te=l+"topup?type=open_ai&",re=l+"topup?type=deepl&",er=l+"topup?type=comics&",tr=f+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_more",rr=f+"?utm_source=extension&utm_medium=extension&utm_campaign=manga_guide",or=ee+"?utm_source=extension&utm_medium=extension&utm_campaign=options_nav",nr=f+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_footer",ar=f+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal",sr=f+"?utm_source=extension&utm_medium=extension&utm_campaign=float_ball",ir=D+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal",lr=_+"?utm_source=extension&utm_medium=extension&utm_campaign=subtitle_download",cr=te+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",ur=re+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",mr=l+"topup?utm_source=extension&utm_medium=extension&utm_campaign=error_modal",pr=f+"?utm_source=extension&utm_medium=extension&utm_campaign=option_sync_config",gr=D+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal&upgradeFromTrial=true",dr=_+"?utm_source=extension&utm_medium=extension&utm_campaign=manga_intro",_r=_+"?utm_source=extension&utm_medium=extension&utm_campaign=image_intro",fr=_+"?utm_source=extension&utm_medium=extension&utm_campaign=image_client",xr=_+"?utm_source=extension&utm_medium=extension&utm_campaign=yt_ai_asr",hr=_+"?utm_source=extension&utm_medium=extension&utm_campaign=",Tr=l+"docs/usage/",yr=l+"docs/communities/",T=x().TRANSLATE_FILE_URL,Er=T+"?utm_source=extension&utm_medium=extension&utm_campaign=options_nav",Sr=T+"?utm_source=extension&utm_medium=extension&utm_campaign=float_ball",Ir=`${T}download-subtitle/`,br=`${T}pdf-pro/`,Ar=`${T}text/`;var Rr=`https://analytics.${c}/collect`,vr=`https://analytics.${c}/internal`,Pr=`${l}activities/components/image-pro`;var Mr=50*1e4,Or=`[${U}-ctx-divider]`,Lr=`${U}_context_preview`;var oe="";function ne(){return oe||globalThis.navigator.userAgent}function w(){let t=ne();return t.includes("ImtFxAndroid")||t.includes("ImtFxAOS")}var b=class{bridge;waitForBridge(e=1e4){return w()?globalThis.WebViewJavascriptBridge?(this.bridge=globalThis.WebViewJavascriptBridge,Promise.resolve(!0)):new Promise(o=>{let n=Date.now(),a=()=>{if(globalThis.WebViewJavascriptBridge)return this.bridge=globalThis.WebViewJavascriptBridge,o(!0);if(Date.now()-n>e)return o(!1);requestAnimationFrame(a)};a()}):Promise.resolve(!1)}registerHandler(e,o){if(!this.bridge){console.error("Bridge not initialized");return}this.bridge.registerHandler(e,o)}callHandler(e,o,n){if(!this.bridge){console.error("Bridge not initialized");return}this.bridge.doSend({type:e,...o},n)}},u=new b;var A=class{constructor(){}getRandomId(){return(new Date().getTime()+Math.random())*Math.random()}sendAsyncMessages({type:e,data:o}){return new Promise(n=>{let a=this.getRandomId(),i=this.handleMessage(e,d=>{d.id===a&&(i(),n(d.payload))});this.sendMessages({type:e,id:a,data:o})})}sendMessages(e){globalThis.document.dispatchEvent(new CustomEvent(F,{detail:JSON.stringify({id:e.id||this.getRandomId(),type:e.type,data:e.data})}))}handleMessages(e){let o=n=>{let a=n;if(a.detail)try{let i=JSON.parse(a.detail);e(i)}catch(i){console.error(i)}};return globalThis.document.addEventListener(g,o),()=>{globalThis.document.removeEventListener(g,o)}}handleMessage(e,o){return this.handleMessages(n=>{n.type===e&&o(n)})}},ae=new A,se={get(t,e,o){return e in t?(...n)=>{let a=t[e];return typeof a=="function"?a.apply(t,n):Reflect.get(t,e,o)}:n=>{if(e.startsWith("getAsync")||e.endsWith("Async"))return t.sendAsyncMessages({type:e,data:n});t.sendMessages({type:e,data:n})}}},m=new Proxy(ae,se);function B(t,e){let o="right: unset; bottom: unset; left: 50%; top: 0; transform: translateX(-50%);";globalThis.innerWidth>450&&(o="left: unset; top: 0; right: 20px; bottom: unset; transform: none;"),m.togglePopup({style:t.style||o,isSheet:t.isSheet||!1,overlayStyle:t.overlayStyle||"background-color: transparent;"}),e({result:!0})}function k(t,e){let o="right: unset; bottom: unset; left: 50%; top: 0; transform: translateX(-50%);";globalThis.innerWidth>450&&(o="left: unset; top: 0; right: 20px; bottom: unset; transform: none;"),m.openPopup({style:t.style||o,isSheet:t.isSheet||!1,overlayStyle:t.overlayStyle||"background-color: transparent;"}),e({result:!0})}function $(t,e){m.closePopup(),e({result:!0})}function W(t,e){m.translatePage(),e({result:!0})}function H(t,e){m.restorePage(),e({result:!0})}async function V(t,e){let o=await m.getPageStatusAsync();e({result:!0,status:o,pageTranslated:o=="Translated"})}function J(t,e){m.openImageTranslationFeedback(),e({result:!0})}var I=[];function q(t,e){try{console.log("translateImage",JSON.stringify(t));let{imageUrl:o}=t;if(!v(o))return e({result:!1,errMsg:"\u56FE\u7247\u4E0D\u5B58\u5728"});P({originalUrl:o,triggerResultCallback:e}),m.triggerTranslateImageBySrc(o)}catch(o){console.error("translateImage error:",o),e({result:!1,errMsg:"\u7FFB\u8BD1\u8FC7\u7A0B\u53D1\u751F\u9519\u8BEF"})}}function K(t,e){let{imageId:o,imageUrl:n}=t;console.log("restoreImage",JSON.stringify(t));let a="";if(n){let i=v(n);i||e({result:!1,errMsg:"\u627E\u4E0D\u5230\u539F\u56FE"}),a=i?.getAttribute("bak_src")||""}else{let i=y({urlHash:o});if(!i){e({result:!1,errMsg:"\u627E\u4E0D\u5230\u7FFB\u8BD1\u540E\u7684\u56FE"});return}if(!v(i.originalUrl)){e({result:!1,errMsg:"\u627E\u4E0D\u5230\u539F\u56FE"});return}a=i.originalUrl}console.log("restore_image originalUrl",a),m.cleanTranslateImageBySrc(a)}function j(t){console.log("triggerClientTranslateImage",JSON.stringify(t));let{urlHash:e,imgData:o,originalUrl:n}=t,a=y({originalUrl:n});a||(a={originalUrl:n,urlHash:e}),a.urlHash=e,P(a),console.log("trigger urlHash",e,"base64",o),R(e,{state:"extension_uploading",errorMsg:""}),u.callHandler("imageTextRecognition",{imageId:e,imageUrl:n,imageData:o},function(i){let{imageId:d,boxes:M,result:O,errMsg:L}=i;O&&M&&R(d,{state:"saved",errorMsg:"",result:{ocrTime:0,boxesWithText:M}}),!O&&L&&R(d,{state:"error",errorMsg:L})})}function Y(t){let{urlHash:e}=t;console.log("queryImageTranslateState",JSON.stringify(t));let o=y({urlHash:e});if(!o){console.log("queryImageTranslateState item not found",e);return}let n=o.imgState;document.dispatchEvent(new CustomEvent(g+"Result",{detail:JSON.stringify({method:"queryImageTranslateState",data:{urlHash:e,state:n}})}))}function Q(t){console.log("notifyClientImageTranslatedResult",JSON.stringify(t));let{imgHash:e,originalUrl:o,ok:n,errMsg:a}=t,i=y({originalUrl:o});if(!i){console.log("notifyClientImageTranslatedResult item not found",e);return}P(i),i.triggerResultCallback?.({result:n,errMsg:a})}function P(t){let e=ie(t);if(e!==-1){I[e]=t;return}I.push(t)}function R(t,e){let o=y({urlHash:t});o&&(o.imgState=e)}function ie(t){return I.findIndex(e=>t.urlHash===e.urlHash||t.originalUrl===e.originalUrl)}function y(t){return I.find(e=>t.urlHash===e.urlHash||t.originalUrl===e.originalUrl)}function v(t){console.log("findImageElementByUrl 0",t);let e=document.querySelector(`img[src="${t}"]`)||document.querySelector(`img[bak_src="${t}"]`);if(console.log("findImageElementByUrl 1"),e)return e;console.log("findImageElementByUrl 2");let o=document.querySelector(`[srcset*="${t}"]`)||document.querySelector(`[bak_srcset*="${t}"]`);return o instanceof HTMLSourceElement?o.parentElement?.querySelector("img"):(console.log("findImageElementByUrl 3"),o instanceof HTMLImageElement?o:(console.log("findImageElementByUrl 4"),o instanceof HTMLPictureElement?o.querySelector("img"):(console.log("findImageElementByUrl 5"),null)))}async function le(){try{if(!await u.waitForBridge())return;u.registerHandler("translateImage",q),u.registerHandler("restoreImage",K),u.registerHandler("translatePage",W),u.registerHandler("restorePage",H),u.registerHandler("getPageStatus",V),u.registerHandler("togglePopup",B),u.registerHandler("openPopup",k),u.registerHandler("closePopup",$),u.registerHandler("openImageTranslationFeedback",J)}catch(t){console.error("\u521D\u59CB\u5316 WebViewJavascriptBridge \u5931\u8D25:",t)}}var ce=t=>{try{let{method:e,data:o}=JSON.parse(t.detail);e==="triggerClientTranslateImage"?j(o):e==="queryImageTranslateState"?Y(o):e=="notifyClientImageTranslatedResult"&&Q(o)}catch(e){console.error("handleEvent error:",e)}};le();document.addEventListener(g,ce);})();
