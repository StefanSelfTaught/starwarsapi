(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){e.exports=a(255)},106:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},192:function(e,t,a){},255:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(15),c=a.n(o),l=(a(106),a(49)),s=a.n(l),i=a(86),u=a(87),p=a(88),m=a(99),h=a(89),d=a(100),g=(a(109),a(110),a(19)),f=a(90),y=a.n(f),w=a(92),b=a.n(w),E=a(94),v=a.n(E),k=a(93),x=a.n(k),S=a(48),C=a.n(S),F=a(16),O=a.n(F),j=Object(g.withStyles)({card:{maxWidth:345,margin:12,opacity:.9},typography:{fontSize:17.5}})(function(e){var t=e.classes;return r.a.createElement(y.a,{className:t.card},r.a.createElement(b.a,null,r.a.createElement(x.a,null,r.a.createElement(O.a,{style:{borderBottom:"0.5px solid grey",padding:5},gutterBottom:!0,variant:"h5",align:"center",component:"h5"},r.a.createElement("strong",null,e.name)),r.a.createElement(O.a,{className:t.typography,align:"center"},"Height: ",e.height),r.a.createElement(O.a,{className:t.typography,align:"center"},"Mass: ",e.mass),r.a.createElement(O.a,{className:t.typography,align:"center"},"Hair Color: ",e.hair_color),r.a.createElement(O.a,{className:t.typography,align:"center"},"Skin Color: ",e.skin_color),r.a.createElement(O.a,{className:t.typography,align:"center"},"Birth Year: ",e.birth_year))),r.a.createElement(v.a,null,r.a.createElement(C.a,{style:{margin:"auto"},size:"small",color:"primary"},"Learn More")))}),B=a(50),N=a.n(B),_=function(e){var t=e.people;return r.a.createElement(N.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},t.map(function(e){var t=e.name,a=e.height,n=e.mass,o=e.hair_color,c=e.skin_color,l=e.birth_year;return r.a.createElement(N.a,{item:!0,xs:8,sm:5,md:4,lg:3,xl:2},r.a.createElement(j,{key:t,name:t,height:a,mass:n,hair_color:o,skin_color:c,birth_year:l}))}))},I=a(95),L=a.n(I),W=(a(192),Object(g.withStyles)(function(e){return{textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,marginBottom:35},container:{display:"flex",flexWrap:"wrap",justifyContent:"center"},cssLabel:{"&$cssFocused":{color:"black"}},cssFocused:{color:"black"},cssUnderline:{"&:after":{borderBottomColor:"black"}},cssOutlinedInput:{"&$cssFocused $notchedOutline":{borderColor:"black"}},notchedOutline:{color:"black"}}})(function(e){var t=e.classes;return r.a.createElement("form",{className:"".concat(t.container," ").concat(t.textField),noValidate:!0,autoComplete:"off"},r.a.createElement(L.a,{onChange:e.searchChange,style:{backgroundColor:"#F0F0F0"},className:t.margin,InputLabelProps:{classes:{root:t.cssLabel,focused:t.cssFocused}},InputProps:{classes:{root:t.cssOutlinedInput,focused:t.cssFocused,notchedOutline:t.notchedOutline}},label:"Search Robots...",variant:"outlined",id:"custom-css-outlined-input"}))})),z=a(96),$=a.n(z),M=a(97),P=a.n(M),A=a(98),D=a.n(A),H=Object(g.withStyles)(function(e){return{fab:{margin:e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement($.a,{style:{zIndex:9999,bottom:15,right:20},easing:"easeInOutCirc",duration:350,showUnder:130},r.a.createElement(P.a,{color:"primary","aria-label":"Add",className:t.fab},r.a.createElement(D.a,null)))}),J=function(){return r.a.createElement("div",null,r.a.createElement(O.a,{style:{fontFamily:"StarWars",color:"#f0f0f0",fontSize:80,marginTop:40},align:"center",variant:"h1",gutterBottom:!0},"Star Wars"),r.a.createElement(O.a,{style:{fontFamily:"StarWars2",color:"black",fontSize:45,marginBottom:105,textShadow:"-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white"},align:"center",variant:"h1",gutterBottom:!0},"The Characters"))},R=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={people:[],searchField:""},a.handleSearch=function(e){e.preventDefault(),a.setState({searchField:e.target.value})},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all(["https://swapi.co/api/people/","https://swapi.co/api/people/?page=2","https://swapi.co/api/people/?page=3","https://swapi.co/api/people/?page=4","https://swapi.co/api/people/?page=5"].map(function(){var t=Object(i.a)(s.a.mark(function t(a){var n,r,o,c;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(a);case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,(o=e.state.people).push(r.results),c=o.flat().sort(function(e,t){return e.name.localeCompare(t.name)}),e.setState({people:c});case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())).catch(function(e){return alert("Something went wrong:",e)})}},{key:"render",value:function(){var e=this,t=this.state.people.filter(function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())});return r.a.createElement(n.Fragment,null,r.a.createElement(H,null),r.a.createElement(J,null),r.a.createElement(W,{searchChange:this.handleSearch}),r.a.createElement(_,{people:t}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[101,1,2]]]);
//# sourceMappingURL=main.095ccb4d.chunk.js.map