/*
  Changing behaviour of call me anchor depending on if mobile or not
*/
function callMeAnchorBehaviour() {
  const callMeAnchor = document.querySelectorAll('[data-test="callMeAnchor"]');

  if(callMeAnchor) {
    callMeAnchor.forEach((anchor) => {
      anchor.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = /Mobi|Android|iPhone/i.test(navigator.userAgent) ? event.target.href : '/contact/';
      });
    });    
  }
}

callMeAnchorBehaviour();

if (typeof module === 'object') {
  module.exports = callMeAnchorBehaviour;
}
