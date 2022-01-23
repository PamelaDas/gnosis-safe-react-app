(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[51],{1493:function(t,e,n){"use strict";n.r(e);var a=n(35),r=n(0),c=n(423),i=n(30),o=n(19),s=n(298),u=n(151),d=n(110),l=n(177),f=n(131),b=n(91),j=n(122),x=n(163),h=n(66),m=n(364),O=n(1635),g=n(1552),v=n(463),p=n(1560),y=n(1582),C=n(1554),A=n(347),S=n(1567),k=n(346),E=n(1562),w=n(1563),M=n(1545),G=n(20),N=n(1588),T=n(1),D=Object(c.a)(O.a);e.default=function(t){var e=t.onClose,n=t.onPrev,c=t.tx,O=Object(o.i)(c.contractAddress),R=D(),F=Object(i.d)(),P=Object(G.l)(),z=Object(o.n)(),B=Object(r.useState)("0"),I=Object(a.a)(B,2),L=I[0],V=I[1],H=Object(r.useState)(),_=Object(a.a)(H,2),J=_[0],q=_[1],U=Object(r.useState)(),W=Object(a.a)(U,2),X=W[0],$=W[1],K=Object(r.useState)(!0),Q=Object(a.a)(K,2),Y=Q[0],Z=Q[1],tt=Object(i.e)((function(t){return Object(A.a)(t,{address:c.contractAddress})})),et=Object(r.useState)({txData:"",txAmount:"",txRecipient:""}),nt=Object(a.a)(et,2),at=nt[0],rt=nt[1],ct=Object(C.b)({txRecipient:null===at||void 0===at?void 0:at.txRecipient,txAmount:null===at||void 0===at?void 0:at.txAmount,txData:null===at||void 0===at?void 0:at.txData,safeTxGas:L,manualGasPrice:J,manualGasLimit:X}),it=ct.gasLimit,ot=ct.gasEstimation,st=ct.gasPriceFormatted,ut=ct.gasCostFormatted,dt=ct.txEstimationExecutionStatus,lt=ct.isExecution,ft=ct.isOffChainSignature,bt=ct.isCreation,jt=lt&&Y,xt=Object(S.a)(dt),ht=Object(a.a)(xt,1)[0];Object(r.useEffect)((function(){rt({txRecipient:c.contractAddress,txAmount:c.value?Object(s.c)(c.value,z.decimals):"0",txData:c.data?c.data.trim():""})}),[c.contractAddress,c.value,c.data,P,z.decimals]);return Object(T.jsx)(w.a,{isOffChainSignature:ft,isExecution:jt,ethGasLimit:it,ethGasPrice:st,safeTxGas:ot,closeEditModalCallback:function(t){var e=st,n=t.ethGasPrice,a=ot,r=t.safeTxGas;n&&e!==n&&q(t.ethGasPrice),t.ethGasLimit&&it!==t.ethGasLimit&&$(t.ethGasLimit),r&&a!==r&&V(r)},children:function(t,a){var i,o,s;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(M.a,{onClose:e,subTitle:"2 of 2",title:"Contract interaction"}),Object(T.jsx)(l.a,{}),Object(T.jsxs)(u.a,{className:R.formContainer,children:[Object(T.jsx)(j.a,{margin:"xs",children:Object(T.jsx)(b.a,{color:"disabled",noMargin:!0,size:"md",style:{letterSpacing:"-0.5px"},children:"Contract Address"})}),Object(T.jsx)(j.a,{align:"center",margin:"md",children:Object(T.jsx)(x.a,{hash:c.contractAddress,name:tt,showAvatar:!0,showCopyBtn:!0,explorerUrl:O})}),Object(T.jsx)(j.a,{margin:"xs",children:Object(T.jsx)(b.a,{color:"disabled",noMargin:!0,size:"md",style:{letterSpacing:"-0.5px"},children:"Value"})}),Object(T.jsxs)(j.a,{align:"center",margin:"md",children:[Object(T.jsx)(d.a,{xs:1,children:Object(T.jsx)(f.a,{alt:"Ether",height:28,onError:g.a,src:Object(m.b)("0").logoUri||""})}),Object(T.jsx)(d.a,{layout:"column",xs:11,children:Object(T.jsx)(u.a,{justify:"left",children:Object(T.jsxs)(b.a,{className:R.value,noMargin:!0,size:"md",style:{margin:0},children:[c.value||0," "+z.symbol]})})})]}),Object(T.jsx)(j.a,{margin:"xs",children:Object(T.jsx)(b.a,{color:"disabled",noMargin:!0,size:"md",style:{letterSpacing:"-0.5px"},children:"Method"})}),Object(T.jsx)(j.a,{align:"center",margin:"md",children:Object(T.jsx)(b.a,{className:R.value,size:"md",style:{margin:0},children:null===(i=c.selectedMethod)||void 0===i?void 0:i.name})}),null===(o=c.selectedMethod)||void 0===o||null===(s=o.inputs)||void 0===s?void 0:s.map((function(t,e){var n,a=t.name,i=t.type,o=Object(y.e)(i,(null===(n=c.selectedMethod)||void 0===n?void 0:n.signatureHash)||"",e),s=Object(y.f)(o,i,c);return Object(T.jsxs)(r.Fragment,{children:[Object(T.jsx)(j.a,{margin:"xs",children:Object(T.jsxs)(b.a,{color:"disabled",noMargin:!0,size:"md",style:{letterSpacing:"-0.5px"},children:[a," (",i,")"]})}),Object(T.jsx)(j.a,{align:"center",margin:"md",children:Object(T.jsx)(b.a,{className:R.value,noMargin:!0,size:"md",style:{margin:0},children:s})})]},o)})),Object(T.jsx)(j.a,{margin:"xs",children:Object(T.jsx)(b.a,{color:"disabled",noMargin:!0,size:"md",style:{letterSpacing:"-0.5px"},children:"Data (hex encoded)"})}),Object(T.jsx)(j.a,{align:"center",margin:"md",children:Object(T.jsx)(d.a,{className:R.outerData,children:Object(T.jsx)(j.a,{className:R.data,size:"md",children:c.data})})}),lt&&Object(T.jsx)(N.a,{onChange:Z}),Object(T.jsx)(p.a,{txParameters:t,onEdit:a,isTransactionCreation:bt,isTransactionExecution:jt,isOffChainSignature:ft})]}),Object(T.jsx)(E.a,{gasCostFormatted:ut,isCreation:bt,isExecution:jt,isOffChainSignature:ft,safeNonce:t.safeNonce,txEstimationExecutionStatus:dt}),Object(T.jsx)(k.b.Footer,{withoutBorder:ht!==k.a.LOADING,children:Object(T.jsx)(k.b.Footer.Buttons,{cancelButtonProps:{onClick:n,text:"Back"},confirmButtonProps:{onClick:function(){return function(t){P&&at?F(Object(v.b)({safeAddress:P,to:null===at||void 0===at?void 0:at.txRecipient,valueInWei:null===at||void 0===at?void 0:at.txAmount,txData:null===at||void 0===at?void 0:at.txData,txNonce:t.safeNonce,safeTxGas:t.safeTxGas,ethParameters:t,notifiedTransaction:h.a.STANDARD_TX,delayExecution:!Y})):console.error("There was an error trying to submit the transaction, the safeAddress was not found"),e()}(t)},status:ht,text:dt===C.a.LOADING?"Estimating":void 0,testId:"submit-tx-btn"}})})]})}})}},1552:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(1556),r=function(t){var e=t.currentTarget;/token_placeholder/.test(e.src)||(e.src=a.a)};n(466)},1556:function(t,e,n){"use strict";e.a=n.p+"static/media/token_placeholder.c1abe466.svg"},1582:function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"c",(function(){return j})),n.d(e,"d",(function(){return x})),n.d(e,"h",(function(){return h})),n.d(e,"j",(function(){return m})),n.d(e,"n",(function(){return O})),n.d(e,"l",(function(){return g})),n.d(e,"k",(function(){return v})),n.d(e,"i",(function(){return p})),n.d(e,"g",(function(){return y})),n.d(e,"e",(function(){return C})),n.d(e,"b",(function(){return S})),n.d(e,"m",(function(){return k})),n.d(e,"f",(function(){return E}));var a=n(81),r=n(14),c=n(2),i=n.n(c),o=n(16),s=n(1608),u=n(1618),d=n(32),l=n(46),f=n(80),b="no contract",j=Object(u.a)({field:"contractAddress",updates:{contractAddress:function(){var t=Object(o.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,t.t0=Object(l.e)(e)||Object(l.d)(e),!t.t0){t.next=6;break}return t.next=5,Object(d.b)(e);case 5:t.t0=t.sent;case 6:if(!(n=t.t0)){t.next=9;break}return t.abrupt("return",n);case 9:return t.abrupt("return",e);case 12:return t.prev=12,t.t1=t.catch(0),console.error(t.t1.message),t.abrupt("return",e);case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}}),x={setMax:function(t,e,n){n.changeValue(e,"value",(function(){return t[0]}))},setContractAddress:function(t,e,n){n.changeValue(e,"contractAddress",(function(){return t[0]}))},setSelectedMethod:function(t,e,n){var a;(null===(a=e.lastFormState)||void 0===a?void 0:a.values.selectedMethod)&&e.lastFormState.values.selectedMethod.name!==t[0].name&&(n.changeValue(e,"callResults",(function(){return""})),n.changeValue(e,"value",(function(){return""}))),n.changeValue(e,"selectedMethod",(function(){return t[0]}))},setCallResults:function(t,e,n){n.changeValue(e,"callResults",(function(){return t[0]}))},setAbiValue:function(t,e,n){n.changeValue(e,"abi",(function(){return t[0]}))}},h=function(t){return 0===t.indexOf("address")},m=function(t){return 0===t.indexOf("bool")},O=function(t){return 0===t.indexOf("uint")},g=function(t){return 0===t.indexOf("int")},v=function(t){return 0===t.indexOf("byte")},p=function(t){return/(\[\d*])+$/.test(t)},y=function(t,e){for(var n in e)if(e.hasOwnProperty(n)&&void 0!==t&&e[n]===t.value)return Object(r.a)({},n,t.reason);return Object(r.a)({},s.a,t?t.message:void 0)},C=function(t,e,n){var a=p(t)?"arrayParam":t;return"methodInput-".concat(e,"_").concat(n,"_").concat(a)},A=function(t,e){return function(n,a){var r=n.type,c=C(r,t,a);return function(t){try{return JSON.parse(t).map((function(t){return Number.isInteger(t)?new f.BigNumber(t).toString():t}))}catch(e){return null}}(e[c])||e[c]}},S=function(t,e,n){var r,c=new(Object(d.h)().eth.Contract)([t],e),i=t.inputs,o=t.name,s=void 0===o?"":o,u=t.signatureHash,l=(null===i||void 0===i?void 0:i.map(A(u,n)))||[];return(r=c.methods)[s].apply(r,Object(a.a)(l))},k=function(t){return t&&"read"===t.action},E=function(t,e,n){p(e)&&(t=t.replace("[]",""));var a=n[t];return"bool"===e&&(a=String(a)),a}},1588:function(t,e,n){"use strict";var a=n(622),r=n(788),c=n(122),i=n(91),o=n(1);e.a=function(t){var e=t.onChange;return Object(o.jsxs)(c.a,{margin:"md",children:[Object(o.jsx)(i.a,{noMargin:!0,children:"If you want to sign the transaction now but manually execute it later, click on the checkbox below."}),Object(o.jsx)(a.a,{control:Object(o.jsx)(r.a,{defaultChecked:!0,color:"primary",onChange:function(t){e(t.target.checked)}}),label:"Execute transaction","data-testid":"execute-checkbox"})]})}},1618:function(t,e,n){"use strict";var a=n(1608),r=function(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then},c=function(t,e){return t===e};e.a=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){var n={};return t.subscribe((function(i){var o=i.values;t.batch((function(){var i=function(e,c,i){var s=o&&Object(a.e)(o,e),u=n&&Object(a.e)(n,e);if(!c(s,u))if("function"===typeof i){var d=i(s,e,o,n);r(d)?d.then((function(e){Object.keys(e).forEach((function(n){t.change(n,e[n])}))})):Object.keys(d).forEach((function(e){t.change(e,d[e])}))}else Object.keys(i).forEach((function(e){var a=(0,i[e])(s,o,n);r(a)?a.then((function(n){t.change(e,n)})):t.change(e,a)}))},s=t.getRegisteredFields();e.forEach((function(t){var e=t.field,n=t.isEqual,a=t.updates;if("string"===typeof e)i(e,n||c,a);else{var r=Array.isArray(e)?function(t){return~e.indexOf(t)||-1!==e.findIndex((function(e){return e instanceof RegExp&&e.test(t)}))}:function(t){return e.test(t)};s.forEach((function(t){r(t)&&i(t,n||c,a)}))}})),n=o}))}),{values:!0})}}},1635:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(10),r=n(544),c=Object(r.a)({qrCodeBtn:{cursor:"pointer"},formContainer:{padding:"".concat(a.md," ").concat(a.lg),wordBreak:"break-word"},value:{marginLeft:a.sm},outerData:{borderRadius:"5px",border:"1px solid ".concat(a.border),padding:"11px",minHeight:"21px"},data:{wordBreak:"break-all",overflow:"auto",fontSize:"14px",fontFamily:"Averta",maxHeight:"100px",letterSpacing:"normal",fontStretch:"normal",lineHeight:"1.43"},buttonRow:{height:"84px",justifyContent:"center",gap:"16px"},dataInput:{"& TextField-root-294":{lineHeight:"auto",border:"green"}},selectAddress:{cursor:"pointer"},fullWidth:{justifyContent:"space-between"}})}}]);
//# sourceMappingURL=51.dc30b389.chunk.js.map