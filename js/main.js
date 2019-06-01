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
