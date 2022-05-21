const padlock = document.querySelector(".padlock");
const text = document.querySelector(".text");

let padlockInteractive = true;

const show = () => {
  if (padlockInteractive) text.classList.add("text_visible");
};

const hide = () => {
  if (padlockInteractive) text.classList.remove("text_visible");
};

const disableLock = () => {
  padlockInteractive = false;
  padlock.classList.add("padlock_clicked");
};

padlock.addEventListener("mouseenter", show);
padlock.addEventListener("mouseleave", hide);
padlock.addEventListener("click", disableLock);
