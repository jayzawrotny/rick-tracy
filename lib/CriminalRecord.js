"use strict";function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}();Object.defineProperty(exports,"__esModule",{value:!0});var CriminalRecord=function(){function e(){_classCallCheck(this,e),this.cabinet=[]}return _createClass(e,[{key:"has",value:function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),t=1;r>t;t++)n[t-1]=arguments[t];return this.cabinet.some(function(r){return r[0]===e&&r[1]===n.join(":")})}},{key:"store",value:function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),t=1;r>t;t++)n[t-1]=arguments[t];return this.cabinet.push([e,n.join(":")]),this}}]),e}();exports["default"]=CriminalRecord;