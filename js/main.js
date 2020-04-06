window.onload = () => {
    //readingTime
    const wpm = 200; //Words per minute
    let readingTime = document.getElementById("readingTime");
    if(readingTime){
      let text = postContent.innerText || postContent.textContent;
      let length = text.split(" ").length;
      if(length > 0) {
        let value = Math.ceil(length/wpm);
        readingTime.innerText = `~${value} minutter lesetid`;
      }
    }
    //UIKit
    let socialMenu = document.getElementById("socialMenu");
    if(socialMenu) UIkit.sticky(socialMenu, {});

    /*
    //favorite
    var AddToFavorite = function(url, title) {
     var ua = navigator.userAgent.toLowerCase();
     if (ua.indexOf("msie 8") > -1) {
         external.AddToFavoritesBar(url, title, '');
     } else {
        try {
           window.external.addFavorite(url, title);
        } catch (e) {
           try {
               window.sidebar.addPanel(title, url, '');
           } catch (e) {
               alert("Please try shortcut Ctrl+D to add to favorite");
           }
       }
     }
     return false;
  }
  */
};
function copyUrl(){
    var dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.value = window.location.href;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
};

function bookmarkme(){
    if (window.sidebar && window.sidebar.addPanel) { // Mozilla Firefox Bookmark
      window.sidebar.addPanel(document.title, window.location.href, '');
    } else if (window.external && ('AddFavorite' in window.external)) { // IE Favorite
      window.external.AddFavorite(location.href, document.title);
    } else if (window.opera && window.print) { // Opera Hotlist
      this.title = document.title;
      return true;
    } else { // webkit - safari/chrome
      alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D for å bokmerke denne siden.');
    }
};
