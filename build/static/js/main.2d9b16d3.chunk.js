(this["webpackJsonpbookstore-react"]=this["webpackJsonpbookstore-react"]||[]).push([[0],{33:function(e,t,o){e.exports=o(61)},40:function(e,t,o){},61:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(29),c=o.n(r),l=o(18),i=o(7),s=o(8),d=o(9),u=o(10),p=o(5),m=o.n(p),h=o(13),f=o(11),b=(o(40),function(e){Object(u.a)(o,e);var t=Object(d.a)(o);function o(){var e;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).getStyle=function(){return{color:"white",backgroundColor:"olive",padding:"10px",border:"1px #ccc dotted",textDecoration:e.props.todo.completed?"line-through":"none"}},e}return Object(s.a)(o,[{key:"render",value:function(){var e=this.props.todo,t=e.id,o=e.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)})," "," ",o,a.a.createElement("button",{style:v,onClick:this.props.removeTodo.bind(this,t)},"x")))}}]),o}(n.Component)),v={backgroundColor:"red",color:"white",border:"none",padding:"5px 10px",borderRadius:"50%",cursor:"pointer",float:"right"},y=b,g=function(e){Object(u.a)(o,e);var t=Object(d.a)(o);function o(){return Object(i.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return a.a.createElement(y,{key:t.id,todo:t,markComplete:e.props.markComplete,removeTodo:e.props.removeTodo})}))}}]),o}(n.Component);function E(){return a.a.createElement("div",{style:k},a.a.createElement("header",null,a.a.createElement("h1",null,"TodoList App"),a.a.createElement(h.b,{style:{color:"#fff",textDecorationStyle:"none"},to:"/"},"Home")," |"," ",a.a.createElement(h.b,{style:{color:"#fff",textDecorationStyle:"none"},to:"/about"},"About")))}var k={textAlign:"center",color:"#fff",textDecorationStyle:"dashed",backgroundColor:"#333",padding:"10px"},j=o(32),x=function(e){Object(u.a)(o,e);var t=Object(d.a)(o);function o(){var e;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={title:""},e.onSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state.title),e.setState({title:" "})},e.onChange=function(t){return e.setState(Object(j.a)({},t.target.name,t.target.value))},e}return Object(s.a)(o,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"add to do ...",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"submit",className:"btn",style:{flex:"1"}}))}}]),o}(n.Component);function C(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"This is the z."),a.a.createElement("p",null," It is a quick react review"))}var O=o(14),S=o.n(O),T=function(e){Object(u.a)(o,e);var t=Object(d.a)(o);function o(){var e;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={todos:[]},e.markComplete=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.removeTodo=function(t){S.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(o){return e.setState({todos:Object(l.a)(e.state.todos.filter((function(e){return e.id!==t})))})}))},e.addTodo=function(t){S.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then((function(t){return e.setState({todos:[].concat(Object(l.a)(e.state.todos),[t.data])})}))},e}return Object(s.a)(o,[{key:"componentDidMount",value:function(){var e=this;S.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(t){return e.setState({todos:t.data})}))}},{key:"render",value:function(){var e=this;return a.a.createElement(h.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(E,null),a.a.createElement(f.a,{exact:!0,path:"/",render:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(x,{addTodo:e.addTodo}),a.a.createElement(g,{todos:e.state.todos,markComplete:e.markComplete,removeTodo:e.removeTodo}))}}),a.a.createElement(f.a,{path:"/about",component:C}))))}}]),o}(n.Component);g.propTypes={todos:m.a.array.isRequired,addTodo:m.a.func.isRequired,markComplete:m.a.func.isRequired,removeTodo:m.a.func.isRequired};var w=T;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.2d9b16d3.chunk.js.map