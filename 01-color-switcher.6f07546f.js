!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body"),n=null;t.disabled=!0;e.addEventListener("click",(function(){return e.disabled=!0,t.disabled=!1,void(n=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3))})),t.addEventListener("click",(function(){clearInterval(n),e.disabled=!1,t.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.6f07546f.js.map
