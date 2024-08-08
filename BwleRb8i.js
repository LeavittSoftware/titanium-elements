function t(t,e){!e.bubbles||t.shadowRoot&&!e.composed||e.stopPropagation();const n=Reflect.construct(e.constructor,[e.type,e]),r=t.dispatchEvent(n);return r||e.preventDefault(),r}export{t as r};
