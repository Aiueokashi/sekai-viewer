(this["webpackJsonpsekai-viewer"]=this["webpackJsonpsekai-viewer"]||[]).push([[54],{1016:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(26),o=n(8),c=n(6),s=n.n(c),r=n(29),l=n(10),u=n(11),d=n(0),m=n(979),b=n(43),h=n.n(b),p=n(284),j=n(983),_=n(20),k=n(53),f=n(279),O=n(456),v=n(208),x=n(278),w=n(462),g=n(269),y=n(133),M=n(350),C=n(190),S=n(211),T=n(277),z=n(914),R=n(187),F=n(290),N=n(459),L=n(1017),q=n(1018),E=n(1019),I=n(1020),P=n(1021),W=n(915),A=n.n(W),B=n(461),D=n(916),J=n.n(D),V=n(917);t.default=function(){var e=Object(F.a)(),t=Object(R.a)().t,n=Object(_.a)(),c=Object(d.useMemo)((function(){return new m.a}),[]),b=Object(d.useState)(),W=Object(u.a)(b,2),D=W[0],H=W[1],U=Object(d.useState)(null),G=Object(u.a)(U,2),K=G[0],X=G[1],Y=Object(d.useState)(""),Q=Object(u.a)(Y,2),Z=Q[0],$=Q[1],ee=Object(d.useState)(""),te=Object(u.a)(ee,2),ne=te[0],ae=te[1],ie=Object(d.useState)(),oe=Object(u.a)(ie,2),ce=oe[0],se=oe[1],re=Object(d.useState)([]),le=Object(u.a)(re,2),ue=le[0],de=le[1],me=Object(d.useState)(null),be=Object(u.a)(me,2),he=be[0],pe=be[1],je=Object(d.useState)([]),_e=Object(u.a)(je,2),ke=_e[0],fe=_e[1],Oe=Object(d.useState)(null),ve=Object(u.a)(Oe,2),xe=ve[0],we=ve[1],ge=Object(d.useState)(!1),ye=Object(u.a)(ge,2),Me=ye[0],Ce=ye[1],Se=Object(d.useState)(0),Te=Object(u.a)(Se,2),ze=Te[0],Re=Te[1],Fe=Object(d.useState)(""),Ne=Object(u.a)(Fe,2),Le=Ne[0],qe=Ne[1],Ee=Object(d.useState)(!1),Ie=Object(u.a)(Ee,2),Pe=Ie[0],We=Ie[1],Ae=Object(d.useState)(!1),Be=Object(u.a)(Ae,2),De=Be[0],Je=Be[1],Ve=Object(d.useState)(),He=Object(u.a)(Ve,2),Ue=He[0],Ge=He[1],Ke=Object(d.useState)(""),Xe=Object(u.a)(Ke,2),Ye=Xe[0],Qe=Xe[1],Ze=Object(d.useState)(),$e=Object(u.a)(Ze,2),et=$e[0],tt=$e[1],nt=Object(d.useRef)(null),at=Object(d.useRef)(null),it=J.a.fullscreenEnabled,ot=Object(d.useCallback)((function(){if(nt.current&&at.current&&ce){var e=nt.current.clientWidth,t=window.screen.width*window.devicePixelRatio>=n.breakpoints.values.md?9*e/16:4*e/3,a=e*window.devicePixelRatio,i=t*window.devicePixelRatio;ce._modelSize=window.screen.width*window.devicePixelRatio>=n.breakpoints.values.md?1.5*a:3.5*a,at.current.style.width="".concat(e,"px"),at.current.style.height="".concat(t,"px"),at.current.width=a,at.current.height=i,ce.appear({pointX:150,pointY:70})}}),[ce,n.breakpoints.values.md]);Object(d.useLayoutEffect)((function(){var e=ot;return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[ot]),Object(d.useLayoutEffect)((function(){document.title=t("title:live2d")}),[t]),Object(d.useLayoutEffect)((function(){return nt.current&&at.current&&(at.current.getContext("webgl",{preserveDrawingBuffer:!0}),H(c.initialize(void 0,{wrap:nt.current,canvas:at.current}))),function(){c.release()}}),[c]),Object(d.useLayoutEffect)((function(){var e;return it&&(e=function(){return We(!!J.a.fullscreenElement)},J.a.addEventListener("fullscreenchange",e)),function(){e&&J.a.removeEventListener("fullscreenchange",e)}}),[it]),Object(d.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var n,a,i,o,c,l,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!D||!Z){e.next=45;break}return D.releaseAllModel(),se(void 0),Ce(!0),Re(0),qe(t("live2d:load_progress.model_metadata")),e.next=8,h.a.get("".concat(window.isChinaMainland?"https://sekai-assets-1258184166.file.myqcloud.com":"".concat("https://minio.dnaroma.eu","/sekai-assets"),"/live2d/model/").concat(Z,"_rip/buildmodeldata.asset"),{responseType:"json"});case 8:return n=e.sent,a=n.data,Re(20),qe(t("live2d:load_progress.model_texture")),e.next=14,h.a.get("".concat(window.isChinaMainland?"https://sekai-assets-1258184166.file.myqcloud.com":"".concat("https://minio.dnaroma.eu","/sekai-assets"),"/live2d/model/").concat(Z,"_rip/").concat(a.TextureNames[0]));case 14:return Re(40),qe(t("live2d:load_progress.model_moc3")),e.next=18,h.a.get("".concat(window.isChinaMainland?"https://sekai-assets-1258184166.file.myqcloud.com":"".concat("https://minio.dnaroma.eu","/sekai-assets"),"/live2d/model/").concat(Z,"_rip/").concat(a.Moc3FileName));case 18:return Re(60),qe(t("live2d:load_progress.model_physics")),e.next=22,h.a.get("".concat(window.isChinaMainland?"https://sekai-assets-1258184166.file.myqcloud.com":"".concat("https://minio.dnaroma.eu","/sekai-assets"),"/live2d/model/").concat(Z,"_rip/").concat(a.PhysicsFileName));case 22:if(Z.startsWith("normal")){e.next=32;break}return Re(80),qe(t("live2d:load_progress.motion_metadata")),e.next=27,h.a.get("".concat(window.isChinaMainland?"https://sekai-assets-1258184166.file.myqcloud.com":"".concat("https://minio.dnaroma.eu","/sekai-assets"),"/live2d/motion/").concat(ne,"_rip/BuildMotionData.json"),{responseType:"json"});case 27:o=e.sent,c=o.data,i=c,e.next=33;break;case 32:i={motions:[],expressions:[]};case 33:return Re(90),qe(t("live2d:load_progress.display_model")),l=a.Moc3FileName.replace(".moc3.bytes",""),e.next=38,D.addModel({path:"".concat(window.isChinaMainland?"https://sekai-assets-1258184166.file.myqcloud.com":"".concat("https://minio.dnaroma.eu","/sekai-assets"),"/live2d/model/").concat(Z,"_rip/"),fileName:l,modelName:Z,modelSize:nt.current.clientWidth,textures:[],motions:[].concat(Object(r.a)(i.motions.map((function(e){return{name:e,url:"".concat(window.isChinaMainland?"https://sekai-assets-1258184166.file.myqcloud.com":"".concat("https://minio.dnaroma.eu","/sekai-assets"),"/live2d/motion/").concat(ne,"_rip/").concat(e,".motion3.json")}}))),Object(r.a)(i.expressions.map((function(e){return{name:e,url:"".concat(window.isChinaMainland?"https://sekai-assets-1258184166.file.myqcloud.com":"".concat("https://minio.dnaroma.eu","/sekai-assets"),"/live2d/motion/").concat(ne,"_rip/").concat(e,".motion3.json")}})))),expressions:[]},!0);case 38:u=e.sent,de(i.motions),fe(i.expressions),u&&se(u),Ce(!1),Re(0),qe("");case 45:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[D,Z,ne,t]);var ct=Object(d.useCallback)(Object(l.a)(s.a.mark((function e(){var n,a,i,c,l,d,m,b,p,j,_,k,f,O,v,x,w,g;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ce(!0),Re(0),qe(t("live2d:pack_progress.generate_metadata")),n=new A.a,e.next=6,h.a.get("".concat(window.isChinaMainland?"https://sekai-assets-1258184166.file.myqcloud.com":"".concat("https://minio.dnaroma.eu","/sekai-assets"),"/live2d/model/").concat(Z,"_rip/buildmodeldata.asset"),{responseType:"json"});case 6:return a=e.sent,i=a.data,c={Version:3,FileReferences:{Moc:"".concat(Z,".moc3"),Textures:["".concat(Z,".2048/texture_00.png")],Physics:"".concat(Z,".physics3.json"),Motions:[].concat(Object(r.a)(ue),Object(r.a)(ke)).reduce((function(e,t){return Object.assign({},e,Object(o.a)({},t,[{File:"motions/".concat(t,".motion3.json"),FadeInTime:.5,FadeOutTime:.5}]))}),{})},Groups:[{Target:"Parameter",Name:"EyeBlink",Ids:[]},{Target:"Parameter",Name:"LipSync",Ids:[]}]},n.file("".concat(Z,".model3.json"),JSON.stringify(c,null,2)),Re(10),qe(t("live2d:pack_progress.download_texture")),e.next=14,h.a.get("".concat(window.isChinaMainland?"https://sekai-assets-1258184166.file.myqcloud.com":"".concat("https://minio.dnaroma.eu","/sekai-assets"),"/live2d/model/").concat(Z,"_rip/").concat(i.TextureNames[0]),{responseType:"blob"});case 14:return l=e.sent,d=l.data,n.file(c.FileReferences.Textures[0],d),Re(20),qe(t("live2d:pack_progress.download_moc3")),e.next=21,h.a.get("".concat(window.isChinaMainland?"https://sekai-assets-1258184166.file.myqcloud.com":"".concat("https://minio.dnaroma.eu","/sekai-assets"),"/live2d/model/").concat(Z,"_rip/").concat(i.Moc3FileName),{responseType:"blob"});case 21:return m=e.sent,b=m.data,n.file(c.FileReferences.Moc,b),Re(30),qe(t("live2d:pack_progress.download_physics")),e.next=28,h.a.get("".concat(window.isChinaMainland?"https://sekai-assets-1258184166.file.myqcloud.com":"".concat("https://minio.dnaroma.eu","/sekai-assets"),"/live2d/model/").concat(Z,"_rip/").concat(i.PhysicsFileName),{responseType:"blob"});case 28:for(p=e.sent,j=p.data,n.file(c.FileReferences.Physics,j),Re(40),_=Object.keys(c.FileReferences.Motions).length,f=function(){k++,qe(t("live2d:pack_progress.download_motions",{total:_,dlcount:k})),Re(40+Math.round(k/_*50))},qe(t("live2d:pack_progress.download_motions",{total:_,dlcount:k=0})),O=[],v=function(){var e=Object(u.a)(w[x],2),t=e[0],a=e[1];O.push(h.a.get("".concat(window.isChinaMainland?"https://sekai-assets-1258184166.file.myqcloud.com":"".concat("https://minio.dnaroma.eu","/sekai-assets"),"/live2d/motion/").concat(ne,"_rip/").concat(t,".motion3.json"),{responseType:"blob"}).then((function(e){var t=e.data;f(),n.file(a[0].File,t)})))},x=0,w=Object.entries(c.FileReferences.Motions);x<w.length;x++)v();return e.next=41,Promise.all(O);case 41:return qe(t("live2d:pack_progress.generate_zip")),e.next=44,n.generateAsync({type:"blob"});case 44:g=e.sent,Object(B.saveAs)(g,"".concat(Z,".zip")),Ce(!1),Re(0),qe("");case 49:case"end":return e.stop()}}),e)}))),[ke,Z,ne,ue,t]),st=Object(d.useCallback)((function(){if(at.current){var e=at.current.toDataURL();Object(B.saveAs)(e)}}),[]),rt=Object(d.useCallback)(function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!De){e.next=10;break}return e.next=3,Ue.finishAsync();case 3:n=e.sent,Object(B.saveAs)(n.blobURL),Ue.destroy(),Ge(void 0),Je(!1),e.next=18;break;case 10:return Qe(t),e.next=13,V.a.createAsync(at.current,{mimeType:t});case 13:a=e.sent,Ge(a),a.start(),tt(void 0),Je(!0);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[De,Ue]);return Object(a.jsxs)(d.Fragment,{children:[Object(a.jsx)(k.a,{variant:"h6",className:e.header,children:"Live2D"}),Object(a.jsx)(p.a,{severity:"warning",className:e.alert,children:t("common:betaIndicator")}),Object(a.jsxs)(f.a,{container:!0,spacing:1,alignItems:"center",children:[Object(a.jsx)(f.a,{item:!0,xs:9,md:4,lg:3,xl:2,children:Object(a.jsx)(j.a,{value:K,onChange:function(e,t){return X(t)},options:z,getOptionLabel:function(e){return e},renderInput:function(e){return Object(a.jsx)(O.a,Object(i.a)(Object(i.a)({},e),{},{label:t("live2d:select.model")}))}})}),Object(a.jsx)(f.a,{item:!0,xs:2,children:Object(a.jsx)(v.a,{disabled:!K,variant:"contained",onClick:function(){$(K),ae(((null===K||void 0===K?void 0:K.startsWith("sub"))?K:null===K||void 0===K?void 0:K.split("_")[0])+"_motion_base")},children:t("common:show")})})]}),Me&&Object(a.jsxs)(x.a,{className:e.content,children:[Object(a.jsx)(k.a,{children:Le}),Object(a.jsx)(w.a,{variant:"determinate",value:ze})]}),Object(a.jsxs)(x.a,{ref:nt,className:e.content,children:[ce&&Object(a.jsx)(g.a,{component:y.a,children:Object(a.jsxs)(f.a,{container:!0,spacing:1,alignItems:"center",children:[Object(a.jsxs)(f.a,{item:!0,children:[Object(a.jsx)(M.a,{title:t("live2d:tooltip.download"),children:Object(a.jsx)(C.a,{disabled:!ce,onClick:ct,children:Object(a.jsx)(N.a,{fontSize:"inherit"})})}),Object(a.jsx)(M.a,{title:t("live2d:tooltip.fullscreen"),children:Pe?Object(a.jsx)(C.a,{disabled:!it,onClick:function(){J.a.exitFullscreen()},children:Object(a.jsx)(L.a,{fontSize:"inherit"})}):Object(a.jsx)(C.a,{disabled:!it,onClick:function(){J.a.requestFullscreen(nt.current)},children:Object(a.jsx)(q.a,{fontSize:"inherit"})})}),Object(a.jsx)(M.a,{title:t("live2d:tooltip.shot"),children:Object(a.jsx)(C.a,{disabled:!ce,onClick:st,children:Object(a.jsx)(E.a,{fontSize:"inherit"})})}),window.MediaRecorder&&Object(a.jsxs)(d.Fragment,{children:[Object(a.jsx)(M.a,{title:t(De?"live2d:tooltip.stop_record":"live2d:tooltip.start_record"),children:Object(a.jsx)(C.a,{disabled:!ce,onClick:function(e){De?rt(Ye):tt(e.currentTarget)},children:De?Object(a.jsx)(I.a,{fontSize:"inherit"}):Object(a.jsx)(P.a,{fontSize:"inherit"})})}),Object(a.jsxs)(S.a,{anchorEl:et,open:!!et,onClose:function(){return tt(void 0)},children:[Object(a.jsx)(T.a,{disabled:!window.MediaRecorder.isTypeSupported("video/webm; codecs=vp8"),onClick:function(){rt("video/webm; codecs=vp8")},children:"WebM VP8"}),Object(a.jsx)(T.a,{disabled:!window.MediaRecorder.isTypeSupported("video/webm; codecs=vp9"),onClick:function(){rt("video/webm; codecs=vp9")},children:"WebM VP9"}),Object(a.jsx)(T.a,{disabled:!window.MediaRecorder.isTypeSupported("video/webm; codecs=h264"),onClick:function(){rt("video/webm; codecs=h264")},children:"WebM H.264 (MKV)"}),Object(a.jsx)(T.a,{disabled:!window.MediaRecorder.isTypeSupported("video/webm; codecs=h265"),onClick:function(){rt("video/webm; codecs=h265")},children:"WebM H.265"})]})]})]}),Object(a.jsx)(f.a,{item:!0,children:Object(a.jsxs)(f.a,{container:!0,children:[Object(a.jsx)(j.a,{value:he,onChange:function(e,t){return pe(t)},options:ue,getOptionLabel:function(e){return e},renderInput:function(e){return Object(a.jsx)(O.a,Object(i.a)(Object(i.a)({},e),{},{label:t("live2d:select.motions")}))},style:{minWidth:"170px"}}),Object(a.jsx)(v.a,{disabled:!he,variant:"contained",onClick:function(){he&&ce.startMotion({groupName:he,no:0,priority:3,autoIdle:!1,autoAppear:!1,fadeInTime:.5,fadeOutTime:.5})},children:t("common:apply")})]})}),Object(a.jsx)(f.a,{item:!0,children:Object(a.jsxs)(f.a,{container:!0,children:[Object(a.jsx)(j.a,{value:xe,onChange:function(e,t){return we(t)},options:ke,getOptionLabel:function(e){return e},renderInput:function(e){return Object(a.jsx)(O.a,Object(i.a)(Object(i.a)({},e),{},{label:t("live2d:select.expressions")}))},style:{minWidth:"170px"}}),Object(a.jsx)(v.a,{disabled:!xe,variant:"contained",onClick:function(){xe&&ce.startMotion({groupName:xe,no:0,priority:3,autoIdle:!1,autoAppear:!1,fadeInTime:.5,fadeOutTime:.5})},children:t("common:apply")})]})})]})}),Object(a.jsx)("canvas",{ref:at})]})]})}},290:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(223),i=Object(a.a)((function(e){return{header:{fontWeight:"bold"},content:{marginTop:e.spacing(3),marginBottom:e.spacing(3),marginLeft:"auto",marginRight:"auto"},alert:{margin:e.spacing(1,0)},bold:{fontWeight:e.typography.fontWeightBold},capitalize:{textTransform:"capitalize"},tabpanel:{padding:e.spacing("1%",0,0,0)},"grid-out":{padding:e.spacing("1%","0")}}}))},914:function(e){e.exports=JSON.parse('["01ichika_cloth001","01ichika_jc","01ichika_normal","01ichika_sports","01ichika_unit","02saki_black","02saki_cloth001","02saki_jc","02saki_normal","02saki_pajamas","02saki_parttime","02saki_sports","02saki_unit","03honami_black","03honami_cloth001","03honami_jc","03honami_normal","03honami_sports","03honami_unit","04shiho_black","04shiho_cloth001","04shiho_jc","04shiho_normal","04shiho_sports","04shiho_unit","05minori_cloth001","05minori_cloth002","05minori_normal","05minori_parttime","05minori_sports","05minori_unit","06haruka_asuran","06haruka_black","06haruka_cloth001","06haruka_cloth002","06haruka_normal","06haruka_sports","06haruka_unit","07airi_cloth001","07airi_cloth002","07airi_normal","07airi_unit","08shizuku_cloth001","08shizuku_cloth002","08shizuku_normal","08shizuku_unit","09kohane_longnormal","09kohane_longunit","09kohane_normal","09kohane_sports","09kohane_unit","10an_culture","10an_normal","10an_unit","11akito_culture","11akito_normal","11akito_unit","12touya_culture","12touya_normal","12touya_unit","13tsukasa_cloth001","13tsukasa_liondance","13tsukasa_normal","13tsukasa_unit","14emu_cloth001","14emu_normal","14emu_sports","14emu_unit","15nene_christmas","15nene_cloth001","15nene_culture","15nene_jc","15nene_normal","15nene_unit","16rui_cloth001","16rui_culture","16rui_dc","16rui_normal","16rui_unit","17kanade_cloth001","17kanade_normal","17kanade_unit","18mafuyu_black","18mafuyu_cloth001","18mafuyu_darkcloth001","18mafuyu_darkunit","18mafuyu_jc","18mafuyu_normal","18mafuyu_sports","18mafuyu_unit","19ena_black","19ena_cloth001","19ena_normal","19ena_unit","20mizuki_black","20mizuki_cloth001","20mizuki_culture","20mizuki_jc","20mizuki_normal","20mizuki_unit","21miku_band","21miku_idol","21miku_night","21miku_normal","21miku_street","21miku_wonder","22rin_idol","22rin_normal","22rin_street","23len_normal","23len_street","23len_wonder","24luka_band","24luka_normal","25meiko_band","25meiko_normal","25meiko_street","25meiko_wonder","26kaito_normal","26kaito_wonder","normal_1_model","sub_airichild","sub_anfather","sub_cordnukio","sub_diva","sub_harukafan","sub_iori","sub_kanadefather","sub_liondancerobot","sub_mikudayo","sub_nenechild","sub_nenedayo","sub_tsukasadoll","sub_wondermascot"]')}}]);