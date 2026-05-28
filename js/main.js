/**
 * main.js
 * Author: James
 * Description: Entry point for thisisjames site.
 * Handles active nav highlighting and initialises the typewriter component.
 */

import { initTypewriter } from "./typewriter.js";
import { setActiveNav } from "./nav.js";

// Run after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();

  // Only init typewriter if the element exists on this page
  const typewriterEl = document.querySelector(".typewriter-text");
  if (typewriterEl) {
    initTypewriter(typewriterEl);
  }
});
