import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000",
          color: "#10B981",
          fontSize: 72,
          fontWeight: 800,
          letterSpacing: -1,
        }}
      >
        ASPIS Network
      </div>
    ),
    size
  );
}
