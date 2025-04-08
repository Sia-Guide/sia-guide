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
        { text: "Navigating the Hard Fork", link: "/sia/hardfork-2025" },
        { text: "Wallet Migration Guide", link: "/sia/wallet-migration" },
      ],
    },
    {
      text: "📚 Learn",
      items: [
        { text: "Fundamentals", link: "/sia/fundamentals" },
        { text: "Resources", link: "/sia/resources" },
      ],
    },
  ],

  socials: [
    {
      icon: "github",
      link: "https://github.com/sia-guide",
    },
  ],
});
