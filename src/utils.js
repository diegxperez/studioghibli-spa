// Utility
export const $ = (el) => document.querySelector(el);

// Navigation
export function navigateTo(url) {
  window.history.pushState(null, null, url);

  switch (window.location.pathname) {
    case "/":
      // root.innerHTML = UI;
      break;
    case "/characters":
      // root.innerHTML = UI;
      break;
    case "/locations":
      // root.innerHTML = UI;
      break;
  }
}

//
