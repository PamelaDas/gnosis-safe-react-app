(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[52],{1552:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(1556),a=function(e){var t=e.currentTarget;/token_placeholder/.test(t.src)||(t.src=r.a)};n(466)},1556:function(e,t,n){"use strict";t.a=n.p+"static/media/token_placeholder.c1abe466.svg"},1663:function(e,t,n){"use strict";var r=n(101),a=n(152);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(0)),o=(0,r(n(299)).default)(c.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=o},1695:function(e,t,n){"use strict";var r=n(4),a=n(13),c=n(0),o=(n(18),n(15)),i=n(17),s=n(200),l=c.forwardRef((function(e,t){var n=e.classes,i=e.className,l=Object(a.a)(e,["classes","className"]),d=c.useContext(s.a);return c.createElement("div",Object(r.a)({className:Object(o.default)(n.root,i,"flex-start"===d.alignItems&&n.alignItemsFlexStart),ref:t},l))}));t.a=Object(i.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(l)},1760:function(e,t,n){"use strict";t.a=n.p+"static/media/check.bdba8480.svg"},1761:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(423),a="140px",c=Object(r.a)({listItem:{maxWidth:function(e){return e.buttonWidth?e.buttonWidth:a},boxSizing:"border-box"},listItemSearch:{maxWidth:function(e){return e.buttonWidth?e.buttonWidth:a},padding:"0",boxSizing:"border-box"},localFlag:{backgroundPosition:"50% 50%",backgroundRepeat:"no-repeat",backgroundSize:"contain",height:"20px !important",width:"26px !important"},etherFlag:{backgroundPosition:"50% 50%",backgroundRepeat:"no-repeat",backgroundSize:"contain",width:"26px",height:"26px"},iconLeft:{marginRight:"10px"},iconRight:{marginLeft:"18px"},button:{backgroundColor:"#e8e7e6",border:"none",borderRadius:"3px",boxSizing:"border-box",color:"#5d6d74",cursor:"pointer",fontSize:"12px",fontWeight:"normal",height:"24px",lineHeight:"1.33",marginRight:"20px",minWidth:function(e){return e.buttonWidth?e.buttonWidth:a},outline:"none",padding:"0",textAlign:"left","&:active":{opacity:"0.8"}},buttonInner:{boxSizing:"border-box",display:"block",height:"100%",lineHeight:"24px",padding:"0 22px 0 8px",position:"relative",width:"100%","&::after":{borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #5d6d74",content:'""',height:"0",position:"absolute",right:"8px",top:"9px",width:"0"}},openMenuButton:{"&::after":{borderBottom:"5px solid #5d6d74",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"none"}},dropdownItemsScrollWrapper:{maxHeight:"280px",overflow:"auto"},search:{position:"relative",borderRadius:"0",backgroundColor:"#fff","&:hover":{backgroundColor:"#fff"},marginRight:0,width:"100%"},searchIcon:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",left:"12px",margin:"0",pointerEvents:"none",position:"absolute",top:"50%",transform:"translateY(-50%)",width:"18px","& path":{fill:"#b2b5b2"}},inputRoot:{color:"#5d6d74",fontSize:"14px",fontWeight:"normal",lineHeight:"1.43",width:"100%"},inputInput:{boxSizing:"border-box",height:"44px",padding:"12px 12px 12px 40px",width:"100%"}})},2763:function(e,t,n){"use strict";n.r(t),n.d(t,"MANAGE_TOKENS_BUTTON_TEST_ID",(function(){return J})),n.d(t,"BALANCE_ROW_TEST_ID",(function(){return G}));var r,a=n(35),c=n(25),o=n(0),i=n(30),s=n(57),l=n(110),d=n(346),u=n(782),b=n(589),p=n(2),h=n.n(p),j=n(16),x=n(827),f=n(1695),m=n(1525),O=n(415),g=n(623),S=n(1521),v=n(1663),C=n.n(v),E=n(132),k=n.n(E),T=n(1760),w=n(773),N=n(1761),I=n(404),L=n(608),A=n(1552),y=n(131),R=n(19),_=n(140),z=n(414),B=n(79),W=n(1),F=function(e){var t=e.testId,r=Object(i.d)(),c=Object(R.n)(),s=Object(o.useState)(null),l=Object(a.a)(s,2),d=l[0],u=l[1],b=Object(i.e)(I.b),p=Object(i.e)(B.a).address,v=Object(o.useState)(""),E=Object(a.a)(v,2),F=E[0],M=E[1],H=Object(i.e)(I.a),P=c.logoUri,U=Object(N.a)({}),D=H.filter((function(e){return e.toLowerCase().includes(F.toLowerCase())})),J=function(){u(null)},G=function(){var e=Object(j.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J(),e.next=3,r(Object(z.a)(p,t));case 3:r(Object(w.b)({selectedCurrency:t}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return b?Object(W.jsx)(S.a,{theme:L.a,children:Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("button",{className:U.button,onClick:function(e){u(e.currentTarget),n.e(96).then(n.t.bind(null,2776,7))},type:"button","data-testid":"".concat(t,"-btn"),children:Object(W.jsx)("span",{className:k()(U.buttonInner,d&&U.openMenuButton),children:b})}),Object(W.jsxs)(O.a,{anchorEl:d,anchorOrigin:{horizontal:"center",vertical:"bottom"},elevation:0,getContentAnchorEl:null,id:"customizedMenu",keepMounted:!0,onClose:J,open:Boolean(d),transformOrigin:{horizontal:"center",vertical:"top"},TransitionProps:{mountOnEnter:!0,unmountOnExit:!0},children:[Object(W.jsx)(g.a,{className:U.listItemSearch,children:Object(W.jsxs)("div",{className:U.search,children:[Object(W.jsx)("div",{className:U.searchIcon,children:Object(W.jsx)(C.a,{})}),Object(W.jsx)(x.a,{classes:{root:U.inputRoot,input:U.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){return M(e.target.value)},placeholder:"Search\u2026",value:F})]})},"0"),Object(W.jsx)("div",{className:U.dropdownItemsScrollWrapper,children:D.map((function(e){return Object(W.jsxs)(g.a,{className:U.listItem,onClick:function(){return G(e)},value:e,children:[Object(W.jsx)(f.a,{className:U.iconLeft,children:Object(_.a)(e,c.symbol)?Object(W.jsx)(y.a,{alt:c.symbol.toLocaleLowerCase(),onError:A.a,src:P,className:k()(U.etherFlag)}):Object(W.jsx)("div",{className:k()(U.localFlag,"currency-flag","currency-flag-lg","currency-flag-".concat(e.toLowerCase()))})}),Object(W.jsx)(m.a,{primary:e}),e===b?Object(W.jsx)(f.a,{className:U.iconRight,children:Object(W.jsx)("img",{alt:"checked",src:T.a})}):null]},e)}))})]})]})}):null},M=n(609),H=n(20),P=n(42),U=Object(o.lazy)((function(){return n.e(65).then(n.bind(null,2794))})),D=Object(o.lazy)((function(){return n.e(59).then(n.bind(null,2788))})),J="manage-tokens-btn",G="balance-row";!function(e){e.coins="Coins",e.collectibles="Collectibles"}(r||(r={}));t.default=function(){var e=Object(i.e)(B.j),t=e.address,n=e.featuresEnabled,p=e.name,h=null===n||void 0===n?void 0:n.includes(P.FEATURES.ERC721),j=Object(o.useState)(!1),x=Object(a.a)(j,2),f=x[0],m=x[1],O=Object(o.useState)(""),g=Object(a.a)(O,2),S=g[0],v=g[1],C=Object(s.k)("".concat(H.h,"?")),E=Object(H.n)({shortName:Object(R.r)(),safeAddress:t}),k="";switch(null===C||void 0===C?void 0:C.url){case E.ASSETS_BALANCES:k=r.coins;break;case E.ASSETS_BALANCES_COLLECTIBLES:k=r.collectibles}var T=function(){return m(!0)},w=function(){return m(!1)};return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)(c.Menu,{children:[Object(W.jsx)(l.a,{start:"sm",sm:6,xs:12,children:Object(W.jsxs)(c.Breadcrumb,{children:[Object(W.jsx)(c.BreadcrumbElement,{iconType:"assets",text:"ASSETS",color:"primary"}),Object(W.jsx)(c.BreadcrumbElement,{text:k,color:"placeHolder"})]})}),Object(W.jsx)(l.a,{end:"sm",sm:6,xs:12,children:k===r.coins&&Object(W.jsx)(F,{testId:"balances-currency-dropdown"})})]}),Object(W.jsxs)(s.d,{children:[Object(W.jsx)(s.b,{path:H.g.ASSETS_BALANCES_COLLECTIBLES,exact:!0,render:function(){return h?Object(M.a)(Object(W.jsx)(U,{})):null}}),Object(W.jsx)(s.b,{path:H.g.ASSETS_BALANCES,exact:!0,render:function(){return Object(M.a)(Object(W.jsx)(D,{showReceiveFunds:T,showSendFunds:v}))}})]}),Object(W.jsx)(b.a,{activeScreenType:"sendFunds",isOpen:!!S,onClose:function(){return v("")},selectedToken:S}),Object(W.jsx)(d.c,{description:"Receive Tokens Form",handleClose:w,open:f,paperClassName:"receive-modal",title:"Receive Tokens",children:Object(W.jsx)(u.a,{safeAddress:t,safeName:p,onClose:w})})]})}}}]);
//# sourceMappingURL=52.42d7bdda.chunk.js.map