(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,n,t){e.exports=t(57)},56:function(e,n,t){},57:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(18),i=t.n(o),c=t(4),s=t.n(c),u=t(5),l=t(22),p=t(7),d=t.n(p),f="https://api.themoviedb.org/3/movie/popular?api_key=".concat("a3e763a37360726637c5723d64ed797a","&language=en-US"),m=(d.a.create({baseURL:f,crossDomain:!0,timeout:3e3,headers:{"Content-Type":"application/json;charset=utf-8",Accept:"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"*","Access-Control-Allow-Headers":"*"}}),function(){var e=Object(u.a)(s.a.mark(function e(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()(f).then(function(e){return e.data.results});case 2:return n=e.sent,console.log("moo..",n),e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()),x=t(2),b=t(3),h=t(19),v=t.n(h);function w(){var e=Object(x.a)(["\n  font-size: 18px;\n  line-height:30px;\n  margin-bottom:20px;\n  font-weight:bold;\n"]);return w=function(){return e},e}function g(){var e=Object(x.a)(["\n  font-size:14px;\n  line-height:20px;\n  min-height:60px;\n  overflow:hidden;\n"]);return g=function(){return e},e}function j(){var e=Object(x.a)(["\n  padding:20px;\n  width:80%;box-sizing:borer-box;\n"]);return j=function(){return e},e}function E(){var e=Object(x.a)(["\n  display:block;\n  width:100%;\n"]);return E=function(){return e},e}function O(){var e=Object(x.a)(["\n  width:20%;\n  box-sizing:border-box;\n  max-width: 100%;\n  position: relative;\n  top:-20px;\n  box-shadow: -10px 19px 38px rgba(83, 83, 83, 0.3), 10px 15px 12px rgba(80,80,80,0.22);\n"]);return O=function(){return e},e}function y(){var e=Object(x.a)(["\n  background-color:#fff;\n  display: flex;\n  justify-content: space-between;\n  align-items:flex-start;\n  flex-wrap:wrap;\n  flex-flow:row;\n  padding:0 20px;\n  box-shadow: 0 8px 38px rgba(133, 133, 133, 0.3), 0 5px 12px rgba(133, 133, 133,0.22);\n  border-radius: 3px;\n  border: 2px solid #eee;\n  color: #333;\n  margin: 0 1em 50px;\n  width: calc(50% - 6em);\n"]);return y=function(){return e},e}var k=b.a.div(y()),A=b.a.div(O()),C=b.a.img(E()),z=b.a.div(j()),L=b.a.div(g()),B=b.a.h1(w()),J=function(e){return a.a.createElement(k,{className:"MovieCard"},a.a.createElement(A,null,a.a.createElement(C,{src:"https://image.tmdb.org/t/p/w300"+e.item.poster_path,alt:e.item.title+"poster image"})),a.a.createElement(z,null,a.a.createElement(B,null,e.item.title),a.a.createElement(L,null,a.a.createElement(v.a,{text:e.item.overview,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}))))};function M(){var e=Object(x.a)(["\n  display:flex;\n  flex-flow:row wrap;\n  justify-content: space-between;\n  align-items: stretch;\n  padding-top:30px;\n"]);return M=function(){return e},e}var N=b.a.div(M()),R=function(e){return a.a.createElement(N,null,e.movies.map(function(e){return a.a.createElement(J,{key:e.id,item:e})}))},S=function(){var e=Object(r.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1];return Object(r.useEffect)(function(){!function(){var e=Object(u.a)(s.a.mark(function e(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m();case 3:n=e.sent,o(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("err",e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}}()()},[]),a.a.createElement("div",{className:"App"},void 0!==t&&t.length>0?a.a.createElement(R,{movies:t}):"Loading...")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(56);i.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.6f83f223.chunk.js.map