(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var c=t(1),d=t.n(c),i=t(8),r=t.n(i),s=(t(13),t(4)),a=t(5),u=t(2),o=t(7),l=t(6),m=(t(14),t(0));var b=function(){return Object(m.jsx)("div",{className:"outer",children:Object(m.jsx)("div",{className:"middle unselectable",children:Object(m.jsx)("div",{id:"drum-machine",className:"inner",children:Object(m.jsx)(y,{})})})})},y=function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(e){var c;return Object(s.a)(this,t),(c=n.call(this,e)).state={display:"Keyboard friendly",padsInfo:[{number:1,key:"Q"},{number:2,key:"W"},{number:3,key:"E"},{number:4,key:"A"},{number:5,key:"S"},{number:6,key:"D"},{number:7,key:"Z"},{number:8,key:"X"},{number:9,key:"C"}]},c.handleEnter=c.handleEnter.bind(Object(u.a)(c)),c}return Object(a.a)(t,[{key:"handleEnter",value:function(e){this.setState((function(){return{display:"".concat(e)}})),document.getElementById(e).load(),document.getElementById(e).play()}},{key:"render",value:function(){return Object(m.jsxs)("div",{id:"containerBig",children:[Object(m.jsx)(k,{info:this.state.padsInfo,passFunction:this.handleEnter}),Object(m.jsx)(h,{toDisp:this.state.display}),Object(m.jsx)("div",{id:"title",children:"Drum Machine"})]})}}]),t}(d.a.Component),k=function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(e){var c;return Object(s.a)(this,t),(c=n.call(this,e)).click=function(e){c.props.passFunction(e)},c.state={},c.handleKeyPress=c.handleKeyPress.bind(Object(u.a)(c)),c.soundNumber=c.soundNumber.bind(Object(u.a)(c)),c.srcNumber=c.srcNumber.bind(Object(u.a)(c)),c}return Object(a.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleEnter",value:function(e){this.setState((function(){return{display:e}})),document.getElementById(e).load(),document.getElementById(e).play()}},{key:"handleKeyPress",value:function(e){switch(e.keyCode){case 81:document.getElementById("sound1").click();break;case 87:document.getElementById("sound2").click();break;case 69:document.getElementById("sound3").click();break;case 65:document.getElementById("sound4").click();break;case 83:document.getElementById("sound5").click();break;case 68:document.getElementById("sound6").click();break;case 90:document.getElementById("sound7").click();break;case 88:document.getElementById("sound8").click();break;case 67:document.getElementById("sound9").click()}}},{key:"soundNumber",value:function(e){return"sound".concat(e)}},{key:"srcNumber",value:function(e){return"/Sound/".concat(e,".wav")}},{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{id:"drumpadcontainer",children:this.props.info.map((function(n){return Object(m.jsxs)("div",{className:"drum-pad",id:e.soundNumber(n.number),onClick:function(){return e.click(n.key)},children:[Object(m.jsx)("audio",{src:e.srcNumber(n.number),className:"clip",id:n.key}),n.key]})}))})}}]),t}(d.a.Component);function h(e){return Object(m.jsx)("div",{id:"display",children:"Keyboard friendly"===e.toDisp?Object(m.jsx)("div",{class:"placeholder",children:"Audio doesn't play because the test forbids using iframe "}):e.toDisp})}var j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,c=n.getFID,d=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),c(e),d(e),i(e),r(e)}))};r.a.render(Object(m.jsx)(d.a.StrictMode,{children:Object(m.jsx)(b,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.c6a5f463.chunk.js.map