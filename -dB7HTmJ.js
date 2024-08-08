import{i as t,a as e,p as i,k as r,_ as s,r as n,h as o,e as a,n as c,t as h}from"./BDVm1clO.js";import"./BaOM46qo.js";import"./u6TM3blr.js";import{d}from"./YQcTPW3M.js";import{L as p}from"./DdTVOPIo.js";import{m as l,t as u,g as m,a as f}from"./BiF6hvvS.js";import"./C27gS93T.js";import{Q as g}from"./DuymJoSJ.js";function b(t){return new Promise((function(e){setTimeout(e,t)}))}function v(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function w(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?v(Object(i),!0).forEach((function(e){k(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function y(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function M(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,y(r.key),r)}}function k(t,e,i){return(e=y(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function S(t){return function(t){if(Array.isArray(t))return _(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return _(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var A="undefined"!=typeof window&&void 0!==window.document,B=A?window:{},O=!(!A||!B.document.documentElement)&&"ontouchstart"in B.document.documentElement,j=!!A&&"PointerEvent"in B,C="cropper",N="all",T="crop",$="move",P="zoom",z="e",E="w",D="s",R="n",F="ne",W="nw",I="se",L="sw",q="".concat(C,"-crop"),G="".concat(C,"-disabled"),U="".concat(C,"-hidden"),V="".concat(C,"-hide"),H="".concat(C,"-invisible"),Q="".concat(C,"-modal"),X="".concat(C,"-move"),Y="".concat(C,"Action"),Z="".concat(C,"Preview"),K="crop",J="move",tt="none",et="crop",it="cropend",rt="cropmove",st="cropstart",nt="dblclick",ot=j?"pointerdown":O?"touchstart":"mousedown",at=j?"pointermove":O?"touchmove":"mousemove",ct=j?"pointerup pointercancel":O?"touchend touchcancel":"mouseup",ht="ready",dt="resize",pt="wheel",lt="zoom",ut="image/jpeg",mt=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,ft=/^data:/,gt=/^data:image\/jpeg;base64,/,bt=/^img|canvas$/i,vt={viewMode:0,dragMode:K,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},wt=Number.isNaN||B.isNaN;function yt(t){return"number"==typeof t&&!wt(t)}var xt=function(t){return t>0&&t<1/0};function Mt(t){return void 0===t}function kt(t){return"object"===x(t)&&null!==t}var St=Object.prototype.hasOwnProperty;function _t(t){if(!kt(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&St.call(i,"isPrototypeOf")}catch(t){return!1}}function At(t){return"function"==typeof t}var Bt=Array.prototype.slice;function Ot(t){return Array.from?Array.from(t):Bt.call(t)}function jt(t,e){return t&&At(e)&&(Array.isArray(t)||yt(t.length)?Ot(t).forEach((function(i,r){e.call(t,i,r,t)})):kt(t)&&Object.keys(t).forEach((function(i){e.call(t,t[i],i,t)}))),t}var Ct=Object.assign||function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r];return kt(t)&&i.length>0&&i.forEach((function(e){kt(e)&&Object.keys(e).forEach((function(i){t[i]=e[i]}))})),t},Nt=/\.\d*(?:0|9){12}\d*$/;function Tt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return Nt.test(t)?Math.round(t*e)/e:t}var $t=/^width|height|left|top|marginLeft|marginTop$/;function Pt(t,e){var i=t.style;jt(e,(function(t,e){$t.test(e)&&yt(t)&&(t="".concat(t,"px")),i[e]=t}))}function zt(t,e){if(e)if(yt(t.length))jt(t,(function(t){zt(t,e)}));else if(t.classList)t.classList.add(e);else{var i=t.className.trim();i?i.indexOf(e)<0&&(t.className="".concat(i," ").concat(e)):t.className=e}}function Et(t,e){e&&(yt(t.length)?jt(t,(function(t){Et(t,e)})):t.classList?t.classList.remove(e):t.className.indexOf(e)>=0&&(t.className=t.className.replace(e,"")))}function Dt(t,e,i){e&&(yt(t.length)?jt(t,(function(t){Dt(t,e,i)})):i?zt(t,e):Et(t,e))}var Rt=/([a-z\d])([A-Z])/g;function Ft(t){return t.replace(Rt,"$1-$2").toLowerCase()}function Wt(t,e){return kt(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-".concat(Ft(e)))}function It(t,e,i){kt(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-".concat(Ft(e)),i)}var Lt=/\s\s*/,qt=function(){var t=!1;if(A){var e=!1,i=function(){},r=Object.defineProperty({},"once",{get:function(){return t=!0,e},set:function(t){e=t}});B.addEventListener("test",i,r),B.removeEventListener("test",i,r)}return t}();function Gt(t,e,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=i;e.trim().split(Lt).forEach((function(e){if(!qt){var n=t.listeners;n&&n[e]&&n[e][i]&&(s=n[e][i],delete n[e][i],0===Object.keys(n[e]).length&&delete n[e],0===Object.keys(n).length&&delete t.listeners)}t.removeEventListener(e,s,r)}))}function Ut(t,e,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=i;e.trim().split(Lt).forEach((function(e){if(r.once&&!qt){var n=t.listeners,o=void 0===n?{}:n;s=function(){delete o[e][i],t.removeEventListener(e,s,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];i.apply(t,a)},o[e]||(o[e]={}),o[e][i]&&t.removeEventListener(e,o[e][i],r),o[e][i]=s,t.listeners=o}t.addEventListener(e,s,r)}))}function Vt(t,e,i){var r;return At(Event)&&At(CustomEvent)?r=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0}):(r=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i),t.dispatchEvent(r)}function Ht(t){var e=t.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}var Qt=B.location,Xt=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function Yt(t){var e=t.match(Xt);return null!==e&&(e[1]!==Qt.protocol||e[2]!==Qt.hostname||e[3]!==Qt.port)}function Zt(t){var e="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+e}function Kt(t){var e=t.rotate,i=t.scaleX,r=t.scaleY,s=t.translateX,n=t.translateY,o=[];yt(s)&&0!==s&&o.push("translateX(".concat(s,"px)")),yt(n)&&0!==n&&o.push("translateY(".concat(n,"px)")),yt(e)&&0!==e&&o.push("rotate(".concat(e,"deg)")),yt(i)&&1!==i&&o.push("scaleX(".concat(i,")")),yt(r)&&1!==r&&o.push("scaleY(".concat(r,")"));var a=o.length?o.join(" "):"none";return{WebkitTransform:a,msTransform:a,transform:a}}function Jt(t,e){var i=t.pageX,r=t.pageY,s={endX:i,endY:r};return e?s:w({startX:i,startY:r},s)}function te(t){var e=t.aspectRatio,i=t.height,r=t.width,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"contain",n=xt(r),o=xt(i);if(n&&o){var a=i*e;"contain"===s&&a>r||"cover"===s&&a<r?i=r/e:r=i*e}else n?i=r/e:o&&(r=i*e);return{width:r,height:i}}var ee=String.fromCharCode;var ie=/^data:.*,/;function re(t){var e,i=new DataView(t);try{var r,s,n;if(255===i.getUint8(0)&&216===i.getUint8(1))for(var o=i.byteLength,a=2;a+1<o;){if(255===i.getUint8(a)&&225===i.getUint8(a+1)){s=a;break}a+=1}if(s){var c=s+10;if("Exif"===function(t,e,i){var r="";i+=e;for(var s=e;s<i;s+=1)r+=ee(t.getUint8(s));return r}(i,s+4,4)){var h=i.getUint16(c);if(((r=18761===h)||19789===h)&&42===i.getUint16(c+2,r)){var d=i.getUint32(c+4,r);d>=8&&(n=c+d)}}}if(n){var p,l,u=i.getUint16(n,r);for(l=0;l<u;l+=1)if(p=n+12*l+2,274===i.getUint16(p,r)){p+=8,e=i.getUint16(p,r),i.setUint16(p,1,r);break}}}catch(t){e=1}return e}var se={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,r=this.cropper,s=Number(e.minContainerWidth),n=Number(e.minContainerHeight);zt(r,U),Et(t,U);var o={width:Math.max(i.offsetWidth,s>=0?s:200),height:Math.max(i.offsetHeight,n>=0?n:100)};this.containerData=o,Pt(r,{width:o.width,height:o.height}),zt(t,U),Et(r,U)},initCanvas:function(){var t=this.containerData,e=this.imageData,i=this.options.viewMode,r=Math.abs(e.rotate)%180==90,s=r?e.naturalHeight:e.naturalWidth,n=r?e.naturalWidth:e.naturalHeight,o=s/n,a=t.width,c=t.height;t.height*o>t.width?3===i?a=t.height*o:c=t.width/o:3===i?c=t.width/o:a=t.height*o;var h={aspectRatio:o,naturalWidth:s,naturalHeight:n,width:a,height:c};this.canvasData=h,this.limited=1===i||2===i,this.limitCanvas(!0,!0),h.width=Math.min(Math.max(h.width,h.minWidth),h.maxWidth),h.height=Math.min(Math.max(h.height,h.minHeight),h.maxHeight),h.left=(t.width-h.width)/2,h.top=(t.height-h.height)/2,h.oldLeft=h.left,h.oldTop=h.top,this.initialCanvasData=Ct({},h)},limitCanvas:function(t,e){var i=this.options,r=this.containerData,s=this.canvasData,n=this.cropBoxData,o=i.viewMode,a=s.aspectRatio,c=this.cropped&&n;if(t){var h=Number(i.minCanvasWidth)||0,d=Number(i.minCanvasHeight)||0;o>1?(h=Math.max(h,r.width),d=Math.max(d,r.height),3===o&&(d*a>h?h=d*a:d=h/a)):o>0&&(h?h=Math.max(h,c?n.width:0):d?d=Math.max(d,c?n.height:0):c&&(h=n.width,(d=n.height)*a>h?h=d*a:d=h/a));var p=te({aspectRatio:a,width:h,height:d});h=p.width,d=p.height,s.minWidth=h,s.minHeight=d,s.maxWidth=1/0,s.maxHeight=1/0}if(e)if(o>(c?0:1)){var l=r.width-s.width,u=r.height-s.height;s.minLeft=Math.min(0,l),s.minTop=Math.min(0,u),s.maxLeft=Math.max(0,l),s.maxTop=Math.max(0,u),c&&this.limited&&(s.minLeft=Math.min(n.left,n.left+(n.width-s.width)),s.minTop=Math.min(n.top,n.top+(n.height-s.height)),s.maxLeft=n.left,s.maxTop=n.top,2===o&&(s.width>=r.width&&(s.minLeft=Math.min(0,l),s.maxLeft=Math.max(0,l)),s.height>=r.height&&(s.minTop=Math.min(0,u),s.maxTop=Math.max(0,u))))}else s.minLeft=-s.width,s.minTop=-s.height,s.maxLeft=r.width,s.maxTop=r.height},renderCanvas:function(t,e){var i=this.canvasData,r=this.imageData;if(e){var s=function(t){var e=t.width,i=t.height,r=t.degree;if(90==(r=Math.abs(r)%180))return{width:i,height:e};var s=r%90*Math.PI/180,n=Math.sin(s),o=Math.cos(s),a=e*o+i*n,c=e*n+i*o;return r>90?{width:c,height:a}:{width:a,height:c}}({width:r.naturalWidth*Math.abs(r.scaleX||1),height:r.naturalHeight*Math.abs(r.scaleY||1),degree:r.rotate||0}),n=s.width,o=s.height,a=i.width*(n/i.naturalWidth),c=i.height*(o/i.naturalHeight);i.left-=(a-i.width)/2,i.top-=(c-i.height)/2,i.width=a,i.height=c,i.aspectRatio=n/o,i.naturalWidth=n,i.naturalHeight=o,this.limitCanvas(!0,!1)}(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCanvas(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,Pt(this.canvas,Ct({width:i.width,height:i.height},Kt({translateX:i.left,translateY:i.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,i=this.imageData,r=i.naturalWidth*(e.width/e.naturalWidth),s=i.naturalHeight*(e.height/e.naturalHeight);Ct(i,{width:r,height:s,left:(e.width-r)/2,top:(e.height-s)/2}),Pt(this.image,Ct({width:i.width,height:i.height},Kt(Ct({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio||t.initialAspectRatio,r=Number(t.autoCropArea)||.8,s={width:e.width,height:e.height};i&&(e.height*i>e.width?s.height=s.width/i:s.width=s.height*i),this.cropBoxData=s,this.limitCropBox(!0,!0),s.width=Math.min(Math.max(s.width,s.minWidth),s.maxWidth),s.height=Math.min(Math.max(s.height,s.minHeight),s.maxHeight),s.width=Math.max(s.minWidth,s.width*r),s.height=Math.max(s.minHeight,s.height*r),s.left=e.left+(e.width-s.width)/2,s.top=e.top+(e.height-s.height)/2,s.oldLeft=s.left,s.oldTop=s.top,this.initialCropBoxData=Ct({},s)},limitCropBox:function(t,e){var i=this.options,r=this.containerData,s=this.canvasData,n=this.cropBoxData,o=this.limited,a=i.aspectRatio;if(t){var c=Number(i.minCropBoxWidth)||0,h=Number(i.minCropBoxHeight)||0,d=o?Math.min(r.width,s.width,s.width+s.left,r.width-s.left):r.width,p=o?Math.min(r.height,s.height,s.height+s.top,r.height-s.top):r.height;c=Math.min(c,r.width),h=Math.min(h,r.height),a&&(c&&h?h*a>c?h=c/a:c=h*a:c?h=c/a:h&&(c=h*a),p*a>d?p=d/a:d=p*a),n.minWidth=Math.min(c,d),n.minHeight=Math.min(h,p),n.maxWidth=d,n.maxHeight=p}e&&(o?(n.minLeft=Math.max(0,s.left),n.minTop=Math.max(0,s.top),n.maxLeft=Math.min(r.width,s.left+s.width)-n.width,n.maxTop=Math.min(r.height,s.top+s.height)-n.height):(n.minLeft=0,n.minTop=0,n.maxLeft=r.width-n.width,n.maxTop=r.height-n.height))},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&It(this.face,Y,i.width>=e.width&&i.height>=e.height?$:N),Pt(this.cropBox,Ct({width:i.width,height:i.height},Kt({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),Vt(this.element,et,this.getData())}},ne={initPreview:function(){var t=this.element,e=this.crossOrigin,i=this.options.preview,r=e?this.crossOriginUrl:this.url,s=t.alt||"The image to preview",n=document.createElement("img");if(e&&(n.crossOrigin=e),n.src=r,n.alt=s,this.viewBox.appendChild(n),this.viewBoxImage=n,i){var o=i;"string"==typeof i?o=t.ownerDocument.querySelectorAll(i):i.querySelector&&(o=[i]),this.previews=o,jt(o,(function(t){var i=document.createElement("img");It(t,Z,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),e&&(i.crossOrigin=e),i.src=r,i.alt=s,i.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(i)}))}},resetPreview:function(){jt(this.previews,(function(t){var e=Wt(t,Z);Pt(t,{width:e.width,height:e.height}),t.innerHTML=e.html,function(t,e){if(kt(t[e]))try{delete t[e]}catch(i){t[e]=void 0}else if(t.dataset)try{delete t.dataset[e]}catch(i){t.dataset[e]=void 0}else t.removeAttribute("data-".concat(Ft(e)))}(t,Z)}))},preview:function(){var t=this.imageData,e=this.canvasData,i=this.cropBoxData,r=i.width,s=i.height,n=t.width,o=t.height,a=i.left-e.left-t.left,c=i.top-e.top-t.top;this.cropped&&!this.disabled&&(Pt(this.viewBoxImage,Ct({width:n,height:o},Kt(Ct({translateX:-a,translateY:-c},t)))),jt(this.previews,(function(e){var i=Wt(e,Z),h=i.width,d=i.height,p=h,l=d,u=1;r&&(l=s*(u=h/r)),s&&l>d&&(p=r*(u=d/s),l=d),Pt(e,{width:p,height:l}),Pt(e.getElementsByTagName("img")[0],Ct({width:n*u,height:o*u},Kt(Ct({translateX:-a*u,translateY:-c*u},t))))})))}},oe={bind:function(){var t=this.element,e=this.options,i=this.cropper;At(e.cropstart)&&Ut(t,st,e.cropstart),At(e.cropmove)&&Ut(t,rt,e.cropmove),At(e.cropend)&&Ut(t,it,e.cropend),At(e.crop)&&Ut(t,et,e.crop),At(e.zoom)&&Ut(t,lt,e.zoom),Ut(i,ot,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&Ut(i,pt,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&Ut(i,nt,this.onDblclick=this.dblclick.bind(this)),Ut(t.ownerDocument,at,this.onCropMove=this.cropMove.bind(this)),Ut(t.ownerDocument,ct,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&Ut(window,dt,this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;At(e.cropstart)&&Gt(t,st,e.cropstart),At(e.cropmove)&&Gt(t,rt,e.cropmove),At(e.cropend)&&Gt(t,it,e.cropend),At(e.crop)&&Gt(t,et,e.crop),At(e.zoom)&&Gt(t,lt,e.zoom),Gt(i,ot,this.onCropStart),e.zoomable&&e.zoomOnWheel&&Gt(i,pt,this.onWheel,{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&Gt(i,nt,this.onDblclick),Gt(t.ownerDocument,at,this.onCropMove),Gt(t.ownerDocument,ct,this.onCropEnd),e.responsive&&Gt(window,dt,this.onResize)}},ae={resize:function(){if(!this.disabled){var t,e,i=this.options,r=this.container,s=this.containerData,n=r.offsetWidth/s.width,o=r.offsetHeight/s.height,a=Math.abs(n-1)>Math.abs(o-1)?n:o;if(1!==a)i.restore&&(t=this.getCanvasData(),e=this.getCropBoxData()),this.render(),i.restore&&(this.setCanvasData(jt(t,(function(e,i){t[i]=e*a}))),this.setCropBoxData(jt(e,(function(t,i){e[i]=t*a}))))}},dblclick:function(){var t,e;this.disabled||this.options.dragMode===tt||this.setDragMode((t=this.dragBox,e=q,(t.classList?t.classList.contains(e):t.className.indexOf(e)>-1)?J:K))},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,r=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout((function(){e.wheeling=!1}),50),t.deltaY?r=t.deltaY>0?1:-1:t.wheelDelta?r=-t.wheelDelta/120:t.detail&&(r=t.detail>0?1:-1),this.zoom(-r*i,t)))},cropStart:function(t){var e=t.buttons,i=t.button;if(!(this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(yt(e)&&1!==e||yt(i)&&0!==i||t.ctrlKey))){var r,s=this.options,n=this.pointers;t.changedTouches?jt(t.changedTouches,(function(t){n[t.identifier]=Jt(t)})):n[t.pointerId||0]=Jt(t),r=Object.keys(n).length>1&&s.zoomable&&s.zoomOnTouch?P:Wt(t.target,Y),mt.test(r)&&!1!==Vt(this.element,st,{originalEvent:t,action:r})&&(t.preventDefault(),this.action=r,this.cropping=!1,r===T&&(this.cropping=!0,zt(this.dragBox,Q)))}},cropMove:function(t){var e=this.action;if(!this.disabled&&e){var i=this.pointers;t.preventDefault(),!1!==Vt(this.element,rt,{originalEvent:t,action:e})&&(t.changedTouches?jt(t.changedTouches,(function(t){Ct(i[t.identifier]||{},Jt(t,!0))})):Ct(i[t.pointerId||0]||{},Jt(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var e=this.action,i=this.pointers;t.changedTouches?jt(t.changedTouches,(function(t){delete i[t.identifier]})):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,Dt(this.dragBox,Q,this.cropped&&this.options.modal)),Vt(this.element,it,{originalEvent:t,action:e}))}}},ce={change:function(t){var e,i=this.options,r=this.canvasData,s=this.containerData,n=this.cropBoxData,o=this.pointers,a=this.action,c=i.aspectRatio,h=n.left,d=n.top,p=n.width,l=n.height,u=h+p,m=d+l,f=0,g=0,b=s.width,v=s.height,y=!0;!c&&t.shiftKey&&(c=p&&l?p/l:1),this.limited&&(f=n.minLeft,g=n.minTop,b=f+Math.min(s.width,r.width,r.left+r.width),v=g+Math.min(s.height,r.height,r.top+r.height));var x=o[Object.keys(o)[0]],M={x:x.endX-x.startX,y:x.endY-x.startY},k=function(t){switch(t){case z:u+M.x>b&&(M.x=b-u);break;case E:h+M.x<f&&(M.x=f-h);break;case R:d+M.y<g&&(M.y=g-d);break;case D:m+M.y>v&&(M.y=v-m)}};switch(a){case N:h+=M.x,d+=M.y;break;case z:if(M.x>=0&&(u>=b||c&&(d<=g||m>=v))){y=!1;break}k(z),(p+=M.x)<0&&(a=E,h-=p=-p),c&&(l=p/c,d+=(n.height-l)/2);break;case R:if(M.y<=0&&(d<=g||c&&(h<=f||u>=b))){y=!1;break}k(R),l-=M.y,d+=M.y,l<0&&(a=D,d-=l=-l),c&&(p=l*c,h+=(n.width-p)/2);break;case E:if(M.x<=0&&(h<=f||c&&(d<=g||m>=v))){y=!1;break}k(E),p-=M.x,h+=M.x,p<0&&(a=z,h-=p=-p),c&&(l=p/c,d+=(n.height-l)/2);break;case D:if(M.y>=0&&(m>=v||c&&(h<=f||u>=b))){y=!1;break}k(D),(l+=M.y)<0&&(a=R,d-=l=-l),c&&(p=l*c,h+=(n.width-p)/2);break;case F:if(c){if(M.y<=0&&(d<=g||u>=b)){y=!1;break}k(R),l-=M.y,d+=M.y,p=l*c}else k(R),k(z),M.x>=0?u<b?p+=M.x:M.y<=0&&d<=g&&(y=!1):p+=M.x,M.y<=0?d>g&&(l-=M.y,d+=M.y):(l-=M.y,d+=M.y);p<0&&l<0?(a=L,d-=l=-l,h-=p=-p):p<0?(a=W,h-=p=-p):l<0&&(a=I,d-=l=-l);break;case W:if(c){if(M.y<=0&&(d<=g||h<=f)){y=!1;break}k(R),l-=M.y,d+=M.y,p=l*c,h+=n.width-p}else k(R),k(E),M.x<=0?h>f?(p-=M.x,h+=M.x):M.y<=0&&d<=g&&(y=!1):(p-=M.x,h+=M.x),M.y<=0?d>g&&(l-=M.y,d+=M.y):(l-=M.y,d+=M.y);p<0&&l<0?(a=I,d-=l=-l,h-=p=-p):p<0?(a=F,h-=p=-p):l<0&&(a=L,d-=l=-l);break;case L:if(c){if(M.x<=0&&(h<=f||m>=v)){y=!1;break}k(E),p-=M.x,h+=M.x,l=p/c}else k(D),k(E),M.x<=0?h>f?(p-=M.x,h+=M.x):M.y>=0&&m>=v&&(y=!1):(p-=M.x,h+=M.x),M.y>=0?m<v&&(l+=M.y):l+=M.y;p<0&&l<0?(a=F,d-=l=-l,h-=p=-p):p<0?(a=I,h-=p=-p):l<0&&(a=W,d-=l=-l);break;case I:if(c){if(M.x>=0&&(u>=b||m>=v)){y=!1;break}k(z),l=(p+=M.x)/c}else k(D),k(z),M.x>=0?u<b?p+=M.x:M.y>=0&&m>=v&&(y=!1):p+=M.x,M.y>=0?m<v&&(l+=M.y):l+=M.y;p<0&&l<0?(a=W,d-=l=-l,h-=p=-p):p<0?(a=L,h-=p=-p):l<0&&(a=F,d-=l=-l);break;case $:this.move(M.x,M.y),y=!1;break;case P:this.zoom(function(t){var e=w({},t),i=0;return jt(t,(function(t,r){delete e[r],jt(e,(function(e){var r=Math.abs(t.startX-e.startX),s=Math.abs(t.startY-e.startY),n=Math.abs(t.endX-e.endX),o=Math.abs(t.endY-e.endY),a=Math.sqrt(r*r+s*s),c=(Math.sqrt(n*n+o*o)-a)/a;Math.abs(c)>Math.abs(i)&&(i=c)}))})),i}(o),t),y=!1;break;case T:if(!M.x||!M.y){y=!1;break}e=Ht(this.cropper),h=x.startX-e.left,d=x.startY-e.top,p=n.minWidth,l=n.minHeight,M.x>0?a=M.y>0?I:F:M.x<0&&(h-=p,a=M.y>0?L:W),M.y<0&&(d-=l),this.cropped||(Et(this.cropBox,U),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}y&&(n.width=p,n.height=l,n.left=h,n.top=d,this.action=a,this.renderCropBox()),jt(o,(function(t){t.startX=t.endX,t.startY=t.endY}))}},he={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&zt(this.dragBox,Q),Et(this.cropBox,U),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=Ct({},this.initialImageData),this.canvasData=Ct({},this.initialCanvasData),this.cropBoxData=Ct({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(Ct(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),Et(this.dragBox,Q),zt(this.cropBox,U)),this},replace:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&t&&(this.isImg&&(this.element.src=t),e?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,jt(this.previews,(function(e){e.getElementsByTagName("img")[0].src=t})))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,Et(this.cropper,G)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,zt(this.cropper,G)),this},destroy:function(){var t=this.element;return t[C]?(t[C]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),this):this},move:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,r=i.left,s=i.top;return this.moveTo(Mt(t)?t:r+Number(t),Mt(e)?e:s+Number(e))},moveTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,r=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.movable&&(yt(t)&&(i.left=t,r=!0),yt(e)&&(i.top=e,r=!0),r&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(i.width*t/i.naturalWidth,null,e)},zoomTo:function(t,e,i){var r=this.options,s=this.canvasData,n=s.width,o=s.height,a=s.naturalWidth,c=s.naturalHeight;if((t=Number(t))>=0&&this.ready&&!this.disabled&&r.zoomable){var h=a*t,d=c*t;if(!1===Vt(this.element,lt,{ratio:t,oldRatio:n/a,originalEvent:i}))return this;if(i){var p=this.pointers,l=Ht(this.cropper),u=p&&Object.keys(p).length?function(t){var e=0,i=0,r=0;return jt(t,(function(t){var s=t.startX,n=t.startY;e+=s,i+=n,r+=1})),{pageX:e/=r,pageY:i/=r}}(p):{pageX:i.pageX,pageY:i.pageY};s.left-=(h-n)*((u.pageX-l.left-s.left)/n),s.top-=(d-o)*((u.pageY-l.top-s.top)/o)}else _t(e)&&yt(e.x)&&yt(e.y)?(s.left-=(h-n)*((e.x-s.left)/n),s.top-=(d-o)*((e.y-s.top)/o)):(s.left-=(h-n)/2,s.top-=(d-o)/2);s.width=h,s.height=d,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return yt(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,yt(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(yt(e)?e:1,t)},scale:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.imageData,r=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.scalable&&(yt(t)&&(i.scaleX=t,r=!0),yt(e)&&(i.scaleY=e,r=!0),r&&this.renderCanvas(!0,!0)),this},getData:function(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.options,r=this.imageData,s=this.canvasData,n=this.cropBoxData;if(this.ready&&this.cropped){t={x:n.left-s.left,y:n.top-s.top,width:n.width,height:n.height};var o=r.width/r.naturalWidth;if(jt(t,(function(e,i){t[i]=e/o})),e){var a=Math.round(t.y+t.height),c=Math.round(t.x+t.width);t.x=Math.round(t.x),t.y=Math.round(t.y),t.width=c-t.x,t.height=a-t.y}}else t={x:0,y:0,width:0,height:0};return i.rotatable&&(t.rotate=r.rotate||0),i.scalable&&(t.scaleX=r.scaleX||1,t.scaleY=r.scaleY||1),t},setData:function(t){var e=this.options,i=this.imageData,r=this.canvasData,s={};if(this.ready&&!this.disabled&&_t(t)){var n=!1;e.rotatable&&yt(t.rotate)&&t.rotate!==i.rotate&&(i.rotate=t.rotate,n=!0),e.scalable&&(yt(t.scaleX)&&t.scaleX!==i.scaleX&&(i.scaleX=t.scaleX,n=!0),yt(t.scaleY)&&t.scaleY!==i.scaleY&&(i.scaleY=t.scaleY,n=!0)),n&&this.renderCanvas(!0,!0);var o=i.width/i.naturalWidth;yt(t.x)&&(s.left=t.x*o+r.left),yt(t.y)&&(s.top=t.y*o+r.top),yt(t.width)&&(s.width=t.width*o),yt(t.height)&&(s.height=t.height*o),this.setCropBoxData(s)}return this},getContainerData:function(){return this.ready?Ct({},this.containerData):{}},getImageData:function(){return this.sized?Ct({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,e={};return this.ready&&jt(["left","top","width","height","naturalWidth","naturalHeight"],(function(i){e[i]=t[i]})),e},setCanvasData:function(t){var e=this.canvasData,i=e.aspectRatio;return this.ready&&!this.disabled&&_t(t)&&(yt(t.left)&&(e.left=t.left),yt(t.top)&&(e.top=t.top),yt(t.width)?(e.width=t.width,e.height=t.width/i):yt(t.height)&&(e.height=t.height,e.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,e=this.cropBoxData;return this.ready&&this.cropped&&(t={left:e.left,top:e.top,width:e.width,height:e.height}),t||{}},setCropBoxData:function(t){var e,i,r=this.cropBoxData,s=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&_t(t)&&(yt(t.left)&&(r.left=t.left),yt(t.top)&&(r.top=t.top),yt(t.width)&&t.width!==r.width&&(e=!0,r.width=t.width),yt(t.height)&&t.height!==r.height&&(i=!0,r.height=t.height),s&&(e?r.height=r.width/s:i&&(r.width=r.height*s)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var e=this.canvasData,i=function(t,e,i,r){var s=e.aspectRatio,n=e.naturalWidth,o=e.naturalHeight,a=e.rotate,c=void 0===a?0:a,h=e.scaleX,d=void 0===h?1:h,p=e.scaleY,l=void 0===p?1:p,u=i.aspectRatio,m=i.naturalWidth,f=i.naturalHeight,g=r.fillColor,b=void 0===g?"transparent":g,v=r.imageSmoothingEnabled,w=void 0===v||v,y=r.imageSmoothingQuality,x=void 0===y?"low":y,M=r.maxWidth,k=void 0===M?1/0:M,_=r.maxHeight,A=void 0===_?1/0:_,B=r.minWidth,O=void 0===B?0:B,j=r.minHeight,C=void 0===j?0:j,N=document.createElement("canvas"),T=N.getContext("2d"),$=te({aspectRatio:u,width:k,height:A}),P=te({aspectRatio:u,width:O,height:C},"cover"),z=Math.min($.width,Math.max(P.width,m)),E=Math.min($.height,Math.max(P.height,f)),D=te({aspectRatio:s,width:k,height:A}),R=te({aspectRatio:s,width:O,height:C},"cover"),F=Math.min(D.width,Math.max(R.width,n)),W=Math.min(D.height,Math.max(R.height,o)),I=[-F/2,-W/2,F,W];return N.width=Tt(z),N.height=Tt(E),T.fillStyle=b,T.fillRect(0,0,z,E),T.save(),T.translate(z/2,E/2),T.rotate(c*Math.PI/180),T.scale(d,l),T.imageSmoothingEnabled=w,T.imageSmoothingQuality=x,T.drawImage.apply(T,[t].concat(S(I.map((function(t){return Math.floor(Tt(t))}))))),T.restore(),N}(this.image,this.imageData,e,t);if(!this.cropped)return i;var r=this.getData(t.rounded),s=r.x,n=r.y,o=r.width,a=r.height,c=i.width/Math.floor(e.naturalWidth);1!==c&&(s*=c,n*=c,o*=c,a*=c);var h=o/a,d=te({aspectRatio:h,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),p=te({aspectRatio:h,width:t.minWidth||0,height:t.minHeight||0},"cover"),l=te({aspectRatio:h,width:t.width||(1!==c?i.width:o),height:t.height||(1!==c?i.height:a)}),u=l.width,m=l.height;u=Math.min(d.width,Math.max(p.width,u)),m=Math.min(d.height,Math.max(p.height,m));var f=document.createElement("canvas"),g=f.getContext("2d");f.width=Tt(u),f.height=Tt(m),g.fillStyle=t.fillColor||"transparent",g.fillRect(0,0,u,m);var b=t.imageSmoothingEnabled,v=void 0===b||b,w=t.imageSmoothingQuality;g.imageSmoothingEnabled=v,w&&(g.imageSmoothingQuality=w);var y,x,M,k,_,A,B=i.width,O=i.height,j=s,C=n;j<=-o||j>B?(j=0,y=0,M=0,_=0):j<=0?(M=-j,j=0,_=y=Math.min(B,o+j)):j<=B&&(M=0,_=y=Math.min(o,B-j)),y<=0||C<=-a||C>O?(C=0,x=0,k=0,A=0):C<=0?(k=-C,C=0,A=x=Math.min(O,a+C)):C<=O&&(k=0,A=x=Math.min(a,O-C));var N=[j,C,y,x];if(_>0&&A>0){var T=u/o;N.push(M*T,k*T,_*T,A*T)}return g.drawImage.apply(g,[i].concat(S(N.map((function(t){return Math.floor(Tt(t))}))))),f},setAspectRatio:function(t){var e=this.options;return this.disabled||Mt(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e=this.options,i=this.dragBox,r=this.face;if(this.ready&&!this.disabled){var s=t===K,n=e.movable&&t===J;t=s||n?t:tt,e.dragMode=t,It(i,Y,t),Dt(i,q,s),Dt(i,X,n),e.cropBoxMovable||(It(r,Y,t),Dt(r,q,s),Dt(r,X,n))}return this}},de=B.Cropper,pe=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!e||!bt.test(e.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=e,this.options=Ct({},vt,_t(i)&&i),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return e=t,i=[{key:"init",value:function(){var t,e=this.element,i=e.tagName.toLowerCase();if(!e[C]){if(e[C]=this,"img"===i){if(this.isImg=!0,t=e.getAttribute("src")||"",this.originalUrl=t,!t)return;t=e.src}else"canvas"===i&&window.HTMLCanvasElement&&(t=e.toDataURL());this.load(t)}}},{key:"load",value:function(t){var e=this;if(t){this.url=t,this.imageData={};var i=this.element,r=this.options;if(r.rotatable||r.scalable||(r.checkOrientation=!1),r.checkOrientation&&window.ArrayBuffer)if(ft.test(t))gt.test(t)?this.read((s=t.replace(ie,""),n=atob(s),o=new ArrayBuffer(n.length),jt(a=new Uint8Array(o),(function(t,e){a[e]=n.charCodeAt(e)})),o)):this.clone();else{var s,n,o,a,c=new XMLHttpRequest,h=this.clone.bind(this);this.reloading=!0,this.xhr=c,c.onabort=h,c.onerror=h,c.ontimeout=h,c.onprogress=function(){c.getResponseHeader("content-type")!==ut&&c.abort()},c.onload=function(){e.read(c.response)},c.onloadend=function(){e.reloading=!1,e.xhr=null},r.checkCrossOrigin&&Yt(t)&&i.crossOrigin&&(t=Zt(t)),c.open("GET",t,!0),c.responseType="arraybuffer",c.withCredentials="use-credentials"===i.crossOrigin,c.send()}else this.clone()}}},{key:"read",value:function(t){var e=this.options,i=this.imageData,r=re(t),s=0,n=1,o=1;if(r>1){this.url=function(t,e){for(var i=[],r=new Uint8Array(t);r.length>0;)i.push(ee.apply(null,Ot(r.subarray(0,8192)))),r=r.subarray(8192);return"data:".concat(e,";base64,").concat(btoa(i.join("")))}(t,ut);var a=function(t){var e=0,i=1,r=1;switch(t){case 2:i=-1;break;case 3:e=-180;break;case 4:r=-1;break;case 5:e=90,r=-1;break;case 6:e=90;break;case 7:e=90,i=-1;break;case 8:e=-90}return{rotate:e,scaleX:i,scaleY:r}}(r);s=a.rotate,n=a.scaleX,o=a.scaleY}e.rotatable&&(i.rotate=s),e.scalable&&(i.scaleX=n,i.scaleY=o),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,i=t.crossOrigin,r=e;this.options.checkCrossOrigin&&Yt(e)&&(i||(i="anonymous"),r=Zt(e)),this.crossOrigin=i,this.crossOriginUrl=r;var s=document.createElement("img");i&&(s.crossOrigin=i),s.src=r||e,s.alt=t.alt||"The image to crop",this.image=s,s.onload=this.start.bind(this),s.onerror=this.stop.bind(this),zt(s,V),t.parentNode.insertBefore(s,t.nextSibling)}},{key:"start",value:function(){var t=this,e=this.image;e.onload=null,e.onerror=null,this.sizing=!0;var i=B.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(B.navigator.userAgent),r=function(e,i){Ct(t.imageData,{naturalWidth:e,naturalHeight:i,aspectRatio:e/i}),t.initialImageData=Ct({},t.imageData),t.sizing=!1,t.sized=!0,t.build()};if(!e.naturalWidth||i){var s=document.createElement("img"),n=document.body||document.documentElement;this.sizingImage=s,s.onload=function(){r(s.width,s.height),i||n.removeChild(s)},s.src=e.src,i||(s.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",n.appendChild(s))}else r(e.naturalWidth,e.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,e=this.options,i=this.image,r=t.parentNode,s=document.createElement("div");s.innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';var n=s.querySelector(".".concat(C,"-container")),o=n.querySelector(".".concat(C,"-canvas")),a=n.querySelector(".".concat(C,"-drag-box")),c=n.querySelector(".".concat(C,"-crop-box")),h=c.querySelector(".".concat(C,"-face"));this.container=r,this.cropper=n,this.canvas=o,this.dragBox=a,this.cropBox=c,this.viewBox=n.querySelector(".".concat(C,"-view-box")),this.face=h,o.appendChild(i),zt(t,U),r.insertBefore(n,t.nextSibling),Et(i,V),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,zt(c,U),e.guides||zt(c.getElementsByClassName("".concat(C,"-dashed")),U),e.center||zt(c.getElementsByClassName("".concat(C,"-center")),U),e.background&&zt(n,"".concat(C,"-bg")),e.highlight||zt(h,H),e.cropBoxMovable&&(zt(h,X),It(h,Y,N)),e.cropBoxResizable||(zt(c.getElementsByClassName("".concat(C,"-line")),U),zt(c.getElementsByClassName("".concat(C,"-point")),U)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),At(e.ready)&&Ut(t,ht,e.ready,{once:!0}),Vt(t,ht)}}},{key:"unbuild",value:function(){if(this.ready){this.ready=!1,this.unbind(),this.resetPreview();var t=this.cropper.parentNode;t&&t.removeChild(this.cropper),Et(this.element,U)}}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],r=[{key:"noConflict",value:function(){return window.Cropper=de,t}},{key:"setDefaults",value:function(t){Ct(vt,_t(t)&&t)}}],i&&M(e.prototype,i),r&&M(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,i,r}();Ct(pe.prototype,se,ne,oe,ae,ce,he);const le=t`
  .cropper-container {
    direction: ltr;
    font-size: 0;
    line-height: 0;
    position: relative;
    -ms-touch-action: none;
    touch-action: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .cropper-container img {
    display: block;
    height: 100%;
    image-orientation: 0deg;
    max-height: none !important;
    max-width: none !important;
    min-height: 0 !important;
    min-width: 0 !important;
    width: 100%;
  }

  .cropper-wrap-box,
  .cropper-canvas,
  .cropper-drag-box,
  .cropper-crop-box,
  .cropper-modal {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .cropper-wrap-box,
  .cropper-canvas {
    overflow: hidden;
  }

  .cropper-drag-box {
    background-color: #fff;
    opacity: 0;
  }

  .cropper-modal {
    background-color: #000;
    opacity: 0.5;
  }

  .cropper-view-box {
    display: block;
    height: 100%;
    outline: 1px solid #39f;
    outline-color: rgba(51, 153, 255, 0.75);
    overflow: hidden;
    width: 100%;
  }

  .cropper-dashed {
    border: 0 dashed #eee;
    display: block;
    opacity: 0.5;
    position: absolute;
  }

  .cropper-dashed.dashed-h {
    border-bottom-width: 1px;
    border-top-width: 1px;
    height: calc(100% / 3);
    left: 0;
    top: calc(100% / 3);
    width: 100%;
  }

  .cropper-dashed.dashed-v {
    border-left-width: 1px;
    border-right-width: 1px;
    height: 100%;
    left: calc(100% / 3);
    top: 0;
    width: calc(100% / 3);
  }

  .cropper-center {
    display: block;
    height: 0;
    left: 50%;
    opacity: 0.75;
    position: absolute;
    top: 50%;
    width: 0;
  }

  .cropper-center::before,
  .cropper-center::after {
    background-color: #eee;
    content: ' ';
    display: block;
    position: absolute;
  }

  .cropper-center::before {
    height: 1px;
    left: -3px;
    top: 0;
    width: 7px;
  }

  .cropper-center::after {
    height: 7px;
    left: 0;
    top: -3px;
    width: 1px;
  }

  .cropper-face,
  .cropper-line,
  .cropper-point {
    display: block;
    height: 100%;
    opacity: 0.1;
    position: absolute;
    width: 100%;
  }

  .cropper-face {
    background-color: #fff;
    left: 0;
    top: 0;
  }

  .cropper-line {
    background-color: #39f;
  }

  .cropper-line.line-e {
    cursor: ew-resize;
    right: -3px;
    top: 0;
    width: 5px;
  }

  .cropper-line.line-n {
    cursor: ns-resize;
    height: 5px;
    left: 0;
    top: -3px;
  }

  .cropper-line.line-w {
    cursor: ew-resize;
    left: -3px;
    top: 0;
    width: 5px;
  }

  .cropper-line.line-s {
    bottom: -3px;
    cursor: ns-resize;
    height: 5px;
    left: 0;
  }

  .cropper-point {
    background-color: #39f;
    height: 5px;
    opacity: 0.75;
    width: 5px;
  }

  .cropper-point.point-e {
    cursor: ew-resize;
    margin-top: -3px;
    right: -3px;
    top: 50%;
  }

  .cropper-point.point-n {
    cursor: ns-resize;
    left: 50%;
    margin-left: -3px;
    top: -3px;
  }

  .cropper-point.point-w {
    cursor: ew-resize;
    left: -3px;
    margin-top: -3px;
    top: 50%;
  }

  .cropper-point.point-s {
    bottom: -3px;
    cursor: s-resize;
    left: 50%;
    margin-left: -3px;
  }

  .cropper-point.point-ne {
    cursor: nesw-resize;
    right: -3px;
    top: -3px;
  }

  .cropper-point.point-nw {
    cursor: nwse-resize;
    left: -3px;
    top: -3px;
  }

  .cropper-point.point-sw {
    bottom: -3px;
    cursor: nesw-resize;
    left: -3px;
  }

  .cropper-point.point-se {
    bottom: -3px;
    cursor: nwse-resize;
    height: 20px;
    opacity: 1;
    right: -3px;
    width: 20px;
  }

  @media (min-width: 768px) {
    .cropper-point.point-se {
      height: 15px;
      width: 15px;
    }
  }

  @media (min-width: 992px) {
    .cropper-point.point-se {
      height: 10px;
      width: 10px;
    }
  }

  @media (min-width: 1200px) {
    .cropper-point.point-se {
      height: 5px;
      opacity: 0.75;
      width: 5px;
    }
  }

  .cropper-point.point-se::before {
    background-color: #39f;
    bottom: -50%;
    content: ' ';
    display: block;
    height: 200%;
    opacity: 0;
    position: absolute;
    right: -50%;
    width: 200%;
  }

  .cropper-invisible {
    opacity: 0;
  }

  .cropper-bg {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');
  }

  .cropper-hide {
    display: block;
    height: 0;
    position: absolute;
    width: 0;
  }

  .cropper-hidden {
    display: none !important;
  }

  .cropper-move {
    cursor: move;
  }

  .cropper-crop {
    cursor: crosshair;
  }

  .cropper-disabled .cropper-drag-box,
  .cropper-disabled .cropper-face,
  .cropper-disabled .cropper-line,
  .cropper-disabled .cropper-point {
    cursor: not-allowed;
  }

  [circle] .cropper-view-box {
    box-shadow: 0 0 0 1px #39f;
    border-radius: 50%;
    outline: 0;
  }
  [circle] .cropper-face {
    background-color: inherit !important;
  }
  [circle] .cropper-view-box {
    outline: inherit !important;
  }
`,ue={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},me={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},fe={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},ge={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},be={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class ve{static getFirstMatch(t,e){const i=e.match(t);return i&&i.length>0&&i[1]||""}static getSecondMatch(t,e){const i=e.match(t);return i&&i.length>1&&i[2]||""}static matchAndReturnConst(t,e,i){if(t.test(e))return i}static getWindowsVersionName(t){switch(t){case"NT":return"NT";case"XP":case"NT 5.1":return"XP";case"NT 5.0":return"2000";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(t){const e=t.split(".").splice(0,2).map((t=>parseInt(t,10)||0));if(e.push(0),10===e[0])switch(e[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(t){const e=t.split(".").splice(0,2).map((t=>parseInt(t,10)||0));if(e.push(0),!(1===e[0]&&e[1]<5))return 1===e[0]&&e[1]<6?"Cupcake":1===e[0]&&e[1]>=6?"Donut":2===e[0]&&e[1]<2?"Eclair":2===e[0]&&2===e[1]?"Froyo":2===e[0]&&e[1]>2?"Gingerbread":3===e[0]?"Honeycomb":4===e[0]&&e[1]<1?"Ice Cream Sandwich":4===e[0]&&e[1]<4?"Jelly Bean":4===e[0]&&e[1]>=4?"KitKat":5===e[0]?"Lollipop":6===e[0]?"Marshmallow":7===e[0]?"Nougat":8===e[0]?"Oreo":9===e[0]?"Pie":void 0}static getVersionPrecision(t){return t.split(".").length}static compareVersions(t,e,i=!1){const r=ve.getVersionPrecision(t),s=ve.getVersionPrecision(e);let n=Math.max(r,s),o=0;const a=ve.map([t,e],(t=>{const e=n-ve.getVersionPrecision(t),i=t+new Array(e+1).join(".0");return ve.map(i.split("."),(t=>new Array(20-t.length).join("0")+t)).reverse()}));for(i&&(o=n-Math.min(r,s)),n-=1;n>=o;){if(a[0][n]>a[1][n])return 1;if(a[0][n]===a[1][n]){if(n===o)return 0;n-=1}else if(a[0][n]<a[1][n])return-1}}static map(t,e){const i=[];let r;if(Array.prototype.map)return Array.prototype.map.call(t,e);for(r=0;r<t.length;r+=1)i.push(e(t[r]));return i}static find(t,e){let i,r;if(Array.prototype.find)return Array.prototype.find.call(t,e);for(i=0,r=t.length;i<r;i+=1){const r=t[i];if(e(r,i))return r}}static assign(t,...e){const i=t;let r,s;if(Object.assign)return Object.assign(t,...e);for(r=0,s=e.length;r<s;r+=1){const t=e[r];if("object"==typeof t&&null!==t){Object.keys(t).forEach((e=>{i[e]=t[e]}))}}return t}static getBrowserAlias(t){return ue[t]}static getBrowserTypeByAlias(t){return me[t]||""}}const we=/version\/(\d+(\.?_?\d+)+)/i,ye=[{test:[/googlebot/i],describe(t){const e={name:"Googlebot"},i=ve.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,t)||ve.getFirstMatch(we,t);return i&&(e.version=i),e}},{test:[/opera/i],describe(t){const e={name:"Opera"},i=ve.getFirstMatch(we,t)||ve.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/opr\/|opios/i],describe(t){const e={name:"Opera"},i=ve.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,t)||ve.getFirstMatch(we,t);return i&&(e.version=i),e}},{test:[/SamsungBrowser/i],describe(t){const e={name:"Samsung Internet for Android"},i=ve.getFirstMatch(we,t)||ve.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/Whale/i],describe(t){const e={name:"NAVER Whale Browser"},i=ve.getFirstMatch(we,t)||ve.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/MZBrowser/i],describe(t){const e={name:"MZ Browser"},i=ve.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,t)||ve.getFirstMatch(we,t);return i&&(e.version=i),e}},{test:[/focus/i],describe(t){const e={name:"Focus"},i=ve.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,t)||ve.getFirstMatch(we,t);return i&&(e.version=i),e}},{test:[/swing/i],describe(t){const e={name:"Swing"},i=ve.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,t)||ve.getFirstMatch(we,t);return i&&(e.version=i),e}},{test:[/coast/i],describe(t){const e={name:"Opera Coast"},i=ve.getFirstMatch(we,t)||ve.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(t){const e={name:"Opera Touch"},i=ve.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,t)||ve.getFirstMatch(we,t);return i&&(e.version=i),e}},{test:[/yabrowser/i],describe(t){const e={name:"Yandex Browser"},i=ve.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,t)||ve.getFirstMatch(we,t);return i&&(e.version=i),e}},{test:[/ucbrowser/i],describe(t){const e={name:"UC Browser"},i=ve.getFirstMatch(we,t)||ve.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/Maxthon|mxios/i],describe(t){const e={name:"Maxthon"},i=ve.getFirstMatch(we,t)||ve.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/epiphany/i],describe(t){const e={name:"Epiphany"},i=ve.getFirstMatch(we,t)||ve.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/puffin/i],describe(t){const e={name:"Puffin"},i=ve.getFirstMatch(we,t)||ve.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/sleipnir/i],describe(t){const e={name:"Sleipnir"},i=ve.getFirstMatch(we,t)||ve.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/k-meleon/i],describe(t){const e={name:"K-Meleon"},i=ve.getFirstMatch(we,t)||ve.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/micromessenger/i],describe(t){const e={name:"WeChat"},i=ve.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,t)||ve.getFirstMatch(we,t);return i&&(e.version=i),e}},{test:[/qqbrowser/i],describe(t){const e={name:/qqbrowserlite/i.test(t)?"QQ Browser Lite":"QQ Browser"},i=ve.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,t)||ve.getFirstMatch(we,t);return i&&(e.version=i),e}},{test:[/msie|trident/i],describe(t){const e={name:"Internet Explorer"},i=ve.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/\sedg\//i],describe(t){const e={name:"Microsoft Edge"},i=ve.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/edg([ea]|ios)/i],describe(t){const e={name:"Microsoft Edge"},i=ve.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/vivaldi/i],describe(t){const e={name:"Vivaldi"},i=ve.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/seamonkey/i],describe(t){const e={name:"SeaMonkey"},i=ve.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/sailfish/i],describe(t){const e={name:"Sailfish"},i=ve.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,t);return i&&(e.version=i),e}},{test:[/silk/i],describe(t){const e={name:"Amazon Silk"},i=ve.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/phantom/i],describe(t){const e={name:"PhantomJS"},i=ve.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/slimerjs/i],describe(t){const e={name:"SlimerJS"},i=ve.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(t){const e={name:"BlackBerry"},i=ve.getFirstMatch(we,t)||ve.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/(web|hpw)[o0]s/i],describe(t){const e={name:"WebOS Browser"},i=ve.getFirstMatch(we,t)||ve.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/bada/i],describe(t){const e={name:"Bada"},i=ve.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/tizen/i],describe(t){const e={name:"Tizen"},i=ve.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,t)||ve.getFirstMatch(we,t);return i&&(e.version=i),e}},{test:[/qupzilla/i],describe(t){const e={name:"QupZilla"},i=ve.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,t)||ve.getFirstMatch(we,t);return i&&(e.version=i),e}},{test:[/firefox|iceweasel|fxios/i],describe(t){const e={name:"Firefox"},i=ve.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/electron/i],describe(t){const e={name:"Electron"},i=ve.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/MiuiBrowser/i],describe(t){const e={name:"Miui"},i=ve.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/chromium/i],describe(t){const e={name:"Chromium"},i=ve.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,t)||ve.getFirstMatch(we,t);return i&&(e.version=i),e}},{test:[/chrome|crios|crmo/i],describe(t){const e={name:"Chrome"},i=ve.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/GSA/i],describe(t){const e={name:"Google Search"},i=ve.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test(t){const e=!t.test(/like android/i),i=t.test(/android/i);return e&&i},describe(t){const e={name:"Android Browser"},i=ve.getFirstMatch(we,t);return i&&(e.version=i),e}},{test:[/playstation 4/i],describe(t){const e={name:"PlayStation 4"},i=ve.getFirstMatch(we,t);return i&&(e.version=i),e}},{test:[/safari|applewebkit/i],describe(t){const e={name:"Safari"},i=ve.getFirstMatch(we,t);return i&&(e.version=i),e}},{test:[/.*/i],describe(t){const e=-1!==t.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:ve.getFirstMatch(e,t),version:ve.getSecondMatch(e,t)}}}];var xe=[{test:[/Roku\/DVP/],describe(t){const e=ve.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,t);return{name:ge.Roku,version:e}}},{test:[/windows phone/i],describe(t){const e=ve.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,t);return{name:ge.WindowsPhone,version:e}}},{test:[/windows /i],describe(t){const e=ve.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,t),i=ve.getWindowsVersionName(e);return{name:ge.Windows,version:e,versionName:i}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(t){const e={name:ge.iOS},i=ve.getSecondMatch(/(Version\/)(\d[\d.]+)/,t);return i&&(e.version=i),e}},{test:[/macintosh/i],describe(t){const e=ve.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,t).replace(/[_\s]/g,"."),i=ve.getMacOSVersionName(e),r={name:ge.MacOS,version:e};return i&&(r.versionName=i),r}},{test:[/(ipod|iphone|ipad)/i],describe(t){const e=ve.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,t).replace(/[_\s]/g,".");return{name:ge.iOS,version:e}}},{test(t){const e=!t.test(/like android/i),i=t.test(/android/i);return e&&i},describe(t){const e=ve.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,t),i=ve.getAndroidVersionName(e),r={name:ge.Android,version:e};return i&&(r.versionName=i),r}},{test:[/(web|hpw)[o0]s/i],describe(t){const e=ve.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,t),i={name:ge.WebOS};return e&&e.length&&(i.version=e),i}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(t){const e=ve.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,t)||ve.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,t)||ve.getFirstMatch(/\bbb(\d+)/i,t);return{name:ge.BlackBerry,version:e}}},{test:[/bada/i],describe(t){const e=ve.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,t);return{name:ge.Bada,version:e}}},{test:[/tizen/i],describe(t){const e=ve.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,t);return{name:ge.Tizen,version:e}}},{test:[/linux/i],describe:()=>({name:ge.Linux})},{test:[/CrOS/],describe:()=>({name:ge.ChromeOS})},{test:[/PlayStation 4/],describe(t){const e=ve.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,t);return{name:ge.PlayStation4,version:e}}}],Me=[{test:[/googlebot/i],describe:()=>({type:"bot",vendor:"Google"})},{test:[/huawei/i],describe(t){const e=ve.getFirstMatch(/(can-l01)/i,t)&&"Nova",i={type:fe.mobile,vendor:"Huawei"};return e&&(i.model=e),i}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:()=>({type:fe.tablet,vendor:"Nexus"})},{test:[/ipad/i],describe:()=>({type:fe.tablet,vendor:"Apple",model:"iPad"})},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:()=>({type:fe.tablet,vendor:"Apple",model:"iPad"})},{test:[/kftt build/i],describe:()=>({type:fe.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"})},{test:[/silk/i],describe:()=>({type:fe.tablet,vendor:"Amazon"})},{test:[/tablet(?! pc)/i],describe:()=>({type:fe.tablet})},{test(t){const e=t.test(/ipod|iphone/i),i=t.test(/like (ipod|iphone)/i);return e&&!i},describe(t){const e=ve.getFirstMatch(/(ipod|iphone)/i,t);return{type:fe.mobile,vendor:"Apple",model:e}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:()=>({type:fe.mobile,vendor:"Nexus"})},{test:[/[^-]mobi/i],describe:()=>({type:fe.mobile})},{test:t=>"blackberry"===t.getBrowserName(!0),describe:()=>({type:fe.mobile,vendor:"BlackBerry"})},{test:t=>"bada"===t.getBrowserName(!0),describe:()=>({type:fe.mobile})},{test:t=>"windows phone"===t.getBrowserName(),describe:()=>({type:fe.mobile,vendor:"Microsoft"})},{test(t){const e=Number(String(t.getOSVersion()).split(".")[0]);return"android"===t.getOSName(!0)&&e>=3},describe:()=>({type:fe.tablet})},{test:t=>"android"===t.getOSName(!0),describe:()=>({type:fe.mobile})},{test:t=>"macos"===t.getOSName(!0),describe:()=>({type:fe.desktop,vendor:"Apple"})},{test:t=>"windows"===t.getOSName(!0),describe:()=>({type:fe.desktop})},{test:t=>"linux"===t.getOSName(!0),describe:()=>({type:fe.desktop})},{test:t=>"playstation 4"===t.getOSName(!0),describe:()=>({type:fe.tv})},{test:t=>"roku"===t.getOSName(!0),describe:()=>({type:fe.tv})}],ke=[{test:t=>"microsoft edge"===t.getBrowserName(!0),describe(t){if(/\sedg\//i.test(t))return{name:be.Blink};const e=ve.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,t);return{name:be.EdgeHTML,version:e}}},{test:[/trident/i],describe(t){const e={name:be.Trident},i=ve.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:t=>t.test(/presto/i),describe(t){const e={name:be.Presto},i=ve.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test(t){const e=t.test(/gecko/i),i=t.test(/like gecko/i);return e&&!i},describe(t){const e={name:be.Gecko},i=ve.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}},{test:[/(apple)?webkit\/537\.36/i],describe:()=>({name:be.Blink})},{test:[/(apple)?webkit/i],describe(t){const e={name:be.WebKit},i=ve.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,t);return i&&(e.version=i),e}}];class Se{constructor(t,e=!1){if(null==t||""===t)throw new Error("UserAgent parameter can't be empty");this._ua=t,this.parsedResult={},!0!==e&&this.parse()}getUA(){return this._ua}test(t){return t.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const t=ve.find(ye,(t=>{if("function"==typeof t.test)return t.test(this);if(t.test instanceof Array)return t.test.some((t=>this.test(t)));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(t){return t?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const t=ve.find(xe,(t=>{if("function"==typeof t.test)return t.test(this);if(t.test instanceof Array)return t.test.some((t=>this.test(t)));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os}getOSName(t){const{name:e}=this.getOS();return t?String(e).toLowerCase()||"":e||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(t=!1){const{type:e}=this.getPlatform();return t?String(e).toLowerCase()||"":e||""}parsePlatform(){this.parsedResult.platform={};const t=ve.find(Me,(t=>{if("function"==typeof t.test)return t.test(this);if(t.test instanceof Array)return t.test.some((t=>this.test(t)));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(t){return t?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const t=ve.find(ke,(t=>{if("function"==typeof t.test)return t.test(this);if(t.test instanceof Array)return t.test.some((t=>this.test(t)));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return ve.assign({},this.parsedResult)}satisfies(t){const e={};let i=0;const r={};let s=0;if(Object.keys(t).forEach((n=>{const o=t[n];"string"==typeof o?(r[n]=o,s+=1):"object"==typeof o&&(e[n]=o,i+=1)})),i>0){const t=Object.keys(e),i=ve.find(t,(t=>this.isOS(t)));if(i){const t=this.satisfies(e[i]);if(void 0!==t)return t}const r=ve.find(t,(t=>this.isPlatform(t)));if(r){const t=this.satisfies(e[r]);if(void 0!==t)return t}}if(s>0){const t=Object.keys(r),e=ve.find(t,(t=>this.isBrowser(t,!0)));if(void 0!==e)return this.compareVersion(r[e])}}isBrowser(t,e=!1){const i=this.getBrowserName().toLowerCase();let r=t.toLowerCase();const s=ve.getBrowserTypeByAlias(r);return e&&s&&(r=s.toLowerCase()),r===i}compareVersion(t){let e=[0],i=t,r=!1;const s=this.getBrowserVersion();if("string"==typeof s)return">"===t[0]||"<"===t[0]?(i=t.substr(1),"="===t[1]?(r=!0,i=t.substr(2)):e=[],">"===t[0]?e.push(1):e.push(-1)):"="===t[0]?i=t.substr(1):"~"===t[0]&&(r=!0,i=t.substr(1)),e.indexOf(ve.compareVersions(s,i,r))>-1}isOS(t){return this.getOSName(!0)===String(t).toLowerCase()}isPlatform(t){return this.getPlatformType(!0)===String(t).toLowerCase()}isEngine(t){return this.getEngineName(!0)===String(t).toLowerCase()}is(t,e=!1){return this.isBrowser(t,e)||this.isOS(t)||this.isPlatform(t)}some(t=[]){return t.some((t=>this.is(t)))}}class _e{static getParser(t,e=!1){if("string"!=typeof t)throw new Error("UserAgent should be a string");return new Se(t,e)}static parse(t){return new Se(t).getResult()}static get BROWSER_MAP(){return me}static get ENGINE_MAP(){return be}static get OS_MAP(){return ge}static get PLATFORMS_MAP(){return fe}}const Ae=new URL(new URL("D9xn2E7Y.gif",import.meta.url).href,import.meta.url).href;let Be=class extends(p(o)){#t;get dialog(){return this.#t}set dialog(t){this.#t=t}#e;get img(){return this.#e}set img(t){this.#e=t}#i={};get options(){return this.#i}set options(t){this.#i=t}#r;get forcePNGOutput(){return this.#r}set forcePNGOutput(t){this.#r=t}#s="";get fileName(){return this.#s}set fileName(t){this.#s=t}#n;#o="";#a="";firstUpdated(){const t=_e.getParser(window.navigator.userAgent),e=t?.getOS?.()?.name??"";this.#o="iOS"===e||"macOS"===e||this.forcePNGOutput?"image/png":"image/webp",this.#a="iOS"===e||"macOS"===e||this.forcePNGOutput?"png":"webp"}static{this.styles=[e,i,le,t`
      :host {
        display: block;
      }

      md-dialog {
        max-width: calc(100vw - 24px);
        max-height: calc(100vh - 24px);
      }

      main {
        display: flex;
        position: relative;
        align-self: center;
      }

      loading-animation {
        display: flex;
        flex-direction: column;
        place-content: center;
        place-items: center;
        width: 100%;
      }

      loading-animation img {
        height: 300px;
      }

      section[crop] {
        display: grid;
        width: 100%;
        grid: 'cropper buttons' / 1fr 58px;
      }

      cropper-container {
        grid-area: cropper;

        display: block;
        max-width: 800px;
        max-height: 600px;
        overflow: hidden;
      }

      cropper-container img {
        display: block;
        /* This rule is very important, please don't ignore this */
        max-width: 100%;
      }

      crop-buttons {
        grid-area: buttons;

        display: grid;
        align-content: start;
        grid-auto-flow: row;

        padding: 0 8px;
        gap: 8px;
      }

      @media (max-width: 600px) {
        section[crop] {
          grid:
            'cropper'
            'buttons';
        }

        crop-buttons {
          justify-content: end;
          grid-auto-flow: column;
          padding: 8px 0;
        }
      }

      [hidden] {
        display: none !important;
      }
    `]}#c;#h;async open(t,e,i){return this.#c=i,this.dialog.returnValue="",this.reset(),this.fileName=e,this.#d(t),this.dialog.show(),await new Promise((t=>{this.#h=t}))}reset(){this.img.src="",this.#n?.destroy()}blobToFile(t,e){return new File([t],e,{lastModified:(new Date).getTime()})}#d(t){this.img.src=t,this.#n=new pe(this.img,{viewMode:2,aspectRatio:"circle"===this.options.shape?1:this.options.aspectRatio,...this.options})}#p(t,e){return t.slice(0,t.lastIndexOf("."))+`.${e}`}async#l(t){const e=document.createElement("canvas"),i=new Image,r=new Promise((t=>{i.onload=()=>{const r=Math.min(i.naturalWidth,i.naturalHeight);e.width=r,e.height=r;const s=e.getContext("2d");s.drawImage(i,0,0),s.globalCompositeOperation="destination-in",s.fillStyle="#000",s.beginPath(),s.arc(.5*r,.5*r,.5*r,0,2*Math.PI),s.fill(),s.globalCompositeOperation="source-over",t(e.toDataURL())}}));return i.src=t,await r}render(){return r`
      <md-dialog
        @open=${t=>d(t.target)}
        @close=${t=>{if("cancel"===t.target.returnValue||"cropped"===t.target.returnValue)return this.#h(t.target.returnValue);t.preventDefault()}}
      >
        <div slot="headline">Crop and save image</div>
        <main slot="content">
          <loading-animation ?hidden=${!this.isLoading}>
            <img src=${Ae} />
            <p>Uploading image...</p>
          </loading-animation>
          <section crop ?hidden=${this.isLoading}>
            <cropper-container ?circle=${"circle"===this.options.shape}>
              <img />
            </cropper-container>
            <crop-buttons>
              <md-icon-button label="Rotate right" title="Rotate right" @click=${()=>this.#n?.rotate(90)}
                ><md-icon>rotate_right</md-icon></md-icon-button
              >
              <md-icon-button label="Rotate left" title="Rotate left" @click=${()=>this.#n?.rotate(-90)}>
                <md-icon>rotate_left</md-icon>
              </md-icon-button>
            </crop-buttons>
          </section>
        </main>
        <div slot="actions">
          <md-text-button
            ?disabled=${this.isLoading}
            @click=${()=>{this.reset(),this.dialog.close("cancel")}}
            >Cancel</md-text-button
          >
          <md-text-button
            ?disabled=${this.isLoading}
            @click=${async()=>{this.isLoading=!0,await this.updateComplete,this.#n?.getCroppedCanvas();const t=this.#n?.getCroppedCanvas();if(!t)return;const e="circle"===this.options.shape?await this.#l(t.toDataURL(this.#o)):t.toDataURL(this.#o),i=await fetch(e),r=this.blobToFile(await i.blob(),this.#p(this.fileName,this.#a)),s=this.#c?.(r,e)||Promise.resolve();this.loadWhile(s),await s,this.isLoading=!1,this.dialog.close("cropped")}}
            >Save</md-text-button
          >
        </div>
      </md-dialog>
    `}};s([a("md-dialog")],Be.prototype,"dialog",null),s([a("cropper-container > img")],Be.prototype,"img",null),s([c({type:Object})],Be.prototype,"options",null),s([c({type:Boolean,reflect:!0,attribute:"force-png"})],Be.prototype,"forcePNGOutput",null),s([n()],Be.prototype,"fileName",null),Be=s([h("crop-and-save-image-dialog")],Be);let Oe=class extends o{#u;get imageUrl(){return this.#u}set imageUrl(t){this.#u=t}#m;get downloadSrc(){return this.#m}set downloadSrc(t){this.#m=t}#f;get filename(){return this.#f}set filename(t){this.#f=t}#t;get dialog(){return this.#t}set dialog(t){this.#t=t}async open(t,e,i){return this.imageUrl=void 0,this.filename=i,this.downloadSrc=e,this.imageUrl=t,this.dialog.show()}static{this.styles=[t`
      div[header] {
        word-break: break-all;
      }

      md-dialog {
        max-width: calc(100vw - 48px);
        max-height: calc(100vh - 48px);
      }

      img {
        width: 100%;
      }
    `]}render(){return r`
      <md-dialog @open=${t=>d(t.target)}>
        <div header slot="headline">${l(this.filename||"Image preview",60)}</div>
        <img slot="content" draggable="false" src=${u(this.imageUrl)} />
        <div slot="actions">
          ${this.downloadSrc?r`<md-text-button
                @click=${t=>{t.stopPropagation(),window.open(this.downloadSrc)}}
                ><md-icon slot="icon">file_download</md-icon>Download</md-text-button
              >`:r`<div></div>`}

          <md-text-button
            @click=${t=>{t.stopPropagation(),this.dialog.close("close")}}
            >Close</md-text-button
          >
        </div>
      </md-dialog>
    `}};s([n()],Oe.prototype,"imageUrl",null),s([n()],Oe.prototype,"downloadSrc",null),s([n()],Oe.prototype,"filename",null),s([a("md-dialog")],Oe.prototype,"dialog",null),Oe=s([h("image-preview-dialog")],Oe);const je=["tiff","pjp","jfif","bmp","gif","svg","png","xbm","dib","jxl","jpeg","svgz","jpg","webp","ico","tif","pjpeg","avif"];function Ce(t){const e=t.split(".");return e?.[e.length-1]||""}function Ne(t){return"pdf"===t.toLowerCase()?new URL(new URL("BrwlMowD.png",import.meta.url).href,import.meta.url).href:new URL(new URL("Ciwo_vsG.png",import.meta.url).href,import.meta.url).href}let Te=class extends o{#g=[];get files(){return this.#g}set files(t){this.#g=t}#b=!1;get isOver(){return this.#b}set isOver(t){this.#b=t}#v=void 0;get previewSrc(){return this.#v}set previewSrc(t){this.#v=t}#w;get input(){return this.#w}set input(t){this.#w=t}#y;get imagePreviewDialog(){return this.#y}set imagePreviewDialog(t){this.#y=t}#x;get cropperDialog(){return this.#x}set cropperDialog(t){this.#x=t}#M;get confirmDeleteDialog(){return this.#M}set confirmDeleteDialog(t){this.#M=t}#k;get chipMultiSelect(){return this.#k}set chipMultiSelect(t){this.#k=t}#S=[];#_="image/*,.pdf";get accept(){return this.#_}set accept(t){this.#_=t}#A=!1;get multiple(){return this.#A}set multiple(t){this.#A=t}#B=!1;get required(){return this.#B}set required(t){this.#B=t}#O=!1;get disabled(){return this.#O}set disabled(t){this.#O=t}#j=!1;get confirmDelete(){return this.#j}set confirmDelete(t){this.#j=t}#C="Confirm delete";get confirmDeleteHeader(){return this.#C}set confirmDeleteHeader(t){this.#C=t}#N="Are you sure you would like to delete this attachment?";get confirmDeleteText(){return this.#N}set confirmDeleteText(t){this.#N=t}#T="Add attachment";get addButtonLabel(){return this.#T}set addButtonLabel(t){this.#T=t}#$="Attachments";get label(){return this.#$}set label(t){this.#$=t}#P;get supportingText(){return this.#P}set supportingText(t){this.#P=t}#z="No attachments";get noItemsText(){return this.#z}set noItemsText(t){this.#z=t}#i={};get options(){return this.#i}set options(t){this.#i=t}#E=["tiff","pjp","jfif","bmp","gif","svg","png","xbm","dib","jxl","jpeg","svgz","jpg","webp","ico","tif","pjpeg","avif"];get croppableImageFormats(){return this.#E}set croppableImageFormats(t){this.#E=t}getFiles(){return this.files}setFiles(...t){this.files=[...t].map((t=>({file:new File([""],t.fileName),previewSrc:t.previewSrc,downloadSrc:t.downloadSrc,id:t.id}))),this.#S=structuredClone(this.files)}setFilesFromDatabaseAttachments(...t){this.files=[...t].filter((t=>t.Name&&t.Extension)).map((t=>({id:t.Id,file:new File([""],`${t?.Name}.${t?.Extension}`),previewSrc:m(t,512),downloadSrc:f(t)}))),this.#S=structuredClone(this.files)}checkValidity(){return this.chipMultiSelect.checkValidity()}reportValidity(){return this.chipMultiSelect.reportValidity()}hasChanges(){return JSON.stringify(this.#S)!==JSON.stringify(this.files)}async reset(){this.#S=[],this.previewSrc=void 0,this.files=[],this.isOver=!1,await this.updateComplete,this.chipMultiSelect.reset()}async handleNewFile(t){let e=!1;for(let i=0;i<(t?.length??0);i++){const r=t?.item(i);if(r){if(this.croppableImageFormats.some((t=>r.name.endsWith(t)))){"cropped"===await this.cropperDialog.open(URL.createObjectURL(r),r.name,(async(t,e)=>{const i={file:t,previewSrc:e??void 0};this.multiple?this.files=[...this.files,i]:this.files=[i]}))&&(this.reportValidity(),e=!0),await b(500)}else{const t={file:r};if(je.some((t=>r.name.endsWith(t))))try{const e=await this.toBase64(r);"string"==typeof e&&(t.previewSrc=e??void 0)}catch{}this.multiple?this.files=[...this.files,t]:this.files=[t],this.reportValidity(),e=!0}}}e&&this.#D()}#R=null;#F(t){const e=this.files.findIndex((e=>e===t));this.files.splice(e,1),this.requestUpdate("files"),this.reportValidity(),this.#D()}toBase64(t){return new Promise(((e,i)=>{const r=new FileReader;r.readAsDataURL(t),r.onload=()=>e(r.result),r.onerror=t=>i(t)}))}#D(){this.dispatchEvent(new Event("change"))}static{this.styles=[i,t`
      :host {
        display: block;
      }

      :host([is-over]:not([disabled])) drop-scrim {
        background-color: var(--md-sys-color-outline-variant);
        opacity: 0.08;
      }

      titanium-chip-multi-select {
        position: relative;
      }

      drop-scrim {
        position: absolute;
        pointer-events: none;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return r`
      <titanium-chip-multi-select
        .supportingText=${this.supportingText}
        .required=${this.required}
        ?disabled=${this.disabled}
        @drop=${t=>{if(this.disabled)return;const e=t.dataTransfer?.files??new FileList;this.handleNewFile(e),t.preventDefault(),this.isOver=!1}}
        @dragover=${t=>{t.preventDefault()}}
        @dragenter=${t=>{this.isOver="Files"===t.dataTransfer?.types?.[0],t.preventDefault()}}
        @dragleave=${()=>{this.isOver=!1}}
        label="${this.label} ${this.files.length?` (${this.files.length})`:""}"
        noItemsText=${this.noItemsText}
        .hasItems=${!!this.files.length}
      >
        <drop-scrim></drop-scrim>
        <md-outlined-button
          ?hidden=${!this.multiple&&!!this.files.length}
          .disabled=${this.disabled}
          @click=${()=>{this.disabled||(this.input.value="",this.input.click())}}
          >${this.addButtonLabel} <md-icon slot="icon">add</md-icon></md-outlined-button
        >
        ${g(this.files,(t=>t.file.name),(t=>r`<md-input-chip
              label=${l(t.file.name)}
              ?closeable=${!this.disabled}
              @remove=${async e=>{e.preventDefault(),this.confirmDelete?(this.#R=t,this.confirmDeleteDialog?.show()):this.#F(t)}}
              @click=${()=>{(t.previewSrc||t.downloadSrc)&&this.imagePreviewDialog.open(t.previewSrc||Ne(Ce(t.file.name)),t.downloadSrc,t.file.name)}}
            >
              <img draggable="false" slot="icon" src="${t.previewSrc||Ne(Ce(t.file.name))}" />
            </md-input-chip>`))}
      </titanium-chip-multi-select>

      <label hidden for="upload">
        <input
          hidden
          type="file"
          id="input"
          name="image"
          ?multiple=${this.multiple}
          accept="${this.accept}"
          @change=${t=>{const e=t.target.files;this.handleNewFile(e)}}
        />
      </label>
      <crop-and-save-image-dialog .options=${this.options}></crop-and-save-image-dialog>
      <image-preview-dialog></image-preview-dialog>

      <md-dialog confirm-delete>
        <div slot="headline">${this.confirmDeleteHeader}</div>
        <div slot="content"><p>${this.confirmDeleteText}</p></div>
        <div slot="actions">
          <md-text-button @click=${()=>this.confirmDeleteDialog.close()}>Cancel</md-text-button>
          <md-text-button
            @click=${()=>{this.#R&&this.#F(this.#R),this.confirmDeleteDialog.close()}}
            >Confirm</md-text-button
          >
        </div>
      </md-dialog>
    `}};s([c({type:Array})],Te.prototype,"files",null),s([c({type:Boolean,reflect:!0,attribute:"is-over"})],Te.prototype,"isOver",null),s([c({type:String})],Te.prototype,"previewSrc",null),s([a("input")],Te.prototype,"input",null),s([a("image-preview-dialog")],Te.prototype,"imagePreviewDialog",null),s([a("crop-and-save-image-dialog")],Te.prototype,"cropperDialog",null),s([a("md-dialog[confirm-delete]")],Te.prototype,"confirmDeleteDialog",null),s([a("titanium-chip-multi-select")],Te.prototype,"chipMultiSelect",null),s([c({type:String})],Te.prototype,"accept",null),s([c({type:Boolean})],Te.prototype,"multiple",null),s([c({type:Boolean})],Te.prototype,"required",null),s([c({type:Boolean,reflect:!0})],Te.prototype,"disabled",null),s([c({type:Boolean})],Te.prototype,"confirmDelete",null),s([c({type:String})],Te.prototype,"confirmDeleteHeader",null),s([c({type:String})],Te.prototype,"confirmDeleteText",null),s([c({type:String})],Te.prototype,"addButtonLabel",null),s([c({type:String})],Te.prototype,"label",null),s([c({type:String})],Te.prototype,"supportingText",null),s([c({type:String})],Te.prototype,"noItemsText",null),s([c({type:Object})],Te.prototype,"options",null),s([c({type:Array})],Te.prototype,"croppableImageFormats",null),Te=s([h("titanium-smart-attachment-input")],Te);
