if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let d={};const t=e=>i(e,f),a={module:{uri:f},exports:d,require:t};s[f]=Promise.all(r.map((e=>a[e]||t(e)))).then((e=>(n(...e),d)))}}define(["./workbox-e0782b83"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.636037ea.js",revision:null},{url:"assets/index.9d73fd57.css",revision:null},{url:"index.html",revision:"c709abd62651b7d3adf6d87aa076d594"},{url:"faraday.svg",revision:"e0e3871835cb306f03d81b6936f7b94c"},{url:"faraday_180.png",revision:"24f7f2252e491aaba331341f144b1f5d"},{url:"faraday-mask.svg",revision:"0c1da75c8967ba62d282f84cc5bff14f"},{url:"faraday_512.png",revision:"6e5af847867d1f048d62e115b08fd12e"},{url:"manifest.webmanifest",revision:"70291ae7b193b35c3313f45f0df484fd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
