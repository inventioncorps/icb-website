(window.webpackJsonp=window.webpackJsonp||[]).push([["as-account~as-integrations~collection-detail-page~create-folder-modal~favorites~recents~shared-folde~bcf9c2f2"],{cQOJvz1lV6:function(e,t,r){"use strict";var n=r("q1tIBJhxTW"),o=r.n(n),a=r("TSYQbtd+U2"),i=r.n(a);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=function(e){var t=e.children,r=e.className,o=void 0===r?"":r,a=e.isCompact,l=void 0!==a&&a,u=s(e,["children","className","isCompact"]);return n.createElement("table",c({className:i()("table",o,{"is-compact":l})},u),t)},u=function(e){var t=e.children,r=e.className,o=void 0===r?"":r;return n.createElement("tbody",{className:i()("table-body",o)},t)};function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=function(e){var t=e.children,r=e.className,o=void 0===r?"":r,a=e.isFixedWidth,c=void 0!==a&&a,s=f(e,["children","className","isFixedWidth"]);return n.createElement("td",d({className:i()("table-cell",o,{"is-fixed-width":c})},s),t)};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var v=function(e){var t=e.children,r=e.className,o=void 0===r?"":r,a=e.rowRef,c=h(e,["children","className","rowRef"]);return n.createElement("tr",y({ref:a,className:i()("table-row",o)},c),t)},b=function(e){var t=e.children,r=e.className,o=void 0===r?"":r,a=e.rowClassName,c=void 0===a?"":a;return n.createElement("thead",{className:i()("table-header",o)},n.createElement(v,{className:c},t))};function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var O=function(e){var t=e.children,r=e.className,o=void 0===r?"":r,a=e.isFixedWidth,c=void 0!==a&&a,s=g(e,["children","className","isFixedWidth"]);return n.createElement("th",m({className:i()("table-cell",o,{"is-fixed-width":c})},s),t)},w=r("17x9q+7QrQ"),S=r.n(w),I=r("JPcvh7FMFD"),x=r("yb06nJg3A+"),k=r.n(x),j=r("JRPeW/Ew/U"),P=r("PP/DhPT4lh"),D=Object(j.defineMessages)({downDescription:{id:"boxui.core.selection.downDescription",defaultMessage:"Select next item"},upDescription:{id:"boxui.core.selection.upDescription",defaultMessage:"Select previous item"},shiftXDescription:{id:"boxui.core.selection.shiftXDescription",defaultMessage:"Select current item"},shiftUpDescription:{id:"boxui.core.selection.shiftUpDescription",defaultMessage:"Add previous item to current selection"},shiftDownDescription:{id:"boxui.core.selection.shiftDownDescription",defaultMessage:"Add next item to current selection"},selectAllDescription:{id:"boxui.core.selection.selectAllDescription",defaultMessage:"Select all items"},deselectAllDescription:{id:"boxui.core.selection.deselectAllDescription",defaultMessage:"Deselect all items"}});var E=function(e,t,r,n){if(t<=n&&n<=r)return e.subtract(new I.Range(t,n+1)).union(new I.Range(n,r+1));if(t<=r&&r<=n)return e.subtract(new I.Range(t,r+1)).union(new I.Range(r,n+1));if(n<=t&&t<=r)return e.union(new I.Range(n,r+1));if(n<=r&&r<=t)return e.subtract(new I.Range(r,t+1)).union(new I.Range(n,r+1));if(r<=n&&n<=t)return e.subtract(new I.Range(n,t+1)).union(new I.Range(r,n+1));if(r<=t&&r<=n)return e.union(new I.Range(r,n+1));throw new Error("Invalid shiftSelect params: [".concat(Array.prototype.slice.call(arguments),"]"))};function M(e){return(M="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var q=function(e){var t,r,a=e.displayName||e.name||"Table";return r=t=function(t){function r(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),n=this,a=N(r).call(this,e),t=!a||"object"!==M(a)&&"function"!==typeof a?A(n):a,H(A(t),"state",{focusedIndex:void 0}),H(A(t),"onSelect",(function(e,r){var n=t.props.onSelect;t.previousIndex=t.state.focusedIndex||0,t.setState({focusedIndex:r}),n&&n(I.Set.isSet(t.props.selectedItems)?e:e.toJS())})),H(A(t),"getHotkeyConfigs",(function(){var e=t.props,r=e.enableHotkeys,n=e.hotkeyType;return r||t.hotkeys||(t.hotkeys=[]),t.hotkeys||(t.hotkeys=[new P.HotkeyRecord({key:"down",description:o.a.createElement(j.FormattedMessage,D.downDescription),handler:function(e){var r=t.props.data,n=t.state.focusedIndex;e.preventDefault();var o=void 0!==n?Math.min(n+1,r.length-1):0;t.setState({focusedIndex:o})},type:n}),new P.HotkeyRecord({key:"up",description:o.a.createElement(j.FormattedMessage,D.upDescription),handler:function(e){var r=t.state.focusedIndex,n=void 0===r?0:r;e.preventDefault();var o=Math.max(n-1,0);t.setState({focusedIndex:o})},type:n}),new P.HotkeyRecord({key:"shift+x",description:o.a.createElement(j.FormattedMessage,D.shiftXDescription),handler:function(){var e=t.state.focusedIndex;void 0!==e&&t.selectToggle(e)},type:n}),new P.HotkeyRecord({key:["meta+a","ctrl+a"],description:o.a.createElement(j.FormattedMessage,D.selectAllDescription),handler:function(e){var r=t.props.data;e.preventDefault(),t.onSelect(new I.Set(r),t.state.focusedIndex)},type:n}),new P.HotkeyRecord({key:"shift+down",description:o.a.createElement(j.FormattedMessage,D.shiftDownDescription),handler:function(){var e=t.props.data,r=t.state.focusedIndex;if(void 0!==r){var n=Math.min(r+1,e.length-1);t.handleShiftKeyDown(n,e.length-1)}},type:n}),new P.HotkeyRecord({key:"shift+up",description:o.a.createElement(j.FormattedMessage,D.shiftUpDescription),handler:function(){var e=t.state.focusedIndex;if(void 0!==e){var r=Math.max(e-1,0);t.handleShiftKeyDown(r,0)}},type:n}),new P.HotkeyRecord({key:"esc",description:o.a.createElement(j.FormattedMessage,D.deselectAllDescription),handler:function(){t.onSelect(new I.Set,t.state.focusedIndex)},type:n})]),t.hotkeys})),H(A(t),"getProcessedProps",(function(){var e=t.props.selectedItems;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){H(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t.props,{selectedItems:I.Set.isSet(e)?e:new I.Set(e)})})),H(A(t),"hotkeys",null),H(A(t),"selectToggle",(function(e){var r=t.getProcessedProps(),n=r.data,o=r.selectedItems;o.has(n[e])?t.onSelect(o.delete(n[e]),e):t.onSelect(o.add(n[e]),e),t.anchorIndex=e})),H(A(t),"selectRange",(function(e){var r=t.getProcessedProps(),n=r.data,o=r.selectedItems;if(e!==t.previousIndex){var a=new I.Set(n.reduce((function(e,t,r){return o.has(t)&&e.push(r),e}),[])),i=E(a,t.previousIndex,e,t.anchorIndex).map((function(e){return n[e]}));t.onSelect(i,e)}})),H(A(t),"selectOne",(function(e){var r=t.getProcessedProps(),n=r.data,o=r.selectedItems;o.has(n[e])&&1===o.size||(t.onSelect(new I.Set([n[e]]),e),t.anchorIndex=e)})),H(A(t),"clearFocus",(function(){t.setState({focusedIndex:void 0})})),H(A(t),"handleRowClick",(function(e,r){e.metaKey||e.ctrlKey?t.selectToggle(r):e.shiftKey?t.selectRange(r):t.selectOne(r)})),H(A(t),"handleRowFocus",(function(e,r){var n=t.getProcessedProps().selectedItems;t.onSelect(n,r)})),H(A(t),"handleTableBlur",(function(){void 0!==t.state.focusedIndex&&(t.blurTimerID=setTimeout(t.clearFocus))})),H(A(t),"handleTableFocus",(function(){clearTimeout(t.blurTimerID)})),H(A(t),"handleShiftKeyDown",(function(e,r){var n=t.getProcessedProps(),o=n.data,a=n.selectedItems,i=t.state.focusedIndex;i===r&&a.has(o[i])||(a.has(o[e])?a.has(o[e])&&a.has(o[i])?t.onSelect(a.delete(o[i]),e):t.onSelect(a.add(o[i]),e):t.onSelect(a.add(o[e]),e))})),H(A(t),"handleKeyboardSearch",(function(e){var r=t.props.searchStrings;if(r&&!e.target.hasAttribute("contenteditable")&&"INPUT"!==e.target.nodeName&&"TEXTAREA"!==e.target.nodeName&&0!==e.which){t.searchTimeout&&clearTimeout(t.searchTimeout),t.searchString+=e.key,t.searchTimeout=setTimeout((function(){t.searchString=""}),1e3);var n=r.findIndex((function(e){return 0===e.trim().toLowerCase().indexOf(t.searchString)}));-1!==n&&t.setState({focusedIndex:n})}})),t.anchorIndex=0,t.searchString="",t.searchTimeout=null,t.previousIndex=0,t.blurTimerID=null,t}var n,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(r,t),n=r,(a=[{key:"componentDidMount",value:function(){document.addEventListener("keypress",this.handleKeyboardSearch)}},{key:"componentDidUpdate",value:function(e,t){t.focusedIndex!==this.state.focusedIndex&&this.props.onFocus&&this.props.onFocus(this.state.focusedIndex)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keypress",this.handleKeyboardSearch),clearTimeout(this.blurTimerID)}},{key:"render",value:function(){var t=this.props,r=t.className,n=t.data,a=this.state.focusedIndex,c=n[a];return o.a.createElement(P.Hotkeys,{configs:this.getHotkeyConfigs()},o.a.createElement(e,R({},this.props,{className:i()(r,"is-selectable"),focusedIndex:a,focusedItem:c,onRowClick:this.handleRowClick,onRowFocus:this.handleRowFocus,onTableBlur:this.handleTableBlur,onTableFocus:this.handleTableFocus})))}}])&&F(n.prototype,a),c&&F(n,c),r}(n.Component),H(t,"displayName","Selectable(".concat(a,")")),H(t,"propTypes",{className:S.a.string,data:S.a.array.isRequired,onFocus:S.a.func,onSelect:S.a.func.isRequired,searchStrings:S.a.array,selectedItems:S.a.oneOfType([S.a.array,k.a.set]),enableHotkeys:S.a.bool,hotkeyType:S.a.string}),H(t,"defaultProps",{selectedItems:new I.Set}),r};r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return b})),r.d(t,"e",(function(){return O})),r.d(t,"f",(function(){return v})),r.d(t,"g",(function(){return q}))},"yb06nJg3A+":function(e,t,r){"use strict";var n=r("JPcvh7FMFD"),o={listOf:function(e){return s(e,"List",n.List.isList)},mapOf:function(e,t){return u(e,t,"Map",n.Map.isMap)},orderedMapOf:function(e,t){return u(e,t,"OrderedMap",n.OrderedMap.isOrderedMap)},setOf:function(e){return s(e,"Set",n.Set.isSet)},orderedSetOf:function(e){return s(e,"OrderedSet",n.OrderedSet.isOrderedSet)},stackOf:function(e){return s(e,"Stack",n.Stack.isStack)},iterableOf:function(e){return s(e,"Iterable",n.Iterable.isIterable)},recordOf:function(e){return i((function(t,r,o,i,c){for(var s=arguments.length,l=Array(s>5?s-5:0),u=5;u<s;u++)l[u-5]=arguments[u];var d=t[r];if(!(d instanceof n.Record)){var f=a(d),p=i;return new Error("Invalid "+p+" `"+c+"` of type `"+f+"` supplied to `"+o+"`, expected an Immutable.js Record.")}for(var y in e){var h=e[y];if(h){var v=d.toObject(),b=h.apply(void 0,[v,y,o,i,c+"."+y].concat(l));if(b)return b}}}))},shape:f,contains:f,mapContains:function(e){return d(e,"Map",n.Map.isMap)},list:c("List",n.List.isList),map:c("Map",n.Map.isMap),orderedMap:c("OrderedMap",n.OrderedMap.isOrderedMap),set:c("Set",n.Set.isSet),orderedSet:c("OrderedSet",n.OrderedSet.isOrderedSet),stack:c("Stack",n.Stack.isStack),seq:c("Seq",n.Seq.isSeq),record:c("Record",(function(e){return e instanceof n.Record})),iterable:c("Iterable",n.Iterable.isIterable)};function a(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":e instanceof n.Iterable?"Immutable."+e.toSource().split(" ")[0]:t}function i(e){function t(t,r,n,o,a,i){for(var c=arguments.length,s=Array(c>6?c-6:0),l=6;l<c;l++)s[l-6]=arguments[l];if(i=i||n,o=o||"<<anonymous>>",null!=r[n])return e.apply(void 0,[r,n,o,a,i].concat(s));var u=a;return t?new Error("Required "+u+" `"+i+"` was not specified in `"+o+"`."):void 0}var r=t.bind(null,!1);return r.isRequired=t.bind(null,!0),r}function c(e,t){return i((function(r,n,o,i,c){var s=r[n];if(!t(s)){var l=a(s);return new Error("Invalid "+i+" `"+c+"` of type `"+l+"` supplied to `"+o+"`, expected `"+e+"`.")}return null}))}function s(e,t,r){return i((function(n,o,i,c,s){for(var l=arguments.length,u=Array(l>5?l-5:0),d=5;d<l;d++)u[d-5]=arguments[d];var f=n[o];if(!r(f)){var p=c,y=a(f);return new Error("Invalid "+p+" `"+s+"` of type `"+y+"` supplied to `"+i+"`, expected an Immutable.js "+t+".")}if("function"!==typeof e)return new Error("Invalid typeChecker supplied to `"+i+"` for propType `"+s+"`, expected a function.");for(var h=f.toArray(),v=0,b=h.length;v<b;v++){var m=e.apply(void 0,[h,v,i,c,s+"["+v+"]"].concat(u));if(m instanceof Error)return m}}))}function l(e){return i((function(t,r,n,o,a){for(var i=arguments.length,c=Array(i>5?i-5:0),s=5;s<i;s++)c[s-5]=arguments[s];var l=t[r];if("function"!==typeof e)return new Error("Invalid keysTypeChecker (optional second argument) supplied to `"+n+"` for propType `"+a+"`, expected a function.");for(var u=l.keySeq().toArray(),d=0,f=u.length;d<f;d++){var p=e.apply(void 0,[u,d,n,o,a+" -> key("+u[d]+")"].concat(c));if(p instanceof Error)return p}}))}function u(e,t,r,n){return i((function(){for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return s(e,r,n).apply(void 0,a)||t&&l(t).apply(void 0,a)}))}function d(e){var t=void 0===arguments[1]?"Iterable":arguments[1],r=void 0===arguments[2]?n.Iterable.isIterable:arguments[2];function o(n,o,i,c,s){for(var l=arguments.length,u=Array(l>5?l-5:0),d=5;d<l;d++)u[d-5]=arguments[d];var f=n[o];if(!r(f)){var p=a(f),y=c;return new Error("Invalid "+y+" `"+s+"` of type `"+p+"` supplied to `"+i+"`, expected an Immutable.js "+t+".")}var h=f.toObject();for(var v in e){var b=e[v];if(b){var m=b.apply(void 0,[h,v,i,c,s+"."+v].concat(u));if(m)return m}}}return i(o)}function f(e){return d(e)}e.exports=o}}]);