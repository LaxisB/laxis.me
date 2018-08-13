import "./home.scss";

/**
 * add a href to the email anchor
 * (ab)use the fact that innerText does not return hidden elements,
 * since we have an invisible span in our html to block scrapers
 */
const mailEl: HTMLAnchorElement = document.querySelector(".links__row--email .links__name");
mailEl.setAttribute("href", `mailto:${mailEl.innerText}`);
