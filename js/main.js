window.onload = () => {
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
};
