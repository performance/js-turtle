/****************************************************************************
 * tutorial.js -- JavaScript extensions specific to tutorials
 *
 *
 ***************************************************************************/

// add code to every "tryme" button

document.addEventListener('DOMContentLoaded', function() {
    var trymeElements = document.querySelectorAll ("code.tryme");
    for (var i=0; i< trymeElements.length; i++) {
        trymeElements[i].onclick = function () {
            var textBlock = encodeURIComponent(this.innerHTML);
            window.open("కుంచిక.html?codeblock=" + textBlock);
        }
    }
}, false);
