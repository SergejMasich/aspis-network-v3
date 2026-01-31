import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ASPIS Network",
    short_name: "ASPIS",
    description:
      "An immutable shield for your capital. Secure. Transparent. Adaptive.",
    start_url: "/en",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      // На первом этапе иконки можно оставить логическими.
      // Позже добавим реальные png в /public и обновим массив.
      { src: "/icon", sizes: "512x512", type: "image/png" },
    ],
  };
}
