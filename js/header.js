export function header(currentName) {
  const links = [
    {
      href: "../index.html",
      title: "Main page",
    },
    {
      href: "../snake/index.html",
      title: "Snake",
    },
    {
      href: "../faq/index.html",
      title: "Faq",
    },
  ];
  let addLinks = "";

  for (const check of links) {
    let classes = "";

    if (currentName === check.title) {
      classes = "button active";
    } else {
      classes = "button";
    }
    addLinks += `<a class="${classes}" href="${check.href}">${check.title}</a>`;
  }

  const headerNav = `<header class="headerMain">
      <img class="image" src="../favicon.ico" alt="Blur picture">
      <nav class="navigation">${addLinks}</nav>
    </header>`;

  document.body.insertAdjacentHTML("afterbegin", headerNav);
}
