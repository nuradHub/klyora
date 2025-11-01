import{R as Lt,r as J,j as y,L as j}from"./index-C8AEOagZ.js";/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Ce(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function Ya(e){if(Array.isArray(e))return e}function Ha(e){if(Array.isArray(e))return Ce(e)}function Ba(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ga(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,$t(r.key),r)}}function Xa(e,t,a){return t&&Ga(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ue(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=He(e))||t){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function h(e,t,a){return(t=$t(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Va(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ka(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,s=[],l=!0,u=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(r=i.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(c){u=!0,n=c}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw n}}return s}}function Ja(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function at(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?at(Object(a),!0).forEach(function(r){h(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):at(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function pe(e,t){return Ya(e)||Ka(e,t)||He(e,t)||Ja()}function C(e){return Ha(e)||Va(e)||He(e)||qa()}function Qa(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $t(e){var t=Qa(e,"string");return typeof t=="symbol"?t:t+""}function me(e){"@babel/helpers - typeof";return me=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},me(e)}function He(e,t){if(e){if(typeof e=="string")return Ce(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Ce(e,t):void 0}}var rt=function(){},Be={},Mt={},Dt=null,Rt={mark:rt,measure:rt};try{typeof window<"u"&&(Be=window),typeof document<"u"&&(Mt=document),typeof MutationObserver<"u"&&(Dt=MutationObserver),typeof performance<"u"&&(Rt=performance)}catch{}var Za=Be.navigator||{},nt=Za.userAgent,it=nt===void 0?"":nt,D=Be,w=Mt,ot=Dt,le=Rt;D.document;var M=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",zt=~it.indexOf("MSIE")||~it.indexOf("Trident/"),Se,er=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,tr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Wt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},ar={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ut=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],P="classic",ne="duotone",Yt="sharp",Ht="sharp-duotone",Bt="chisel",Gt="etch",Xt="jelly",Vt="jelly-duo",Kt="jelly-fill",Jt="notdog",qt="notdog-duo",Qt="slab",Zt="slab-press",ea="thumbprint",ta="utility",aa="utility-duo",ra="utility-fill",na="whiteboard",rr="Classic",nr="Duotone",ir="Sharp",or="Sharp Duotone",sr="Chisel",lr="Etch",fr="Jelly",ur="Jelly Duo",cr="Jelly Fill",dr="Notdog",mr="Notdog Duo",vr="Slab",hr="Slab Press",pr="Thumbprint",gr="Utility",br="Utility Duo",yr="Utility Fill",xr="Whiteboard",ia=[P,ne,Yt,Ht,Bt,Gt,Xt,Vt,Kt,Jt,qt,Qt,Zt,ea,ta,aa,ra,na];Se={},h(h(h(h(h(h(h(h(h(h(Se,P,rr),ne,nr),Yt,ir),Ht,or),Bt,sr),Gt,lr),Xt,fr),Vt,ur),Kt,cr),Jt,dr),h(h(h(h(h(h(h(h(Se,qt,mr),Qt,vr),Zt,hr),ea,pr),ta,gr),aa,br),ra,yr),na,xr);var wr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Sr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Ar=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),kr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},oa=["fak","fa-kit","fakd","fa-kit-duotone"],st={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ir=["kit"],Pr="kit",Er="kit-duotone",Fr="Kit",Cr="Kit Duotone";h(h({},Pr,Fr),Er,Cr);var Nr={kit:{"fa-kit":"fak"}},Or={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},jr={kit:{fak:"fa-kit"}},lt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ae,fe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Tr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],_r="classic",Lr="duotone",$r="sharp",Mr="sharp-duotone",Dr="chisel",Rr="etch",zr="jelly",Wr="jelly-duo",Ur="jelly-fill",Yr="notdog",Hr="notdog-duo",Br="slab",Gr="slab-press",Xr="thumbprint",Vr="utility",Kr="utility-duo",Jr="utility-fill",qr="whiteboard",Qr="Classic",Zr="Duotone",en="Sharp",tn="Sharp Duotone",an="Chisel",rn="Etch",nn="Jelly",on="Jelly Duo",sn="Jelly Fill",ln="Notdog",fn="Notdog Duo",un="Slab",cn="Slab Press",dn="Thumbprint",mn="Utility",vn="Utility Duo",hn="Utility Fill",pn="Whiteboard";Ae={},h(h(h(h(h(h(h(h(h(h(Ae,_r,Qr),Lr,Zr),$r,en),Mr,tn),Dr,an),Rr,rn),zr,nn),Wr,on),Ur,sn),Yr,ln),h(h(h(h(h(h(h(h(Ae,Hr,fn),Br,un),Gr,cn),Xr,dn),Vr,mn),Kr,vn),Jr,hn),qr,pn);var gn="kit",bn="kit-duotone",yn="Kit",xn="Kit Duotone";h(h({},gn,yn),bn,xn);var wn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Sn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Ne={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},An=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],sa=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Tr,An),kn=["solid","regular","light","thin","duotone","brands","semibold"],la=[1,2,3,4,5,6,7,8,9,10],In=la.concat([11,12,13,14,15,16,17,18,19,20]),Pn=["aw","fw","pull-left","pull-right"],En=[].concat(C(Object.keys(Sn)),kn,Pn,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",fe.GROUP,fe.SWAP_OPACITY,fe.PRIMARY,fe.SECONDARY]).concat(la.map(function(e){return"".concat(e,"x")})).concat(In.map(function(e){return"w-".concat(e)})),Fn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},L="___FONT_AWESOME___",Oe=16,fa="fa",ua="svg-inline--fa",U="data-fa-i2svg",je="data-fa-pseudo-element",Cn="data-fa-pseudo-element-pending",Ge="data-prefix",Xe="data-icon",ft="fontawesome-i2svg",Nn="async",On=["HTML","HEAD","STYLE","SCRIPT"],ca=["::before","::after",":before",":after"],da=(function(){try{return!0}catch{return!1}})();function ie(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[P]}})}var ma=f({},Wt);ma[P]=f(f(f(f({},{"fa-duotone":"duotone"}),Wt[P]),st.kit),st["kit-duotone"]);var jn=ie(ma),Te=f({},kr);Te[P]=f(f(f(f({},{duotone:"fad"}),Te[P]),lt.kit),lt["kit-duotone"]);var ut=ie(Te),_e=f({},Ne);_e[P]=f(f({},_e[P]),jr.kit);var Ve=ie(_e),Le=f({},wn);Le[P]=f(f({},Le[P]),Nr.kit);ie(Le);var Tn=er,va="fa-layers-text",_n=tr,Ln=f({},wr);ie(Ln);var $n=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ke=ar,Mn=[].concat(C(Ir),C(En)),Z=D.FontAwesomeConfig||{};function Dn(e){var t=w.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Rn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(w&&typeof w.querySelector=="function"){var zn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];zn.forEach(function(e){var t=pe(e,2),a=t[0],r=t[1],n=Rn(Dn(a));n!=null&&(Z[r]=n)})}var ha={styleDefault:"solid",familyDefault:P,cssPrefix:fa,replacementClass:ua,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Z.familyPrefix&&(Z.cssPrefix=Z.familyPrefix);var V=f(f({},ha),Z);V.autoReplaceSvg||(V.observeMutations=!1);var m={};Object.keys(ha).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(a){V[e]=a,ee.forEach(function(r){return r(m)})},get:function(){return V[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){V.cssPrefix=t,ee.forEach(function(a){return a(m)})},get:function(){return V.cssPrefix}});D.FontAwesomeConfig=m;var ee=[];function Wn(e){return ee.push(e),function(){ee.splice(ee.indexOf(e),1)}}var H=Oe,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Un(e){if(!(!e||!M)){var t=w.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=w.head.childNodes,r=null,n=a.length-1;n>-1;n--){var i=a[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return w.head.insertBefore(t,r),e}}var Yn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ct(){for(var e=12,t="";e-- >0;)t+=Yn[Math.random()*62|0];return t}function K(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function Ke(e){return e.classList?K(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function pa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Hn(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(pa(e[a]),'" ')},"").trim()}function ge(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function Je(e){return e.size!==N.size||e.x!==N.x||e.y!==N.y||e.rotate!==N.rotate||e.flipX||e.flipY}function Bn(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:u}}function Gn(e){var t=e.transform,a=e.width,r=a===void 0?Oe:a,n=e.height,i=n===void 0?Oe:n,o="";return zt?o+="translate(".concat(t.x/H-r/2,"em, ").concat(t.y/H-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/H,"em), calc(-50% + ").concat(t.y/H,"em)) "),o+="scale(".concat(t.size/H*(t.flipX?-1:1),", ").concat(t.size/H*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var Xn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function ga(){var e=fa,t=ua,a=m.cssPrefix,r=m.replacementClass,n=Xn;if(a!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");n=n.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(r))}return n}var dt=!1;function Ie(){m.autoAddCss&&!dt&&(Un(ga()),dt=!0)}var Vn={mixout:function(){return{dom:{css:ga,insertCss:Ie}}},hooks:function(){return{beforeDOMElementCreation:function(){Ie()},beforeI2svg:function(){Ie()}}}},$=D||{};$[L]||($[L]={});$[L].styles||($[L].styles={});$[L].hooks||($[L].hooks={});$[L].shims||($[L].shims=[]);var F=$[L],ba=[],ya=function(){w.removeEventListener("DOMContentLoaded",ya),ve=1,ba.map(function(t){return t()})},ve=!1;M&&(ve=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),ve||w.addEventListener("DOMContentLoaded",ya));function Kn(e){M&&(ve?setTimeout(e,0):ba.push(e))}function oe(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,i=n===void 0?[]:n;return typeof e=="string"?pa(e):"<".concat(t," ").concat(Hn(r),">").concat(i.map(oe).join(""),"</").concat(t,">")}function mt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Pe=function(t,a,r,n){var i=Object.keys(t),o=i.length,s=a,l,u,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)u=i[l],c=s(c,t[u],u,t);return c};function xa(e){return C(e).length!==1?null:e.codePointAt(0).toString(16)}function vt(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function $e(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,i=vt(t);typeof F.hooks.addPack=="function"&&!n?F.hooks.addPack(e,vt(t)):F.styles[e]=f(f({},F.styles[e]||{}),i),e==="fas"&&$e("fa",t)}var ae=F.styles,Jn=F.shims,wa=Object.keys(Ve),qn=wa.reduce(function(e,t){return e[t]=Object.keys(Ve[t]),e},{}),qe=null,Sa={},Aa={},ka={},Ia={},Pa={};function Qn(e){return~Mn.indexOf(e)}function Zn(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!Qn(n)?n:null}var Ea=function(){var t=function(i){return Pe(ae,function(o,s,l){return o[l]=Pe(s,i,{}),o},{})};Sa=t(function(n,i,o){if(i[3]&&(n[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=o})}return n}),Aa=t(function(n,i,o){if(n[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=o})}return n}),Pa=t(function(n,i,o){var s=i[2];return n[o]=o,s.forEach(function(l){n[l]=o}),n});var a="far"in ae||m.autoFetchSvg,r=Pe(Jn,function(n,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(n.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});ka=r.names,Ia=r.unicodes,qe=be(m.styleDefault,{family:m.familyDefault})};Wn(function(e){qe=be(e.styleDefault,{family:m.familyDefault})});Ea();function Qe(e,t){return(Sa[e]||{})[t]}function ei(e,t){return(Aa[e]||{})[t]}function W(e,t){return(Pa[e]||{})[t]}function Fa(e){return ka[e]||{prefix:null,iconName:null}}function ti(e){var t=Ia[e],a=Qe("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function R(){return qe}var Ca=function(){return{prefix:null,iconName:null,rest:[]}};function ai(e){var t=P,a=wa.reduce(function(r,n){return r[n]="".concat(m.cssPrefix,"-").concat(n),r},{});return ia.forEach(function(r){(e.includes(a[r])||e.some(function(n){return qn[r].includes(n)}))&&(t=r)}),t}function be(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?P:a,n=jn[r][e];if(r===ne&&!e)return"fad";var i=ut[r][e]||ut[r][n],o=e in F.styles?e:null,s=i||o||null;return s}function ri(e){var t=[],a=null;return e.forEach(function(r){var n=Zn(m.cssPrefix,r);n?a=n:r&&t.push(r)}),{iconName:a,rest:t}}function ht(e){return e.sort().filter(function(t,a,r){return r.indexOf(t)===a})}var pt=sa.concat(oa);function ye(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,n=null,i=ht(e.filter(function(v){return pt.includes(v)})),o=ht(e.filter(function(v){return!pt.includes(v)})),s=i.filter(function(v){return n=v,!Ut.includes(v)}),l=pe(s,1),u=l[0],c=u===void 0?null:u,d=ai(i),p=f(f({},ri(o)),{},{prefix:be(c,{family:d})});return f(f(f({},p),si({values:e,family:d,styles:ae,config:m,canonical:p,givenPrefix:n})),ni(r,n,p))}function ni(e,t,a){var r=a.prefix,n=a.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var i=t==="fa"?Fa(n):{},o=W(r,n);return n=i.iconName||o||n,r=i.prefix||r,r==="far"&&!ae.far&&ae.fas&&!m.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var ii=ia.filter(function(e){return e!==P||e!==ne}),oi=Object.keys(Ne).filter(function(e){return e!==P}).map(function(e){return Object.keys(Ne[e])}).flat();function si(e){var t=e.values,a=e.family,r=e.canonical,n=e.givenPrefix,i=n===void 0?"":n,o=e.styles,s=o===void 0?{}:o,l=e.config,u=l===void 0?{}:l,c=a===ne,d=t.includes("fa-duotone")||t.includes("fad"),p=u.familyDefault==="duotone",v=r.prefix==="fad"||r.prefix==="fa-duotone";if(!c&&(d||p||v)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&ii.includes(a)){var x=Object.keys(s).find(function(S){return oi.includes(S)});if(x||u.autoFetchSvg){var b=Ar.get(a).defaultShortPrefixId;r.prefix=b,r.iconName=W(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=R()||"fas"),r}var li=(function(){function e(){Ba(this,e),this.definitions={}}return Xa(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=f(f({},a.definitions[s]||{}),o[s]),$e(s,o[s]);var l=Ve[P][s];l&&$e(l,o[s]),Ea()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var o=n[i],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];a[s]||(a[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(a[s][d]=u)}),a[s][l]=u}),a}}])})(),gt=[],G={},X={},fi=Object.keys(X);function ui(e,t){var a=t.mixoutsTo;return gt=e,G={},Object.keys(X).forEach(function(r){fi.indexOf(r)===-1&&delete X[r]}),gt.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(o){typeof n[o]=="function"&&(a[o]=n[o]),me(n[o])==="object"&&Object.keys(n[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=n[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){G[o]||(G[o]=[]),G[o].push(i[o])})}r.provides&&r.provides(X)}),a}function Me(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var i=G[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Y(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=G[e]||[];n.forEach(function(i){i.apply(null,a)})}function z(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return X[e]?X[e].apply(null,t):void 0}function De(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||R();if(t)return t=W(a,t)||t,mt(Na.definitions,a,t)||mt(F.styles,a,t)}var Na=new li,ci=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,Y("noAuto")},di={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(Y("beforeI2svg",t),z("pseudoElements2svg",t),z("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Kn(function(){vi({autoReplaceSvgRoot:a}),Y("watch",t)})}},mi={icon:function(t){if(t===null)return null;if(me(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:W(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=be(t[0]);return{prefix:r,iconName:W(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Tn))){var n=ye(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||R(),iconName:W(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var i=R();return{prefix:i,iconName:W(i,t)||t}}}},E={noAuto:ci,config:m,dom:di,parse:mi,library:Na,findIconDefinition:De,toHtml:oe},vi=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?w:a;(Object.keys(F.styles).length>0||m.autoFetchSvg)&&M&&m.autoReplaceSvg&&E.dom.i2svg({node:r})};function xe(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return oe(r)})}}),Object.defineProperty(e,"node",{get:function(){if(M){var r=w.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function hi(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,i=e.styles,o=e.transform;if(Je(o)&&a.found&&!r.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};n.style=ge(f(f({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function pi(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},n),{},{id:o}),children:r}]}]}function gi(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function Ze(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,u=e.extra,c=e.watchable,d=c===void 0?!1:c,p=r.found?r:a,v=p.width,x=p.height,b=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(g){return u.classes.indexOf(g)===-1}).filter(function(g){return g!==""||!!g}).concat(u.classes).join(" "),S={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":n,"data-icon":i,class:b,role:u.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(x)})};!gi(u.attributes)&&!u.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),d&&(S.attributes[U]="");var A=f(f({},S),{},{prefix:n,iconName:i,main:a,mask:r,maskId:l,transform:o,symbol:s,styles:f({},u.styles)}),k=r.found&&a.found?z("generateAbstractMask",A)||{children:[],attributes:{}}:z("generateAbstractIcon",A)||{children:[],attributes:{}},I=k.children,O=k.attributes;return A.children=I,A.attributes=O,s?pi(A):hi(A)}function bt(e){var t=e.content,a=e.width,r=e.height,n=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[U]="");var u=f({},i.styles);Je(n)&&(u.transform=Gn({transform:n,width:a,height:r}),u["-webkit-transform"]=u.transform);var c=ge(u);c.length>0&&(l.style=c);var d=[];return d.push({tag:"span",attributes:l,children:[t]}),d}function bi(e){var t=e.content,a=e.extra,r=f(f({},a.attributes),{},{class:a.classes.join(" ")}),n=ge(a.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),i}var Ee=F.styles;function Re(e){var t=e[0],a=e[1],r=e.slice(4),n=pe(r,1),i=n[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(ke.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(ke.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(ke.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var yi={found:!1,width:512,height:512};function xi(e,t){!da&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ze(e,t){var a=t;return t==="fa"&&m.styleDefault!==null&&(t=R()),new Promise(function(r,n){if(a==="fa"){var i=Fa(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ee[t]&&Ee[t][e]){var o=Ee[t][e];return r(Re(o))}xi(e,t),r(f(f({},yi),{},{icon:m.showMissingIcons&&e?z("missingIconAbstract")||{}:{}}))})}var yt=function(){},We=m.measurePerformance&&le&&le.mark&&le.measure?le:{mark:yt,measure:yt},q='FA "7.1.0"',wi=function(t){return We.mark("".concat(q," ").concat(t," begins")),function(){return Oa(t)}},Oa=function(t){We.mark("".concat(q," ").concat(t," ends")),We.measure("".concat(q," ").concat(t),"".concat(q," ").concat(t," begins"),"".concat(q," ").concat(t," ends"))},et={begin:wi,end:Oa},ce=function(){};function xt(e){var t=e.getAttribute?e.getAttribute(U):null;return typeof t=="string"}function Si(e){var t=e.getAttribute?e.getAttribute(Ge):null,a=e.getAttribute?e.getAttribute(Xe):null;return t&&a}function Ai(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function ki(){if(m.autoReplaceSvg===!0)return de.replace;var e=de[m.autoReplaceSvg];return e||de.replace}function Ii(e){return w.createElementNS("http://www.w3.org/2000/svg",e)}function Pi(e){return w.createElement(e)}function ja(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?Ii:Pi:a;if(typeof e=="string")return w.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){n.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){n.appendChild(ja(o,{ceFn:r}))}),n}function Ei(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var de={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(ja(n),a)}),a.getAttribute(U)===null&&m.keepOriginalSource){var r=w.createComment(Ei(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~Ke(a).indexOf(m.replacementClass))return de.replace(t);var n=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return oe(s)}).join(`
`);a.setAttribute(U,""),a.innerHTML=o}};function wt(e){e()}function Ta(e,t){var a=typeof t=="function"?t:ce;if(e.length===0)a();else{var r=wt;m.mutateApproach===Nn&&(r=D.requestAnimationFrame||wt),r(function(){var n=ki(),i=et.begin("mutate");e.map(n),i(),a()})}}var tt=!1;function _a(){tt=!0}function Ue(){tt=!1}var he=null;function St(e){if(ot&&m.observeMutations){var t=e.treeCallback,a=t===void 0?ce:t,r=e.nodeCallback,n=r===void 0?ce:r,i=e.pseudoElementsCallback,o=i===void 0?ce:i,s=e.observeMutationsRoot,l=s===void 0?w:s;he=new ot(function(u){if(!tt){var c=R();K(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!xt(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o([d.target],!0),d.type==="attributes"&&xt(d.target)&&~$n.indexOf(d.attributeName))if(d.attributeName==="class"&&Si(d.target)){var p=ye(Ke(d.target)),v=p.prefix,x=p.iconName;d.target.setAttribute(Ge,v||c),x&&d.target.setAttribute(Xe,x)}else Ai(d.target)&&n(d.target)})}}),M&&he.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Fi(){he&&he.disconnect()}function Ci(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var i=n.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),a}function Ni(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=ye(Ke(e));return n.prefix||(n.prefix=R()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=ei(n.prefix,e.innerText)||Qe(n.prefix,xa(e.innerText))),!n.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function Oi(e){var t=K(e.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{});return t}function ji(){return{iconName:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function At(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Ni(e),r=a.iconName,n=a.prefix,i=a.rest,o=Oi(e),s=Me("parseNodeAttributes",{},e),l=t.styleParser?Ci(e):[];return f({iconName:r,prefix:n,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ti=F.styles;function La(e){var t=m.autoReplaceSvg==="nest"?At(e,{styleParser:!1}):At(e);return~t.extra.classes.indexOf(va)?z("generateLayersText",e,t):z("generateSvgReplacementMutation",e,t)}function _i(){return[].concat(C(oa),C(sa))}function kt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();var a=w.documentElement.classList,r=function(d){return a.add("".concat(ft,"-").concat(d))},n=function(d){return a.remove("".concat(ft,"-").concat(d))},i=m.autoFetchSvg?_i():Ut.concat(Object.keys(Ti));i.includes("fa")||i.push("fa");var o=[".".concat(va,":not([").concat(U,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(U,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=K(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=et.begin("onTree"),u=s.reduce(function(c,d){try{var p=La(d);p&&c.push(p)}catch(v){da||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(p){Ta(p,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),d(p)})})}function Li(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;La(e).then(function(a){a&&Ta([a],t)})}function $i(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:De(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:De(n||{})),e(r,f(f({},a),{},{mask:n}))}}var Mi=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?N:r,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,u=a.maskId,c=u===void 0?null:u,d=a.classes,p=d===void 0?[]:d,v=a.attributes,x=v===void 0?{}:v,b=a.styles,S=b===void 0?{}:b;if(t){var A=t.prefix,k=t.iconName,I=t.icon;return xe(f({type:"icon"},t),function(){return Y("beforeDOMElementCreation",{iconDefinition:t,params:a}),Ze({icons:{main:Re(I),mask:l?Re(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:k,transform:f(f({},N),n),symbol:o,maskId:c,extra:{attributes:x,styles:S,classes:p}})})}},Di={mixout:function(){return{icon:$i(Mi)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=kt,a.nodeCallback=Li,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?w:r,i=a.callback,o=i===void 0?function(){}:i;return kt(n,o)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,i=r.prefix,o=r.transform,s=r.symbol,l=r.mask,u=r.maskId,c=r.extra;return new Promise(function(d,p){Promise.all([ze(n,i),l.iconName?ze(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var x=pe(v,2),b=x[0],S=x[1];d([a,Ze({icons:{main:b,mask:S},prefix:i,iconName:n,transform:o,symbol:s,maskId:u,extra:c,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.transform,s=a.styles,l=ge(s);l.length>0&&(n.style=l);var u;return Je(o)&&(u=z("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:n}}}},Ri={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return xe({type:"layer"},function(){Y("beforeDOMElementCreation",{assembler:a,params:r});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(C(i)).join(" ")},children:o}]})}}}},zi={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,i=n===void 0?[]:n,o=r.attributes,s=o===void 0?{}:o,l=r.styles,u=l===void 0?{}:l;return xe({type:"counter",content:a},function(){return Y("beforeDOMElementCreation",{content:a,params:r}),bi({content:a.toString(),extra:{attributes:s,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(C(i))}})})}}}},Wi={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?N:n,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return xe({type:"text",content:a},function(){return Y("beforeDOMElementCreation",{content:a,params:r}),bt({content:a,transform:f(f({},N),i),extra:{attributes:u,styles:d,classes:["".concat(m.cssPrefix,"-layers-text")].concat(C(s))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.transform,i=r.extra,o=null,s=null;if(zt){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();o=u.width/l,s=u.height/l}return Promise.resolve([a,bt({content:a.innerHTML,width:o,height:s,transform:n,extra:i,watchable:!0})])}}},$a=new RegExp('"',"ug"),It=[1105920,1112319],Pt=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Sr),Fn),Or),Ye=Object.keys(Pt).reduce(function(e,t){return e[t.toLowerCase()]=Pt[t],e},{}),Ui=Object.keys(Ye).reduce(function(e,t){var a=Ye[t];return e[t]=a[900]||C(Object.entries(a))[0][1],e},{});function Yi(e){var t=e.replace($a,"");return xa(C(t)[0]||"")}function Hi(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),r=a.replace($a,""),n=r.codePointAt(0),i=n>=It[0]&&n<=It[1],o=r.length===2?r[0]===r[1]:!1;return i||o||t}function Bi(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),n=isNaN(r)?"normal":r;return(Ye[a]||{})[n]||Ui[a]}function Et(e,t){var a="".concat(Cn).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var i=K(e.children),o=i.filter(function(se){return se.getAttribute(je)===t})[0],s=D.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),u=l.match(_n),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!u)return e.removeChild(o),r();if(u&&d!=="none"&&d!==""){var p=s.getPropertyValue("content"),v=Bi(l,c),x=Yi(p),b=u[0].startsWith("FontAwesome"),S=Hi(s),A=Qe(v,x),k=A;if(b){var I=ti(x);I.iconName&&I.prefix&&(A=I.iconName,v=I.prefix)}if(A&&!S&&(!o||o.getAttribute(Ge)!==v||o.getAttribute(Xe)!==k)){e.setAttribute(a,k),o&&e.removeChild(o);var O=ji(),g=O.extra;g.attributes[je]=t,ze(A,v).then(function(se){var Wa=Ze(f(f({},O),{},{icons:{main:se,mask:Ca()},prefix:v,iconName:k,extra:g,watchable:!0})),we=w.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(we,e.firstChild):e.appendChild(we),we.outerHTML=Wa.map(function(Ua){return oe(Ua)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function Gi(e){return Promise.all([Et(e,"::before"),Et(e,"::after")])}function Xi(e){return e.parentNode!==document.head&&!~On.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(je)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Vi=function(t){return!!t&&ca.some(function(a){return t.includes(a)})},Ki=function(t){if(!t)return[];var a=new Set,r=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var n=ue(r),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;if(Vi(o)){var s=ca.reduce(function(l,u){return l.replace(u,"")},o);s!==""&&s!=="*"&&a.add(s)}}}catch(l){n.e(l)}finally{n.f()}return a};function Ft(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(M){var a;if(t)a=e;else if(m.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var r=new Set,n=ue(document.styleSheets),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;try{var s=ue(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,c=Ki(u.selectorText),d=ue(c),p;try{for(d.s();!(p=d.n()).done;){var v=p.value;r.add(v)}}catch(b){d.e(b)}finally{d.f()}}}catch(b){s.e(b)}finally{s.f()}}catch(b){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){n.e(b)}finally{n.f()}if(!r.size)return;var x=Array.from(r).join(", ");try{a=e.querySelectorAll(x)}catch{}}return new Promise(function(b,S){var A=K(a).filter(Xi).map(Gi),k=et.begin("searchPseudoElements");_a(),Promise.all(A).then(function(){k(),Ue(),b()}).catch(function(){k(),Ue(),S()})})}}var Ji={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Ft,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?w:r;m.searchPseudoElements&&Ft(n)}}},Ct=!1,qi={mixout:function(){return{dom:{unwatch:function(){_a(),Ct=!0}}}},hooks:function(){return{bootstrap:function(){St(Me("mutationObserverCallbacks",{}))},noAuto:function(){Fi()},watch:function(a){var r=a.observeMutationsRoot;Ct?Ue():St(Me("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Nt=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},a)},Qi={mixout:function(){return{parse:{transform:function(a){return Nt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=Nt(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),u="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:p};return{tag:"g",attributes:f({},v.outer),children:[{tag:"g",attributes:f({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:f(f({},r.icon.attributes),v.path)}]}]}}}},Fe={x:0,y:0,width:"100%",height:"100%"};function Ot(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Zi(e){return e.tag==="g"?e.children:[e]}var eo={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),i=n?ye(n.split(" ").map(function(o){return o.trim()})):Ca();return i.prefix||(i.prefix=R()),a.mask=i,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,u=i.width,c=i.icon,d=o.width,p=o.icon,v=Bn({transform:l,containerWidth:d,iconWidth:u}),x={tag:"rect",attributes:f(f({},Fe),{},{fill:"white"})},b=c.children?{children:c.children.map(Ot)}:{},S={tag:"g",attributes:f({},v.inner),children:[Ot(f({tag:c.tag,attributes:f(f({},c.attributes),v.path)},b))]},A={tag:"g",attributes:f({},v.outer),children:[S]},k="mask-".concat(s||ct()),I="clip-".concat(s||ct()),O={tag:"mask",attributes:f(f({},Fe),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,A]},g={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:Zi(p)},O]};return r.push(g,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(k,")")},Fe)}),{children:r,attributes:n}}}},to={provides:function(t){var a=!1;D.matchMedia&&(a=D.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:f(f({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:f(f({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:f(f({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ao={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return a.symbol=i,a}}}},ro=[Vn,Di,Ri,zi,Wi,Ji,qi,Qi,eo,to,ao];ui(ro,{mixoutsTo:E});E.noAuto;var re=E.config;E.library;E.dom;var Ma=E.parse;E.findIconDefinition;E.toHtml;var no=E.icon;E.layer;E.text;E.counter;function io(e){return e=e-0,e===e}function Da(e){return io(e)?e:(e=e.replace(/[_-]+(.)?/g,(t,a)=>a?a.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}function oo(e){return e.charAt(0).toUpperCase()+e.slice(1)}var B=new Map,so=1e3;function lo(e){if(B.has(e))return B.get(e);const t={};let a=0;const r=e.length;for(;a<r;){const n=e.indexOf(";",a),i=n===-1?r:n,o=e.slice(a,i).trim();if(o){const s=o.indexOf(":");if(s>0){const l=o.slice(0,s).trim(),u=o.slice(s+1).trim();if(l&&u){const c=Da(l);t[c.startsWith("webkit")?oo(c):c]=u}}}a=i+1}if(B.size===so){const n=B.keys().next().value;n&&B.delete(n)}return B.set(e,t),t}function Ra(e,t,a={}){if(typeof t=="string")return t;const r=(t.children||[]).map(u=>Ra(e,u)),n=t.attributes||{},i={};for(const[u,c]of Object.entries(n))switch(!0){case u==="class":{i.className=c;break}case u==="style":{i.style=lo(String(c));break}case u.startsWith("aria-"):case u.startsWith("data-"):{i[u.toLowerCase()]=c;break}default:i[Da(u)]=c}const{style:o,"aria-label":s,...l}=a;return o&&(i.style=i.style?{...i.style,...o}:o),s&&(i["aria-label"]=s,i["aria-hidden"]="false"),e(t.tag,{...l,...i},...r)}var fo=Ra.bind(null,Lt.createElement),jt=(e,t)=>{const a=J.useId();return e||(t?a:void 0)},uo=class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},co="searchPseudoElementsFullScan"in re?"7.0.0":"6.0.0",mo=Number.parseInt(co)>=7,te="fa",T={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},vo={left:"fa-pull-left",right:"fa-pull-right"},ho={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},po={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},_={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function go(e){const t=re.cssPrefix||re.familyPrefix||te;return t===te?e:e.replace(new RegExp(`(?<=^|\\s)${te}-`,"g"),`${t}-`)}function bo(e){const{beat:t,fade:a,beatFade:r,bounce:n,shake:i,spin:o,spinPulse:s,spinReverse:l,pulse:u,fixedWidth:c,inverse:d,border:p,flip:v,size:x,rotation:b,pull:S,swapOpacity:A,rotateBy:k,widthAuto:I,className:O}=e,g=[];return O&&g.push(...O.split(" ")),t&&g.push(T.beat),a&&g.push(T.fade),r&&g.push(T.beatFade),n&&g.push(T.bounce),i&&g.push(T.shake),o&&g.push(T.spin),l&&g.push(T.spinReverse),s&&g.push(T.spinPulse),u&&g.push(T.pulse),c&&g.push(_.fixedWidth),d&&g.push(_.inverse),p&&g.push(_.border),v===!0&&g.push(_.flip),(v==="horizontal"||v==="both")&&g.push(_.flipHorizontal),(v==="vertical"||v==="both")&&g.push(_.flipVertical),x!=null&&g.push(po[x]),b!=null&&b!==0&&g.push(ho[b]),S!=null&&g.push(vo[S]),A&&g.push(_.swapOpacity),mo?(k&&g.push(_.rotateBy),I&&g.push(_.widthAuto),(re.cssPrefix||re.familyPrefix||te)===te?g:g.map(go)):g}var yo=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function Tt(e){if(e)return yo(e)?e:Ma.icon(e)}function xo(e){return Object.keys(e)}var _t=new uo("FontAwesomeIcon"),za={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},wo=new Set(Object.keys(za)),Q=Lt.forwardRef((e,t)=>{const a={...za,...e},{icon:r,mask:n,symbol:i,title:o,titleId:s,maskId:l,transform:u}=a,c=jt(l,!!n),d=jt(s,!!o),p=Tt(r);if(!p)return _t.error("Icon lookup is undefined",r),null;const v=bo(a),x=typeof u=="string"?Ma.transform(u):u,b=Tt(n),S=no(p,{...v.length>0&&{classes:v},...x&&{transform:x},...b&&{mask:b},symbol:i,title:o,titleId:d,maskId:c});if(!S)return _t.error("Could not find icon",p),null;const{abstract:A}=S,k={ref:t};for(const I of xo(a))wo.has(I)||(k[I]=a[I]);return fo(A[0],k)});Q.displayName="FontAwesomeIcon";/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var So={prefix:"fas",iconName:"chevron-up",icon:[448,512,[],"f077","M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},Ao={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},ko=Ao,Io={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Po={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};const Eo="/klyora/assets/Klyora-logo-Cp562aYi.png",Co=()=>{const[e,t]=J.useState(!1),[a,r]=J.useState(!1),[n,i]=J.useState(!1);return J.useEffect(()=>{const o=()=>{window.scrollY>50?t(!0):t(!1)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)}),console.log(a),y.jsxs("div",{className:`home-contents ${e&&"scrolled"}`,children:[y.jsx("div",{className:"klyora-icon-container",children:y.jsx("img",{src:Eo,alt:""})}),y.jsx("div",{className:`navbar-container ${n&&"show-navmenu"} `,children:y.jsxs("ul",{className:"navs-lists",children:[y.jsx("li",{children:y.jsx(j,{to:"/",onClick:()=>i(!1),className:`${e&&"scrolled"}`,children:"Home"})}),y.jsxs("li",{className:"has-submenu",children:[y.jsxs("div",{className:`arrows ${e&&"scrolled"}`,children:["Pages",a&&y.jsx(Q,{icon:So,onClick:()=>r(!a)}),!a&&y.jsx(Q,{icon:Io,onClick:()=>r(!a)})]}),y.jsxs("ul",{className:`dropdown ${a&&"show-dropdown"}`,children:[y.jsx("li",{onClick:()=>i(!1),children:y.jsx(j,{to:"/about",children:"About Us"})}),y.jsx("li",{onClick:()=>i(!1),children:y.jsx(j,{to:"/signin",children:"Sign In"})}),y.jsx("li",{onClick:()=>i(!1),children:y.jsx(j,{to:"/signup",children:"Sign Up"})}),y.jsx("li",{onClick:()=>i(!1),children:y.jsx(j,{to:"/resetpassword",children:"Reset Password"})})]})]}),y.jsx("li",{onClick:()=>i(!1),children:y.jsx(j,{to:"/",className:`${e&&"scrolled"}`,children:"Features"})}),y.jsx("li",{onClick:()=>i(!1),children:y.jsx(j,{to:"/",className:`${e&&"scrolled"}`,children:"Community"})}),y.jsx("li",{onClick:()=>i(!1),children:y.jsx(j,{to:"/contact",className:`${e&&"scrolled"}`,children:"Contact"})})]})}),y.jsxs("div",{className:"arrow-container",children:[!n&&y.jsx(Q,{icon:Po,onClick:()=>i(!n),className:`${e&&"scrolled"}`}),n&&y.jsx(Q,{icon:ko,onClick:()=>i(!n),className:`${e&&"scrolled"}`})]}),y.jsx(j,{to:"/signup",className:`get-started ${e&&"scrolled"}`,children:"Launch DApp"})]})};export{Co as default};
