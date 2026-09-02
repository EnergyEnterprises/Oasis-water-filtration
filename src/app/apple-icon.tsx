import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A2F36",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            width: 88,
            height: 110,
            background: "#E8F3F1",
            borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
          }}
        />
      </div>
    ),
    size,
  );
}
