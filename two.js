(this.webpackJsonpcodepelajarreact=this.webpackJsonpcodepelajarreact||[]).push([[0],{1:function(e,t,a){"use strict";var n=a(10),r=a.n(n);a.d(t,"React",(function(){return r.a}));a(18);var c=a(15),o=a.n(c);a.d(t,"moment",(function(){return o.a}));a(39);var i=a(20),s=a.n(i);a.d(t,"axios",(function(){return s.a}));var l=a(29),m=a.n(l);a.d(t,"cx",(function(){return m.a})),a.o(n,"IconContext")&&a.d(t,"IconContext",(function(){return n.IconContext}));var u=a(0);a.d(t,"IconContext",(function(){return u.b}))},30:function(e){e.exports=JSON.parse("{}")},32:function(e,t,a){e.exports=a(60)},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n),c=a(31),o=a.n(c),i=a(1),s=a(3),l=a(4),m=a(6),u=a(5),d=a(7),g=a(8),p=function(e){var t=e.className,a=e.style,n=e.children,r=Object(g.a)(e,["className","style","children"]);return i.React.createElement("section",Object.assign({className:t,style:a},r),n)},h=function(e){var t=e.className,a=e.style,n=e.children,r=Object(g.a)(e,["className","style","children"]);return i.React.createElement("div",Object.assign({className:"container ".concat(t||""),style:a},r),n)},f=function(e){var t=e.className,a=e.style,n=e.children,r=e.tag,c=Object(g.a)(e,["className","style","children","tag"]),o=r;return i.React.createElement(o,Object.assign({className:t,style:a},c),n)};f.defaultProps={tag:"div"};var b=f,y=function(e){var t=e.className,a=e.style,n=e.children,r=e.tag,c=Object(g.a)(e,["className","style","children","tag"]),o=r||"p";return i.React.createElement(o,Object.assign({className:t,style:a},c),n)},v=function(e){var t=e.href,a=e.title,n=e.target,r=e.children,c=e.className,o=e.style,s=Object(g.a)(e,["href","title","target","children","className","style"]);return i.React.createElement("a",Object.assign({href:t,title:a,target:n},s,{className:c,style:o}),r)};v.defaultProps={href:"#"};var E=v,O=a(9);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w=function(e){var t=e.source,a=e.width,n=e.height,r=e.resizeMode,c=e.backgroundImage,o=e.title,s=e.alt,l=e.className,m=e.style,u=e.children,d=Object(g.a)(e,["source","width","height","resizeMode","backgroundImage","title","alt","className","style","children"]);return c?i.React.createElement("div",Object.assign({title:o,alt:s,className:l,style:_({},t&&{backgroundImage:"url(".concat(t,")")},{},a&&a,{},n&&n,{},r&&{backgroundSize:r},{},m)},d),u):i.React.createElement("img",Object.assign({src:t,alt:s,title:o,className:l,style:m,width:a,height:n},d))};w.defaultProps={backgroundImage:!1,alt:"image",title:"image"};var j=w,k=function(e){var t=e.style,a=e.className,n=e.children,r=Object(g.a)(e,["style","className","children"]);return i.React.createElement("div",Object.assign({style:t,className:"a-skeleton ".concat(a||"")},r),n)},N=function(e){var t,a=e.onPress,n=e.className,r=e.style,c=e.anchor,o=e.href,s=e.title,l=e.children,m=e.target,u=e.variant,d=e.outline,p=e.block,h=e.radius,f=e.small,b=e.large,y=e.disabled,v=Object(g.a)(e,["onPress","className","style","anchor","href","title","children","target","variant","outline","block","radius","small","large","disabled"]),R=Object(i.cx)("a-button__element",n,(t={},Object(O.a)(t,"a-button__element--".concat(u),u),Object(O.a)(t,"a-button__element--outline",d),Object(O.a)(t,"a-button__element--block",p),Object(O.a)(t,"a-button__element--radius",h),Object(O.a)(t,"a-button__element--small",f),Object(O.a)(t,"a-button__element--large",b),Object(O.a)(t,"a-button__element--disabled",y),t));return c?i.React.createElement(E,Object.assign({href:y?"javascript:void(0)":o,title:s,style:r,className:R,onClick:a,target:m},v),l):i.React.createElement("button",Object.assign({disabled:y,type:"button",className:R,onClick:a},v,{style:r}),l)};N.defaultProps={anchor:!1,variant:"default"};var P=N,L=a(14),S=function(e){var t=e.name,a=Object(g.a)(e,["name"]);switch(t){case"facebook":return i.React.createElement(L.a,a);case"twitter":return i.React.createElement(L.f,a);case"instagram":return i.React.createElement(L.d,a);case"github":return i.React.createElement(L.b,a);case"linkedin":return i.React.createElement(L.e,a);case"youtube":return i.React.createElement(L.g,a);case"home":return i.React.createElement(L.c,a);default:return null}},x=function(e){var t=e.data,a=e.imageSize,n=e.showImage;return i.React.createElement(b,{className:"m-author-meta__wrapper"},n&&i.React.createElement(j,{className:"m-author-meta__image",source:t.image,title:t.name,alt:t.name,style:{height:a,width:a}}),i.React.createElement(y,{tag:"span",className:"m-author-meta__title"},t.name))};x.defaultProps={showImage:!0};var B=x,I=a(2),T=a.n(I),C=(a(30),"".concat(T.a.get(window,"__BLOG_ID__","151667190044361328"))),A=function(e){return document.getElementById(e)},D=-1!==window.location.origin.indexOf("localhost"),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return"".concat(t||"/search/label/").concat(e)},q=function(e){switch(e){case"footer":return T.a.get(window,"__FOOTER_SOCIAL_ICON__",[]);default:return[]}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=T.a.get(window,"__CODEPELAJAR_CONFIG__.defaultImage","https://1.bp.blogspot.com/-QYP55lDT3y8/XdEL28HRsfI/AAAAAAAACqw/My15c96Og8022Jc6HVfPFf1gBku8PmA_wCLcBGAsYHQ/s1600/no-image-codepelajar.png");return e||t},F=function(e){var t=T.a.get(e,"feed.entry[0]",null);if(!t)return t;var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400,n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=/\/s[0-9]+\-c/g,c="/w".concat(t,"-h").concat(a,"-").concat(n?"c":"");return e.replace(r,c)}(T.a.get(t,"media$thumbnail.url",""),640,480);return{title:T.a.get(t,"title.$t",""),description:T.a.get(t,"summary.$t",""),image:a,url:T.a.get(t,"link[".concat(t.link.length-1,"].href"),"")}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=T.a.get(e,"image.url",""),a=T.a.get(e,"displayName",""),n=T.a.get(e,"id","");return{id:n,name:a,image:t}},z=function(e){try{return JSON.parse(e)}catch(t){throw t}},G=function(e){var t=e.data;return t&&!T.a.isEmpty(t)&&T.a.isArray(t)?i.React.createElement(b,{className:"m-post-label__wrapper"},t.map((function(e,t){return 0===t?i.React.createElement(E,{href:M(e,"/search?q="),key:t,className:"m-post-label__item"},e):null}))):null},K=function(e){var t=e.title,a=e.author,n=e.image,r=e.url,c=e.label;return i.React.createElement(b,{className:"m-post-card__wrapper"},i.React.createElement(b,{className:"m-post-card__header"},i.React.createElement(E,{href:r,title:t},i.React.createElement(j,{className:"m-post-card__image",source:n,backgroundImage:!0,resizeMode:"cover"})),i.React.createElement(b,{className:"m-post-card__label-holder"},i.React.createElement(G,{data:c}))),i.React.createElement(b,{className:"m-post-card__body"},i.React.createElement(E,{href:r,title:t},i.React.createElement(y,{className:"m-post-card__title",tag:"h2"},t))),i.React.createElement(b,{className:"m-post-card__footer"},i.React.createElement(b,{className:"m-post-card__meta"},i.React.createElement(B,{showImage:""!==n,data:a}))))},W=function(e){var t=e.title,a=e.image,n=e.url,r=e.showImage;return i.React.createElement(b,{className:"m-post-list__wrapper"},r&&i.React.createElement(E,{href:n,title:t},i.React.createElement(j,{className:"m-post-list__image",backgroundImage:!0,resizeMode:"cover",source:a,title:t,alt:t})),i.React.createElement(b,{className:"m-post-list__content"},i.React.createElement(E,{href:n,title:t},i.React.createElement(y,{tag:"h2",className:"m-post-list__title"},t))))};W.defaultProps={showImage:!0};var J=W,Y=a(11),Q=a.n(Y),V=a(13),$=window.__CODEPELAJAR_CONFIG__,X={url:{api:"https://www.googleapis.com/blogger/v3",feed:"https://www.cancuters.com/feeds/posts/default?alt=rss",asset:"https://www.cancuters.com",origin:"https://www.cancuters.com"},google:{apiKey:"AIzaSyB2MpzH-Gq6fnWuUnoI2PH2sPMTkGIQ9b0",blogId:C},disqus:{shortName:"cancuters"},addThis:{id:$.addThisId||"633ab81bbe4f4d0c"},cse:{url:$.cseUrl||"https://cse.google.com/cse.js?cx=1cc597b44a4ec4196"}},Z={url:{api:"https://www.googleapis.com/blogger/v3",feed:"".concat(window.location.origin,"/feeds/posts/default?alt=rss"),asset:window.location.origin,origin:window.location.origin},google:{apiKey:"AIzaSyB2MpzH-Gq6fnWuUnoI2PH2sPMTkGIQ9b0",blogId:$.blogId||C},disqus:{shortName:$.disqus||null},addThis:{id:$.addThisId||"633ab81bbe4f4d0c"},cse:{url:$.cseUrl||"https://cse.google.com/cse.js?cx=1cc597b44a4ec4196"}},ee=D?X:Z,te={summary:"".concat(ee.url.feed,"/posts/summary"),postFeed:"".concat(ee.url.feed,"/posts/default?alt=rss"),post:"".concat(ee.url.api,"/blogs/").concat(ee.google.blogId,"/posts"),page:"".concat(ee.url.api,"/blogs/").concat(ee.google.blogId,"/pages")},ae=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).init=Object(V.a)(Q.a.mark((function e(){var t;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.props.currentUrl,e.next=4,a.setState({isLoading:!0});case 4:setTimeout((function(){var e=ee.url.origin,n=ee.disqus;window.disqus_shortname=n.shortName,window.disqus_blogger_current_url=t||e,window.disqus_blogger_homepage_url=e,window.disqus_blogger_canonical_homepage_url=e;var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="//".concat(n.shortName,".disqus.com/blogger_item.js"),(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(r),a.setState({isLoaded:!0,isLoading:!1})}),2e3),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a.setState({isLoading:!1,isLoaded:!0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),a.state={isLoaded:!1,isLoading:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoaded;return i.React.createElement(b,{className:"m-disqus__wrapper"},i.React.createElement(b,{className:"m-disqus__action"},!a&&i.React.createElement(P,{onPress:t?null:this.init,variant:"primary",block:!0,large:!0},t?"Loading...":"Mulai Diskusi")),i.React.createElement(b,{className:"m-disqus__body"},i.React.createElement(b,{id:"comments"})))}}]),t}(i.React.Component),ne=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).init=function(){var e=a.props.id;if(!e)return null;var t=document.createElement("script");t.src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-".concat(e),t.type="text/javascript",t.async=!0,(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(t),console.log("loaded")},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.init()}},{key:"render",value:function(){return i.React.createElement(b,{id:"addThis"})}}]),t}(i.React.PureComponent);ne.defaultProps={id:""};var re=ne,ce=function(e){var t=e.labels,a=e.title,n=e.url;return i.React.createElement(b,{className:"m-breadcrumb__wrapper"},i.React.createElement(E,{href:"/",title:"Go to home",className:"m-breadcrumb__item"},i.React.createElement(S,{name:"home",style:{marginRight:8,color:"#222"}}),"Home"),t&&!T.a.isEmpty(t)?i.React.createElement(i.React.Fragment,null,i.React.createElement(y,{tag:"span",className:"m-breadcrumb__separator"},"/"),i.React.createElement(E,{href:M(t[0],"/search?q="),title:t[0],className:"m-breadcrumb__item"},t[0]),i.React.createElement(y,{tag:"span",className:"m-breadcrumb__separator"},"/"),i.React.createElement(E,{href:n,title:a,className:"m-breadcrumb__item m-breadcrumb__item--current"},a)):i.React.createElement(i.React.Fragment,null,i.React.createElement(y,{tag:"span",className:"m-breadcrumb__separator"},"/"),i.React.createElement(E,{href:n,title:a,className:"m-breadcrumb__item m-breadcrumb__item--current"},a)))};ce.defaultProps={labels:[],title:"",url:""};var oe=ce;function ie(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function se(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ie(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ie(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var le=i.axios.create({baseURL:"",timeout:1e4,validateStatus:function(e){return e>=200&&e<300}}),me=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,null,[{key:"get",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){return t.request("GET",e,n,a)}}},{key:"put",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){return t.request("PUT",e,n,a)}}},{key:"post",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){return t.request("POST",e,n,a)}}},{key:"delete",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){return t.request("DELETE",e,n,a)}}},{key:"patch",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){return t.request("PATCH",e,n,a)}}},{key:"resolveParams",value:function(e){var t=[];return Object.keys(e).map((function(a){return t.push("".concat(a,"=").concat(e[a]))})),t.join("&")}},{key:"request",value:function(e,t){var a=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};arguments.length>3&&arguments[3];return new Promise((function(r,c){var o=n.path?"/".concat(n.path):"",i=n.params?"?".concat(a.resolveParams(n.params)):"",s=n.url?n.url:"",l={"Content-Type":"form-data"===n.type?"multipart/form-data":"application/json"};le.request({url:s.length>0?s:t+o+i,method:e,headers:n.headers?se({},l,{},n.headers):l,data:n.body?n.body:{}}).then((function(e){r(e)})).catch((function(e){e&&e.response?c(e.response):e&&c(e)}))}))}}]),e}(),ue={};ue.blogPost=me.get(te.post),ue.blogSummary=me.get(te.summary),ue.blogPostFeed=me.get(te.postFeed),ue.blogPage=me.get(te.page);var de=ue;function ge(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function pe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ge(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ge(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var he=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return!(!e||200!==e)||e},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error response";return new Error({message:t,error:e})},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return pe({maxResults:6,orderBy:"published",key:ee.google.apiKey,fetchBodies:!0,fetchImages:!0},e)},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return pe({key:ee.google.apiKey},e)},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return pe({alt:"json","max-results":1},e)},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=pe({},e,{params:pe({alt:"json","max-results":1},ve(e.params||{}))});return de.blogSummary(t).then((function(e){if(he(e.status)){var t=e.data;return F(t)}throw new Error(fe(e))})).catch((function(e){throw e}))},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=pe({},e,{params:pe({},be(e.params||{}))});return de.blogPost(t).then((function(e){if(he(e.status))return e.data;throw new Error(fe(e))})).catch((function(e){throw e}))},Re=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=pe({},t,{params:pe({},ye(t.params||{})),path:e});return de.blogPost(a).then((function(e){if(he(e.status))return e.data;throw new Error(fe(e))})).catch((function(e){throw e}))},_e=function(){try{var e=window.__POPULAR_POST__;return JSON.parse(e)}catch(t){return null}};function we(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function je(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?we(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):we(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ke={title:"Dokumentasi Simpel Template Black Clover",description:'Selamat datang di postingan dokumentasi template yang saya buat dan bernama BLACK CLOVER. Berikut dokumentasinya:Cara Setting TemplatePemasangan- Buka Blogger.com- Pergi ke menu Tema- Lihat kiri atas ada tombol backup/pulihkan dan klik- Akan ada Modal popup, tekan tombol "choose file"- Pilih template ini- DoneKonfigurasi kelengkapan templateKonfigurasi sosial dan verifikasiCari SOSIAL AND ',image:"https://2.bp.blogspot.com/-_EVYfMGHtDU/W2Vd0vSfVRI/AAAAAAAABOk/NuOGcRH2eI4o5R9fNUN8dmXjrmcYwjSWQCPcBGAYYCw/w400-h400-c/2b31cd88f286a2c063c58aa2176fdc30.png",url:"https://nextcodepelajar.blogspot.com/2018/08/dokumentasi-simpel-template-black-clover.html"},Ne=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).imageLoading=function(){a.state.showImage||a.setState({showImage:!0})},a.initDummy=function(){a.setState({isLoading:!0},(function(){setTimeout((function(){a.setState(je({},ke,{isLoading:!1,isLoaded:!0}))}),3e3)}))},a.init=Object(V.a)(Q.a.mark((function e(){var t;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.setState({isLoading:!0});case 3:return e.next=5,Ee();case 5:return t=e.sent,e.next=8,a.setState(je({},t,{isLoading:!1,isLoaded:!0}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a.setState({isLoading:!1});case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),a.renderSkeleton=function(e){return"text"===e?i.React.createElement(i.React.Fragment,null,i.React.createElement(k,{style:{width:"100%",paddingBottom:40,marginBottom:32}}),i.React.createElement(k,{style:{width:"60%",paddingBottom:25,marginBottom:14}}),i.React.createElement(k,{style:{width:"100%",paddingBottom:25,marginBottom:14}}),i.React.createElement(k,{style:{width:"80%",paddingBottom:25,marginBottom:14}}),i.React.createElement(k,{style:{width:"40%",paddingBottom:25,marginBottom:60}}),i.React.createElement(k,{style:{width:"40%",paddingBottom:60,marginBottom:14}})):"image"===e?i.React.createElement(k,{style:{width:"100%",paddingBottom:"80%"}}):void 0},a.state={isLoading:!1,isLoaded:!1,title:"",image:"",description:"",url:"",showImage:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){if(window.addEventListener("mousewheel",this.imageLoading),window.addEventListener("touchmove",this.imageLoading),D)return this.initDummy();this.init()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mousewheel",this.imageLoading),window.removeEventListener("touchmove",this.imageLoading)}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,n=e.image,r=e.url,c=e.isLoading,o=e.isLoaded,s=e.showImage;return i.React.createElement(b,{className:"o-feature-block__wrapper"},i.React.createElement(b,{className:"o-feature-block__column"},i.React.createElement(b,{className:"o-feature-block__inner"},c&&this.renderSkeleton("image"),o&&i.React.createElement(j,{className:"o-feature-block__image",source:s?U(n):"",backgroundImage:!0,resizeMode:"cover",title:t,alt:t}))),i.React.createElement(b,{className:"o-feature-block__column"},i.React.createElement(b,{className:"o-feature-block__inner o-feature-block__inner--text"},c&&this.renderSkeleton("text"),o&&i.React.createElement(i.React.Fragment,null,i.React.createElement(E,{href:r,title:t},i.React.createElement(y,{tag:"h2",className:"o-feature-block__title"},t)),i.React.createElement(y,{className:"o-feature-block__description",style:{marginBottom:40}},a),i.React.createElement(P,{variant:"primary",anchor:!0,href:r,title:t},"Read More")))))}}]),t}(i.React.PureComponent),Pe=a(16),Le=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).init=Object(V.a)(Q.a.mark((function e(){var t,n,r,c,o;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.state,n=t.nextToken,r=t.posts,c={params:{pageToken:n}},e.next=5,a.setState({isLoading:!0});case 5:if(!n){e.next=11;break}return e.next=8,Oe(c);case 8:e.t0=e.sent,e.next=14;break;case 11:return e.next=13,Oe();case 13:e.t0=e.sent;case 14:o=e.t0,setTimeout((function(){return n?a.setState({isLoading:!1,posts:[].concat(Object(Pe.a)(r),Object(Pe.a)(T.a.get(o,"items",[]))),nextToken:T.a.get(o,"nextPageToken",null)}):a.setState({isLoading:!1,posts:T.a.get(o,"items",[]),nextToken:T.a.get(o,"nextPageToken",null)})}),2e3),e.next=21;break;case 18:e.prev=18,e.t1=e.catch(0),a.setState({isLoading:!1,isLoaded:!0});case 21:case"end":return e.stop()}}),e,null,[[0,18]])}))),a.imageLoading=function(){a.state.showImage||a.setState({showImage:!0})},a.renderSkeleton=function(){return[1,2,3].map((function(e){return i.React.createElement(b,{key:e,className:"o-post-block__column"},i.React.createElement(k,{style:{paddingBottom:"64%",width:"100%",marginBottom:24}}),i.React.createElement(b,{style:{padding:20}},i.React.createElement(k,{style:{paddingBottom:30,width:"100%",marginBottom:15}}),i.React.createElement(k,{style:{paddingBottom:20,width:"80%",marginBottom:10}}),i.React.createElement(k,{style:{paddingBottom:20,width:"50%",marginBottom:0}})),i.React.createElement(b,{style:{display:"flex",alignItems:"center",paddingLeft:14,paddingRight:14}},i.React.createElement(k,{style:{borderRadius:30,height:30,width:30,marginRight:14}}),i.React.createElement(k,{style:{height:15,width:100}})))}))},a.state={isLoading:!1,isLoaded:!1,nextToken:null,showImage:!1,posts:[]},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.init(),window.addEventListener("mousewheel",this.imageLoading),window.addEventListener("touchmove",this.imageLoading)}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.nextToken;return!(t.nextToken&&!a)||(this.setState({isLoaded:!0}),!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mousewheel",this.imageLoading),window.removeEventListener("touchmove",this.imageLoading)}},{key:"render",value:function(){var e=this.state,t=e.posts,a=e.isLoading,n=e.isLoaded,r=e.showImage;return i.React.createElement(b,{className:"o-post-block__wrapper"},i.React.createElement(b,{className:"o-post-block__row"},t&&t.map((function(e,t){return i.React.createElement(b,{key:t,className:"o-post-block__column"},i.React.createElement(K,{url:e.url,title:e.title,image:r?U(T.a.get(e,"images[0].url","")):"",author:H(e.author),label:e.labels}))})),a&&this.renderSkeleton()),!n&&!a&&i.React.createElement(b,{className:"text-align-center"},i.React.createElement(P,{onPress:this.init,variant:"primary"},"Load More")))}}]),t}(i.React.PureComponent);function Se(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function xe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Se(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Se(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Be=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).init=Object(V.a)(Q.a.mark((function e(){var t;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.setState({isLoading:!0});case 3:return e.next=5,_e();case 5:t=e.sent,setTimeout((function(){a.setState({isLoading:!1,popularPost:xe({},t)})}),3e3),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),a.setState({isLoading:!1});case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),a.handleImage=function(e,t){return e||(t||U())},a.handleUrl=function(e,t){return e||t},a.state={isLoading:!1,popularPost:{title:"",data:[]}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.init()}},{key:"render",value:function(){var e=this,t=this.state,a=t.popularPost,n=t.isLoading;return i.React.createElement(b,{className:"o-popular-post__wrapper"},i.React.createElement(b,{className:"o-popular-post__header"},i.React.createElement(y,{className:"o-popular-post__title"},a.title)),i.React.createElement(b,{className:"o-popular-post__body"},i.React.createElement(b,{className:"o-popular-post__order"},n&&[1,2,3,4,5].map((function(e){return i.React.createElement(b,{key:e,style:{marginBottom:16,borderBottomWidth:1,borderBottomColor:"#ddd",borderBottomStyle:"solid",paddingBottom:16,alignItems:"center"},className:"d-flex w-full"},i.React.createElement(k,{style:{width:50,height:50,marginRight:14}}),i.React.createElement(b,{style:{flex:1}},i.React.createElement(k,{style:{width:"100%",height:15,marginBottom:5}}),i.React.createElement(k,{style:{width:"80%",height:15,marginBottom:5}})))})),a.data&&a.data.map((function(t,a){return i.React.createElement(J,{key:a,title:t.title,url:e.handleUrl(t.link,t.url),image:e.handleImage(t.thumbnailUrl,t.featuredImage)})})))),i.React.createElement(b,{className:"o-popular-post__footer"}))}}]),t}(i.React.Component),Ie=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).init=Object(V.a)(Q.a.mark((function e(){var t,n,r,c;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.setState({isLoading:!0});case 3:return t=z(window.__POSTS__),n=t.id,e.next=7,Re(n);case 7:r=e.sent,setTimeout((function(){a.setState({data:r,isLoading:!1,contentLoaded:!0})}),2e3),e.next=17;break;case 11:if(e.prev=11,e.t0=e.catch(0),!((c=a.state.times)<2)){e.next=16;break}return e.abrupt("return",a.setState({times:c+1},(function(){return a.init()})));case 16:return e.abrupt("return",a.setState({isLoading:!1},(function(){if(window.confirm("Koneksi bermasalah! Silahkan refresh ulang."))return window.location.reload()})));case 17:case"end":return e.stop()}}),e,null,[[0,11]])}))),a.loadPretify=function(){var e=document.createElement("script");e.src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js",e.type="text/javascript",e.async=!0,(document.getElementsByTagName("body")[0]||document.getElementsByTagName("head")[0]).appendChild(e),a.setState({contentLoaded:!1})},a.renderPreTag=Object(V.a)(Q.a.mark((function e(){var t,n,r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.getElementsByTagName("pre"),T.a.isEmpty(t)){e.next=6;break}for(n=t.length,r=0;r<n;r+=1)t[r].classList.add("prettyprint");return e.next=6,a.loadPretify();case 6:case"end":return e.stop()}}),e)}))),a.renderSkeleton=function(){return i.React.createElement(i.React.Fragment,null,i.React.createElement(k,{style:{width:"80%",height:40,marginBottom:24}}),i.React.createElement(b,{className:"d-flex"},i.React.createElement(k,{style:{width:"20%",height:20,marginBottom:24,marginRight:24}}),i.React.createElement(k,{style:{width:"30%",height:20,marginBottom:40}})),i.React.createElement(k,{style:{width:"100%",height:1,marginBottom:40}}),i.React.createElement(b,{className:"d-flex",style:{alignItems:"center",marginBottom:50}},i.React.createElement(k,{style:{width:50,height:50,marginRight:24,borderRadius:50}}),i.React.createElement(k,{style:{width:200,height:20}})),i.React.createElement(k,{style:{width:"100%",paddingBottom:"40%",marginBottom:40}}),[1,2].map((function(e){return i.React.createElement(i.React.Fragment,{key:e},i.React.createElement(b,{style:{marginBottom:54}},i.React.createElement(k,{style:{width:"80%",height:20,marginBottom:14}}),i.React.createElement(k,{style:{width:"100%",height:20,marginBottom:14}}),i.React.createElement(k,{style:{width:"90%",height:20,marginBottom:14}}),i.React.createElement(k,{style:{width:"60%",height:20,marginBottom:14}})))})))},a.state={data:null,isLoading:!1,times:0,contentLoaded:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.init()}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.contentLoaded;a!==t.contentLoaded&&!0===a&&this.renderPreTag()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.data;return i.React.createElement(b,{className:"o-single-post-block__wrapper"},i.React.createElement(b,{className:"o-single-post-block__header"},t&&this.renderSkeleton(),a&&i.React.createElement(oe,{title:a.title,labels:a.labels,url:a.url}),a&&a.title?i.React.createElement(y,{tag:"h1",className:"o-single-post-block__title"},a.title):null,i.React.createElement(b,{className:"o-single-post-block__meta"},a&&a.published?i.React.createElement(y,{className:"o-single-post-block__datetime"},"Diposting pada: ",Object(i.moment)(a.published).format("LLLL")):null,a&&a.author?i.React.createElement(B,{imageSize:50,data:H(a.author)}):null)),i.React.createElement(b,{className:"o-single-post-block__body"},a&&a.content?i.React.createElement(b,{dangerouslySetInnerHTML:{__html:a.content}}):null),i.React.createElement(b,{className:"o-single-post-block__footer"},a&&a.url?i.React.createElement(ae,{currentUrl:a.url}):null),i.React.createElement(re,{id:ee.addThis.id}))}}]),t}(i.React.Component),Te=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).init=function(){var e=q("footer");a.setState({data:e})},a.state={data:[]},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.init()}},{key:"render",value:function(){var e=this.state.data;return i.React.createElement(b,{className:"o-brand-logo__social"},i.React.createElement(b,{tag:"ul",className:"m-social-links"},e&&e.map((function(e,t){return i.React.createElement(b,{key:t,tag:"li"},i.React.createElement(E,{href:e.url,title:e.title},e.title,i.React.createElement(S,{name:e.type})))}))))}}]),t}(i.React.Component),Ce=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).init=function(){var e=document.createElement("script");e.src="https://cse.google.com/cse.js?cx=1cc597b44a4ec4196",e.type="text/javascript",e.async=!0,(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.init()}},{key:"render",value:function(){return i.React.createElement(i.React.Fragment,null,i.React.createElement(b,{className:"gcse-searchresults-only"}))}}]),t}(i.React.Component),Ae=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.React.createElement(p,{style:{paddingTop:50,paddingBottom:50},className:"home-feature"},i.React.createElement(h,null,i.React.createElement(Ne,null)))}}]),t}(i.React.Component),De=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.React.createElement(p,{style:{paddingTop:50,paddingBottom:50},className:"post-container"},i.React.createElement(Le,null))}}]),t}(i.React.Component),Me=function(){return i.React.createElement(p,{className:"sidebar-popular-post"},i.React.createElement(Be,null))},qe=function(){return i.React.createElement(p,{className:"single-post-section"},i.React.createElement(Ie,null))},Ue=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.React.createElement(Te,null)}}]),t}(i.React.Component),Fe=function(){return i.React.createElement(p,null,i.React.createElement(Ce,null))},He={HOME_FEATURED_POST:A("HomeFeaturedPost"),HOME_POST_CONTAINER:A("HomePostContainer"),SIDEBAR_POPULAR_POST:A("singlePopularPost"),SINGLEPOST:A("SinglePostContainer"),FOOTER_SOCIAL_ICON:A("FooterSocialContainer"),SEARCH_CONTAINER:A("SearchPostContainer")};a(59),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));[{component:Ae,element:He.HOME_FEATURED_POST},{component:De,element:He.HOME_POST_CONTAINER},{component:Me,element:He.SIDEBAR_POPULAR_POST},{component:qe,element:He.SINGLEPOST},{component:Ue,element:He.FOOTER_SOCIAL_ICON},{component:Fe,element:He.SEARCH_CONTAINER}].forEach((function(e){var t=e.component,a=e.element;a&&o.a.render(r.a.createElement(i.IconContext.Provider,{value:{color:"#ddd",className:"a-icon"}},r.a.createElement(t,null)),a)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.265b3836.chunk.js.map
