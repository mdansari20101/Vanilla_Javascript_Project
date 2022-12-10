window.addEventListener(["keydown"], function (e) {
    const audio = document.querySelector(
      `audio[data-key = "${e.keyCode}"]`
    );
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    // console.log(key);
    console.log(e);

    if (!audio) {
      return;
    }
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  });

  function clearTransition(e) {
    if (e.propertyName !== "transform") {
      return;
    }
    this.classList.remove("playing");
    // console.log(e);
  }

  // applying event transitionendon each div element
  const keys = document.querySelectorAll(".key");
  keys.forEach((ele) => {
    // console.log(ele);
   
    ele.addEventListener("click", function () {
      const key = this.getAttribute("data-key");
      const audio = document.querySelector(`audio[data-key = "${key}"]`);
      if (!audio) {
        return;
      }
      this.classList.add("playing");
      audio.currentTime = 0;
      audio.play();
      setTimeout(()=>{
        this.classList.remove("playing");

      },750);
    });
    ele.addEventListener("transitionend", clearTransition);
  });
  // console.log(keys);