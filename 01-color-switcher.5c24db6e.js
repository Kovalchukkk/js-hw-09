!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.body},n=null;t.startBtn.addEventListener("click",(function(){n=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.startBtn.setAttribute("disabled",!0)})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),t.startBtn.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.5c24db6e.js.map
