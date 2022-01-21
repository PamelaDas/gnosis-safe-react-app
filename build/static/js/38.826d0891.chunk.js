(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[38],{1497:function(e,t,n){"use strict";n.r(t);var a,r=n(8),i=n(35),c=n(633),s=n(423),o=n(80),d=n(0),l=n(30),u=n(19),b=n(1539),j=n(1553),O=n(1546),m=n(567),p=n(151),x=n(588),f=n(110),h=n(177),v=n(91),g=n(122),k=n(163),S=n(1568),y=n(347),w=n(46),C=n(88),I=n(1581),T=n(1628),A=n(24),N=n(25),R=n(1536),V=n(22),E=n(298),M=n(1),B=Object(V.default)(N.RadioButtons)(a||(a=Object(A.a)(["\n  & .MuiRadio-colorPrimary.Mui-checked {\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),L=function(e){var t=e.tokenSpendingLimit,n=e.selectedToken,a=Object(d.useMemo)((function(){return Object(E.a)(new o.BigNumber(t.amount).minus(t.spent).toString(),n.decimals)}),[n.decimals,t.amount,t.spent]),r=Object(R.d)().mutators;return Object(M.jsx)(g.a,{margin:"sm",children:Object(M.jsxs)(f.a,{between:"lg",style:{flexDirection:"column"},children:[Object(M.jsx)(N.Text,{size:"lg",children:"Send as"}),Object(M.jsx)(b.a,{name:"txType",initialValue:"multiSig",children:function(e){var t=e.input,i=t.name,c=t.value;return Object(M.jsx)(B,{name:i,value:c||"multiSig",onRadioChange:r.setTxType,options:[{label:"Multisig transaction",value:"multiSig"},{label:"Spending limit transaction (".concat(a," ").concat(n.symbol,")"),value:"spendingLimit"}]})}})]})})},P=n(1846),F=n(244),z=n(79),D=n(140),U=n(10),H=n(544),q=Object(H.a)({manage:{fontSize:U.lg},qrCodeBtn:{cursor:"pointer"},formContainer:{padding:"".concat(U.md," ").concat(U.lg),minHeight:"216px"},buttonRow:{height:"84px",justifyContent:"center",gap:"16px"},selectAddress:{cursor:"pointer"}}),W=n(596),Q=n(364),_=n(1569),J=n(346),K=n(1545),G={setMax:function(e,t,n){n.changeValue(t,"amount",(function(){return e[0]}))},onTokenChange:function(e,t,n){n.changeValue(t,"amount",(function(){return t.formState.values.amount}))},setRecipient:function(e,t,n){n.changeValue(t,"recipientAddress",(function(){return e[0]}))},setTxType:function(e,t,n){n.changeValue(t,"txType",(function(){return e[0]}))}},X=Object(s.a)(q),Y=function(e){var t=e.symbol;return Object(M.jsx)(M.Fragment,{children:t})};t.default=function(e){var t,n=e.initialValues,a=e.onClose,s=e.onReview,A=e.recipientAddress,N=e.selectedToken,R=void 0===N?"":N,V=e.amount,B=X(),U=Object(l.e)(F.a),H=Object(l.e)(y.d),q=Object(u.n)(),Z=Object(d.useState)((function(){var e,t={address:A||"",name:""};if(!(null===n||void 0===n?void 0:n.recipientAddress)&&!A)return t;var a=null!==(e=null===n||void 0===n?void 0:n.recipientAddress)&&void 0!==e?e:A,r=H.find((function(e){var t=e.address;return Object(w.f)(a,t)}));return r||t})),$=Object(i.a)(Z,2),ee=$[0],te=$[1],ne=Object(d.useState)(!0),ae=Object(i.a)(ne,2),re=ae[0],ie=ae[1],ce=Object(d.useState)(!1),se=Object(i.a)(ce,2),oe=se[0],de=se[1],le=Object(d.useState)(""),ue=Object(i.a)(le,2),be=ue[0],je=ue[1];Object(d.useEffect)((function(){null===ee&&re&&ie(!1)}),[ee,re]);var Oe=Object(l.e)(z.h),me=Object(l.e)(C.g);return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(K.a,{onClose:a,subTitle:"1 of 2",title:"Send funds"}),Object(M.jsx)(h.a,{}),Object(M.jsx)(j.a,{formMutators:G,initialValues:{amount:(null===n||void 0===n?void 0:n.amount)||V,recipientAddress:n.recipientAddress||A,token:(null===n||void 0===n?void 0:n.token)||R},onSubmit:function(e){var n=Object(r.a)({},e);e.recipientAddress||(n.recipientAddress=null===ee||void 0===ee?void 0:ee.address),n.recipientName=null===ee||void 0===ee?void 0:ee.name,s(Object(r.a)(Object(r.a)({},n),{},{tokenSpendingLimit:t}))},validation:function(e){var n,a,r,i=null!==e&&void 0!==e?e:{},c=i.amount,s=i.token,o=i.txType,d=Object(m.d)(m.p)(s),l=t&&"spendingLimit"===o,u=s&&Number(null===(n=Object(Q.a)({tokenAddress:s,tokens:U}))||void 0===n?void 0:n.decimals)||q.decimals;return{amount:Object(m.d)(m.p,m.m,Object(m.g)(1,u),Object(m.i)(0,!1),s?Object(m.f)(l?Object(W.j)({tokenAddress:s,tokenSpendingLimit:t,tokens:U}):null!==(a=null===(r=Object(Q.a)({tokenAddress:s,tokens:U}))||void 0===r?void 0:r.balance)&&void 0!==a?a:0):function(){})(c),token:d}},children:function(){var e=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3],r=e.values,i=r.token,s=r.txType,d=null===U||void 0===U?void 0:U.find((function(e){return e.address===i})),l=null===Oe||void 0===Oe?void 0:Oe.filter((function(e){var t=e.delegate;return Object(w.f)(t,me)}));t=Object(W.f)({spendingLimits:l,tokenAddress:null===d||void 0===d?void 0:d.address});var j=function(e,t){var a,r=e;r.startsWith("ethereum:")&&(r=r.replace("ethereum:",""));var i=null===(a=H.find((function(e){var t=e.address;return Object(w.f)(r,t)})))||void 0===a?void 0:a.name,c=Object(m.k)(r);c?je(c):(n.setRecipient(r),te({name:i||"",address:r}),je("")),t()},h=!oe;ee&&(h=!ee.address);var y=function(){var e,a=t&&"spendingLimit"===s,r=null!==(e=null===d||void 0===d?void 0:d.balance.tokenBalance)&&void 0!==e?e:0;if(a){var i,c=Object(E.a)(new o.BigNumber(t.amount).minus(t.spent).toString(),null!==(i=null===d||void 0===d?void 0:d.decimals)&&void 0!==i?i:0);r=new o.BigNumber(r).gt(c)?c:r}n.setMax(r)};return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(p.a,{className:B.formContainer,children:[Object(M.jsx)(I.a,{}),Object(M.jsx)(_.a,{withArrow:!0}),ee&&ee.address?Object(M.jsxs)("div",{onKeyDown:function(e){Object(D.a)(e.key,"Tab")||te({address:"",name:""})},onClick:function(){te({address:"",name:""})},role:"listbox",tabIndex:0,children:[Object(M.jsx)(g.a,{margin:"xs",children:Object(M.jsx)(v.a,{color:"disabled",noMargin:!0,size:"md",style:{letterSpacing:"-0.5px"},children:"Recipient"})}),Object(M.jsx)(g.a,{align:"center",margin:"md",children:Object(M.jsx)(k.a,{hash:ee.address,name:ee.name,showAvatar:!0,showCopyBtn:!0,explorerUrl:Object(u.i)(ee.address)})})]}):Object(M.jsxs)(g.a,{margin:"md",children:[Object(M.jsx)(f.a,{xs:11,children:Object(M.jsx)(T.a,{fieldMutator:n.setRecipient,pristine:re,errorMsg:be,setIsValidAddress:de,setSelectedEntry:te})}),Object(M.jsx)(f.a,{center:"xs",className:B,middle:"xs",xs:1,children:Object(M.jsx)(S.a,{handleScan:j})})]}),Object(M.jsx)(g.a,{margin:"sm",children:Object(M.jsx)(f.a,{children:Object(M.jsx)(P.a,{initialValue:null===d||void 0===d?void 0:d.address,isValid:!!(null===d||void 0===d?void 0:d.address),tokens:U})})}),t&&d&&Object(M.jsx)(L,{selectedToken:d,tokenSpendingLimit:t}),Object(M.jsx)(g.a,{margin:"xs",children:Object(M.jsxs)(f.a,{between:"lg",children:[Object(M.jsx)(v.a,{color:"disabled",noMargin:!0,size:"md",style:{letterSpacing:"-0.5px"},children:"Amount"}),Object(M.jsx)(x.a,{onClick:y,weight:"bold",testId:"send-max-btn",children:"Send max"})]})}),Object(M.jsx)(g.a,{margin:"md",children:Object(M.jsx)(f.a,{children:Object(M.jsx)(b.a,{component:O.a,inputAdornment:{endAdornment:Object(M.jsx)(c.a,{position:"end",children:Object(M.jsx)(Y,{symbol:null===d||void 0===d?void 0:d.symbol})})},name:"amount",placeholder:"Amount*",text:"Amount*",type:"text",testId:"amount-input"})})})]}),Object(M.jsx)(J.b.Footer,{children:Object(M.jsx)(J.b.Footer.Buttons,{cancelButtonProps:{onClick:a},confirmButtonProps:{disabled:!e.valid||h,testId:"review-tx-btn",text:"Review"}})})]})}})]})}},1539:function(e,t,n){"use strict";var a=n(8),r=n(1536),i=n(1);t.a=function(e){return Object(i.jsx)(r.a,Object(a.a)({},e))}},1545:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(432),r=n(423),i=n(568),c=n.n(i),s=n(356),o=n(91),d=n(122),l=n(19),u=n(10),b=n(544),j=Object(b.a)({heading:{padding:"".concat(u.md," ").concat(u.lg),justifyContent:"flex-start",boxSizing:"border-box",maxHeight:"74px"},annotation:{letterSpacing:"-1px",color:u.secondaryText,marginRight:"auto",marginLeft:"20px"},headingText:{fontSize:u.lg},closeIcon:{height:"35px",width:"35px"},chainIndicator:{padding:"0 ".concat(u.md),height:"20px",alignItems:"center"},icon:{width:"20px",marginRight:"10px"}}),O=n(1),m=Object(r.a)(j),p=function(e){var t=e.onClose,n=e.subTitle,r=e.title,i=e.iconUrl,u=m(),b=Object(l.e)();return Object(O.jsxs)(d.a,{align:"center",className:u.heading,grow:!0,children:[i&&Object(O.jsx)("img",{className:u.icon,alt:r,src:i}),Object(O.jsx)(o.a,{className:u.headingText,noMargin:!0,weight:"bolder",children:r}),Object(O.jsx)(o.a,{className:u.annotation,children:n||""}),Object(O.jsx)(d.a,{className:u.chainIndicator,children:b.chainId&&Object(O.jsx)(s.a,{chainId:b.chainId})}),Object(O.jsx)(a.a,{disableRipple:!0,onClick:t,children:Object(O.jsx)(c.a,{className:u.closeIcon})})]})}},1546:function(e,t,n){"use strict";var a=n(8),r=n(63),i=n(624),c=n(544),s=n(423),o=n(10),d=n(1),l=["name","onChange","value"],u=["input","inputAdornment","meta","multiline","rows","testId","text"],b={overflow:"hidden",width:"100%"},j=Object(s.a)((function(){return Object(c.a)({root:{paddingTop:o.lg,paddingBottom:"12px",lineHeight:0}})}));t.a=function(e){var t=e.input,n=t.name,c=t.onChange,s=t.value,o=Object(r.a)(t,l),O=e.inputAdornment,m=e.meta,p=e.multiline,x=e.rows,f=e.testId,h=e.text,v=Object(r.a)(e,u),g=j(),k=s?h:void 0,S=(m.touched||!m.pristine)&&!m.valid,y=!!m.error||!m.modifiedSinceLastSubmit&&!!m.submitError,w=m.error||m.submitError,C=!m.active&&(m.pristine||!m.touched),I="undefined"===typeof m.error||!m.touched,T=C&&I,A=k?g.root:"",N=m.valid?"isValid":y&&S?"isInvalid":"",R=Object(a.a)(Object(a.a)({},o),{},{autoComplete:"off","data-testid":f}),V=Object(a.a)(Object(a.a)({},O),{},{className:"".concat(A," ").concat(N),disableUnderline:T});return Object(d.jsx)(i.a,Object(a.a)({error:y&&S,helperText:y&&S?w:k||" ",inputProps:R,InputProps:V,multiline:p,name:n,onChange:c,rows:x,style:b,value:s},v))}},1552:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(1556),r=function(e){var t=e.currentTarget;/token_placeholder/.test(t.src)||(t.src=a.a)};n(466)},1553:function(e,t,n){"use strict";var a=n(63),r=n(1536),i=n(1),c=["handleSubmit"],s=function(e){return{padding:"0 ".concat(e,"%"),flexDirection:"column",flex:"1 0 auto"}};t.a=function(e){var t=e.children,n=e.decorators,o=e.formMutators,d=e.initialValues,l=e.onSubmit,u=e.padding,b=void 0===u?0:u,j=e.subscription,O=e.testId,m=void 0===O?"":O,p=e.validation;return Object(i.jsx)(r.b,{decorators:n,initialValues:d,mutators:o,onSubmit:l,render:function(e){var n=e.handleSubmit,r=Object(a.a)(e,c);return Object(i.jsx)("form",{"data-testid":m,onSubmit:n,style:s(b),children:t(r.submitting,r.validating,r,r.form.mutators)})},subscription:j,validate:p})}},1556:function(e,t,n){"use strict";t.a=n.p+"static/media/token_placeholder.c1abe466.svg"},1566:function(e,t,n){"use strict";var a=n(8),r=n(63),i=n(7),c=n(9),s=n(11),o=n(12),d=n(0),l=n(1),u=["children"],b=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=Object(r.a)(e,u);return Object(l.jsx)("b",Object(a.a)(Object(a.a)({},n),{},{children:t}))}}]),n}(d.PureComponent);t.a=b},1568:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var a=n(35),r=n(423),i=n(0),c=n.p+"static/media/qrcode.f0b048aa.svg",s=n(432),o=n(568),d=n.n(o),l=n(1597),u=n.n(l),b=n(10),j=n(544),O=Object(j.a)({heading:{padding:b.lg,justifyContent:"space-between",maxHeight:"75px",boxSizing:"border-box"},loaderContainer:{width:"100%",height:"100%"},close:{height:"25px",width:"25px",color:b.secondaryText},detailsContainer:{backgroundColor:b.background,maxHeight:"450px"},buttonRow:{height:"84px",justifyContent:"center"},button:{"&:last-child":{marginLeft:b.sm}}}),m=n(346),p=n(151),x=n(192),f=n(110),h=n(177),v=n(91),g=n(122),k=n(1),S=Object(r.a)(O),y=function(e){var t=e.isOpen,n=e.onClose,r=e.onScan,c=S(),o=Object(i.useState)(!1),l=Object(a.a)(o,2),b=l[0],j=l[1],O=Object(i.useState)(null),y=Object(a.a)(O,2),w=y[0],C=y[1],I=Object(i.useState)(!1),T=Object(a.a)(I,2),A=T[0],N=T[1],R=i.createRef(),V=i.useCallback((function(){R.current.openImageDialog()}),[R]);Object(i.useEffect)((function(){b||!A||w||(j(!0),V())}),[A,V,b,j,w]);var E=function(e,t){if(e)return console.error("QR code error",e),void("NotAllowedError"===e.name||"PermissionDismissedError"===e.name?(N(!0),j(!1)):C("The QR could not be read"));t?r(t):A&&C("The QR could not be read")};return Object(k.jsxs)(m.c,{description:"Receive Tokens Form",handleClose:n,open:t,title:"Receive Tokens",children:[Object(k.jsxs)(g.a,{align:"center",className:c.heading,grow:!0,children:[Object(k.jsx)(v.a,{noMargin:!0,size:"xl",children:"Scan QR"}),Object(k.jsx)(s.a,{disableRipple:!0,onClick:n,children:Object(k.jsx)(d.a,{className:c.close})})]}),Object(k.jsx)(h.a,{}),Object(k.jsxs)(f.a,{className:c.detailsContainer,layout:"column",middle:"xs",children:[w&&Object(k.jsx)(p.a,{padding:"md",margin:"md",children:w}),Object(k.jsx)(u.a,{legacyMode:A,onError:function(e){return E(e,null)},onScan:function(e){return E(null,e)},ref:R,style:{width:"400px",height:"400px"},facingMode:"user"})]}),Object(k.jsx)(h.a,{}),Object(k.jsxs)(g.a,{align:"center",className:c.buttonRow,children:[Object(k.jsx)(x.a,{className:c.button,color:"secondary",minWidth:154,onClick:n,children:"Close"}),Object(k.jsx)(x.a,{className:c.button,color:"primary",minWidth:154,onClick:function(){N(!0),C(null),j(!1)},variant:"contained",children:"Upload an image"})]})]})},w=n(131),C=Object(r.a)({qrCodeBtn:{cursor:"pointer"}}),I=function(e){var t=e.handleScan,n=e.testId,r=C(),s=Object(i.useState)(!1),o=Object(a.a)(s,2),d=o[0],l=o[1],u=function(){l(!1)};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(w.a,{alt:"Scan QR",className:r.qrCodeBtn,height:20,onClick:function(){l(!0)},role:"button",src:c,testId:n||"qr-icon"}),d&&Object(k.jsx)(y,{isOpen:d,onClose:u,onScan:function(e){t(e,u)}})]})}},1569:function(e,t,n){"use strict";var a,r,i=n(24),c=n(22),s=n(25),o=n(1),d=c.default.div(a||(a=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  margin: 8px 0;\n\n  svg {\n    margin: 0 12px 0 4px;\n  }\n"]))),l=Object(c.default)(s.Divider)(r||(r=Object(i.a)(["\n  width: 100%;\n"])));t.a=function(e){var t=e.withArrow;return Object(o.jsxs)(d,{children:[t&&Object(o.jsx)(s.Icon,{type:"arrowDown",size:"md"}),Object(o.jsx)(l,{})]})}},1575:function(e,t,n){"use strict";var a=n(8),r=n(63),i=n(545),c=n(546),s=n(1447),o=n(551),d=n(1),l=["name","onChange","value"],u=["classes","disableError","formControlProps","input","label","meta","renderValue"],b={minWidth:"100%"};t.a=function(e){var t=e.classes,n=e.disableError,j=e.formControlProps,O=e.input,m=O.name,p=O.onChange,x=O.value,f=Object(r.a)(O,l),h=e.label,v=e.meta,g=e.renderValue,k=Object(r.a)(e,u),S=(v.submitError&&!v.dirtySinceLastSubmit||v.error)&&v.touched&&!n,y=Object(a.a)(Object(a.a)({},f),{},{name:m});return Object(d.jsxs)(i.a,Object(a.a)(Object(a.a)({},j),{},{error:S,style:b,children:[Object(d.jsx)(s.a,{htmlFor:m,children:h}),Object(d.jsx)(o.a,Object(a.a)({classes:t,inputProps:y,onChange:p,renderValue:g,value:x},k)),S&&Object(d.jsx)(c.a,{children:v.error||v.submitError})]}))}},1581:function(e,t,n){"use strict";var a,r=n(24),i=n(30),c=n(22),s=n(19),o=n(79),d=n(91),l=n(1566),u=n(10),b=n(151),j=n(163),O=n(1),m=Object(c.default)(b.a)(a||(a=Object(r.a)(["\n  font-size: 12px;\n  line-height: 1.08;\n  letter-spacing: -0.5px;\n  background-color: ",";\n  width: fit-content;\n  padding: 5px 10px;\n  margin-top: ",";\n  margin-left: 40px;\n  border-radius: 3px;\n"])),u.border,u.xs);t.a=function(){var e=Object(i.e)(o.j),t=e.address,n=e.ethBalance,a=e.name,r=Object(s.n)();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(j.a,{hash:t,name:a,explorerUrl:Object(s.i)(t),showAvatar:!0,showCopyBtn:!0}),n&&Object(O.jsx)(m,{children:Object(O.jsxs)(d.a,{noMargin:!0,children:["Balance: ",Object(O.jsx)(l.a,{"data-testid":"current-eth-balance",children:"".concat(n," ").concat(r.symbol)})]})})]})}},1628:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return M}));var a=n(63),r=n(35),i=n(8),c=n(2),s=n.n(c),o=n(16),d=n(624),l=n(2786),u=n(0),b=n(30),j=n(567),O=n(347),m=n(185),p=n(46),x=n(32),f=n(423),h=n(544),v=Object(f.a)(Object(h.a)({root:{overflow:"hidden",borderRadius:4,fontSize:"15px",width:"500px"}})),g=Object(f.a)(Object(h.a)({root:{fontSize:"14px",width:"420px"}})),k=n(163),S=n(140),y=n(27),w=n(67),C=n(52),I=n(42),T=n(196),A=n(114),N=n(1),R=["setIsValidAddress","setSelectedEntry"],V=function(e){var t=e.addressBookEntries,n=e.fieldMutator,a=e.label,r=void 0===a?"Recipient":a,c=e.setIsValidAddress,u=e.setSelectedEntry,O=e.setValidationText,f=e.validationText,h=Object(b.e)(C.a),R=function(e){u(e),n(e.address)},V=function(e){var n=Object(j.k)(e);if(c(!n),!n){var a=Object(T.b)(e).address,r=Object(w.a)(a)||a,i=Object(m.b)(t,{inputValue:r});return 1===i.length?i[0]:r}O(n)},E=function(){var e=Object(o.a)(s.a.mark((function e(t,a,r){var i,c,o,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r,e.next="input"===e.t0?3:31;break;case 3:if(i=Object(S.c)(a)){e.next=6;break}return e.abrupt("break",31);case 6:if(!Object(A.d)(I.FEATURES.DOMAIN_LOOKUP)||!Object(p.e)(i)&&!Object(p.d)(i)){e.next=24;break}return c="",e.prev=8,e.next=11,Object(x.b)(i);case 11:c=e.sent,e.next=17;break;case 14:e.prev=14,e.t1=e.catch(8),Object(y.c)(y.b._101,e.t1.message);case 17:if(o=V(c)){e.next=21;break}return n(""),e.abrupt("break",31);case 21:return R("string"===typeof o?{address:c,name:i,chainId:h}:o),e.abrupt("break",31);case 24:if(d=V(i)){e.next=28;break}return n(""),e.abrupt("break",31);case 28:return R("string"===typeof d?{address:d,name:"",chainId:h}:d),e.abrupt("break",31);case 31:case"end":return e.stop()}}),e,null,[[8,14]])})));return function(t,n,a){return e.apply(this,arguments)}}(),M=v(),B=g();return Object(N.jsx)(l.a,{closeIcon:null,openOnFocus:!1,filterOptions:m.b,freeSolo:!0,onChange:function(e,t,n){if("select-option"===n){var a=t,r=a.address,i=a.name,c=a.chainId;R({address:r,name:i,chainId:c})}},onInputChange:E,options:t,id:"address-book-input",renderInput:function(e){return Object(N.jsx)(d.a,Object(i.a)(Object(i.a)({},e),{},{autoFocus:!0,error:!!f,fullWidth:!0,variant:"filled",label:f||r,InputLabelProps:{shrink:!0,required:!0,classes:M},InputProps:Object(i.a)(Object(i.a)({},e.InputProps),{},{classes:B}),inputProps:Object(i.a)(Object(i.a)({},e.inputProps),{},{"data-testid":"address-book-input"})}))},getOptionLabel:function(e){return e.address},renderOption:function(e){var t=e.address,n=e.name;return Object(N.jsx)(k.a,{hash:t,name:n,showAvatar:!0})},role:"listbox",style:{display:"flex",flexGrow:1}})},E=function(e){var t=Object(b.e)(O.d),n=Object(u.useState)(""),a=Object(r.a)(n,2),c=a[0],s=a[1];return Object(u.useEffect)((function(){e.errorMsg&&s(e.errorMsg)}),[e.errorMsg]),Object(N.jsx)(V,Object(i.a)({addressBookEntries:t,setValidationText:s,validationText:c},e))},M=function(e){var t=e.setIsValidAddress,n=e.setSelectedEntry,c=Object(a.a)(e,R),d=Object(b.e)(O.d),l=Object(u.useState)([]),p=Object(r.a)(l,2),x=p[0],f=p[1],h=Object(u.useState)(""),v=Object(r.a)(h,2),g=v[0],k=v[1];Object(u.useEffect)((function(){var e=function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.c)(d);case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[d]);var S=function(){var e=Object(o.a)(s.a.mark((function e(a){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===a||void 0===a?void 0:a.address)){e.next=7;break}return e.next=3,Object(j.l)(a.address);case 3:r=e.sent,t(!r),k(null!==r&&void 0!==r?r:""),n(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)(V,Object(i.a)({addressBookEntries:x,setIsValidAddress:t,setSelectedEntry:S,setValidationText:k,validationText:g},c))}},1695:function(e,t,n){"use strict";var a=n(4),r=n(13),i=n(0),c=(n(18),n(15)),s=n(17),o=n(200),d=i.forwardRef((function(e,t){var n=e.classes,s=e.className,d=Object(r.a)(e,["classes","className"]),l=i.useContext(o.a);return i.createElement("div",Object(a.a)({className:Object(c.default)(n.root,s,"flex-start"===l.alignItems&&n.alignItemsFlexStart),ref:t},d))}));t.a=Object(s.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(d)},1846:function(e,t,n){"use strict";var a=n(25),r=n(1695),i=n(1525),c=n(623),s=n(1539),o=n(1575),d=n(567),l=n(131),u=n(253),b=n(1552),j=n(423),O=n(544),m=n(10),p=Object(j.a)(Object(O.a)({container:{minHeight:"55px",padding:0,width:"100%"},tokenData:{padding:0,margin:0,lineHeight:"14px"},tokenImage:{display:"block",marginRight:m.sm,height:28,width:"auto"}})),x=Object(j.a)(Object(O.a)({selectMenu:{paddingRight:0}})),f=n(1),h=function(e){var t,n,s=e.tokenAddress,o=e.tokens,d=p(),j=o.find((function(e){return e.address===s}));return Object(f.jsx)(c.a,{className:d.container,children:j?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(r.a,{children:Object(f.jsx)(l.a,{className:d.tokenImage,alt:j.name,onError:b.a,src:j.logoUri||""})}),Object(f.jsx)(i.a,{className:d.tokenData,primary:j.name,secondary:"".concat(Object(u.a)(null!==(t=null===(n=j.balance)||void 0===n?void 0:n.tokenBalance.toString())&&void 0!==t?t:"0")," ").concat(j.symbol)})]}):Object(f.jsx)(a.Text,{color:"placeHolder",size:"xl",children:"Select an asset*"})})};t.a=function(e){var t=e.initialValue,n=e.isValid,a=void 0===n||n,j=e.tokens,O=x(),m=p();return Object(f.jsx)(s.a,{classes:{selectMenu:O.selectMenu},className:a?"isValid":"isInvalid",component:o.a,displayEmpty:!0,initialValue:t,name:"token",renderValue:function(e){return Object(f.jsx)(h,{tokenAddress:e,tokens:j})},validate:d.p,children:j.map((function(e){var t,n;return Object(f.jsxs)(c.a,{value:e.address,children:[Object(f.jsx)(r.a,{children:Object(f.jsx)(l.a,{className:m.tokenImage,alt:e.name,onError:b.a,src:e.logoUri||""})}),Object(f.jsx)(i.a,{primary:e.name,secondary:"".concat(Object(u.a)(null!==(t=null===(n=e.balance)||void 0===n?void 0:n.tokenBalance.toString())&&void 0!==t?t:"0")," ").concat(e.symbol),"data-testid":"select-token-".concat(e.name)})]},e.address)}))})}}}]);
//# sourceMappingURL=38.826d0891.chunk.js.map