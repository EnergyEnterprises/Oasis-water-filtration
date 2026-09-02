import { ImageResponse } from "next/og";

export const alt = "Oasis Water Filtration — Treasure Valley well-water filtration";
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
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(160deg, #08262c 0%, #0c3d45 50%, #155e63 100%)",
          color: "#f3ede3",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#e8f3f1",
              color: "#155e63",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            O
          </div>
          <div style={{ fontSize: 28, letterSpacing: 1 }}>Oasis Water Filtration</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.1,
              maxWidth: 900,
              fontWeight: 600,
            }}
          >
            Whole-home filtration for Treasure Valley wells.
          </div>
          <div style={{ fontSize: 28, color: "#d8e8e6" }}>
            Meridian, Idaho · 208-573-0859
          </div>
        </div>
      </div>
    ),
    size,
  );
}
