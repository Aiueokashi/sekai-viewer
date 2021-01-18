(this["webpackJsonpsekai-viewer"]=this["webpackJsonpsekai-viewer"]||[]).push([[57],{290:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(223),n=Object(r.a)((function(e){return{header:{fontWeight:"bold"},content:{marginTop:e.spacing(3),marginBottom:e.spacing(3),marginLeft:"auto",marginRight:"auto"},alert:{margin:e.spacing(1,0)},bold:{fontWeight:e.typography.fontWeightBold},capitalize:{textTransform:"capitalize"},tabpanel:{padding:e.spacing("1%",0,0,0)},"grid-out":{padding:e.spacing("1%","0")}}}))},296:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(8),n=a(223),s=Object(n.a)((function(e){return{container:{margin:e.spacing(1,0),padding:e.spacing(1,2)},caption:Object(r.a)({},e.breakpoints.up("md"),{textAlign:"right"}),sliderContainer:Object(r.a)({},e.breakpoints.up("md"),{paddingRight:e.spacing(5)}),inputHidden:{display:"none"},noDecoration:{textDecoration:"none","&:hover":{textDecoration:"underline"},color:e.palette.text.primary}}}))},921:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(6),s=a.n(n),i=a(10),o=a(11),c=a(53),u=a(278),l=a(279),d=a(446),j=a(231),p=a(408),b=a(277),m=a(208),h=a(327),g=a(273),O=a(922),x=a(592),f=a(351),w=a(382),v=a(0),y=a(187),k=a(19),P=a(42),A=a(501),S=a.n(A),I=a(296),C=a(290),W=a(107),_=a(113),D=a(37);t.default=function(){var e=Object(C.a)(),t=Object(I.a)(),a=Object(y.a)().t,n=Object(_.a)(),A=Object(k.g)(),T=Object(v.useContext)(D.a).languages,q=Object(W.d)().postRegisterLocal,z=Object(v.useState)(0),B=Object(o.a)(z,2),F=B[0],L=B[1];Object(v.useEffect)((function(){document.title=a("title:signup")}),[a]);var N=Object(v.useCallback)((function(e){var t={};return e.username||(t.username=a("auth:error.required")),e.password?e.password.length<6?t.password=a("auth:error.passwordTooShort"):F<3&&(t.password=a("auth:error.passwordStrength")):t.password=a("auth:error.required"),e.confirmPassword?e.confirmPassword!==e.password&&(t.confirmPassword=a("auth:error.confirmPasswordMismatch")):t.confirmPassword=a("auth:error.required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email=a("auth:error.emailInvalid")):t.email=a("auth:error.required"),t}),[F,a]);return Object(r.jsxs)(v.Fragment,{children:[Object(r.jsx)(c.a,{variant:"h6",className:e.header,children:a("common:signup")}),Object(r.jsx)(u.a,{className:e.content,maxWidth:"md",children:Object(r.jsx)(f.c,{initialValues:{username:"",email:"",password:"",confirmPassword:"",languages:[]},validate:N,onSubmit:function(){var e=Object(i.a)(s.a.mark((function e(t,r){var i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.setErrors,e.prev=1,e.next=4,q(t);case 4:o=e.sent,n.user=o.user,A.push("/user/confirmation"),localStorage.setItem("lastUserCheck",String((new Date).getTime())),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),"Auth.form.error.email.taken"===e.t0.id?i({email:a("auth:error.email_taken")}):"Auth.form.error.username.taken"===e.t0.id&&i({username:a("auth:error.usernameTaken")});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){var n=e.submitForm,s=e.isSubmitting,i=e.dirty,o=e.isValid,u=e.values;return Object(r.jsx)(l.a,{container:!0,justify:"center",children:Object(r.jsx)(l.a,{item:!0,children:Object(r.jsxs)(f.b,{children:[Object(r.jsx)(f.a,{component:w.b,name:"username",type:"text",label:a("auth:signup.label.username"),InputProps:{startAdornment:Object(r.jsx)(d.a,{position:"start",children:Object(r.jsx)(g.a,{})})}}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(f.a,{component:w.b,name:"email",type:"email",label:a("auth:signup.label.email"),InputProps:{startAdornment:Object(r.jsx)(d.a,{position:"start",children:Object(r.jsx)(O.a,{})})}}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(f.a,{component:w.b,name:"password",type:"password",label:a("auth:signup.label.password"),InputProps:{startAdornment:Object(r.jsx)(d.a,{position:"start",children:Object(r.jsx)(x.a,{})})}}),Object(r.jsx)("br",{}),Object(r.jsx)(S.a,{password:u.password,minLength:6,onChangeScore:function(e){return L(e)},scoreWords:[a("auth:password.too_weak"),a("auth:password.weak"),a("auth:password.okay"),a("auth:password.good"),a("auth:password.strong")],shortScoreWord:a("auth:password.too_short")}),Object(r.jsx)("br",{}),Object(r.jsx)(f.a,{component:w.b,name:"confirmPassword",type:"password",label:a("auth:signup.label.confirm_password"),InputProps:{startAdornment:Object(r.jsx)(d.a,{position:"start",children:Object(r.jsx)(x.a,{})})}}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)(j.a,{children:[Object(r.jsx)(p.a,{shrink:!0,htmlFor:"language-select",children:a("auth:signup.label.prefer_langs")}),Object(r.jsx)(f.a,{component:w.a,type:"text",name:"languages",inputProps:{name:"languages",id:"language-select",multiple:!0},style:{width:210},children:T.filter((function(e){return e.enabled})).map((function(e){return Object(r.jsx)(b.a,{value:e.id,children:e.name},"lang-".concat(e.code))}))})]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(P.b,{to:"/user/login",className:t.noDecoration,children:Object(r.jsx)(c.a,{variant:"caption",color:"textPrimary",children:a("auth:already-have-account")})}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"submit",style:{display:"none"}}),Object(r.jsxs)(l.a,{container:!0,alignItems:"center",spacing:1,children:[Object(r.jsx)(l.a,{item:!0,children:Object(r.jsxs)(m.a,{variant:"contained",color:"primary",disabled:s||!i||!o,onClick:n,children:[a("auth:common.signupButton")," "]})}),s&&Object(r.jsx)(l.a,{item:!0,children:Object(r.jsx)(h.a,{size:24})})]})]})})})}})})]})}}}]);