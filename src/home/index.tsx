import "./home.scss";

const mailEl: HTMLAnchorElement = document.querySelector(".links__row--email .links__name");

mailEl.setAttribute("href", `mailto:${mailEl.innerText}`);
