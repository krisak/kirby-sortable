!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n(1),s=i(r),l=n(2),u=i(l);!function(t){var e=function(){function e(n){var i=this;o(this,e),this.element=t(n),this.animation=0,this.containment=t(".main"),this.options=this.element.data("options"),this.wait=350,this.modules=this.options.modules.map(function(t){return new u["default"](t)}),this.visible=this.create("visible"),this.invisible=this.create("invisible",["visible"]),this.modules.forEach(function(e){return e.children=t(i.visible.el.children).filter(function(){return this.dataset.template==e.template})}),this.events()}return a(e,[{key:"create",value:function(e,n){var i=t('.modules-dropzone[data-entries="'+e+'"]',this.element);return s["default"].create(i.get(0),{forceFallback:!0,group:{name:e,put:n||[]},animation:this.animation,scroll:!1})}},{key:"disconnect",value:function(t){return this[t].option("group",{name:t}),!1}},{key:"connect",value:function(t,e){return this[t].option("group",{name:t,put:e}),!0}},{key:"events",value:function(){var t=this;s["default"].utils.on(this.invisible.el,"start",function(e){var n=t.module(e.item.dataset.template);t.droppable()&&n.droppable()?t.connect("visible",["invisible"]):t.disconnect("visible"),clearTimeout(t.timeout)}),s["default"].utils.on(this.visible.el,"start",function(e){clearTimeout(t.timeout)}),s["default"].utils.on(this.visible.el,"add",function(e){t.sort(e.item.dataset.uid,e.newIndex)}),s["default"].utils.on(this.visible.el,"update",function(e){t.sort(e.item.dataset.uid,e.newIndex)}),s["default"].utils.on(this.visible.el,"remove",function(e){t.hide(e.item.dataset.uid)})}},{key:"module",value:function(t){return this.modules.find(function(e){return e.template==t})}},{key:"droppable",value:function(){return!this.options.max||this.options.max&&this.options.max>this.visible.el.children.length}},{key:"sort",value:function(e,n){t.post(this.options.url,{action:"sort",id:e,to:n+1},this.debounce(this.reload,this.wait))}},{key:"hide",value:function(e){t.post(this.options.url,{action:"hide",id:e},this.debounce(this.reload,this.wait))}},{key:"debounce",value:function(t,e,n){var i=this;return function(){i.timeout?clearTimeout(i.timeout):n&&t.call(i),i.timeout=setTimeout(function(){n||t.call(i),i.timeout=null},e)}}},{key:"reload",value:function(){console.log("reload"),app.content.reload()}}]),e}();t.fn.modules=function(){return this.each(function(){if(t(this).data("modules"))return t(this);var n=new e(this);return t(this).data("modules",n),t(this)})}}(jQuery)},function(t,e,n){var i,o;!function(a){"use strict";i=a,o="function"==typeof i?i.call(e,n,e,t):i,!(void 0!==o&&(t.exports=o))}(function(){"use strict";function t(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=m({},e),t[M]=this;var n={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",ignore:"a, img",filter:null,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1};for(var i in n)!(i in e)&&(e[i]=n[i]);G(e);for(var a in this)"_"===a.charAt(0)&&(this[a]=this[a].bind(this));this.nativeDraggable=!e.forceFallback&&U,o(t,"mousedown",this._onTapStart),o(t,"touchstart",this._onTapStart),this.nativeDraggable&&(o(t,"dragover",this),o(t,"dragenter",this)),z.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function e(t){D&&D.state!==t&&(s(D,"display",t?"none":""),!t&&D.state&&w.insertBefore(D,b),D.state=t)}function n(t,e,n){if(t){n=n||L,e=e.split(".");var i=e.shift().toUpperCase(),o=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");do if(">*"===i&&t.parentNode===n||(""===i||t.nodeName.toUpperCase()==i)&&(!e.length||((" "+t.className+" ").match(o)||[]).length==e.length))return t;while(t!==n&&(t=t.parentNode))}return null}function i(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.preventDefault()}function o(t,e,n){t.addEventListener(e,n,!1)}function a(t,e,n){t.removeEventListener(e,n,!1)}function r(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(R," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(R," ")}}function s(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return L.defaultView&&L.defaultView.getComputedStyle?n=L.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function l(t,e,n){if(t){var i=t.getElementsByTagName(e),o=0,a=i.length;if(n)for(;o<a;o++)n(i[o],o);return i}return[]}function u(t,e,n,i,o,a,r){var s=L.createEvent("Event"),l=(t||e[M]).options,u="on"+n.charAt(0).toUpperCase()+n.substr(1);s.initEvent(n,!0,!0),s.to=e,s.from=o||e,s.item=i||e,s.clone=D,s.oldIndex=a,s.newIndex=r,e.dispatchEvent(s),l[u]&&l[u].call(t,s)}function c(t,e,n,i,o,a){var r,s,l=t[M],u=l.options.onMove;return r=L.createEvent("Event"),r.initEvent("move",!0,!0),r.to=e,r.from=t,r.dragged=n,r.draggedRect=i,r.related=o||e,r.relatedRect=a||e.getBoundingClientRect(),t.dispatchEvent(r),u&&(s=u.call(l,r)),s}function d(t){t.draggable=!1}function h(){W=!1}function f(t,e){var n=t.lastElementChild,i=n.getBoundingClientRect();return(e.clientY-(i.top+i.height)>5||e.clientX-(i.right+i.width)>5)&&n}function p(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function g(t){var e=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"!==t.nodeName.toUpperCase()&&e++;return e}function v(t,e){var n,i;return function(){void 0===n&&(n=arguments,i=this,setTimeout(function(){1===n.length?t.call(i,n[0]):t.apply(i,n),n=void 0},e))}}function m(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}var b,y,_,D,w,T,x,C,E,S,k,N,B,O,I,X,Y,A={},R=/\s+/g,M="Sortable"+(new Date).getTime(),j=window,L=j.document,P=j.parseInt,U=!!("draggable"in L.createElement("div")),H=function(t){return t=L.createElement("x"),t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}(),W=!1,F=Math.abs,z=([].slice,[]),V=v(function(t,e,n){if(n&&e.scroll){var i,o,a,r,s=e.scrollSensitivity,l=e.scrollSpeed,u=t.clientX,c=t.clientY,d=window.innerWidth,h=window.innerHeight;if(C!==n&&(x=e.scroll,C=n,x===!0)){x=n;do if(x.offsetWidth<x.scrollWidth||x.offsetHeight<x.scrollHeight)break;while(x=x.parentNode)}x&&(i=x,o=x.getBoundingClientRect(),a=(F(o.right-u)<=s)-(F(o.left-u)<=s),r=(F(o.bottom-c)<=s)-(F(o.top-c)<=s)),a||r||(a=(d-u<=s)-(u<=s),r=(h-c<=s)-(c<=s),(a||r)&&(i=j)),A.vx===a&&A.vy===r&&A.el===i||(A.el=i,A.vx=a,A.vy=r,clearInterval(A.pid),i&&(A.pid=setInterval(function(){i===j?j.scrollTo(j.pageXOffset+a*l,j.pageYOffset+r*l):(r&&(i.scrollTop+=r*l),a&&(i.scrollLeft+=a*l))},24)))}},30),G=function(t){var e=t.group;e&&"object"==typeof e||(e=t.group={name:e}),["pull","put"].forEach(function(t){t in e||(e[t]=!0)}),t.groups=" "+e.name+(e.put.join?" "+e.put.join(" "):"")+" "};return t.prototype={constructor:t,_onTapStart:function(t){var e=this,i=this.el,o=this.options,a=t.type,r=t.touches&&t.touches[0],s=(r||t).target,l=s,c=o.filter;if(!("mousedown"===a&&0!==t.button||o.disabled)&&(s=n(s,o.draggable,i))){if(N=g(s),"function"==typeof c){if(c.call(this,t,s,this))return u(e,l,"filter",s,i,N),void t.preventDefault()}else if(c&&(c=c.split(",").some(function(t){if(t=n(l,t.trim(),i))return u(e,t,"filter",s,i,N),!0})))return void t.preventDefault();o.handle&&!n(l,o.handle,i)||this._prepareDragStart(t,r,s)}},_prepareDragStart:function(t,e,n){var i,a=this,s=a.el,u=a.options,c=s.ownerDocument;n&&!b&&n.parentNode===s&&(I=t,w=s,b=n,y=b.parentNode,T=b.nextSibling,O=u.group,i=function(){a._disableDelayedDrag(),b.draggable=!0,r(b,a.options.chosenClass,!0),a._triggerDragStart(e)},u.ignore.split(",").forEach(function(t){l(b,t.trim(),d)}),o(c,"mouseup",a._onDrop),o(c,"touchend",a._onDrop),o(c,"touchcancel",a._onDrop),u.delay?(o(c,"mouseup",a._disableDelayedDrag),o(c,"touchend",a._disableDelayedDrag),o(c,"touchcancel",a._disableDelayedDrag),o(c,"mousemove",a._disableDelayedDrag),o(c,"touchmove",a._disableDelayedDrag),a._dragStartTimer=setTimeout(i,u.delay)):i())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),a(t,"mouseup",this._disableDelayedDrag),a(t,"touchend",this._disableDelayedDrag),a(t,"touchcancel",this._disableDelayedDrag),a(t,"mousemove",this._disableDelayedDrag),a(t,"touchmove",this._disableDelayedDrag)},_triggerDragStart:function(t){t?(I={target:b,clientX:t.clientX,clientY:t.clientY},this._onDragStart(I,"touch")):this.nativeDraggable?(o(b,"dragend",this),o(w,"dragstart",this._onDragStart)):this._onDragStart(I,!0);try{L.selection?L.selection.empty():window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(){w&&b&&(r(b,this.options.ghostClass,!0),t.active=this,u(this,w,"start",b,w,N))},_emulateDragOver:function(){if(X){if(this._lastX===X.clientX&&this._lastY===X.clientY)return;this._lastX=X.clientX,this._lastY=X.clientY,H||s(_,"display","none");var t=L.elementFromPoint(X.clientX,X.clientY),e=t,n=" "+this.options.group.name,i=z.length;if(e)do{if(e[M]&&e[M].options.groups.indexOf(n)>-1){for(;i--;)z[i]({clientX:X.clientX,clientY:X.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);H||s(_,"display","")}},_onTouchMove:function(e){if(I){t.active||this._dragStarted(),this._appendGhost();var n=e.touches?e.touches[0]:e,i=n.clientX-I.clientX,o=n.clientY-I.clientY,a=e.touches?"translate3d("+i+"px,"+o+"px,0)":"translate("+i+"px,"+o+"px)";Y=!0,X=n,s(_,"webkitTransform",a),s(_,"mozTransform",a),s(_,"msTransform",a),s(_,"transform",a),e.preventDefault()}},_appendGhost:function(){if(!_){var t,e=b.getBoundingClientRect(),n=s(b),i=this.options;_=b.cloneNode(!0),r(_,i.ghostClass,!1),r(_,i.fallbackClass,!0),s(_,"top",e.top-P(n.marginTop,10)),s(_,"left",e.left-P(n.marginLeft,10)),s(_,"width",e.width),s(_,"height",e.height),s(_,"opacity","0.8"),s(_,"position","fixed"),s(_,"zIndex","100000"),s(_,"pointerEvents","none"),i.fallbackOnBody&&L.body.appendChild(_)||w.appendChild(_),t=_.getBoundingClientRect(),s(_,"width",2*e.width-t.width),s(_,"height",2*e.height-t.height)}},_onDragStart:function(t,e){var n=t.dataTransfer,i=this.options;this._offUpEvents(),"clone"==O.pull&&(D=b.cloneNode(!0),s(D,"display","none"),w.insertBefore(D,b)),e?("touch"===e?(o(L,"touchmove",this._onTouchMove),o(L,"touchend",this._onDrop),o(L,"touchcancel",this._onDrop)):(o(L,"mousemove",this._onTouchMove),o(L,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,50)):(n&&(n.effectAllowed="move",i.setData&&i.setData.call(this,n,b)),o(L,"drop",this),setTimeout(this._dragStarted,0))},_onDragOver:function(t){var i,o,a,r=this.el,l=this.options,u=l.group,d=u.put,p=O===u,g=l.sort;if(void 0!==t.preventDefault&&(t.preventDefault(),!l.dragoverBubble&&t.stopPropagation()),Y=!0,O&&!l.disabled&&(p?g||(a=!w.contains(b)):O.pull&&d&&(O.name===u.name||d.indexOf&&~d.indexOf(O.name)))&&(void 0===t.rootEl||t.rootEl===this.el)){if(V(t,l,this.el),W)return;if(i=n(t.target,l.draggable,r),o=b.getBoundingClientRect(),a)return e(!0),void(D||T?w.insertBefore(b,D||T):g||w.appendChild(b));if(0===r.children.length||r.children[0]===_||r===t.target&&(i=f(r,t))){if(i){if(i.animated)return;m=i.getBoundingClientRect()}e(p),c(w,r,b,o,i,m)!==!1&&(b.contains(r)||(r.appendChild(b),y=r),this._animate(o,b),i&&this._animate(m,i))}else if(i&&!i.animated&&i!==b&&void 0!==i.parentNode[M]){E!==i&&(E=i,S=s(i),k=s(i.parentNode));var v,m=i.getBoundingClientRect(),x=m.right-m.left,C=m.bottom-m.top,N=/left|right|inline/.test(S.cssFloat+S.display)||"flex"==k.display&&0===k["flex-direction"].indexOf("row"),B=i.offsetWidth>b.offsetWidth,I=i.offsetHeight>b.offsetHeight,X=(N?(t.clientX-m.left)/x:(t.clientY-m.top)/C)>.5,A=i.nextElementSibling,R=c(w,r,b,o,i,m);if(R!==!1){if(W=!0,setTimeout(h,30),e(p),1===R||R===-1)v=1===R;else if(N){var j=b.offsetTop,L=i.offsetTop;v=j===L?i.previousElementSibling===b&&!B||X&&B:L>j}else v=A!==b&&!I||X&&I;b.contains(r)||(v&&!A?r.appendChild(b):i.parentNode.insertBefore(b,v?A:i)),y=b.parentNode,this._animate(o,b),this._animate(m,i)}}}},_animate:function(t,e){var n=this.options.animation;if(n){var i=e.getBoundingClientRect();s(e,"transition","none"),s(e,"transform","translate3d("+(t.left-i.left)+"px,"+(t.top-i.top)+"px,0)"),e.offsetWidth,s(e,"transition","all "+n+"ms"),s(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=setTimeout(function(){s(e,"transition",""),s(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;a(L,"touchmove",this._onTouchMove),a(t,"mouseup",this._onDrop),a(t,"touchend",this._onDrop),a(t,"touchcancel",this._onDrop)},_onDrop:function(e){var n=this.el,i=this.options;clearInterval(this._loopId),clearInterval(A.pid),clearTimeout(this._dragStartTimer),a(L,"mousemove",this._onTouchMove),this.nativeDraggable&&(a(L,"drop",this),a(n,"dragstart",this._onDragStart)),this._offUpEvents(),e&&(Y&&(e.preventDefault(),!i.dropBubble&&e.stopPropagation()),_&&_.parentNode.removeChild(_),b&&(this.nativeDraggable&&a(b,"dragend",this),d(b),r(b,this.options.ghostClass,!1),r(b,this.options.chosenClass,!1),w!==y?(B=g(b),B>=0&&(u(null,y,"sort",b,w,N,B),u(this,w,"sort",b,w,N,B),u(null,y,"add",b,w,N,B),u(this,w,"remove",b,w,N,B))):(D&&D.parentNode.removeChild(D),b.nextSibling!==T&&(B=g(b),B>=0&&(u(this,w,"update",b,w,N,B),u(this,w,"sort",b,w,N,B)))),t.active&&(null!==B&&B!==-1||(B=N),u(this,w,"end",b,w,N,B),this.save())),w=b=y=_=T=D=x=C=I=X=Y=B=E=S=O=t.active=null)},handleEvent:function(t){var e=t.type;"dragover"===e||"dragenter"===e?b&&(this._onDragOver(t),i(t)):"drop"!==e&&"dragend"!==e||this._onDrop(t)},toArray:function(){for(var t,e=[],i=this.el.children,o=0,a=i.length,r=this.options;o<a;o++)t=i[o],n(t,r.draggable,this.el)&&e.push(t.getAttribute(r.dataIdAttr)||p(t));return e},sort:function(t){var e={},i=this.el;this.toArray().forEach(function(t,o){var a=i.children[o];n(a,this.options.draggable,i)&&(e[t]=a)},this),t.forEach(function(t){e[t]&&(i.removeChild(e[t]),i.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return n(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;return void 0===e?n[t]:(n[t]=e,void("group"===t&&G(n)))},destroy:function(){var t=this.el;t[M]=null,a(t,"mousedown",this._onTapStart),a(t,"touchstart",this._onTapStart),this.nativeDraggable&&(a(t,"dragover",this),a(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),z.splice(z.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},t.utils={on:o,off:a,css:s,find:l,is:function(t,e){return!!n(t,e,t)},extend:m,throttle:v,closest:n,toggleClass:r,index:g},t.create=function(e,n){return new t(e,n)},t.version="1.4.2",t})},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(e){n(this,t),this.template=e.template,this.options=e.options}return i(t,[{key:"droppable",value:function(){return!this.options.limit||this.options.limit&&this.options.limit>this.children.length}}]),t}();e["default"]=o}]);