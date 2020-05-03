(this.webpackJsonpcorona_app=this.webpackJsonpcorona_app||[]).push([[0],{126:function(e,t,a){e.exports={container:"Charts_container__2f3z3"}},127:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__1X-d4"}},128:function(e,t,a){e.exports=a.p+"static/media/image.803d982e.png"},133:function(e,t,a){e.exports=a(254)},254:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(87),o=a.n(c),s=a(25),u=a.n(s),l=a(39),i=a(118),d=a(119),m=a(130),p=a(129),f=a(271),v=a(275),h=a(272),E=a(273),b=a(50),y=a.n(b),g=a(76),x=a.n(g),_=a(77),C=a.n(_),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:"styles.container"},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:C()(y.a.card,y.a.infected)},r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Infectados"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},"N\xfamero de casos de covid-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:C()(y.a.card,y.a.recovered)},"                    ",r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Recuperados"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},"N\xfamero de casos recuperados de covid-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:C()(y.a.card,y.a.deaths)},"                    ",r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Mortes"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},"N\xfamero de casos letais de  covid-19"))))):"Carregando Dados.."},j=a(75),O=a(78),k=a.n(O),S="https://covid19.mathdro.id/api",D=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,n,r,c,o,s,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=S,t&&(a="".concat(S,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,l=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:l});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(S,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(S,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(89),B=a(126),M=a.n(B),U=function(e){var t=e.data,a=t.confirmed,c=t.deaths,o=t.recovered,s=e.country,i=Object(n.useState)([]),d=Object(j.a)(i,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m.length?r.a.createElement(A.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,v=a?r.a.createElement(A.a,{data:{labels:["Infectados","Recuperados","Mortes"],datasets:[{label:"Pessoas",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[a.value,o.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Cen\xe1rio Atual em :".concat(s)}}}):null;return r.a.createElement("div",{className:M.a.container},s?v:f)},V=a(276),J=a(274),P=a(127),R=a.n(P),X=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(j.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),r.a.createElement(V.a,{className:R.a.formControl},r.a.createElement(J.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},q=a(91),z=a.n(q),F=a(128),G=a.n(F),K=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(l.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:z.a.container},r.a.createElement("img",{className:z.a.image,src:G.a,alt:"COVID-19"}),r.a.createElement(w,{data:t}),r.a.createElement(X,{handleCountryChange:this.handleCountryChange}),r.a.createElement(U,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),o.a.render(r.a.createElement(K,null),document.getElementById("root"))},50:function(e,t,a){e.exports={container:"Cards_container__QVAsq",card:"Cards_card__31WZg",infected:"Cards_infected__3efUs",recovered:"Cards_recovered__1LaIP",deaths:"Cards_deaths__3wrVl"}},91:function(e,t,a){e.exports={container:"App_container__1JKrv",image:"App_image__FyXCp"}}},[[133,1,2]]]);
//# sourceMappingURL=main.b275b6f8.chunk.js.map