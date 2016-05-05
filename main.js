console.log("start loading chirachira");

var newStyle = document.createElement('style');
newStyle.type = "text/css";
document.getElementsByTagName('head').item(0).appendChild(newStyle);
var css = document.styleSheets.item(0);

// FIXME: css.cssRules が取得できない場合がある (Firefox)
css.insertRule(".blinking { \
                   position: fixed; \
                   top: 0; \
                   left: 0; \
                   display: table; \
                   width: 100%; \
                   height: 100%; \
                   background: rgba(0,0,0,0.9); \
                   -webkit-animation: fade-in-out 2s ease 1s forwards; \
                   animation: fade-in-out 2s ease 1s forwards; \
                   visibility: hidden; \
                   z-index: 1; \
               }", css.cssRules.length);
css.insertRule(".blinking p { \
                  display: table-cell; \
                  vertical-align: middle; \
                  text-align: center; \
                  font-size: xx-large; \
                  color: white; \
               }", css.cssRules.length);
console.log("added css for class");
// FIXME: @-webkit-keyframes を css 追加するとエラーが発生する
/*
css.insertRule("@-webkit-keyframes fade-in-out { \
                  0% {visibility: hidden; opacity: 0;} \
                  50% {visibility: visible; opacity: 1;} \
                  100% {visibility: hidden; opacity: 0;} \
               }", css.cssRules.length);
*/
css.insertRule("@keyframes fade-in-out { \
                  0% {visibility: hidden; opacity: 0;} \
                  50% {visibility: visible; opacity: 1;} \
                  100% {visibility: hidden; opacity: 0;} \
               }", css.cssRules.length);
console.log("added css for @keyframes");

var blinkedText = document.createElement("div");
blinkedText.setAttribute('class', 'blinking');
// TODO: 文字列をどこかで指定できるようにする
blinkedText.innerHTML = '<p>GOOOOOOOOOGLE</p>';
document.body.appendChild(blinkedText);
console.log("added blinkedText");

console.log("chirachira was loaded");
