/**
 * typewriter.js
 * Author: James
 * Description: A simple typewriter effect that cycles through
 * a list of phrases, deleting and retyping each one.
 * This is the site's original creative JS component (>5 lines).
 */

// Phrases to cycle through — edit these to personalise
const PHRASES = [
  "Boston sports fan.",
  "Music lover & DJ.",
  "Formula 1 enthusiast.",
  "Nice to meet you.",
];

const TYPE_SPEED = 80; // ms per character typed
const DELETE_SPEED = 40; // ms per character deleted
const PAUSE_AFTER_TYPE = 1800; // ms to wait after fully typed
const PAUSE_AFTER_DELETE = 400; // ms to wait after fully deleted

/**
 * Starts the typewriter loop on a given DOM element.
 * Expects a sibling .typewriter-cursor element for the blinking caret.
 *
 * @param {HTMLElement} el - The element whose textContent will be animated.
 */
export function initTypewriter(el) {
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const currentPhrase = PHRASES[phraseIndex % PHRASES.length];

    if (isDeleting) {
      // Remove one character
      charIndex -= 1;
      el.textContent = currentPhrase.slice(0, charIndex);

      if (charIndex === 0) {
        // Finished deleting — move to next phrase
        isDeleting = false;
        phraseIndex += 1;
        setTimeout(tick, PAUSE_AFTER_DELETE);
        return;
      }

      setTimeout(tick, DELETE_SPEED);
    } else {
      // Add one character
      charIndex += 1;
      el.textContent = currentPhrase.slice(0, charIndex);

      if (charIndex === currentPhrase.length) {
        // Finished typing — start deleting after pause
        isDeleting = true;
        setTimeout(tick, PAUSE_AFTER_TYPE);
        return;
      }

      setTimeout(tick, TYPE_SPEED);
    }
  }

  // Kick off the loop
  tick();
}
