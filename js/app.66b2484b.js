(function(){"use strict";var t={4295:function(t,n,e){var i=e(6848),s=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"wrap"}},[n("header-component",{attrs:{"logo-title":t.logoTitle},on:{eventEmit:t.eventEmit,eventSubEmit:t.eventSubEmit}}),n("main-component"),n("footer-component"),n("modal-component")],1)},o=[],a=function(){var t=this,n=t._self._c;return n("header",{attrs:{id:"header"}},[n("div",{staticClass:"left"},[n("h1",[n("a",{attrs:{href:"./index.html",title:t.logoTitle.title1+" "+t.logoTitle.title2}},[n("span",[t._v(t._s(t.logoTitle.title1))]),t._v(" "),n("span",[t._v(t._s(t.logoTitle.title2))])])])]),n("div",{staticClass:"right"},[n("nav",{attrs:{id:"nav"}},[n("ul",t._l(t.카테고리,(function(e,i){return n("li",{key:e.메인메뉴,staticClass:"col",on:{mouseleave:t.onMouseOutNav}},[n("a",{class:["main-btn",{on:t.isOn[i]}],attrs:{href:"#",title:e.메인메뉴},on:{mouseenter:function(n){return t.onMouseOverMainBtn(i)},click:function(n){return n.preventDefault(),t.eventEmitMethod(e.메인메뉴)}}},[t._v(" "+t._s(e.메인메뉴)+" ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOn[i],expression:"isOn[i]"}],class:["sub","sub"+(i+1)]},[n("div",{staticClass:"sub-container"},[n("ul",t._l(e.서브메뉴,(function(e,i){return n("li",{key:i},[n("ul",t._l(e,(function(e){return n("li",{key:e},[n("a",{attrs:{href:"#",title:e},on:{click:function(n){return n.preventDefault(),t.eventSub(e)}}},[t._v(" "+t._s(e)+" ")])])})),0)])})),0)])])])})),0)])])])},r=[],l={name:"HeaderComponent",props:["logoTitle"],data(){return{"카테고리":[{"메인메뉴":"탑","서브메뉴":[["블라우스","티","셔츠","니트"],["자켓","코트","가디건","머플러"],["청바지","짧은바지","긴바지","레깅스"],["귀고리","목걸이","반지","팔찌"]]},{"메인메뉴":"아우터","서브메뉴":[["블라우스","티","셔츠","니트"],["자켓","코트","가디건","머플러"],["청바지","짧은바지","긴바지","레깅스"],["귀고리","목걸이","반지","팔찌"]]},{"메인메뉴":"팬츠","서브메뉴":[["블라우스","티","셔츠","니트"],["자켓","코트","가디건","머플러"],["청바지","짧은바지","긴바지","레깅스"],["귀고리","목걸이","반지","팔찌"]]},{"메인메뉴":"악세사리","서브메뉴":[["블라우스","티","셔츠","니트"],["자켓","코트","가디건","머플러"],["청바지","짧은바지","긴바지","레깅스"],["귀고리","목걸이","반지","팔찌"]]}],isOn:[!1,!1,!1,!1]}},methods:{onMouseOverMainBtn(t){this.isOn=[!1,!1,!1,!1],this.isOn[t]=!0},onMouseOutNav(){this.isOn=[!1,!1,!1,!1]},eventEmitMethod(t){this.$emit("eventEmit",t)},eventSub(t){console.log(t),this.$emit("eventSubEmit",t)}}},c=l,u=e(1656),p=(0,u.A)(c,a,r,!1,null,"4e8ed7c8",null),v=p.exports,f=function(){var t=this,n=t._self._c;return n("main",{attrs:{id:"main"}},[n("section1-component"),n("section2-component",{attrs:{"data-state":t.dataState}})],1)},d=[],m=function(){var t=this,n=t._self._c;return n("section",{attrs:{id:"section1"}},[n("div",{staticClass:"slide-container"},[n("div",{staticClass:"slide-content"},[n("ul",{staticClass:"slide-wrap"},t._l(t.슬라이드,(function(e,i){return n("li",{key:e,class:["slide","slide"+(i+1)]},[n("a",{attrs:{href:"#",title:e}},[n("span",[t._v(t._s(e))])])])})),0)])])])},h=[],_=e(6587),C=e.n(_),g={name:"Section1Component",props:[],data(){return{"슬라이드":["JUST 쇼핑몰 오픈!","종합 쇼핑의 새 막을 연다! JUST 쇼핑몰!","JUST쇼핑몰 9월 세일 이벤트 안내"]}},created(){let t=0;function n(){C()(".slide").css({zIndex:1,opacity:1}),C()(".slide").eq(t).css({zIndex:2}),C()(".slide").eq(t-1<0?2:t-1).css({zIndex:3}).animate({opacity:0},1e3)}function e(){t++,t>2&&(t=0),n()}function i(){setInterval(e,3e3)}i()}},O=g,b=(0,u.A)(O,m,h,!1,null,"41c11070",null),y=b.exports,k=function(){var t=this,n=t._self._c;return n("section",{attrs:{id:"section2"}},[n("div",{staticClass:"left"},[n("div",{staticClass:"container"},[n("div",{staticClass:"title"},[n("button",{class:["notice-btn",{on:t.isOn}],attrs:{title:"공지사항"},on:{click:function(n){return n.preventDefault(),t.onClickNoticeEvent.apply(null,arguments)}}},[t._v("공지사항")]),n("button",{class:["gallery-btn",{on:t.isOn}],attrs:{title:"갤러리"},on:{click:function(n){return n.preventDefault(),t.onClickGalleryEvent.apply(null,arguments)}}},[t._v("갤러리")])]),n("div",{staticClass:"content"},[n("div",{class:["notice-box",{on:t.isOn}]},[n("ul",t._l(t.dataState.공지사항,(function(e,i){return n("li",{key:e.공지},[n("a",{class:["popup-btn",0===i?"on":""],attrs:{href:"#",title:e.공지},on:{click:function(n){return n.preventDefault(),t.onClickPopupOpen(i)}}},[t._v(" "+t._s(e.공지)+" ")]),n("span",[t._v(t._s(e.날짜))])])})),0)]),n("div",{class:["gallery-box",{on:t.isOn}]},[n("ul",t._l(t.dataState.갤러리,(function(t){return n("li",{key:t.타이틀},[n("a",{attrs:{href:"#",title:t.타이틀}},[n("img",{attrs:{src:t.이미지,alt:t.타이틀}})])])})),0)])])])]),n("div",{staticClass:"center"},[n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"content"},[n("a",{attrs:{href:"#",title:t.이벤트}},[n("h3",[t._v(t._s(t.이벤트))])])])])]),n("div",{staticClass:"right"},[n("div",{staticClass:"container"},[t._m(1),n("div",{staticClass:"content"},[n("ul",t._l(t.바로가기,(function(e){return n("li",{key:e},[n("a",{attrs:{href:"#",title:e}},[n("span",[t._v(t._s(e))])])])})),0)])])])])},x=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"title hide"},[n("h2",[t._v("이벤트 배너")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"title hide"},[n("h2",[t._v("바로가기 배너")])])}];const S=new i.Ay;var T=S,j={name:"Section2Component",props:["dataState"],data(){return{"이벤트":"여름 마지막 세일","바로가기":["할인정보","이벤트정보","고객정보"],isOn:!1}},methods:{onClickGalleryEvent(){this.isOn=!0},onClickNoticeEvent(){this.isOn=!1},onClickPopupOpen(t){T.$emit("popupOpen",t)}}},w=j,E=(0,u.A)(w,k,x,!1,null,"797a0fb6",null),A=E.exports,M={name:"MainComponent",components:{"section1-component":y,"section2-component":A},data(){return{dataState:{"공지사항":[{"공지":"9월 just 쇼핑몰 세일 안내!","날짜":"2024-03-13"},{"공지":"불편한 경험은 저희에게도 알려주세요.","날짜":"2024-03-12"},{"공지":"카카오톡 친구 추가하고 할인쿠폰 받아 가세요.","날짜":"2024-03-11"},{"공지":"다른곳에선 못보는~ 매력발산 아이템들 구경해 보실래요?","날짜":"2024-03-10"},{"공지":"just 쇼핑몰을 친구에게 추천하면 할인쿠폰을 드립니다!","날짜":"2024-03-09"}],"갤러리":[{"타이틀":"청바지, 블라우스, 파우치 홍보 여성 모델 이미지","이미지":"./images/img1.jpg"},{"타이틀":"청바지, 크로스백, 썬글라스, 수영복 홍보 이미지","이미지":"./images/img2.jpg"},{"타이틀":"노란 원피스 입은 모델 이미지","이미지":"./images/img3.jpg"}]}}}},J=M,U=(0,u.A)(J,f,d,!1,null,"62871086",null),D=U.exports,P=function(){var t=this,n=t._self._c;return n("footer",{attrs:{id:"fooeter"}},[t._m(0),n("div",{staticClass:"center"},[n("div",{staticClass:"container"},[n("address",[t._v(t._s(t.주소))]),n("p",[t._v("Copyright © 2018 just 쇼핑몰, All right reserved.")])])]),n("div",{staticClass:"right"},[n("div",{staticClass:"container"},t._l(t.sns,(function(t){return n("a",{key:t.타이틀,attrs:{href:"#",title:t.타이틀}},[n("img",{attrs:{src:t.이미지,alt:t.타이틀}})])})),0)])])},N=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"left"},[n("h1",[n("a",{attrs:{href:"./index.html",title:"JUST 쇼핑몰 로고"}},[n("span",[t._v("JUST")]),t._v(" "),n("span",[t._v("쇼핑몰")])])])])}],$={name:"FooterComponent",props:[],data(){return{"주소":"서울시 마포구 홍익로 29(서교동, 동교빌딩) just 쇼핑몰",sns:[{"타이틀":"인스타그램","이미지":"./images/icon_1.png"},{"타이틀":"트위터","이미지":"./images/icon_2.png"},{"타이틀":"유튜브","이미지":"./images/icon_3.png"}]}}},I=$,z=(0,u.A)(I,P,N,!1,null,"44527e90",null),q=z.exports,B=function(){var t=this,n=t._self._c;return n("div",{class:["popup",{on:t.isOn}]},[n("div",{staticClass:"container"},[n("div",{staticClass:"title"},[n("h1",[t._v(t._s(t.타이틀))])]),n("div",{staticClass:"content"},[n("ul",t._l(t.모달내용,(function(e){return n("li",{key:e},[t._v(t._s(e))])})),0)]),n("div",{staticClass:"button-box"},[n("button",{staticClass:"close-btn",attrs:{title:"닫기"},on:{click:function(n){return n.preventDefault(),t.onClickPopupClose.apply(null,arguments)}}},[t._v("닫기")])])])])},F=[],G={name:"ModalComponent",props:[],data(){return{"타이틀":"9월 JUST 쇼핑몰 세일 안내","모달내용":["오랜만에 찾아온 세일 안내!","JUST 쇼핑몰이 제안하는 유니크한 시즌별 패션 트렌드를 즐겨보세요.","오랜만에 찾아온 휴면고객이라면, 지금 바로 로그인 하고 적립금 1,000원을 받으세요!"],isOn:!1}},created(){T.$on("popupOpen",(t=>{0===t&&(this.isOn=!0)}))},methods:{onClickPopupClose(){this.isOn=!1}}},H=G,W=(0,u.A)(H,B,F,!1,null,"24e73e76",null),K=W.exports,L={name:"WrapComponent",props:[],components:{"header-component":v,"main-component":D,"footer-component":q,"modal-component":K},data(){return{logoTitle:{title1:"JUST",title2:"쇼쇼핑몰"}}},methods:{eventEmit(t){this.logoTitle.title2=t,console.log(t)},eventSubEmit(t){this.logoTitle.title1=t}}},Q=L,R=(0,u.A)(Q,s,o,!1,null,null,null),V=R.exports;i.Ay.config.productionTip=!1,new i.Ay({render:t=>t(V)}).$mount("#root")}},n={};function e(i){var s=n[i];if(void 0!==s)return s.exports;var o=n[i]={exports:{}};return t[i].call(o.exports,o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,i,s,o){if(!i){var a=1/0;for(u=0;u<t.length;u++){i=t[u][0],s=t[u][1],o=t[u][2];for(var r=!0,l=0;l<i.length;l++)(!1&o||a>=o)&&Object.keys(e.O).every((function(t){return e.O[t](i[l])}))?i.splice(l--,1):(r=!1,o<a&&(a=o));if(r){t.splice(u--,1);var c=s();void 0!==c&&(n=c)}}return n}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[i,s,o]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={524:0};e.O.j=function(n){return 0===t[n]};var n=function(n,i){var s,o,a=i[0],r=i[1],l=i[2],c=0;if(a.some((function(n){return 0!==t[n]}))){for(s in r)e.o(r,s)&&(e.m[s]=r[s]);if(l)var u=l(e)}for(n&&n(i);c<a.length;c++)o=a[c],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(u)},i=self["webpackChunkjust_shop"]=self["webpackChunkjust_shop"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=e.O(void 0,[504],(function(){return e(4295)}));i=e.O(i)})();
//# sourceMappingURL=app.66b2484b.js.map