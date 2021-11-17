const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal__close");
const seconds = document.querySelector("#seconds");
let startSeconds = 10;
let stopCount = 0;

const timer = () => {
  startSeconds = startSeconds < 10 ? "0" + startSeconds : startSeconds;
  seconds.innerHTML = `${startSeconds}`;

  if (startSeconds > 0) {
    startSeconds--;
  } else {
    startSeconds = 0;
    modal.classList.add("active");
    clearInterval(stopCount);
  }
};

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

stopCount = setInterval(timer, 1000);
