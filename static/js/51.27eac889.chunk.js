(this["webpackJsonpsekai-viewer"]=this["webpackJsonpsekai-viewer"]||[]).push([[51],{290:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(223),i=Object(n.a)((function(e){return{header:{fontWeight:"bold"},content:{marginTop:e.spacing(3),marginBottom:e.spacing(3),marginLeft:"auto",marginRight:"auto"},alert:{margin:e.spacing(1,0)},bold:{fontWeight:e.typography.fontWeightBold},capitalize:{textTransform:"capitalize"},tabpanel:{padding:e.spacing("1%",0,0,0)},"grid-out":{padding:e.spacing("1%","0")}}}))},446:function(e,t,a){"use strict";var n=a(2),i=a(3),r=a(0),s=(a(5),a(4)),c=a(53),o=a(7),l=a(70),d=r.forwardRef((function(e,t){var a=e.children,o=e.classes,d=e.className,u=e.component,b=void 0===u?"div":u,m=e.disablePointerEvents,p=void 0!==m&&m,j=e.disableTypography,h=void 0!==j&&j,O=e.position,g=e.variant,f=Object(i.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),v=Object(l.b)()||{},x=g;return g&&v.variant,v&&!x&&(x=v.variant),r.createElement(l.a.Provider,{value:null},r.createElement(b,Object(n.a)({className:Object(s.a)(o.root,d,p&&o.disablePointerEvents,v.hiddenLabel&&o.hiddenLabel,"filled"===x&&o.filled,{start:o.positionStart,end:o.positionEnd}[O],"dense"===v.margin&&o.marginDense),ref:t},f),"string"!==typeof a||h?a:r.createElement(c.a,{color:"textSecondary"},a)))}));t.a=Object(o.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(d)},922:function(e,t,a){"use strict";var n=a(0),i=a(13);t.a=Object(i.a)(n.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),"Email")},923:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(6),r=a.n(i),s=a(10),c=a(11),o=a(53),l=a(278),d=a(279),u=a(446),b=a(208),m=a(327),p=a(288),j=a(922),h=a(284),O=a(351),g=a(382),f=a(0),v=a(187),x=a(290),y=a(107);t.default=function(){var e=Object(x.a)(),t=Object(v.a)().t,a=Object(y.d)().postForgotPassword,i=Object(f.useState)(!1),w=Object(c.a)(i,2),E=w[0],_=w[1],S=Object(f.useState)(""),P=Object(c.a)(S,2),k=P[0],L=P[1],N=Object(f.useState)(!1),z=Object(c.a)(N,2),A=z[0],C=z[1];return Object(f.useEffect)((function(){document.title=t("title:reset_password")}),[t]),Object(n.jsxs)(f.Fragment,{children:[Object(n.jsx)(o.a,{variant:"h6",className:e.header,children:t("common:reset_password")}),Object(n.jsx)(h.a,{severity:"warning",className:e.alert,children:t("auth:reset_password_no_provider")}),Object(n.jsx)(l.a,{className:e.content,maxWidth:"md",children:Object(n.jsx)(O.c,{initialValues:{email:""},validate:function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email=t("auth:error.emailInvalid")):a.email=t("auth:error.required"),a},onSubmit:function(){var e=Object(s.a)(r.a.mark((function e(n,i){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.setErrors,e.prev=1,e.next=4,a(n.email);case 4:C(!0),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),_(!0),L(t("auth:reset_password_wrong_email"));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){var a=e.submitForm,i=e.isSubmitting,r=(e.errors,e.dirty),s=e.isValid;return Object(n.jsx)(d.a,{container:!0,justify:"center",children:Object(n.jsxs)(O.b,{children:[Object(n.jsx)(O.a,{component:g.b,name:"email",type:"email",label:t("auth:signup.label.email"),InputProps:{startAdornment:Object(n.jsx)(u.a,{position:"start",children:Object(n.jsx)(j.a,{})})}}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"submit",style:{display:"none"}}),Object(n.jsx)(d.a,{container:!0,spacing:1,children:Object(n.jsxs)(d.a,{item:!0,xs:12,container:!0,alignItems:"center",spacing:1,children:[Object(n.jsx)(d.a,{item:!0,children:Object(n.jsx)(b.a,{variant:"contained",color:"primary",disabled:i||!r||!s,onClick:a,children:t("auth:common.sendResetPasswordEmailButton")})}),i&&Object(n.jsx)(d.a,{item:!0,children:Object(n.jsx)(m.a,{size:24})})]})})]})})}})}),Object(n.jsx)(p.a,{open:E,autoHideDuration:3e3,onClose:function(){_(!1)},children:Object(n.jsx)(h.a,{onClose:function(){_(!1)},severity:"error",children:k})}),Object(n.jsx)(p.a,{open:A,onClose:function(){C(!1)},children:Object(n.jsx)(h.a,{onClose:function(){C(!1)},severity:"success",children:t("auth:reset_password_email_sent")})})]})}}}]);