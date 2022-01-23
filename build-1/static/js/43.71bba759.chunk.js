(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[43],{1671:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.baToJSON=r.addHexPrefix=r.toUnsigned=r.fromSigned=r.bufferToHex=r.bufferToInt=r.toBuffer=r.stripZeros=r.unpad=r.setLengthRight=r.setLength=r.setLengthLeft=r.zeros=void 0;var n=t(245),i=t(26);r.zeros=function(r){return e.allocUnsafe(r).fill(0)},r.setLengthLeft=function(e,t,n){void 0===n&&(n=!1);var i=r.zeros(t);return e=r.toBuffer(e),n?e.length<t?(e.copy(i),i):e.slice(0,t):e.length<t?(e.copy(i,t-e.length),i):e.slice(-t)},r.setLength=r.setLengthLeft,r.setLengthRight=function(e,t){return r.setLength(e,t,!0)},r.unpad=function(e){for(var r=(e=n.stripHexPrefix(e))[0];e.length>0&&"0"===r.toString();)r=(e=e.slice(1))[0];return e},r.stripZeros=r.unpad,r.toBuffer=function(r){if(!e.isBuffer(r))if(Array.isArray(r))r=e.from(r);else if("string"===typeof r){if(!n.isHexString(r))throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: "+r);r=e.from(n.padToEven(n.stripHexPrefix(r)),"hex")}else if("number"===typeof r)r=n.intToBuffer(r);else if(null===r||void 0===r)r=e.allocUnsafe(0);else if(i.isBN(r))r=r.toArrayLike(e);else{if(!r.toArray)throw new Error("invalid type");r=e.from(r.toArray())}return r},r.bufferToInt=function(e){return new i(r.toBuffer(e)).toNumber()},r.bufferToHex=function(e){return"0x"+(e=r.toBuffer(e)).toString("hex")},r.fromSigned=function(e){return new i(e).fromTwos(256)},r.toUnsigned=function(r){return e.from(r.toTwos(256).toArray())},r.addHexPrefix=function(e){return"string"!==typeof e||n.isHexPrefixed(e)?e:"0x"+e},r.baToJSON=function(t){if(e.isBuffer(t))return"0x"+t.toString("hex");if(t instanceof Array){for(var n=[],i=0;i<t.length;i++)n.push(r.baToJSON(t[i]));return n}}}).call(this,t(21).Buffer)},1804:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.ecdhUnsafe=r.ecdh=r.recover=r.verify=r.sign=r.signatureImportLax=r.signatureImport=r.signatureExport=r.signatureNormalize=r.publicKeyCombine=r.publicKeyTweakMul=r.publicKeyTweakAdd=r.publicKeyVerify=r.publicKeyConvert=r.publicKeyCreate=r.privateKeyTweakMul=r.privateKeyTweakAdd=r.privateKeyModInverse=r.privateKeyNegate=r.privateKeyImport=r.privateKeyExport=r.privateKeyVerify=void 0;var n=t(352),i=t(2428),o=t(2429);r.privateKeyVerify=function(e){return 32===e.length&&n.privateKeyVerify(Uint8Array.from(e))},r.privateKeyExport=function(e,r){if(32!==e.length)throw new RangeError("private key length is invalid");var t=i.privateKeyExport(e,r);return o.privateKeyExport(e,t,r)},r.privateKeyImport=function(e){if(null!==(e=o.privateKeyImport(e))&&32===e.length&&r.privateKeyVerify(e))return e;throw new Error("couldn't import from DER format")},r.privateKeyNegate=function(r){return e.from(n.privateKeyNegate(Uint8Array.from(r)))},r.privateKeyModInverse=function(r){if(32!==r.length)throw new Error("private key length is invalid");return e.from(i.privateKeyModInverse(Uint8Array.from(r)))},r.privateKeyTweakAdd=function(r,t){return e.from(n.privateKeyTweakAdd(Uint8Array.from(r),t))},r.privateKeyTweakMul=function(r,t){return e.from(n.privateKeyTweakMul(Uint8Array.from(r),Uint8Array.from(t)))},r.publicKeyCreate=function(r,t){return e.from(n.publicKeyCreate(Uint8Array.from(r),t))},r.publicKeyConvert=function(r,t){return e.from(n.publicKeyConvert(Uint8Array.from(r),t))},r.publicKeyVerify=function(e){return(33===e.length||65===e.length)&&n.publicKeyVerify(Uint8Array.from(e))},r.publicKeyTweakAdd=function(r,t,i){return e.from(n.publicKeyTweakAdd(Uint8Array.from(r),Uint8Array.from(t),i))},r.publicKeyTweakMul=function(r,t,i){return e.from(n.publicKeyTweakMul(Uint8Array.from(r),Uint8Array.from(t),i))},r.publicKeyCombine=function(r,t){var i=[];return r.forEach((function(e){i.push(Uint8Array.from(e))})),e.from(n.publicKeyCombine(i,t))},r.signatureNormalize=function(r){return e.from(n.signatureNormalize(Uint8Array.from(r)))},r.signatureExport=function(r){return e.from(n.signatureExport(Uint8Array.from(r)))},r.signatureImport=function(r){return e.from(n.signatureImport(Uint8Array.from(r)))},r.signatureImportLax=function(e){if(0===e.length)throw new RangeError("signature length is invalid");var r=o.signatureImportLax(e);if(null===r)throw new Error("couldn't parse DER signature");return i.signatureImport(r)},r.sign=function(r,t,i){if(null===i)throw new TypeError("options should be an Object");var o=void 0;if(i){if(o={},null===i.data)throw new TypeError("options.data should be a Buffer");if(i.data){if(32!=i.data.length)throw new RangeError("options.data length is invalid");o.data=new Uint8Array(i.data)}if(null===i.noncefn)throw new TypeError("options.noncefn should be a Function");i.noncefn&&(o.noncefn=function(r,t,n,o,f){var a=null!=n?e.from(n):null,u=null!=o?e.from(o):null,s=e.from("");return i.noncefn&&(s=i.noncefn(e.from(r),e.from(t),a,u,f)),new Uint8Array(s)})}var f=n.ecdsaSign(Uint8Array.from(r),Uint8Array.from(t),o);return{signature:e.from(f.signature),recovery:f.recid}},r.verify=function(e,r,t){return n.ecdsaVerify(Uint8Array.from(r),Uint8Array.from(e),t)},r.recover=function(r,t,i,o){return e.from(n.ecdsaRecover(Uint8Array.from(t),i,Uint8Array.from(r),o))},r.ecdh=function(r,t){return e.from(n.ecdh(Uint8Array.from(r),Uint8Array.from(t),{}))},r.ecdhUnsafe=function(r,t,n){if(33!==r.length&&65!==r.length)throw new RangeError("public key length is invalid");if(32!==t.length)throw new RangeError("private key length is invalid");return e.from(i.ecdhUnsafe(Uint8Array.from(r),Uint8Array.from(t),n))}}).call(this,t(21).Buffer)},1805:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.rlphash=r.ripemd160=r.sha256=r.keccak256=r.keccak=void 0;var n=t(467),i=n.keccak224,o=n.keccak384,f=n.keccak256,a=n.keccak512,u=t(193),s=t(245),c=t(195),l=t(1671);r.keccak=function(r,t){switch(void 0===t&&(t=256),r="string"!==typeof r||s.isHexString(r)?l.toBuffer(r):e.from(r,"utf8"),t||(t=256),t){case 224:return i(r);case 256:return f(r);case 384:return o(r);case 512:return a(r);default:throw new Error("Invald algorithm: keccak"+t)}},r.keccak256=function(e){return r.keccak(e)},r.sha256=function(e){return e=l.toBuffer(e),u("sha256").update(e).digest()},r.ripemd160=function(e,r){e=l.toBuffer(e);var t=u("rmd160").update(e).digest();return!0===r?l.setLength(t,32):t},r.rlphash=function(e){return r.keccak(c.encode(e))}}).call(this,t(21).Buffer)},2e3:function(e,r,t){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},n.apply(this,arguments)};Object.defineProperty(r,"__esModule",{value:!0});var i=t(2001),o=t(1803),f=t(21),a=new i.BN("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),u=function(){function e(e,r){if(void 0===e&&(e={}),void 0===r&&(r={}),r.common){if(r.chain||r.hardfork)throw new Error("Instantiation with both opts.common, and opts.chain and opts.hardfork parameter not allowed!");this._common=r.common}else{var t=r.chain?r.chain:"mainnet",n=r.hardfork?r.hardfork:"petersburg";this._common=new o.default(t,n)}var a=[{name:"nonce",length:32,allowLess:!0,default:new f.Buffer([])},{name:"gasPrice",length:32,allowLess:!0,default:new f.Buffer([])},{name:"gasLimit",alias:"gas",length:32,allowLess:!0,default:new f.Buffer([])},{name:"to",allowZero:!0,length:20,default:new f.Buffer([])},{name:"value",length:32,allowLess:!0,default:new f.Buffer([])},{name:"data",alias:"input",allowZero:!0,default:new f.Buffer([])},{name:"v",allowZero:!0,default:new f.Buffer([])},{name:"r",length:32,allowZero:!0,allowLess:!0,default:new f.Buffer([])},{name:"s",length:32,allowZero:!0,allowLess:!0,default:new f.Buffer([])}];i.defineProperties(this,a,e),Object.defineProperty(this,"from",{enumerable:!0,configurable:!0,get:this.getSenderAddress.bind(this)}),this._validateV(this.v),this._overrideVSetterWithValidation()}return e.prototype.toCreationAddress=function(){return""===this.to.toString("hex")},e.prototype.hash=function(e){var r;return void 0===e&&(e=!0),r=e?this.raw:this._implementsEIP155()?this.raw.slice(0,6).concat([i.toBuffer(this.getChainId()),i.stripZeros(i.toBuffer(0)),i.stripZeros(i.toBuffer(0))]):this.raw.slice(0,6),i.rlphash(r)},e.prototype.getChainId=function(){return this._common.chainId()},e.prototype.getSenderAddress=function(){if(this._from)return this._from;var e=this.getSenderPublicKey();return this._from=i.publicToAddress(e),this._from},e.prototype.getSenderPublicKey=function(){if(!this.verifySignature())throw new Error("Invalid Signature");return this._senderPubKey},e.prototype.verifySignature=function(){var e=this.hash(!1);if(this._common.gteHardfork("homestead")&&1===new i.BN(this.s).cmp(a))return!1;try{var r=i.bufferToInt(this.v),t=r>=2*this.getChainId()+35&&this._common.gteHardfork("spuriousDragon");this._senderPubKey=i.ecrecover(e,r,this.r,this.s,t?this.getChainId():void 0)}catch(n){return!1}return!!this._senderPubKey},e.prototype.sign=function(e){this.v=new f.Buffer([]),this.s=new f.Buffer([]),this.r=new f.Buffer([]);var r=this.hash(!1),t=i.ecsign(r,e);this._implementsEIP155()&&(t.v+=2*this.getChainId()+8),Object.assign(this,t)},e.prototype.getDataFee=function(){for(var e=this.raw[5],r=new i.BN(0),t=0;t<e.length;t++)0===e[t]?r.iaddn(this._common.param("gasPrices","txDataZero")):r.iaddn(this._common.param("gasPrices","txDataNonZero"));return r},e.prototype.getBaseFee=function(){var e=this.getDataFee().iaddn(this._common.param("gasPrices","tx"));return this._common.gteHardfork("homestead")&&this.toCreationAddress()&&e.iaddn(this._common.param("gasPrices","txCreation")),e},e.prototype.getUpfrontCost=function(){return new i.BN(this.gasLimit).imul(new i.BN(this.gasPrice)).iadd(new i.BN(this.value))},e.prototype.validate=function(e){void 0===e&&(e=!1);var r=[];return this.verifySignature()||r.push("Invalid Signature"),this.getBaseFee().cmp(new i.BN(this.gasLimit))>0&&r.push(["gas limit is too low. Need at least "+this.getBaseFee()]),!1===e?0===r.length:r.join(" ")},e.prototype.serialize=function(){return i.rlp.encode(this.raw)},e.prototype.toJSON=function(e){return void 0===e&&(e=!1),{}},e.prototype._validateV=function(e){if(void 0!==e&&0!==e.length&&this._common.gteHardfork("spuriousDragon")){var r=i.bufferToInt(e);if(27!==r&&28!==r)if(!(r===2*this.getChainId()+35||r===2*this.getChainId()+36))throw new Error("Incompatible EIP155-based V "+r+" and chain id "+this.getChainId()+". See the second parameter of the Transaction constructor to set the chain id.")}},e.prototype._isSigned=function(){return this.v.length>0&&this.r.length>0&&this.s.length>0},e.prototype._overrideVSetterWithValidation=function(){var e=this,r=Object.getOwnPropertyDescriptor(this,"v");Object.defineProperty(this,"v",n({},r,{set:function(t){void 0!==t&&e._validateV(i.toBuffer(t)),r.set(t)}}))},e.prototype._implementsEIP155=function(){var e=this._common.gteHardfork("spuriousDragon");if(!this._isSigned())return e;var r=i.bufferToInt(this.v);return(r===2*this.getChainId()+35||r===2*this.getChainId()+36)&&e},e}();r.default=u},2001:function(e,r,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),i=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||r.hasOwnProperty(t)||n(r,e,t)};Object.defineProperty(r,"__esModule",{value:!0}),r.secp256k1=r.rlp=r.BN=void 0;var o=t(1804);r.secp256k1=o;var f=t(245),a=t(26);r.BN=a;var u=t(195);r.rlp=u,Object.assign(r,f),i(t(2430),r),i(t(2431),r),i(t(1805),r),i(t(2432),r),i(t(1671),r),i(t(2433),r)},2427:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(2e3);r.Transaction=n.default;var i=t(2434);r.FakeTransaction=i.default},2428:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0});var n=t(26),i=new(0,t(194).ec)("secp256k1"),o=i.curve;r.privateKeyExport=function(e,r){void 0===r&&(r=!0);var t=new n(e);if(t.ucmp(o.n)>=0)throw new Error("couldn't export to DER format");var a=i.g.mul(t);return f(a.getX(),a.getY(),r)},r.privateKeyModInverse=function(r){var t=new n(r);if(t.ucmp(o.n)>=0||t.isZero())throw new Error("private key range is invalid");return t.invm(o.n).toArrayLike(e,"be",32)},r.signatureImport=function(r){var t=new n(r.r);t.ucmp(o.n)>=0&&(t=new n(0));var i=new n(r.s);return i.ucmp(o.n)>=0&&(i=new n(0)),e.concat([t.toArrayLike(e,"be",32),i.toArrayLike(e,"be",32)])},r.ecdhUnsafe=function(e,r,t){void 0===t&&(t=!0);var a=i.keyFromPublic(e),u=new n(r);if(u.ucmp(o.n)>=0||u.isZero())throw new Error("scalar was invalid (zero or overflow)");var s=a.pub.mul(u);return f(s.getX(),s.getY(),t)};var f=function(r,t,n){var i;return n?((i=e.alloc(33))[0]=t.isOdd()?3:2,r.toArrayLike(e,"be",32).copy(i,1)):((i=e.alloc(65))[0]=4,r.toArrayLike(e,"be",32).copy(i,1),t.toArrayLike(e,"be",32).copy(i,33)),i}}).call(this,t(21).Buffer)},2429:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0});var t=e.from([48,129,211,2,1,1,4,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,129,133,48,129,130,2,1,1,48,44,6,7,42,134,72,206,61,1,1,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,255,255,252,47,48,6,4,1,0,4,1,7,4,33,2,121,190,102,126,249,220,187,172,85,160,98,149,206,135,11,7,2,155,252,219,45,206,40,217,89,242,129,91,22,248,23,152,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65,2,1,1,161,36,3,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),n=e.from([48,130,1,19,2,1,1,4,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,129,165,48,129,162,2,1,1,48,44,6,7,42,134,72,206,61,1,1,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,255,255,252,47,48,6,4,1,0,4,1,7,4,65,4,121,190,102,126,249,220,187,172,85,160,98,149,206,135,11,7,2,155,252,219,45,206,40,217,89,242,129,91,22,248,23,152,72,58,218,119,38,163,196,101,93,164,251,252,14,17,8,168,253,23,180,72,166,133,84,25,156,71,208,143,251,16,212,184,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65,2,1,1,161,68,3,66,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);r.privateKeyExport=function(r,i,o){void 0===o&&(o=!0);var f=e.from(o?t:n);return r.copy(f,o?8:9),i.copy(f,o?181:214),f},r.privateKeyImport=function(e){var r=e.length,t=0;if(r<t+1||48!==e[t])return null;if(r<(t+=1)+1||!(128&e[t]))return null;var n=127&e[t];if(n<1||n>2)return null;if(r<(t+=1)+n)return null;var i=e[t+n-1]|(n>1?e[t+n-2]<<8:0);return r<(t+=n)+i||r<t+3||2!==e[t]||1!==e[t+1]||1!==e[t+2]||r<(t+=3)+2||4!==e[t]||e[t+1]>32||r<t+2+e[t+1]?null:e.slice(t+2,t+2+e[t+1])},r.signatureImportLax=function(r){var t=e.alloc(32,0),n=e.alloc(32,0),i=r.length,o=0;if(48!==r[o++])return null;var f=r[o++];if(128&f&&(o+=f-128)>i)return null;if(2!==r[o++])return null;var a=r[o++];if(128&a){if(o+(f=a-128)>i)return null;for(;f>0&&0===r[o];o+=1,f-=1);for(a=0;f>0;o+=1,f-=1)a=(a<<8)+r[o]}if(a>i-o)return null;var u=o;if(o+=a,2!==r[o++])return null;var s=r[o++];if(128&s){if(o+(f=s-128)>i)return null;for(;f>0&&0===r[o];o+=1,f-=1);for(s=0;f>0;o+=1,f-=1)s=(s<<8)+r[o]}if(s>i-o)return null;var c=o;for(o+=s;a>0&&0===r[u];a-=1,u+=1);if(a>32)return null;var l=r.slice(u,u+a);for(l.copy(t,32-l.length);s>0&&0===r[c];s-=1,c+=1);if(s>32)return null;var d=r.slice(c,c+s);return d.copy(n,32-d.length),{r:t,s:n}}}).call(this,t(21).Buffer)},2430:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.KECCAK256_RLP=r.KECCAK256_RLP_S=r.KECCAK256_RLP_ARRAY=r.KECCAK256_RLP_ARRAY_S=r.KECCAK256_NULL=r.KECCAK256_NULL_S=r.TWO_POW256=r.MAX_INTEGER=void 0;var n=t(26);r.MAX_INTEGER=new n("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16),r.TWO_POW256=new n("10000000000000000000000000000000000000000000000000000000000000000",16),r.KECCAK256_NULL_S="c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",r.KECCAK256_NULL=e.from(r.KECCAK256_NULL_S,"hex"),r.KECCAK256_RLP_ARRAY_S="1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",r.KECCAK256_RLP_ARRAY=e.from(r.KECCAK256_RLP_ARRAY_S,"hex"),r.KECCAK256_RLP_S="56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",r.KECCAK256_RLP=e.from(r.KECCAK256_RLP_S,"hex")}).call(this,t(21).Buffer)},2431:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.importPublic=r.privateToPublic=r.privateToAddress=r.publicToAddress=r.pubToAddress=r.isValidPublic=r.isValidPrivate=r.isPrecompiled=r.generateAddress2=r.generateAddress=r.isValidChecksumAddress=r.toChecksumAddress=r.isZeroAddress=r.isValidAddress=r.zeroAddress=void 0;var n=t(246),i=t(245),o=t(1804),f=t(26),a=t(1671),u=t(1805);r.zeroAddress=function(){var e=a.zeros(20);return a.bufferToHex(e)},r.isValidAddress=function(e){return/^0x[0-9a-fA-F]{40}$/.test(e)},r.isZeroAddress=function(e){return r.zeroAddress()===a.addHexPrefix(e)},r.toChecksumAddress=function(e,r){e=i.stripHexPrefix(e).toLowerCase();for(var t=void 0!==r?r.toString()+"0x":"",n=u.keccak(t+e).toString("hex"),o="0x",f=0;f<e.length;f++)parseInt(n[f],16)>=8?o+=e[f].toUpperCase():o+=e[f];return o},r.isValidChecksumAddress=function(e,t){return r.isValidAddress(e)&&r.toChecksumAddress(e,t)===e},r.generateAddress=function(r,t){r=a.toBuffer(r);var n=new f(t);return n.isZero()?u.rlphash([r,null]).slice(-20):u.rlphash([r,e.from(n.toArray())]).slice(-20)},r.generateAddress2=function(r,t,i){var o=a.toBuffer(r),f=a.toBuffer(t),s=a.toBuffer(i);return n(20===o.length),n(32===f.length),u.keccak256(e.concat([e.from("ff","hex"),o,f,u.keccak256(s)])).slice(-20)},r.isPrecompiled=function(e){var r=a.unpad(e);return 1===r.length&&r[0]>=1&&r[0]<=8},r.isValidPrivate=function(e){return o.privateKeyVerify(e)},r.isValidPublic=function(r,t){return void 0===t&&(t=!1),64===r.length?o.publicKeyVerify(e.concat([e.from([4]),r])):!!t&&o.publicKeyVerify(r)},r.pubToAddress=function(e,r){return void 0===r&&(r=!1),e=a.toBuffer(e),r&&64!==e.length&&(e=o.publicKeyConvert(e,!1).slice(1)),n(64===e.length),u.keccak(e).slice(-20)},r.publicToAddress=r.pubToAddress,r.privateToAddress=function(e){return r.publicToAddress(r.privateToPublic(e))},r.privateToPublic=function(e){return e=a.toBuffer(e),o.publicKeyCreate(e,!1).slice(1)},r.importPublic=function(e){return 64!==(e=a.toBuffer(e)).length&&(e=o.publicKeyConvert(e,!1).slice(1)),e}}).call(this,t(21).Buffer)},2432:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.hashPersonalMessage=r.isValidSignature=r.fromRpcSig=r.toRpcSig=r.ecrecover=r.ecsign=void 0;var n=t(1804),i=t(26),o=t(1671),f=t(1805);function a(e,r){return r?e-(2*r+35):e-27}function u(e){return 0===e||1===e}r.ecsign=function(e,r,t){var i=n.sign(e,r),o=i.recovery;return{r:i.signature.slice(0,32),s:i.signature.slice(32,64),v:t?o+(2*t+35):o+27}},r.ecrecover=function(r,t,i,f,s){var c=e.concat([o.setLength(i,32),o.setLength(f,32)],64),l=a(t,s);if(!u(l))throw new Error("Invalid signature v value");var d=n.recover(r,c,l);return n.publicKeyConvert(d,!1).slice(1)},r.toRpcSig=function(r,t,n,i){if(!u(a(r,i)))throw new Error("Invalid signature v value");return o.bufferToHex(e.concat([o.setLengthLeft(t,32),o.setLengthLeft(n,32),o.toBuffer(r)]))},r.fromRpcSig=function(e){var r=o.toBuffer(e);if(65!==r.length)throw new Error("Invalid signature length");var t=r[64];return t<27&&(t+=27),{v:t,r:r.slice(0,32),s:r.slice(32,64)}},r.isValidSignature=function(e,r,t,n,o){void 0===n&&(n=!0);var f=new i("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),s=new i("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",16);if(32!==r.length||32!==t.length)return!1;if(!u(a(e,o)))return!1;var c=new i(r),l=new i(t);return!(c.isZero()||c.gt(s)||l.isZero()||l.gt(s))&&(!n||1!==l.cmp(f))},r.hashPersonalMessage=function(r){var t=e.from("\x19Ethereum Signed Message:\n"+r.length.toString(),"utf-8");return f.keccak(e.concat([t,r]))}}).call(this,t(21).Buffer)},2433:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.defineProperties=void 0;var n=t(246),i=t(245),o=t(195),f=t(1671);r.defineProperties=function(r,t,a){if(r.raw=[],r._fields=[],r.toJSON=function(e){if(void 0===e&&(e=!1),e){var t={};return r._fields.forEach((function(e){t[e]="0x"+r[e].toString("hex")})),t}return f.baToJSON(r.raw)},r.serialize=function(){return o.encode(r.raw)},t.forEach((function(t,i){function o(){return r.raw[i]}function a(o){"00"!==(o=f.toBuffer(o)).toString("hex")||t.allowZero||(o=e.allocUnsafe(0)),t.allowLess&&t.length?(o=f.stripZeros(o),n(t.length>=o.length,"The field "+t.name+" must not have more "+t.length+" bytes")):t.allowZero&&0===o.length||!t.length||n(t.length===o.length,"The field "+t.name+" must have byte length of "+t.length),r.raw[i]=o}r._fields.push(t.name),Object.defineProperty(r,t.name,{enumerable:!0,configurable:!0,get:o,set:a}),t.default&&(r[t.name]=t.default),t.alias&&Object.defineProperty(r,t.alias,{enumerable:!1,configurable:!0,set:a,get:o})})),a)if("string"===typeof a&&(a=e.from(i.stripHexPrefix(a),"hex")),e.isBuffer(a)&&(a=o.decode(a)),Array.isArray(a)){if(a.length>r._fields.length)throw new Error("wrong number of fields in data");a.forEach((function(e,t){r[r._fields[t]]=f.toBuffer(e)}))}else{if("object"!==typeof a)throw new Error("invalid data");var u=Object.keys(a);t.forEach((function(e){-1!==u.indexOf(e.name)&&(r[e.name]=a[e.name]),-1!==u.indexOf(e.alias)&&(r[e.alias]=a[e.alias])}))}}}).call(this,t(21).Buffer)},2434:function(e,r,t){"use strict";var n=this&&this.__extends||function(){var e=function(r,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])},e(r,t)};return function(r,t){function n(){this.constructor=r}e(r,t),r.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}();Object.defineProperty(r,"__esModule",{value:!0});var i=t(2001),o=t(21),f=function(e){function r(r,t){void 0===r&&(r={}),void 0===t&&(t={});var n=e.call(this,r,t)||this;Object.defineProperty(n,"from",{enumerable:!0,configurable:!0,get:function(){return n.getSenderAddress()},set:function(e){e&&(n._from=i.toBuffer(e))}});var o=r;return o.from&&(n.from=i.toBuffer(o.from)),n}return n(r,e),r.prototype.hash=function(r){if(void 0===r&&(r=!0),r&&this._from&&""!==this._from.toString("hex")){var t=o.Buffer.concat([this._from,this._from.slice(0,12)]);this.sign(t)}return e.prototype.hash.call(this,r)},r}(t(2e3).default);r.default=f}}]);
//# sourceMappingURL=43.71bba759.chunk.js.map