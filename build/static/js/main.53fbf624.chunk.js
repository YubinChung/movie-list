(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(n,e,t){n.exports=t(57)},56:function(n,e,t){},57:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(18),i=t.n(o),c=t(2),l=t(4),u=t.n(l),s=t(5),p=t(22),d=t(7),f=t.n(d),m="https://api.themoviedb.org/3/movie/popular?api_key=".concat("a3e763a37360726637c5723d64ed797a","&language=en-US"),h=(f.a.create({baseURL:m,crossDomain:!0,timeout:3e3,headers:{"Content-Type":"application/json;charset=utf-8",Accept:"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"*","Access-Control-Allow-Headers":"*"}}),function(){var n=Object(s.a)(u.a.mark(function n(){var e;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f()(m).then(function(n){return n.data.results});case 2:return e=n.sent,console.log("moo..",e),n.abrupt("return",e);case 5:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}()),x=t(3),b=t(19),v=t.n(b),w="768px",g="1024px",j={mobile:"min-width:".concat("320px"),tablet:"min-width:".concat(w),laptop:"min-width:".concat(g)};function E(){var n=Object(c.a)(["\n  font-size: 18px;\n  line-height:30px;\n  margin-bottom:20px;\n  font-weight:bold;\n"]);return E=function(){return n},n}function O(){var n=Object(c.a)(["\n  font-size:14px;\n  line-height:20px;\n  min-height:60px;\n  overflow:hidden;\n"]);return O=function(){return n},n}function y(){var n=Object(c.a)(["\n  padding:20px;\n  width:80%;box-sizing:borer-box;\n"]);return y=function(){return n},n}function k(){var n=Object(c.a)(["\n  display:block;\n  width:100%;\n"]);return k=function(){return n},n}function A(){var n=Object(c.a)(["\n  width:20%;\n  box-sizing:border-box;\n  max-width: 100%;\n  position: relative;\n  top:-20px;\n  box-shadow: -10px 19px 38px rgba(83, 83, 83, 0.3), 10px 15px 12px rgba(80,80,80,0.22);\n"]);return A=function(){return n},n}function C(){var n=Object(c.a)(["\n  background-color:#fff;\n  display: flex;\n  justify-content: space-between;\n  align-items:flex-start;\n  flex-wrap:wrap;\n  flex-flow:row;\n  padding:0 20px;\n  box-shadow: 0 8px 38px rgba(133, 133, 133, 0.3), 0 5px 12px rgba(133, 133, 133,0.22);\n  border-radius: 3px;\n  border: 2px solid #eee;\n  color: #333;\n  margin: 0 1em 50px;\n  width: 100%;\n  @media (",") {\n    width: calc(50% - 6em);\n  }\n"]);return C=function(){return n},n}var z=x.a.div(C(),j.tablet),L=x.a.div(A()),B=x.a.img(k()),J=x.a.div(y()),M=x.a.div(O()),N=x.a.h1(E()),R=function(n){return a.a.createElement(z,{className:"MovieCard"},a.a.createElement(L,null,a.a.createElement(B,{src:"https://image.tmdb.org/t/p/w300"+n.item.poster_path,alt:n.item.title+"poster image"})),a.a.createElement(J,null,a.a.createElement(N,null,n.item.title),a.a.createElement(M,null,a.a.createElement(v.a,{text:n.item.overview,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}))))};function S(){var n=Object(c.a)(["\n  display:flex;\n  flex-flow:row wrap;\n  justify-content: space-between;\n  align-items: stretch;\n  padding-top:30px;\n"]);return S=function(){return n},n}var U=x.a.div(S()),W=function(n){return a.a.createElement(U,null,n.movies.map(function(n){return a.a.createElement(R,{key:n.id,item:n})}))};function _(){var n=Object(c.a)(["\n  text-align:center;\n  height:100vh;\n  line-height:100vh;\n"]);return _=function(){return n},n}var D=x.a.div(_()),H=function(){var n=Object(r.useState)([]),e=Object(p.a)(n,2),t=e[0],o=e[1];return Object(r.useEffect)(function(){!function(){var n=Object(s.a)(u.a.mark(function n(){var e;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h();case 3:e=n.sent,o(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("err",n.t0);case 10:case"end":return n.stop()}},n,null,[[0,7]])}));return function(){return n.apply(this,arguments)}}()()},[]),a.a.createElement("div",{className:"App"},void 0!==t&&t.length>0?a.a.createElement(W,{movies:t}):a.a.createElement(D,null,"Loading..."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(56);i.a.render(a.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.53fbf624.chunk.js.map