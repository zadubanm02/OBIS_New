(this.webpackJsonpobisnew=this.webpackJsonpobisnew||[]).push([[0],{106:function(e,t,a){e.exports=a(235)},111:function(e,t,a){},112:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},113:function(e,t,a){},117:function(e,t){},119:function(e,t){},153:function(e,t){},154:function(e,t){},235:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(105),o=a.n(l),r=(a(111),a(112),a(113),a(34)),c=a(35),i=a(36),d=a(37),m=a(38),g=a(27),p=a.n(g),u=a(20),h=a.n(u),v=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={message:"",key:"",encryptedMessage:"",decryptedMessage:"",isLoading:!1,isLoaded:!1,_id:"",messageForDecryption:"",decryptionKey:""},e.handleChange=function(t){e.setState(Object(r.a)({},t.target.name,t.target.value))},e.postDataToDatabase=function(t){t.preventDefault();var a=e.state,n=a.message,s=a.key;a._id;e.setState({isLoading:!0}),h.a.post("http://localhost:8000/messages",{message:n,key:s}).then(e.setState({isLoading:!1})).then((function(t){console.log(t),console.log(t.data),console.log(t.data._id),e.setState({_id:t.data._id}),h.a.get("http://localhost:8000/messages/".concat(e.state._id)).then((function(t){console.log(t.data);var a=t.data;e.setState({encryptedMessage:p.a.AES.encrypt(a.message,a.key).toString()})}))}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.encryptedMessage;e.decryptedMessage,e._id;return s.a.createElement("div",null,s.a.createElement("div",{className:"card-panel grey lighten-5"},s.a.createElement("form",{onSubmit:this.postDataToDatabase},s.a.createElement("div",{class:"input-field col s6"},s.a.createElement("input",{id:"message",type:"text",name:"message",onChange:this.handleChange}),s.a.createElement("label",{for:"message"},"Message")),s.a.createElement("div",{class:"input-field col s6"},s.a.createElement("input",{id:"key",type:"text",name:"key",onChange:this.handleChange}),s.a.createElement("label",{for:"key"},"Key")),s.a.createElement("label",null,"K\u013e\xfa\u010d, pod\u013ea ktor\xe9ho sa za\u0161ifruje tvoja spr\xe1va"),s.a.createElement("br",null),s.a.createElement("input",{type:"submit",value:"Za\u0161ifrova\u0165",class:"btn  waves-light",style:{backgroundColor:"#EE6E73"}}))),s.a.createElement("div",null,s.a.createElement("div",{class:"card-panel grey lighten-5",style:{borderBottom:"1px solid #EE6E73"}},"Za\u0161ifrovan\xe1 spr\xe1va : ",t)))}}]),a}(s.a.Component),y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={message:"",key:"",decryptedMessage:"",_id:"",messageForDecryption:"",decryptionKey:"",isLoading:!1},e.handleChange=function(t){e.setState(Object(r.a)({},t.target.name,t.target.value)),console.log(e.state)},e.postDataToDatabase=function(t){t.preventDefault();var a=e.state,n=a.message,s=a.key;a._id;e.setState({isLoading:!0}),h.a.post("http://localhost:8000/messages",{message:n,key:s}).then(e.setState({isLoading:!1})).then((function(t){console.log(t),console.log(t.data),console.log(t.data._id),e.setState({_id:t.data._id}),h.a.get("http://localhost:8000/messages/".concat(e.state._id)).then((function(t){console.log(t.data);var a=t.data;e.setState({decryptedMessage:p.a.AES.decrypt(a.message,a.key).toString(p.a.enc.Utf8)})}))}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=(e.encryptedMessage,e.decryptedMessage);e._id;return s.a.createElement("div",null,s.a.createElement("div",{className:"card-panel grey lighten-5"},s.a.createElement("form",{onSubmit:this.postDataToDatabase},s.a.createElement("div",{class:"input-field col s6"},s.a.createElement("input",{id:"message",type:"text",name:"message",onChange:this.handleChange}),s.a.createElement("label",{for:"message"},"Encypted Message")),s.a.createElement("div",{class:"input-field col s6"},s.a.createElement("input",{id:"key",type:"text",name:"key",onChange:this.handleChange}),s.a.createElement("label",{for:"key"},"Decryption Key")),s.a.createElement("label",null,"K\u013e\xfac, pod\u013ea ktor\xe9ho sa de\u0161ifruje tvoja spr\xe1va"),s.a.createElement("br",null),s.a.createElement("input",{type:"submit",value:"De\u0161ifrova\u0165",class:"btn  waves-light"}))),s.a.createElement("div",null,s.a.createElement("div",{class:"card-panel grey lighten-5",style:{borderBottom:"1px solid #62BBB1"}},"De\u0161ifrovan\xe1 spr\xe1va : ",t)))}}]),a}(s.a.Component),E=function(){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("footer",{className:"page-footer grey lighten-5",style:{color:"#000"}},s.a.createElement("div",{className:"container",style:{textAlign:"center"}},s.a.createElement("span",null,"Pou\u017eit\xe9 technol\xf3gie : "),s.a.createElement("a",{href:"https://reactjs.org/"},"React "),s.a.createElement("a",{href:"https://nodejs.org/en/"},"NodeJS "),s.a.createElement("a",{href:"https://cryptojs.gitbook.io/docs/"},"CryptoJS "),s.a.createElement("a",{href:"https://materializecss.com/"},"Materialize")),s.a.createElement("div",{class:"footer-copyright"},s.a.createElement("div",{class:"container",style:{textAlign:"center",color:"#000"}},"\xa9 2020 Copyright Michal Zaduban, Richard Zaduban")))))};var f=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"container"},s.a.createElement("h2",{style:{borderBottom:"1px solid #EE6E73",textAlign:"center"}},"OBIS 2020"),s.a.createElement("h4",{style:{textAlign:"center"}},"\u0160ifrovanie ")),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6 col-xs-12"},s.a.createElement("h6",{style:{textAlign:"center"}}," ","Vlo\u017e spr\xe1vu a k\u013e\xfa\u010d, pod\u013ea ktor\xe9ho sa spr\xe1va za\u0161ifruje"," "),s.a.createElement(v,null)),s.a.createElement("div",{className:"col-lg-6 col-xs-12"},s.a.createElement("h6",{style:{textAlign:"center"}},"Vlo\u017e za\u0161ifrovan\xfa spr\xe1vu a k\u013e\xfa\u010d, pod\u013ea ktor\xe9ho bola spr\xe1va za\u0161ifrovan\xe1"," "),s.a.createElement(y,null))),s.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[106,1,2]]]);
//# sourceMappingURL=main.cd01af35.chunk.js.map