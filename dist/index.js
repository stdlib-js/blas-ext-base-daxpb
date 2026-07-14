"use strict";var o=function(n,i){return function(){try{return i||n((i={exports:{}}).exports,i),i.exports}catch(u){throw (i=0, u)}};};var f=o(function(H,c){
var E=require('@stdlib/blas-ext-base-dapx/dist').ndarray,M=require('@stdlib/blas-base-dscal/dist').ndarray,s=5;function O(n,i,u,r,a,t){var e,q,v;if(n<=0)return r;if(i===1)return E(n,u,r,a,t);if(u===0)return M(n,i,r,a,t);if(e=t,a===1){if(q=n%s,q>0)for(v=0;v<q;v++)r[e]=i*r[e]+u,e+=a;if(n<s)return r;for(v=q;v<n;v+=s)r[e]=i*r[e]+u,r[e+1]=i*r[e+1]+u,r[e+2]=i*r[e+2]+u,r[e+3]=i*r[e+3]+u,r[e+4]=i*r[e+4]+u,e+=s;return r}for(v=0;v<n;v++)r[e]=i*r[e]+u,e+=a;return r}c.exports=O
});var m=o(function(I,y){
var g=require('@stdlib/strided-base-stride2offset/dist'),k=f();function w(n,i,u,r,a){return k(n,i,u,r,a,g(n,a))}y.exports=w
});var R=o(function(J,p){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=m(),A=f();z(j,"ndarray",A);p.exports=j
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=R(),d,_=C(B(__dirname,"./native.js"));D(_)?d=F:d=_;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
