export function header(currentName) {
  const links = [
    {
      href: "../my-work/index.html",
      title: "Main page",
    },
    {
      href: "../my-work/snake/index.html",
      title: "Snake",
    },
    {
      href: "../my-work/faq/index.html",
      title: "Faq",
    },
    {
      href: "../my-work/pop-up/index.html",
      title: "Pop-Up",
    },
    {
      href: "../my-work/dog_generator/index.html",
      title: "Dog",
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
      <img class="image" src="../my-work/favicon.ico" alt="Blur picture">
      <nav class="navigation">${addLinks}</nav>
    </header>`;

  document.body.insertAdjacentHTML("afterbegin", headerNav);
}
