(this["webpackJsonpsekai-viewer"]=this["webpackJsonpsekai-viewer"]||[]).push([[30],{1038:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(29),r=a(11),s=a(53),i=a(278),o=a(279),l=a(240),u=a(133),d=a(341),j=a(389),b=a(997),O=a(998),f=a(999),m=a(1e3),p=a(406),h=a(407),v=a(1001),x=a.n(v),g=a(404),y=a.n(g),N=a(405),C=a.n(N),w=a(0),S=a(187),k=a(37),_=a(336),E=a(296),T=a(290),z=a(289),P=a(297),I=a(223),M=a(325),V=a(349),H=a(378),L=a(352),R=a(280),D=a(292),F=Object(I.a)((function(e){return{media:{marginTop:"0.5em",paddingTop:"75%",backgroundSize:"contain"},card:{cursor:"pointer"},subheader:{}}})),B=function(e){var t=e.data,a=F(),n=Object(w.useState)(""),i=Object(r.a)(n,2),o=i[0],l=i[1];return Object(w.useEffect)((function(){t&&Object(z.c)("stamp/".concat(t.assetbundleName,"_rip/").concat(t.assetbundleName,"/").concat(t.assetbundleName,".webp"),l)}),[t]),t?Object(c.jsx)(H.a,{href:o,target:"_blank",style:{textDecoration:"none"},children:Object(c.jsxs)(M.a,{className:a.card,children:[Object(c.jsx)(L.a,{className:a.media,image:o,title:t.name}),Object(c.jsx)(V.a,{style:{paddingBottom:"16px"},children:Object(c.jsx)(D.b,{contentKey:"stamp_name:".concat(t.id),original:t.name.replace(/\[.*\]/,"").replace(/^.*\uff1a/,""),originalProps:{variant:"subtitle1"},translatedProps:{variant:"subtitle1"}})})]})}):Object(c.jsxs)(M.a,{className:a.card,children:[Object(c.jsx)(R.a,{variant:"rect",className:a.media}),Object(c.jsx)(V.a,{children:Object(c.jsx)(s.a,{variant:"subtitle1",className:a.subheader,children:Object(c.jsx)(R.a,{variant:"text",width:"90%"})})})]})},A=a(306),J=a(984),K=a(651),W=B;t.default=function(){var e=Object(T.a)(),t=Object(E.a)(),a=Object(S.a)().t,v=Object(w.useContext)(k.a).contentTransMode,g=Object(z.f)(v),N=Object(z.e)("stamps"),I=Object(r.a)(N,1)[0],M=Object(w.useState)([]),V=Object(r.a)(M,2),H=V[0],L=V[1],R=Object(w.useState)([]),D=Object(r.a)(R,2),F=D[0],B=D[1],Z=Object(w.useState)(!1),q=Object(r.a)(Z,2),Q=q[0],$=q[1],G=Object(w.useState)(localStorage.getItem("stamp-list-update-sort")||"desc"),U=Object(r.a)(G,2),X=U[0],Y=U[1],ee=Object(w.useState)(localStorage.getItem("stamp-list-filter-sort-by")||"id"),te=Object(r.a)(ee,2),ae=te[0],ce=te[1],ne=Object(w.useReducer)(_.b,[]),re=Object(r.a)(ne,2),se=re[0],ie=re[1],oe=Object(w.useState)(0),le=Object(r.a)(oe,2),ue=le[0],de=le[1],je=Object(w.useState)(12),be=Object(r.a)(je,1)[0],Oe=Object(w.useState)(!0),fe=Object(r.a)(Oe,2),me=fe[0],pe=fe[1],he=Object(w.useState)(!1),ve=Object(r.a)(he,2),xe=ve[0],ge=ve[1],ye=Object(w.useCallback)((function(e,t){return F.slice(t*(e-1),t*e)}),[F]),Ne=Object(w.useCallback)((function(e,t){xe&&(e[0].isIntersecting&&me&&(!F.length||F.length>ue*be)?(de((function(e){return e+1})),pe(!1)):F.length&&F.length<=ue*be&&t(!1))}),[F.length,xe,me,be,ue]);Object(w.useEffect)((function(){document.title=a("title:stampList")}),[a]),Object(w.useEffect)((function(){if(I&&I.length){var e=I;e=se.length?I.filter((function(e){return se.includes(e.characterId1)})):I,"desc"===X?e=e.sort((function(e,t){return t[ae]-e[ae]})):"asc"===X&&(e=e.sort((function(e,t){return e[ae]-t[ae]}))),B(e),L([]),de(0)}}),[se,I,L,de,B,X,ae]),Object(w.useEffect)((function(){L((function(e){return[].concat(Object(n.a)(e),Object(n.a)(ye(ue,be)))})),pe(!0)}),[ue,be,pe,I,ye]),Object(w.useEffect)((function(){ge(Boolean(I&&I.length))}),[ge,I]);var Ce=Object(w.useCallback)((function(e,t){t&&(Y(t),localStorage.setItem("gacha-list-filter-sort-type",t))}),[]),we=Object(w.useCallback)((function(e,t){t&&(ce(t),localStorage.setItem("gacha-list-filter-sort-by",t))}),[]);return Object(c.jsxs)(w.Fragment,{children:[Object(c.jsx)(s.a,{variant:"h6",className:e.header,children:a("common:stamp")}),Object(c.jsxs)(i.a,{className:e.content,children:[Object(c.jsxs)(o.a,{container:!0,justify:"space-between",children:[Object(c.jsx)(o.a,{item:!0,children:Object(c.jsxs)(o.a,{container:!0,spacing:1,children:[Object(c.jsx)(o.a,{item:!0,children:Object(c.jsxs)(J.a,{value:X,color:"primary",exclusive:!0,onChange:Ce,children:[Object(c.jsx)(K.a,{value:"asc",children:"asc"===X?Object(c.jsx)(b.a,{}):Object(c.jsx)(O.a,{})}),Object(c.jsx)(K.a,{value:"desc",children:"desc"===X?Object(c.jsx)(f.a,{}):Object(c.jsx)(m.a,{})})]})}),Object(c.jsx)(o.a,{item:!0,children:Object(c.jsx)(J.a,{size:"medium",value:ae,color:"primary",exclusive:!0,onChange:we,children:Object(c.jsx)(K.a,{value:"id",children:Object(c.jsx)(x.a,{})})})})]})}),Object(c.jsx)(o.a,{item:!0,children:Object(c.jsxs)(K.a,{value:"check",selected:Q,onChange:function(){return $((function(e){return!e}))},children:[Q?Object(c.jsx)(y.a,{}):Object(c.jsx)(C.a,{}),Q?Object(c.jsx)(p.a,{}):Object(c.jsx)(h.a,{})]})})]}),Object(c.jsx)("br",{}),Object(c.jsx)(l.a,{in:Q,children:Object(c.jsx)(u.a,{className:t.container,children:Object(c.jsx)(o.a,{container:!0,direction:"column",spacing:1,children:Object(c.jsxs)(o.a,{item:!0,container:!0,xs:12,alignItems:"center",justify:"space-between",children:[Object(c.jsx)(o.a,{item:!0,xs:12,md:1,children:Object(c.jsx)(s.a,{classes:{root:t.caption},children:a("filter:character.caption")})}),Object(c.jsx)(o.a,{item:!0,xs:12,md:10,children:Object(c.jsx)(o.a,{container:!0,spacing:1,children:Array.from({length:26}).map((function(e,t){return Object(c.jsx)(o.a,{item:!0,children:Object(c.jsx)(d.a,{clickable:!0,color:se.includes(t+1)?"primary":"default",avatar:Object(c.jsx)(j.a,{alt:g(t+1),src:P.h["CharaIcon".concat(t+1)]}),label:g(t+1),onClick:function(){se.includes(t+1)?ie({type:"remove",payload:t+1}):ie({type:"add",payload:t+1})}})},"chara-filter-"+t)}))})})]})})})}),Object(A.a)({ViewComponent:W,callback:Ne,data:H,gridSize:{xs:6,sm:4,md:3,lg:2}})]})]})}},292:function(e,t,a){"use strict";a.d(t,"b",(function(){return j})),a.d(t,"a",(function(){return b})),a.d(t,"c",(function(){return O}));var c=a(11),n=a(1),r=a(26),s=a(53),i=a(279),o=a(0),l=a(37),u=a(289),d=a(45),j=function(e){var t=e.contentKey,a=e.original,c=e.originalProps,u=e.translatedProps,j=e.assetTOptions,b=Object(o.useContext)(l.a).contentTransMode,O=Object(d.c)().assetT;switch(b){case"original":return Object(n.jsx)(s.a,Object(r.a)(Object(r.a)({},c),{},{children:a}));case"translated":return Object(n.jsx)(s.a,Object(r.a)(Object(r.a)({},u),{},{color:"textPrimary",children:O(t,a,j)}));case"both":return Object(n.jsxs)(i.a,{container:!0,direction:"column",children:[Object(n.jsx)(s.a,Object(r.a)(Object(r.a)({},c),{},{color:"textPrimary",children:a})),Object(n.jsx)(s.a,Object(r.a)(Object(r.a)({},u),{},{color:"textSecondary",children:O(t,a,j)}))]})}},b=function(e){var t=e.characterId,a=e.originalProps,j=e.translatedProps,b=e.assetTOptions,O=Object(o.useContext)(l.a).contentTransMode,f=Object(u.e)("gameCharacters"),m=Object(c.a)(f,1)[0],p=Object(d.c)(),h=p.assetT,v=p.assetI18n,x=Object(o.useState)(),g=Object(c.a)(x,2),y=g[0],N=g[1];if(Object(o.useEffect)((function(){m&&N(m.find((function(e){return e.id===t})))}),[m,t]),!y)return Object(n.jsx)(s.a,{});switch(O){case"original":return Object(n.jsxs)(s.a,Object(r.a)(Object(r.a)({},a),{},{color:"textPrimary",children:[y.firstName," ",y.givenName]}));case"translated":return["zh-CN","zh-TW","ko","ja"].includes(v.language)?Object(n.jsxs)(s.a,Object(r.a)(Object(r.a)({},j),{},{color:"textPrimary",children:[y.firstName?h("character_name:".concat(t,".firstName"),y.firstName,b):""," ",h("character_name:".concat(t,".givenName"),y.givenName,b)]})):Object(n.jsxs)(s.a,{children:[h("character_name:".concat(t,".givenName"),y.givenName,b)," ",y.firstName?h("character_name:".concat(t,".firstName"),y.firstName,b):""]});case"both":return Object(n.jsxs)(i.a,{container:!0,direction:"column",children:[Object(n.jsxs)(s.a,Object(r.a)(Object(r.a)({},a),{},{children:[y.firstName," ",y.givenName]})),["zh-CN","zh-TW","ko","ja"].includes(v.language)?Object(n.jsxs)(s.a,Object(r.a)(Object(r.a)({color:"textSecondary"},j),{},{children:[y.firstName?h("character_name:".concat(t,".firstName"),y.firstName,b):""," ",h("character_name:".concat(t,".givenName"),y.givenName,b)]})):Object(n.jsxs)(s.a,Object(r.a)(Object(r.a)({color:"textSecondary"},j),{},{children:[h("character_name:".concat(t,".givenName"),y.givenName,b)," ",y.firstName?h("character_name:".concat(t,".firstName"),y.firstName,b):""]}))]})}},O=function(e){var t=e.releaseCondId,a=e.originalProps,r=e.translatedProps,s=e.assetTOptions,i=Object(u.e)("releaseConditions"),l=Object(c.a)(i,1)[0],d=Object(o.useState)(),b=Object(c.a)(d,2),O=b[0],f=b[1];if(Object(o.useEffect)((function(){l&&f(l.find((function(e){return e.id===t})))}),[t,l]),O){var m="";switch(O.releaseConditionType){case"none":m="release_cond:none_".concat(O.id);break;case"card_level":m="release_cond:card_level",s=Object.assign({},s,{level:O.releaseConditionTypeLevel});break;case"unit_rank":m="release_cond:unit_rank_".concat(O.releaseConditionTypeId),s=Object.assign({},s,{rank:O.releaseConditionTypeLevel});break;case"event_point":m="release_cond:event_point",s=Object.assign({},s,{point:O.releaseConditionTypeQuantity});break;default:m="release_cond:".concat(O.releaseConditionType)}return Object(n.jsx)(j,{contentKey:m,original:O.sentence,originalProps:a,translatedProps:r,assetTOptions:s})}return Object(n.jsx)("div",{})}},296:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a(8),n=a(223),r=Object(n.a)((function(e){return{container:{margin:e.spacing(1,0),padding:e.spacing(1,2)},caption:Object(c.a)({},e.breakpoints.up("md"),{textAlign:"right"}),sliderContainer:Object(c.a)({},e.breakpoints.up("md"),{paddingRight:e.spacing(5)}),inputHidden:{display:"none"},noDecoration:{textDecoration:"none","&:hover":{textDecoration:"underline"},color:e.palette.text.primary}}}))},306:function(e,t,a){"use strict";var c=a(1),n=a(11),r=a(26),s=a(20),i=a(241),o=a(279),l=a(0),u=["xs","sm","md","lg","xl"],d={xs:12,md:4};t.a=function(e){var t=e.ViewComponent,a=e.callback,j=e.data,b=e.gridSize,O=e.viewProps,f=e.onComponentClick,m=function(e){var t=Object(r.a)({},e||d);return u.forEach((function(e,a,c){t[e]||(t[e]=a>0?t[c[a-1]]:12)})),t}(b),p=function(){var e=Object(s.a)();return u.map((function(t){return Object(i.a)(e.breakpoints.down(t))&&t})).find(Boolean)||u[u.length-1]}(),h=Object(l.useState)(!0),v=Object(n.a)(h,2),x=v[0],g=v[1],y=Object(l.useCallback)((function(e){return a(e,g)}),[a]),N=Object(l.useRef)(null);Object(l.useEffect)((function(){g(!0)}),[j]),Object(l.useEffect)((function(){var e=new IntersectionObserver(y,{threshold:.5}),t=N.current;return t&&e.observe(t),function(){t&&e.disconnect()}}),[y]);var C=12/m[p],w=j.length?C:2*C;return Object(c.jsxs)(l.Fragment,{children:[Object(c.jsx)(o.a,{container:!0,direction:"row",spacing:1,children:j.length?j.map((function(e,a){return Object(c.jsx)(o.a,{item:!0,xs:m.xs,sm:m.sm,md:m.md,lg:m.lg,xl:m.xl,onClick:function(){f&&f(e)},children:Object(c.jsx)(t,Object(r.a)({data:e,index:a},O))},e.id)})):null}),Object(c.jsx)(o.a,{container:!0,direction:"row",ref:N,style:{display:x?"flex":"none",paddingTop:"4px"},spacing:1,children:Array.from({length:w}).map((function(e,a){return Object(c.jsx)(o.a,{item:!0,xs:m.xs,sm:m.sm,md:m.md,lg:m.lg,xl:m.xl,children:Object(c.jsx)(t,{})},"empty-".concat(a))}))})]})}},325:function(e,t,a){"use strict";var c=a(2),n=a(3),r=a(0),s=(a(5),a(4)),i=a(133),o=a(7),l=r.forwardRef((function(e,t){var a=e.classes,o=e.className,l=e.raised,u=void 0!==l&&l,d=Object(n.a)(e,["classes","className","raised"]);return r.createElement(i.a,Object(c.a)({className:Object(s.a)(a.root,o),elevation:u?8:1,ref:t},d))}));t.a=Object(o.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},336:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return i})),a.d(t,"e",(function(){return o}));var c=a(29);function n(e,t){switch(t.type){case"add":return[].concat(Object(c.a)(e),[t.payload]);case"remove":return[].concat(Object(c.a)(e.slice(0,e.indexOf(t.payload))),Object(c.a)(e.slice(e.indexOf(t.payload)+1)));case"reset":return[];default:throw new Error}}function r(e,t){switch(t.type){case"add":return[].concat(Object(c.a)(e),[t.payload]);case"remove":return[].concat(Object(c.a)(e.slice(0,e.indexOf(t.payload))),Object(c.a)(e.slice(e.indexOf(t.payload)+1)));case"reset":return[];default:throw new Error}}function s(e,t){switch(t.type){case"add":return[].concat(Object(c.a)(e),[t.payload]);case"remove":return[].concat(Object(c.a)(e.slice(0,e.indexOf(t.payload))),Object(c.a)(e.slice(e.indexOf(t.payload)+1)));case"reset":return[];default:throw new Error}}function i(e,t){switch(t.type){case"add":return[].concat(Object(c.a)(e),[t.payload]);case"remove":return[].concat(Object(c.a)(e.slice(0,e.indexOf(t.payload))),Object(c.a)(e.slice(e.indexOf(t.payload)+1)));case"reset":return[];default:throw new Error}}function o(e,t){switch(t.type){case"add":var a=[].concat(Object(c.a)(e),[t.payload]);return localStorage.setItem("team-build-array",JSON.stringify(a)),a;case"remove":var n=[].concat(Object(c.a)(e.slice(0,t.payload)),Object(c.a)(e.slice(t.payload+1)));return localStorage.setItem("team-build-array",JSON.stringify(n)),n;case"replace":var r=[].concat(Object(c.a)(e.slice(0,t.payload.id)),[t.payload.data],Object(c.a)(e.slice(t.payload.id+1)));return localStorage.setItem("team-build-array",JSON.stringify(r)),r;default:throw new Error}}},349:function(e,t,a){"use strict";var c=a(2),n=a(3),r=a(0),s=(a(5),a(4)),i=a(7),o=r.forwardRef((function(e,t){var a=e.classes,i=e.className,o=e.component,l=void 0===o?"div":o,u=Object(n.a)(e,["classes","className","component"]);return r.createElement(l,Object(c.a)({className:Object(s.a)(a.root,i),ref:t},u))}));t.a=Object(i.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(o)},378:function(e,t,a){"use strict";var c=a(2),n=a(3),r=a(0),s=(a(5),a(4)),i=a(9),o=a(7),l=a(103),u=a(12),d=a(53),j=r.forwardRef((function(e,t){var a=e.classes,o=e.className,j=e.color,b=void 0===j?"primary":j,O=e.component,f=void 0===O?"a":O,m=e.onBlur,p=e.onFocus,h=e.TypographyClasses,v=e.underline,x=void 0===v?"hover":v,g=e.variant,y=void 0===g?"inherit":g,N=Object(n.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),C=Object(l.a)(),w=C.isFocusVisible,S=C.onBlurVisible,k=C.ref,_=r.useState(!1),E=_[0],T=_[1],z=Object(u.a)(t,k);return r.createElement(d.a,Object(c.a)({className:Object(s.a)(a.root,a["underline".concat(Object(i.a)(x))],o,E&&a.focusVisible,"button"===f&&a.button),classes:h,color:b,component:f,onBlur:function(e){E&&(S(),T(!1)),m&&m(e)},onFocus:function(e){w(e)&&T(!0),p&&p(e)},ref:z,variant:y},N))}));t.a=Object(o.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(j)},389:function(e,t,a){"use strict";var c=a(2),n=a(3),r=a(0),s=(a(5),a(4)),i=a(7),o=a(13),l=Object(o.a)(r.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var u=r.forwardRef((function(e,t){var a=e.alt,i=e.children,o=e.classes,u=e.className,d=e.component,j=void 0===d?"div":d,b=e.imgProps,O=e.sizes,f=e.src,m=e.srcSet,p=e.variant,h=void 0===p?"circle":p,v=Object(n.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),x=null,g=function(e){var t=e.src,a=e.srcSet,c=r.useState(!1),n=c[0],s=c[1];return r.useEffect((function(){if(t||a){s(!1);var e=!0,c=new Image;return c.src=t,c.srcSet=a,c.onload=function(){e&&s("loaded")},c.onerror=function(){e&&s("error")},function(){e=!1}}}),[t,a]),n}({src:f,srcSet:m}),y=f||m,N=y&&"error"!==g;return x=N?r.createElement("img",Object(c.a)({alt:a,src:f,srcSet:m,sizes:O,className:o.img},b)):null!=i?i:y&&a?a[0]:r.createElement(l,{className:o.fallback}),r.createElement(j,Object(c.a)({className:Object(s.a)(o.root,o.system,o[h],u,!N&&o.colorDefault),ref:t},v),x)}));t.a=Object(i.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(u)},404:function(e,t,a){"use strict";var c;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,((c=a(55))&&c.__esModule?c:{default:c}).default)("M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z");t.default=n},405:function(e,t,a){"use strict";var c;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,((c=a(55))&&c.__esModule?c:{default:c}).default)("M15,19.88C15.04,20.18 14.94,20.5 14.71,20.71C14.32,21.1 13.69,21.1 13.3,20.71L9.29,16.7C9.06,16.47 8.96,16.16 9,15.87V10.75L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L15,10.75V19.88M7.04,5L11,10.06V15.58L13,17.58V10.05L16.96,5H7.04Z");t.default=n},406:function(e,t,a){"use strict";var c=a(0),n=a(13);t.a=Object(n.a)(c.createElement("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"}),"Sort")},407:function(e,t,a){"use strict";var c=a(0),n=a(13);t.a=Object(n.a)(c.createElement("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"}),"SortOutlined")}}]);