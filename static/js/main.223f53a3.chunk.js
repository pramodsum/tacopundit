(this.webpackJsonptacopundit=this.webpackJsonptacopundit||[]).push([[0],{101:function(e,a,t){},181:function(e,a,t){},193:function(e,a,t){},194:function(e,a,t){},195:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(12),l=t.n(r),i=(t(95),t(43),t(36)),o=t(28),m=t(241),u=t(227),s=t(221),p=t(225),f=t(226),E=t(228),d=(t(96),function(e){var a=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{position:"static"},c.a.createElement(p.a,null,c.a.createElement(f.a,null,c.a.createElement(i.b,{to:"".concat("/tacopundit","/"),className:"title"},c.a.createElement(u.a,{variant:"h6"},"Home"))))),c.a.createElement(E.a,{maxWidth:"lg"},c.a.createElement(m.a,{py:4},a)))}),v=function(){return c.a.createElement(d,null,c.a.createElement(m.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",pt:9},c.a.createElement(u.a,{variant:"h3"},"AWKO TACO"),c.a.createElement(u.a,{variant:"h6"},"Looks like this page doesn't exist"),c.a.createElement("img",{alt:"dancing-taco",src:"https://media1.tenor.com/images/e051d1974d1319a134223480614ffbc8/tenor.gif?itemid=10576778"})))},h=t(18),g=t(243),w=(t(101),t(229)),b=t(230),y=t(50),x=t.n(y),N=(t(181),function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:" ";return e.length<=a?e:e.substr(0,e.lastIndexOf(t,a))}),j=function(e){var a=e.recipe;return c.a.createElement(i.b,{to:"".concat("/tacopundit","/toppings/").concat(a.slug),className:"recipe-card-link-wrapper"},c.a.createElement(w.a,{className:"recipe-card"},c.a.createElement(b.a,null,c.a.createElement("h2",null,a.name),a.recipe&&c.a.createElement(x.a,{source:"".concat(N(a.recipe,200),"...")}))))},S=function(e){var a=e.recipes;return c.a.createElement(g.a,{className:"recipes-list"},a.map((function(e){return c.a.createElement(j,{recipe:e})})))},k="https://pramodsum.github.io/taco-pundit-api",O=function(){var e=c.a.useState([]),a=Object(h.a)(e,2),t=a[0],n=a[1];return c.a.useEffect((function(){fetch("".concat(k,"/toppings")).then((function(e){return e.json()})).then(n)}),[]),c.a.createElement(d,null,c.a.createElement(S,{recipes:t}))},C=t(60),R=t.n(C),I=t(77),A=t(78);function _(){return(_=Object(I.a)(R.a.mark((function e(){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={apiKey:"AIzaSyCl2-yDZIzSAL6KPd4IvA5lAnB_LxKYqUU",authDomain:"blep-2f1f4.firebaseapp.com",databaseURL:"https://blep-2f1f4.firebaseio.com/",projectId:"blep-2f1f4",storageBucket:"blep-2f1f4.appspot.com",messagingSenderId:"590062217158",appId:"1:590062217158:web:485b3167997c76d01bf4c7"},e.next=3,A.initializeApp(a);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=t(239),L=t(238),W=t(242),K=t(51),z=t.n(K),D=t(234),T=t(235),U=t(236),q=t(231),F=t(232),H=t(237),J=(t(193),function(e){return c.a.createElement(q.a,null,c.a.createElement(F.a,{className:"review-recipe-cell"},e.commenterName),c.a.createElement(F.a,{className:"review-recipe-cell"},c.a.createElement(W.a,{name:"read-only",value:e.stars,readOnly:!0})),c.a.createElement(F.a,{className:"review-recipe-cell"},e.text))}),P=(t(194),function(e){var a=e.recipeName,t=e.onReviewSave,n=c.a.useState([]),r=Object(h.a)(n,2),l=r[0],i=r[1],o=z.a.database().ref("reviews");return c.a.useEffect((function(){if(a){var e=[];o.orderByChild("recipe_name").equalTo(a).once("value").then((function(a){a.forEach((function(a){var t=a.val(),n={recipeName:t.recipe_name,commenterName:t.commenter_name,text:t.text,stars:t.stars};e.unshift(n)})),i(e)}))}}),[o,a,t]),c.a.createElement(m.a,{className:"review-list-wrapper"},c.a.createElement(u.a,{variant:"h6"},"Reviews"),c.a.createElement(D.a,null,c.a.createElement(T.a,null,c.a.createElement("colgroup",null,c.a.createElement("col",{className:"review-list-col-20"}),c.a.createElement("col",{className:"review-list-col-20"}),c.a.createElement("col",{className:"review-list-col-60"})),c.a.createElement(U.a,null,c.a.createElement(q.a,null,c.a.createElement(F.a,null,"Name"),c.a.createElement(F.a,null,"Stars"),c.a.createElement(F.a,null,"Review"))),c.a.createElement(H.a,null,l.map((function(e){return c.a.createElement(J,Object.assign({key:e.commenterName},e))}))))))}),Y=function(e){var a=e.match.params.slug,t=c.a.useState(),n=Object(h.a)(t,2),r=n[0],l=n[1],i=c.a.useState(),o=Object(h.a)(i,2),s=o[0],p=o[1],f=c.a.useState(),E=Object(h.a)(f,2),v=E[0],g=E[1],w=c.a.useState(0),b=Object(h.a)(w,2),y=b[0],N=b[1],j=z.a.database().ref("reviews");c.a.useEffect((function(){fetch("".concat(k,"/toppings/").concat(a,".json")).then((function(e){return e.json()})).then(l)}),[a]);var S=c.a.useCallback((function(e,a,t){return j.push({commenter_name:e,stars:a,text:t,recipe_name:null===r||void 0===r?void 0:r.name})}),[r,j]);return c.a.createElement(d,null,r&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,r.name),c.a.createElement(x.a,{source:r.recipe})),c.a.createElement(m.a,{style:{paddingTop:"20px"}},c.a.createElement(u.a,{variant:"h6"},"Leave a review"),c.a.createElement(m.a,{display:"inline"},c.a.createElement(W.a,{name:"simple-controlled",value:y,onChange:function(e,a){a&&N(a)}}),c.a.createElement(m.a,{display:"flex",justifyContent:"space-between"},c.a.createElement(B.a,{variant:"outlined",placeholder:"Name",style:{marginRight:"10px",width:"30%"},value:v,onChange:function(e){return g(e.target.value)}}),c.a.createElement(B.a,{variant:"outlined",fullWidth:!0,multiline:!0,placeholder:"Review this taco Recipe",style:{marginRight:"10px"},value:s,onChange:function(e){return p(e.target.value)}}),c.a.createElement(L.a,{color:"primary",variant:"contained",style:{width:"200px",maxHeight:"56px"},onClick:function(){g(""),N(0),p(""),s&&S(v||"Anonymous",y,s)}},"Submit Review"))),(null===r||void 0===r?void 0:r.name)&&c.a.createElement(P,{recipeName:r.name,onReviewSave:S})))},Z=function(){return function(){_.apply(this,arguments)}(),c.a.createElement(i.a,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/tacopundit/",component:O}),c.a.createElement(o.a,{path:"/tacopundit/toppings/:slug",component:Y}),c.a.createElement(o.a,{component:v})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,a,t){e.exports=t(195)},95:function(e,a,t){},96:function(e,a,t){}},[[90,1,2]]]);
//# sourceMappingURL=main.223f53a3.chunk.js.map