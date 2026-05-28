/**
 * nav.js
 * Author: James
 * Description: Marks the current page's nav link as active
 * based on the current URL pathname.
 */

/**
 * Reads the current page path and adds the "active" class
 * to the matching anchor in .nav-links.
 */
export function setActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    // Normalize href to just the filename for comparison
    const linkPath = new URL(link.href).pathname;

    // Match exactly, or treat root as index
    const isHome =
      (currentPath === "/" || currentPath.endsWith("index.html")) &&
      (linkPath === "/" || linkPath.endsWith("index.html"));

    const isMatch = isHome || linkPath === currentPath;

    if (isMatch) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
