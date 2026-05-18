import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = "Alaa Shammout computer engineering portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f8fafc",
          color: "#0f172a",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid #cbd5e1",
            borderRadius: "18px",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            padding: "56px",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#0f766e",
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Computer Engineering Portfolio
          </div>
          <div
            style={{
              fontSize: "82px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              color: "#334155",
              fontSize: "40px",
              fontWeight: 500,
              lineHeight: 1.25,
              maxWidth: "900px",
            }}
          >
            {siteConfig.positioning}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
