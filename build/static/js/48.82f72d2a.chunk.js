(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[48],{1499:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(16),i=n(35),s=n(423),o=n(0),u=n(30),d=n(298),b=n(19),j=n(1569),l=n(151),O=n(110),x=n(177),f=n(131),h=n(91),m=n(122),p=n(163),g=n(290),v=n(463),w=n(66),k=n(1757),C=n(46),A=n(97),y=n(1581),E=n(1552),G=n(244),S=n(140),T=n(1554),L=n(1567),D=n(346),N=n(1562),P=n(10),B=n(544),I=Object(B.a)({container:{padding:"".concat(P.md," ").concat(P.lg)},amount:{marginLeft:P.sm},buttonRow:{height:"84px",justifyContent:"center",gap:"16px"}}),M=n(1563),F=n(1560),R=n(27),z=n(1545),_=n(20),U=n(1588),J=n(226),Y=n(1),H=Object(s.a)(I);t.default=function(e){var t=e.onClose,n=e.onPrev,a=e.tx,s=H(),P=Object(u.d)(),B=Object(_.l)(),I=Object(b.n)(),W=Object(u.e)(G.a),X=Object(o.useMemo)((function(){return W.find((function(e){return Object(C.f)(e.address,a.token)}))}),[W,a.token]),q=Object(o.useMemo)((function(){return Object(C.f)(null===X||void 0===X?void 0:X.address,Object(J.b)())}),[X]),K=q?a.recipientAddress:(null===X||void 0===X?void 0:X.address)||"",Q=q?Object(d.c)(a.amount,I.decimals):"0",V=function(e,t,n,a){var s=Object(o.useState)(""),u=Object(i.a)(s,2),b=u[0],j=u[1];return Object(o.useEffect)((function(){var i=function(){var i=Object(r.a)(c.a.mark((function r(){var i,s,o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(a){c.next=2;break}return c.abrupt("return");case 2:i=A.a,e||(s=Object(k.a)(a.address),o=Object(d.c)(t,a.decimals),i=s.methods.transfer(n,o).encodeABI()),j(i);case 5:case"end":return c.stop()}}),r)})));return function(){return i.apply(this,arguments)}}();i()}),[e,n,t,a]),b}(q,a.amount,a.recipientAddress,X),Z=Object(o.useState)("0"),$=Object(i.a)(Z,2),ee=$[0],te=$[1],ne=Object(o.useState)(),ae=Object(i.a)(ne,2),ce=ae[0],re=ae[1],ie=Object(o.useState)(),se=Object(i.a)(ie,2),oe=se[0],ue=se[1],de=Object(T.b)({txData:V,txRecipient:K,txType:a.txType,txAmount:Q,safeTxGas:ee,manualGasPrice:ce,manualGasLimit:oe}),be=de.gasCostFormatted,je=de.gasPriceFormatted,le=de.gasLimit,Oe=de.gasEstimation,xe=de.txEstimationExecutionStatus,fe=de.isExecution,he=de.isCreation,me=de.isOffChainSignature,pe=Object(L.a)(xe),ge=Object(i.a)(pe,2),ve=ge[0],we=ge[1],ke=Object(S.a)(a.txType,"spendingLimit"),Ce=Object(o.useState)(!0),Ae=Object(i.a)(Ce,2),ye=Ae[0],Ee=Ae[1],Ge=fe&&ye,Se=function(){var e=Object(r.a)(c.a.mark((function e(n){var r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(we(D.a.LOADING),B){e.next=5;break}return we(D.a.READY),Object(R.c)(R.b._802),e.abrupt("return");case 5:if(!(ke&&X&&a.tokenSpendingLimit)){e.next=18;break}return r=q?C.a:X.address,i=Object(g.a)(),e.prev=8,e.next=11,i.methods.executeAllowanceTransfer(B,r,a.recipientAddress,Object(d.c)(a.amount,X.decimals),C.a,0,a.tokenSpendingLimit.delegate,A.a).send({from:a.tokenSpendingLimit.delegate}).on("transactionHash",(function(){return t()}));case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(8),we(D.a.READY),Object(R.c)(R.b._801,e.t0.message);case 17:return e.abrupt("return");case 18:P(Object(v.b)({safeAddress:B,to:K,valueInWei:Q,txData:V,txNonce:n.safeNonce,safeTxGas:n.safeTxGas,ethParameters:n,notifiedTransaction:w.a.STANDARD_TX,delayExecution:!ye})),t();case 20:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(Y.jsx)(M.a,{isOffChainSignature:me,isExecution:Ge,ethGasLimit:le,ethGasPrice:je,safeTxGas:Oe,closeEditModalCallback:function(e){var t=je,n=e.ethGasPrice,a=Oe,c=e.safeTxGas;n&&t!==n&&re(e.ethGasPrice),e.ethGasLimit&&le!==e.ethGasLimit&&ue(e.ethGasLimit),c&&a!==c&&te(c)},children:function(e,c){return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(z.a,{onClose:t,subTitle:"2 of 2",title:"Send funds"}),Object(Y.jsx)(x.a,{}),Object(Y.jsxs)(l.a,{className:s.container,children:[Object(Y.jsx)(y.a,{}),Object(Y.jsx)(j.a,{withArrow:!0}),Object(Y.jsx)(m.a,{margin:"xs",children:Object(Y.jsx)(h.a,{color:"disabled",noMargin:!0,size:"md",style:{letterSpacing:"-0.5px"},children:"Recipient"})}),Object(Y.jsx)(m.a,{align:"center",margin:"md","data-testid":"recipient-review-step",children:Object(Y.jsx)(O.a,{xs:12,children:Object(Y.jsx)(p.a,{hash:a.recipientAddress,name:a.recipientName,showCopyBtn:!0,showAvatar:!0,explorerUrl:Object(b.i)(a.recipientAddress)})})}),Object(Y.jsx)(m.a,{margin:"xs",children:Object(Y.jsx)(h.a,{color:"disabled",noMargin:!0,size:"md",style:{letterSpacing:"-0.5px"},children:"Amount"})}),Object(Y.jsxs)(m.a,{align:"center",margin:"md",children:[Object(Y.jsx)(f.a,{alt:null===X||void 0===X?void 0:X.name,height:28,onError:E.a,src:null===X||void 0===X?void 0:X.logoUri}),Object(Y.jsxs)(h.a,{className:s.amount,noMargin:!0,size:"md","data-testid":"amount-".concat(null===X||void 0===X?void 0:X.symbol,"-review-step"),children:[a.amount," ",null===X||void 0===X?void 0:X.symbol]})]}),fe&&!ke&&Object(Y.jsx)(U.a,{onChange:Ee}),!ke&&Object(Y.jsx)(F.a,{txParameters:e,onEdit:c,isTransactionCreation:he,isTransactionExecution:Ge,isOffChainSignature:me})]}),!ke&&xe!==T.a.LOADING&&Object(Y.jsx)(N.a,{gasCostFormatted:be,isCreation:he,isExecution:Ge,isOffChainSignature:me,safeNonce:e.safeNonce,txEstimationExecutionStatus:xe}),Object(Y.jsx)(D.b.Footer,{withoutBorder:!ke&&ve!==D.a.LOADING,children:Object(Y.jsx)(D.b.Footer.Buttons,{cancelButtonProps:{onClick:n,text:"Back"},confirmButtonProps:{onClick:function(){return Se(e)},status:ve,text:xe===T.a.LOADING?"Estimating":void 0,testId:"submit-tx-btn"}})})]})}})}},1552:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1556),c=function(e){var t=e.currentTarget;/token_placeholder/.test(t.src)||(t.src=a.a)};n(466)},1556:function(e,t,n){"use strict";t.a=n.p+"static/media/token_placeholder.c1abe466.svg"},1566:function(e,t,n){"use strict";var a=n(8),c=n(63),r=n(7),i=n(9),s=n(11),o=n(12),u=n(0),d=n(1),b=["children"],j=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=Object(c.a)(e,b);return Object(d.jsx)("b",Object(a.a)(Object(a.a)({},n),{},{children:t}))}}]),n}(u.PureComponent);t.a=j},1569:function(e,t,n){"use strict";var a,c,r=n(24),i=n(22),s=n(25),o=n(1),u=i.default.div(a||(a=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  margin: 8px 0;\n\n  svg {\n    margin: 0 12px 0 4px;\n  }\n"]))),d=Object(i.default)(s.Divider)(c||(c=Object(r.a)(["\n  width: 100%;\n"])));t.a=function(e){var t=e.withArrow;return Object(o.jsxs)(u,{children:[t&&Object(o.jsx)(s.Icon,{type:"arrowDown",size:"md"}),Object(o.jsx)(d,{})]})}},1581:function(e,t,n){"use strict";var a,c=n(24),r=n(30),i=n(22),s=n(19),o=n(79),u=n(91),d=n(1566),b=n(10),j=n(151),l=n(163),O=n(1),x=Object(i.default)(j.a)(a||(a=Object(c.a)(["\n  font-size: 12px;\n  line-height: 1.08;\n  letter-spacing: -0.5px;\n  background-color: ",";\n  width: fit-content;\n  padding: 5px 10px;\n  margin-top: ",";\n  margin-left: 40px;\n  border-radius: 3px;\n"])),b.border,b.xs);t.a=function(){var e=Object(r.e)(o.j),t=e.address,n=e.ethBalance,a=e.name,c=Object(s.n)();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(l.a,{hash:t,name:a,explorerUrl:Object(s.i)(t),showAvatar:!0,showCopyBtn:!0}),n&&Object(O.jsx)(x,{children:Object(O.jsxs)(u.a,{noMargin:!0,children:["Balance: ",Object(O.jsx)(d.a,{"data-testid":"current-eth-balance",children:"".concat(n," ").concat(c.symbol)})]})})]})}},1588:function(e,t,n){"use strict";var a=n(622),c=n(788),r=n(122),i=n(91),s=n(1);t.a=function(e){var t=e.onChange;return Object(s.jsxs)(r.a,{margin:"md",children:[Object(s.jsx)(i.a,{noMargin:!0,children:"If you want to sign the transaction now but manually execute it later, click on the checkbox below."}),Object(s.jsx)(a.a,{control:Object(s.jsx)(c.a,{defaultChecked:!0,color:"primary",onChange:function(e){t(e.target.checked)}}),label:"Execute transaction","data-testid":"execute-checkbox"})]})}},1757:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var a=n(1877),c=n(1878),r=n(32),i=function(e){return new(Object(r.h)().eth.Contract)(a.abi,e)},s=function(e){return new(Object(r.h)().eth.Contract)(c.abi,e)}}}]);
//# sourceMappingURL=48.82f72d2a.chunk.js.map