(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(18),c=n.n(o),i=(n(70),n(25)),s=n(26),l=n(29),m=n(27),u=n(30),p=n(64),h=n(59),d=n.n(h),w=n(61),f=n.n(w),v=n(63),b=n.n(v),E=n(62),j=n.n(E),y=n(28),O=n.n(y),g=n(37),k=n.n(g),x=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(d.a,{className:e.card},r.a.createElement(f.a,null,r.a.createElement(j.a,null,r.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},this.props.name),r.a.createElement(k.a,{component:"p"},"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"))),r.a.createElement(b.a,null,r.a.createElement(O.a,{size:"small",color:"primary"},"Share"),r.a.createElement(O.a,{size:"small",color:"primary"},"Learn More")))}}]),t}(a.Component),z=Object(p.withStyles)({card:{maxWidth:345},media:{height:140}})(x),B=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={items:""},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://swapi.co/api/people/1/").then(function(e){return e.json()}).then(function(t){return e.setState({items:t.name})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(z,{name:this.state.items}),r.a.createElement(z,{name:this.state.items}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e,t,n){e.exports=n(159)},70:function(e,t,n){}},[[65,1,2]]]);
//# sourceMappingURL=main.27b6c546.chunk.js.map