import { defineConfig } from "vocs";

export default defineConfig({
  title: "Sia Guide",

  topNav: [
    { text: "Sia Docs", link: "https://docs.sia.tech" },
  ],

  sidebar: [
    {
      text: "📅 Sia 2.0 Hard Fork ❗️",
      items: [
        { text: "Missed the Hard Fork?", link: "/hardfork-2025" },
      ],
    },
    {
      text: "📚 Learn",
      items: [
        { text: "Fundamentals", link: "/fundamentals" },
        { text: "Resources", link: "/resources" },
      ],
    },
  ],

  socials: [
    {
      icon: "github",
      link: "https://github.com/Sia-Guide/sia-guide",
    },
  ],
});
