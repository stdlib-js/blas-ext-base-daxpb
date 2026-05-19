"use strict";var o=function(u,i){return function(){return i||u((i={exports:{}}).exports,i),i.exports}};var f=o(function(H,c){
var E=require('@stdlib/blas-ext-base-dapx/dist').ndarray,M=require('@stdlib/blas-base-dscal/dist').ndarray,s=5;function O(u,i,n,r,a,t){var e,q,v;if(u<=0)return r;if(i===1)return E(u,n,r,a,t);if(n===0)return M(u,i,r,a,t);if(e=t,a===1){if(q=u%s,q>0)for(v=0;v<q;v++)r[e]=i*r[e]+n,e+=a;if(u<s)return r;for(v=q;v<u;v+=s)r[e]=i*r[e]+n,r[e+1]=i*r[e+1]+n,r[e+2]=i*r[e+2]+n,r[e+3]=i*r[e+3]+n,r[e+4]=i*r[e+4]+n,e+=s;return r}for(v=0;v<u;v++)r[e]=i*r[e]+n,e+=a;return r}c.exports=O
});var m=o(function(I,y){
var g=require('@stdlib/strided-base-stride2offset/dist'),k=f();function w(u,i,n,r,a){return k(u,i,n,r,a,g(u,a))}y.exports=w
});var R=o(function(J,p){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=m(),A=f();z(j,"ndarray",A);p.exports=j
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=R(),d,_=C(B(__dirname,"./native.js"));D(_)?d=F:d=_;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
