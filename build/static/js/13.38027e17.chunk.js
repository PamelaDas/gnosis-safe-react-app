(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[13],{1803:function(e,a,o){"use strict";var t=this&&this.__assign||function(){return t=Object.assign||function(e){for(var a,o=1,t=arguments.length;o<t;o++)for(var n in a=arguments[o])Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);return e},t.apply(this,arguments)};Object.defineProperty(a,"__esModule",{value:!0});var n=o(2409),r=o(2415),i=function(){function e(e,a,o){this._chainParams=this.setChain(e),this._hardfork=null,this._supportedHardforks=void 0===o?[]:o,a&&this.setHardfork(a)}return e.forCustomChain=function(a,o,n,r){var i=e._getChainParams(a);return new e(t(t({},i),o),n,r)},e._getChainParams=function(e){if("number"===typeof e){if(n.chains.names[e])return n.chains[n.chains.names[e]];throw new Error("Chain with ID "+e+" not supported")}if(n.chains[e])return n.chains[e];throw new Error("Chain with name "+e+" not supported")},e.prototype.setChain=function(a){if("number"===typeof a||"string"===typeof a)this._chainParams=e._getChainParams(a);else{if("object"!==typeof a)throw new Error("Wrong input format");for(var o=0,t=["networkId","genesis","hardforks","bootstrapNodes"];o<t.length;o++){var n=t[o];if(void 0===a[n])throw new Error("Missing required chain parameter: "+n)}this._chainParams=a}return this._chainParams},e.prototype.setHardfork=function(e){if(!this._isSupportedHardfork(e))throw new Error("Hardfork "+e+" not set as supported in supportedHardforks");for(var a=!1,o=0,t=r.hardforks;o<t.length;o++){t[o][0]===e&&(this._hardfork=e,a=!0)}if(!a)throw new Error("Hardfork with name "+e+" not supported")},e.prototype._chooseHardfork=function(e,a){if(a=void 0===a||a,e){if(a&&!this._isSupportedHardfork(e))throw new Error("Hardfork "+e+" not set as supported in supportedHardforks")}else{if(!this._hardfork)throw new Error("Method called with neither a hardfork set nor provided by param");e=this._hardfork}return e},e.prototype._getHardfork=function(e){for(var a=0,o=this.hardforks();a<o.length;a++){var t=o[a];if(t.name===e)return t}throw new Error("Hardfork "+e+" not defined for chain "+this.chainName())},e.prototype._isSupportedHardfork=function(e){if(!(this._supportedHardforks.length>0))return!0;for(var a=0,o=this._supportedHardforks;a<o.length;a++){if(e===o[a])return!0}return!1},e.prototype.param=function(e,a,o){var t;o=this._chooseHardfork(o);for(var n=0,i=r.hardforks;n<i.length;n++){var s=i[n];if(!s[1][e])throw new Error("Topic "+e+" not defined");if(void 0!==s[1][e][a]&&(t=s[1][e][a].v),s[0]===o)break}if(void 0===t)throw new Error(e+" value for "+a+" not found");return t},e.prototype.paramByBlock=function(e,a,o){var t=this.activeHardforks(o),n=t[t.length-1].name;return this.param(e,a,n)},e.prototype.hardforkIsActiveOnBlock=function(e,a,o){var t=void 0!==(o=void 0!==o?o:{}).onlySupported&&o.onlySupported;e=this._chooseHardfork(e,t);var n=this.hardforkBlock(e);return null!==n&&a>=n},e.prototype.activeOnBlock=function(e,a){return this.hardforkIsActiveOnBlock(null,e,a)},e.prototype.hardforkGteHardfork=function(e,a,o){var t=void 0!==(o=void 0!==o?o:{}).onlyActive&&o.onlyActive;e=this._chooseHardfork(e,o.onlySupported);for(var n=-1,r=-1,i=0,s=0,c=t?this.activeHardforks(null,o):this.hardforks();s<c.length;s++){var d=c[s];d.name===e&&(n=i),d.name===a&&(r=i),i+=1}return n>=r},e.prototype.gteHardfork=function(e,a){return this.hardforkGteHardfork(null,e,a)},e.prototype.hardforkIsActiveOnChain=function(e,a){var o=void 0!==(a=void 0!==a?a:{}).onlySupported&&a.onlySupported;e=this._chooseHardfork(e,o);for(var t=0,n=this.hardforks();t<n.length;t++){var r=n[t];if(r.name===e&&null!==r.block)return!0}return!1},e.prototype.activeHardforks=function(e,a){a=void 0!==a?a:{};for(var o=[],t=0,n=this.hardforks();t<n.length;t++){var r=n[t];if(null!==r.block){if(void 0!==e&&null!==e&&e<r.block)break;a.onlySupported&&!this._isSupportedHardfork(r.name)||o.push(r)}}return o},e.prototype.activeHardfork=function(e,a){a=void 0!==a?a:{};var o=this.activeHardforks(e,a);if(o.length>0)return o[o.length-1].name;throw new Error("No (supported) active hardfork found")},e.prototype.hardforkBlock=function(e){return e=this._chooseHardfork(e,!1),this._getHardfork(e).block},e.prototype.isHardforkBlock=function(e,a){return a=this._chooseHardfork(a,!1),this.hardforkBlock(a)===e},e.prototype.consensus=function(e){return e=this._chooseHardfork(e),this._getHardfork(e).consensus},e.prototype.finality=function(e){return e=this._chooseHardfork(e),this._getHardfork(e).finality},e.prototype.genesis=function(){return this._chainParams.genesis},e.prototype.hardforks=function(){return this._chainParams.hardforks},e.prototype.bootstrapNodes=function(){return this._chainParams.bootstrapNodes},e.prototype.hardfork=function(){return this._hardfork},e.prototype.chainId=function(){return this._chainParams.chainId},e.prototype.chainName=function(){return n.chains.names[this.chainId()]||this._chainParams.name},e.prototype.networkId=function(){return this._chainParams.networkId},e}();a.default=i},2409:function(e,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.chains=void 0,a.chains={names:{1:"mainnet",3:"ropsten",4:"rinkeby",42:"kovan",5:"goerli"},mainnet:o(2410),ropsten:o(2411),rinkeby:o(2412),kovan:o(2413),goerli:o(2414)}},2410:function(e){e.exports=JSON.parse('{"name":"mainnet","chainId":1,"networkId":1,"comment":"The Ethereum main chain","url":"https://ethstats.net/","genesis":{"hash":"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3","timestamp":null,"gasLimit":5000,"difficulty":17179869184,"nonce":"0x0000000000000042","extraData":"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa","stateRoot":"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544"},"hardforks":[{"name":"chainstart","block":0,"consensus":"pow","finality":null},{"name":"homestead","block":1150000,"consensus":"pow","finality":null},{"name":"dao","block":1920000,"consensus":"pow","finality":null},{"name":"tangerineWhistle","block":2463000,"consensus":"pow","finality":null},{"name":"spuriousDragon","block":2675000,"consensus":"pow","finality":null},{"name":"byzantium","block":4370000,"consensus":"pow","finality":null},{"name":"constantinople","block":7280000,"consensus":"pow","finality":null},{"name":"petersburg","block":7280000,"consensus":"pow","finality":null},{"name":"istanbul","block":9069000,"consensus":"pow","finality":null},{"name":"muirGlacier","block":9200000,"consensus":"pow","finality":null}],"bootstrapNodes":[{"ip":"18.138.108.67","port":30303,"id":"d860a01f9722d78051619d1e2351aba3f43f943f6f00718d1b9baa4101932a1f5011f16bb2b1bb35db20d6fe28fa0bf09636d26a87d31de9ec6203eeedb1f666","location":"ap-southeast-1-001","comment":"bootnode-aws-ap-southeast-1-001"},{"ip":"3.209.45.79","port":30303,"id":"22a8232c3abc76a16ae9d6c3b164f98775fe226f0917b0ca871128a74a8e9630b458460865bab457221f1d448dd9791d24c4e5d88786180ac185df813a68d4de","location":"us-east-1-001","comment":"bootnode-aws-us-east-1-001"},{"ip":"34.255.23.113","port":30303,"id":"ca6de62fce278f96aea6ec5a2daadb877e51651247cb96ee310a318def462913b653963c155a0ef6c7d50048bba6e6cea881130857413d9f50a621546b590758","location":"eu-west-1-001","comment":"bootnode-aws-eu-west-1-001"},{"ip":"35.158.244.151","port":30303,"id":"279944d8dcd428dffaa7436f25ca0ca43ae19e7bcf94a8fb7d1641651f92d121e972ac2e8f381414b80cc8e5555811c2ec6e1a99bb009b3f53c4c69923e11bd8","location":"eu-central-1-001","comment":"bootnode-aws-eu-central-1-001"},{"ip":"52.187.207.27","port":30303,"id":"8499da03c47d637b20eee24eec3c356c9a2e6148d6fe25ca195c7949ab8ec2c03e3556126b0d7ed644675e78c4318b08691b7b57de10e5f0d40d05b09238fa0a","location":"australiaeast-001","comment":"bootnode-azure-australiaeast-001"},{"ip":"191.234.162.198","port":30303,"id":"103858bdb88756c71f15e9b5e09b56dc1be52f0a5021d46301dbbfb7e130029cc9d0d6f73f693bc29b665770fff7da4d34f3c6379fe12721b5d7a0bcb5ca1fc1","location":"brazilsouth-001","comment":"bootnode-azure-brazilsouth-001"},{"ip":"52.231.165.108","port":30303,"id":"715171f50508aba88aecd1250af392a45a330af91d7b90701c436b618c86aaa1589c9184561907bebbb56439b8f8787bc01f49a7c77276c58c1b09822d75e8e8","location":"koreasouth-001","comment":"bootnode-azure-koreasouth-001"},{"ip":"104.42.217.25","port":30303,"id":"5d6d7cd20d6da4bb83a1d28cadb5d409b64edf314c0335df658c1a54e32c7c4a7ab7823d57c39b6a757556e68ff1df17c748b698544a55cb488b52479a92b60f","location":"westus-001","comment":"bootnode-azure-westus-001"}]}')},2411:function(e){e.exports=JSON.parse('{"name":"ropsten","chainId":3,"networkId":3,"comment":"PoW test network","url":"https://github.com/ethereum/ropsten","genesis":{"hash":"0x41941023680923e0fe4d74a34bdac8141f2540e3ae90623718e47d66d1ca4a2d","timestamp":null,"gasLimit":16777216,"difficulty":1048576,"nonce":"0x0000000000000042","extraData":"0x3535353535353535353535353535353535353535353535353535353535353535","stateRoot":"0x217b0bbcfb72e2d57e28f33cb361b9983513177755dc3f33ce3e7022ed62b77b"},"hardforks":[{"name":"chainstart","block":0,"consensus":"pow","finality":null},{"name":"homestead","block":0,"consensus":"pow","finality":null},{"name":"dao","block":null,"consensus":"pow","finality":null},{"name":"tangerineWhistle","block":0,"consensus":"pow","finality":null},{"name":"spuriousDragon","block":10,"consensus":"pow","finality":null},{"name":"byzantium","block":1700000,"consensus":"pow","finality":null},{"name":"constantinople","block":4230000,"consensus":"pow","finality":null},{"name":"petersburg","block":4939394,"consensus":"pow","finality":null},{"name":"istanbul","block":6485846,"consensus":"pow","finality":null},{"name":"muirGlacier","block":7117117,"consensus":"pow","finality":null}],"bootstrapNodes":[{"ip":"52.176.7.10","port":30303,"id":"30b7ab30a01c124a6cceca36863ece12c4f5fa68e3ba9b0b51407ccc002eeed3b3102d20a88f1c1d3c3154e2449317b8ef95090e77b312d5cc39354f86d5d606","location":"","comment":"US-Azure geth"},{"ip":"52.176.100.77","port":30303,"id":"865a63255b3bb68023b6bffd5095118fcc13e79dcf014fe4e47e065c350c7cc72af2e53eff895f11ba1bbb6a2b33271c1116ee870f266618eadfc2e78aa7349c","location":"","comment":"US-Azure parity"},{"ip":"52.232.243.152","port":30303,"id":"6332792c4a00e3e4ee0926ed89e0d27ef985424d97b6a45bf0f23e51f0dcb5e66b875777506458aea7af6f9e4ffb69f43f3778ee73c81ed9d34c51c4b16b0b0f","location":"","comment":"Parity"},{"ip":"192.81.208.223","port":30303,"id":"94c15d1b9e2fe7ce56e458b9a3b672ef11894ddedd0c6f247e0f1d3487f52b66208fb4aeb8179fce6e3a749ea93ed147c37976d67af557508d199d9594c35f09","location":"","comment":"@gpip"}]}')},2412:function(e){e.exports=JSON.parse('{"name":"rinkeby","chainId":4,"networkId":4,"comment":"PoA test network","url":"https://www.rinkeby.io","genesis":{"hash":"0x6341fd3daf94b748c72ced5a5b26028f2474f5f00d824504e4fa37a75767e177","timestamp":"0x58ee40ba","gasLimit":4700000,"difficulty":1,"nonce":"0x0000000000000000","extraData":"0x52657370656374206d7920617574686f7269746168207e452e436172746d616e42eb768f2244c8811c63729a21a3569731535f067ffc57839b00206d1ad20c69a1981b489f772031b279182d99e65703f0076e4812653aab85fca0f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","stateRoot":"0x53580584816f617295ea26c0e17641e0120cab2f0a8ffb53a866fd53aa8e8c2d"},"hardforks":[{"name":"chainstart","block":0,"consensus":"poa","finality":null},{"name":"homestead","block":1,"consensus":"poa","finality":null},{"name":"dao","block":null,"consensus":"poa","finality":null},{"name":"tangerineWhistle","block":2,"consensus":"poa","finality":null},{"name":"spuriousDragon","block":3,"consensus":"poa","finality":null},{"name":"byzantium","block":1035301,"consensus":"poa","finality":null},{"name":"constantinople","block":3660663,"consensus":"poa","finality":null},{"name":"petersburg","block":4321234,"consensus":"poa","finality":null},{"name":"istanbul","block":5435345,"consensus":"poa","finality":null}],"bootstrapNodes":[{"ip":"52.169.42.101","port":30303,"id":"a24ac7c5484ef4ed0c5eb2d36620ba4e4aa13b8c84684e1b4aab0cebea2ae45cb4d375b77eab56516d34bfbd3c1a833fc51296ff084b770b94fb9028c4d25ccf","location":"","comment":"IE"},{"ip":"52.3.158.184","port":30303,"id":"343149e4feefa15d882d9fe4ac7d88f885bd05ebb735e547f12e12080a9fa07c8014ca6fd7f373123488102fe5e34111f8509cf0b7de3f5b44339c9f25e87cb8","location":"","comment":"INFURA"},{"ip":"159.89.28.211","port":30303,"id":"b6b28890b006743680c52e64e0d16db57f28124885595fa03a562be1d2bf0f3a1da297d56b13da25fb992888fd556d4c1a27b1f39d531bde7de1921c90061cc6","location":"","comment":"AKASHA"}]}')},2413:function(e){e.exports=JSON.parse('{"name":"kovan","chainId":42,"networkId":42,"comment":"Parity PoA test network","url":"https://kovan-testnet.github.io/website/","genesis":{"hash":"0xa3c565fc15c7478862d50ccd6561e3c06b24cc509bf388941c25ea985ce32cb9","timestamp":null,"gasLimit":6000000,"difficulty":131072,"nonce":"0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","extraData":"0x","stateRoot":"0x2480155b48a1cea17d67dbfdfaafe821c1d19cdd478c5358e8ec56dec24502b2"},"hardforks":[{"name":"chainstart","block":0,"consensus":"poa","finality":null},{"name":"homestead","block":0,"consensus":"poa","finality":null},{"name":"dao","block":0,"consensus":"poa","finality":null},{"name":"tangerineWhistle","block":0,"consensus":"poa","finality":null},{"name":"spuriousDragon","block":0,"consensus":"poa","finality":null},{"name":"byzantium","block":5067000,"consensus":"poa","finality":null},{"name":"constantinople","block":9200000,"consensus":"poa","finality":null},{"name":"petersburg","block":10255201,"consensus":"poa","finality":null},{"name":"istanbul","block":14111141,"consensus":"poa","finality":null}],"bootstrapNodes":[{"ip":"116.203.116.241","port":30303,"id":"16898006ba2cd4fa8bf9a3dfe32684c178fa861df144bfc21fe800dc4838a03e342056951fa9fd533dcb0be1219e306106442ff2cf1f7e9f8faa5f2fc1a3aa45","location":"","comment":"1"},{"ip":"3.217.96.11","port":30303,"id":"2909846f78c37510cc0e306f185323b83bb2209e5ff4fdd279d93c60e3f365e3c6e62ad1d2133ff11f9fd6d23ad9c3dad73bb974d53a22f7d1ac5b7dea79d0b0","location":"","comment":"2"},{"ip":"108.61.170.124","port":30303,"id":"740e1c8ea64e71762c71a463a04e2046070a0c9394fcab5891d41301dc473c0cff00ebab5a9bc87fbcb610ab98ac18225ff897bc8b7b38def5975d5ceb0a7d7c","location":"","comment":"3"},{"ip":"157.230.31.163","port":30303,"id":"2909846f78c37510cc0e306f185323b83bb2209e5ff4fdd279d93c60e3f365e3c6e62ad1d2133ff11f9fd6d23ad9c3dad73bb974d53a22f7d1ac5b7dea79d0b0","location":"","comment":"4"}]}')},2414:function(e){e.exports=JSON.parse('{"name":"goerli","chainId":5,"networkId":5,"comment":"Cross-client PoA test network","url":"https://github.com/goerli/testnet","genesis":{"hash":"0xbf7e331f7f7c1dd2e05159666b3bf8bc7a8a3a9eb1d518969eab529dd9b88c1a","timestamp":"0x5c51a607","gasLimit":10485760,"difficulty":1,"nonce":"0x0000000000000000","extraData":"0x22466c6578692069732061207468696e6722202d204166726900000000000000e0a2bd4258d2768837baa26a28fe71dc079f84c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","stateRoot":"0x5d6cded585e73c4e322c30c2f782a336316f17dd85a4863b9d838d2d4b8b3008"},"hardforks":[{"name":"chainstart","block":0,"consensus":"poa","finality":null},{"name":"homestead","block":0,"consensus":"poa","finality":null},{"name":"dao","block":0,"consensus":"poa","finality":null},{"name":"tangerineWhistle","block":0,"consensus":"poa","finality":null},{"name":"spuriousDragon","block":0,"consensus":"poa","finality":null},{"name":"byzantium","block":0,"consensus":"poa","finality":null},{"name":"constantinople","block":0,"consensus":"poa","finality":null},{"name":"petersburg","block":0,"consensus":"poa","finality":null},{"name":"istanbul","block":1561651,"consensus":"poa","finality":null}],"bootstrapNodes":[{"ip":"51.141.78.53","port":30303,"id":"011f758e6552d105183b1761c5e2dea0111bc20fd5f6422bc7f91e0fabbec9a6595caf6239b37feb773dddd3f87240d99d859431891e4a642cf2a0a9e6cbb98a","location":"","comment":"Upstream bootnode 1"},{"ip":"13.93.54.137","port":30303,"id":"176b9417f511d05b6b2cf3e34b756cf0a7096b3094572a8f6ef4cdcb9d1f9d00683bf0f83347eebdf3b81c3521c2332086d9592802230bf528eaf606a1d9677b","location":"","comment":"Upstream bootnode 2"},{"ip":"94.237.54.114","port":30313,"id":"46add44b9f13965f7b9875ac6b85f016f341012d84f975377573800a863526f4da19ae2c620ec73d11591fa9510e992ecc03ad0751f53cc02f7c7ed6d55c7291","location":"","comment":"Upstream bootnode 3"},{"ip":"52.64.155.147","port":30303,"id":"c1f8b7c2ac4453271fa07d8e9ecf9a2e8285aa0bd0c07df0131f47153306b0736fd3db8924e7a9bf0bed6b1d8d4f87362a71b033dc7c64547728d953e43e59b2","location":"","comment":"Upstream bootnode 4"},{"ip":"213.186.16.82","port":30303,"id":"f4a9c6ee28586009fb5a96c8af13a58ed6d8315a9eee4772212c1d4d9cebe5a8b8a78ea4434f318726317d04a3f531a1ef0420cf9752605a562cfe858c46e263","location":"","comment":"Upstream bootnode 5"},{"ip":"3.11.147.67","port":30303,"id":"a61215641fb8714a373c80edbfa0ea8878243193f57c96eeb44d0bc019ef295abd4e044fd619bfc4c59731a73fb79afe84e9ab6da0c743ceb479cbb6d263fa91","location":"","comment":"Ethereum Foundation bootnode"}]}')},2415:function(e,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.hardforks=void 0,a.hardforks=[["chainstart",o(2416)],["homestead",o(2417)],["dao",o(2418)],["tangerineWhistle",o(2419)],["spuriousDragon",o(2420)],["byzantium",o(2421)],["constantinople",o(2422)],["petersburg",o(2423)],["istanbul",o(2424)],["muirGlacier",o(2425)]]},2416:function(e){e.exports=JSON.parse('{"name":"chainstart","comment":"Start of the Ethereum main chain","eip":{"url":"","status":""},"status":"","gasConfig":{"minGasLimit":{"v":5000,"d":"Minimum the gas limit may ever be"},"gasLimitBoundDivisor":{"v":1024,"d":"The bound divisor of the gas limit, used in update calculations"}},"gasPrices":{"base":{"v":2,"d":"Gas base cost, used e.g. for ChainID opcode (Istanbul)"},"tierStep":{"v":[0,2,3,5,8,10,20],"d":"Once per operation, for a selection of them"},"exp":{"v":10,"d":"Once per EXP instuction"},"expByte":{"v":10,"d":"Times ceil(log256(exponent)) for the EXP instruction"},"sha3":{"v":30,"d":"Once per SHA3 operation"},"sha3Word":{"v":6,"d":"Once per word of the SHA3 operation\'s data"},"sload":{"v":50,"d":"Once per SLOAD operation"},"sstoreSet":{"v":20000,"d":"Once per SSTORE operation if the zeroness changes from zero"},"sstoreReset":{"v":5000,"d":"Once per SSTORE operation if the zeroness does not change from zero"},"sstoreRefund":{"v":15000,"d":"Once per SSTORE operation if the zeroness changes to zero"},"jumpdest":{"v":1,"d":"Refunded gas, once per SSTORE operation if the zeroness changes to zero"},"log":{"v":375,"d":"Per LOG* operation"},"logData":{"v":8,"d":"Per byte in a LOG* operation\'s data"},"logTopic":{"v":375,"d":"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas"},"create":{"v":32000,"d":"Once per CREATE operation & contract-creation transaction"},"call":{"v":40,"d":"Once per CALL operation & message call transaction"},"callStipend":{"v":2300,"d":"Free gas given at beginning of call"},"callValueTransfer":{"v":9000,"d":"Paid for CALL when the value transfor is non-zero"},"callNewAccount":{"v":25000,"d":"Paid for CALL when the destination address didn\'t exist prior"},"selfdestructRefund":{"v":24000,"d":"Refunded following a selfdestruct operation"},"memory":{"v":3,"d":"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL"},"quadCoeffDiv":{"v":512,"d":"Divisor for the quadratic particle of the memory cost equation"},"createData":{"v":200,"d":""},"tx":{"v":21000,"d":"Per transaction. NOTE: Not payable on data of calls between transactions"},"txCreation":{"v":32000,"d":"The cost of creating a contract via tx"},"txDataZero":{"v":4,"d":"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions"},"txDataNonZero":{"v":68,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"},"copy":{"v":3,"d":"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added"},"ecRecover":{"v":3000,"d":""},"sha256":{"v":60,"d":""},"sha256Word":{"v":12,"d":""},"ripemd160":{"v":600,"d":""},"ripemd160Word":{"v":120,"d":""},"identity":{"v":15,"d":""},"identityWord":{"v":3,"d":""}},"vm":{"stackLimit":{"v":1024,"d":"Maximum size of VM stack allowed"},"callCreateDepth":{"v":1024,"d":"Maximum depth of call/create stack"},"maxExtraDataSize":{"v":32,"d":"Maximum size extra data may be after Genesis"}},"pow":{"minimumDifficulty":{"v":131072,"d":"The minimum that the difficulty may ever be"},"difficultyBoundDivisor":{"v":2048,"d":"The bound divisor of the difficulty, used in the update calculations"},"durationLimit":{"v":13,"d":"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not"},"epochDuration":{"v":30000,"d":"Duration between proof-of-work epochs"},"timebombPeriod":{"v":100000,"d":"Exponential difficulty timebomb period"},"minerReward":{"v":"5000000000000000000","d":"the amount a miner get rewarded for mining a block"}},"casper":{},"sharding":{}}')},2417:function(e){e.exports=JSON.parse('{"name":"homestead","comment":"Homestead hardfork with protocol and network changes","eip":{"url":"https://eips.ethereum.org/EIPS/eip-606","status":"Final"},"gasConfig":{},"gasPrices":{},"vm":{},"pow":{},"casper":{},"sharding":{}}')},2418:function(e){e.exports=JSON.parse('{"name":"dao","comment":"DAO rescue hardfork","eip":{"url":"https://eips.ethereum.org/EIPS/eip-779","status":"Final"},"gasConfig":{},"gasPrices":{},"vm":{},"pow":{},"casper":{},"sharding":{}}')},2419:function(e){e.exports=JSON.parse('{"name":"tangerineWhistle","comment":"Hardfork with gas cost changes for IO-heavy operations","eip":{"url":"https://eips.ethereum.org/EIPS/eip-608","status":"Final"},"gasConfig":{},"gasPrices":{"sload":{"v":200,"d":"Once per SLOAD operation"},"call":{"v":700,"d":"Once per CALL operation & message call transaction"}},"vm":{},"pow":{},"casper":{},"sharding":{}}')},2420:function(e){e.exports=JSON.parse('{"name":"spuriousDragon","comment":"HF with EIPs for simple replay attack protection, EXP cost increase, state trie clearing, contract code size limit","eip":{"url":"https://eips.ethereum.org/EIPS/eip-607","status":"Final"},"gasConfig":{},"gasPrices":{"expByte":{"v":50,"d":"Times ceil(log256(exponent)) for the EXP instruction"}},"vm":{"maxCodeSize":{"v":24576,"d":"Maximum length of contract code"}},"pow":{},"casper":{},"sharding":{}}')},2421:function(e){e.exports=JSON.parse('{"name":"byzantium","comment":"Hardfork with new precompiles, instructions and other protocol changes","eip":{"url":"https://eips.ethereum.org/EIPS/eip-609","status":"Final"},"gasConfig":{},"gasPrices":{"modexpGquaddivisor":{"v":20,"d":"Gquaddivisor from modexp precompile for gas calculation"},"ecAdd":{"v":500,"d":"Gas costs for curve addition precompile"},"ecMul":{"v":40000,"d":"Gas costs for curve multiplication precompile"},"ecPairing":{"v":100000,"d":"Base gas costs for curve pairing precompile"},"ecPairingWord":{"v":80000,"d":"Gas costs regarding curve pairing precompile input length"}},"vm":{},"pow":{"minerReward":{"v":"3000000000000000000","d":"the amount a miner get rewarded for mining a block"}},"casper":{},"sharding":{}}')},2422:function(e){e.exports=JSON.parse('{"name":"constantinople","comment":"Postponed hardfork including EIP-1283 (SSTORE gas metering changes)","eip":{"url":"https://eips.ethereum.org/EIPS/eip-1013","status":"Final"},"gasConfig":{},"gasPrices":{"netSstoreNoopGas":{"v":200,"d":"Once per SSTORE operation if the value doesn\'t change"},"netSstoreInitGas":{"v":20000,"d":"Once per SSTORE operation from clean zero"},"netSstoreCleanGas":{"v":5000,"d":"Once per SSTORE operation from clean non-zero"},"netSstoreDirtyGas":{"v":200,"d":"Once per SSTORE operation from dirty"},"netSstoreClearRefund":{"v":15000,"d":"Once per SSTORE operation for clearing an originally existing storage slot"},"netSstoreResetRefund":{"v":4800,"d":"Once per SSTORE operation for resetting to the original non-zero value"},"netSstoreResetClearRefund":{"v":19800,"d":"Once per SSTORE operation for resetting to the original zero value"}},"vm":{},"pow":{"minerReward":{"v":"2000000000000000000","d":"The amount a miner gets rewarded for mining a block"}},"casper":{},"sharding":{}}')},2423:function(e){e.exports=JSON.parse('{"name":"petersburg","comment":"Aka constantinopleFix, removes EIP-1283, activate together with or after constantinople","eip":{"url":"https://eips.ethereum.org/EIPS/eip-1716","status":"Draft"},"gasConfig":{},"gasPrices":{"netSstoreNoopGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreInitGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreCleanGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreDirtyGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreClearRefund":{"v":null,"d":"Removed along EIP-1283"},"netSstoreResetRefund":{"v":null,"d":"Removed along EIP-1283"},"netSstoreResetClearRefund":{"v":null,"d":"Removed along EIP-1283"}},"vm":{},"pow":{},"casper":{},"sharding":{}}')},2424:function(e){e.exports=JSON.parse('{"name":"istanbul","comment":"HF targeted for December 2019 following the Constantinople/Petersburg HF","eip":{"url":"https://eips.ethereum.org/EIPS/eip-1679","status":"Draft"},"gasConfig":{},"gasPrices":{"blake2Round":{"v":1,"d":"Gas cost per round for the Blake2 F precompile"},"ecAdd":{"v":150,"d":"Gas costs for curve addition precompile"},"ecMul":{"v":6000,"d":"Gas costs for curve multiplication precompile"},"ecPairing":{"v":45000,"d":"Base gas costs for curve pairing precompile"},"ecPairingWord":{"v":34000,"d":"Gas costs regarding curve pairing precompile input length"},"txDataNonZero":{"v":16,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"},"sstoreSentryGasEIP2200":{"v":2300,"d":"Minimum gas required to be present for an SSTORE call, not consumed"},"sstoreNoopGasEIP2200":{"v":800,"d":"Once per SSTORE operation if the value doesn\'t change"},"sstoreDirtyGasEIP2200":{"v":800,"d":"Once per SSTORE operation if a dirty value is changed"},"sstoreInitGasEIP2200":{"v":20000,"d":"Once per SSTORE operation from clean zero to non-zero"},"sstoreInitRefundEIP2200":{"v":19200,"d":"Once per SSTORE operation for resetting to the original zero value"},"sstoreCleanGasEIP2200":{"v":5000,"d":"Once per SSTORE operation from clean non-zero to something else"},"sstoreCleanRefundEIP2200":{"v":4200,"d":"Once per SSTORE operation for resetting to the original non-zero value"},"sstoreClearRefundEIP2200":{"v":15000,"d":"Once per SSTORE operation for clearing an originally existing storage slot"}},"vm":{},"pow":{},"casper":{},"sharding":{}}')},2425:function(e){e.exports=JSON.parse('{"name":"muirGlacier","comment":"HF to delay the difficulty bomb","eip":{"url":"https://eips.ethereum.org/EIPS/eip-2384","status":"Last Call"},"gasConfig":{},"gasPrices":{},"vm":{},"pow":{},"casper":{},"sharding":{}}')}}]);
//# sourceMappingURL=13.38027e17.chunk.js.map