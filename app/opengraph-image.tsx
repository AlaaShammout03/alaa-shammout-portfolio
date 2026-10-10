import { ImageResponse } from "next/og";
import { Logo } from "@/components/ui/logo";
import { siteConfig } from "@/data/site";

export const alt = "Alaa Shammout, software engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Chat apps show this image small, so it carries few words at large sizes.
// The page title and description appear under it and hold the detail.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f8fafc",
          color: "#0f172a",
          display: "flex",
          height: "100%",
          width: "100%",
        }}
      >
        <div style={{ background: "#0f766e", display: "flex", width: "14px" }} />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 88px 64px",
          }}
        >
          <Logo size={36} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: "124px",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                // The bundled font has one weight; the stroke makes it bold.
                WebkitTextStroke: "2.5px #0f172a",
              }}
            >
              {siteConfig.name}
            </div>
            <div
              style={{
                color: "#334155",
                fontSize: "52px",
                marginTop: "28px",
              }}
            >
              Software Engineer · Dubai, UAE
            </div>
            <div
              style={{
                color: "#0f766e",
                fontSize: "34px",
                marginTop: "18px",
              }}
            >
              React · Next.js · TypeScript · Spring Boot · FastAPI
            </div>
          </div>
          <div
            style={{
              borderTop: "2px solid #e2e8f0",
              color: "#64748b",
              display: "flex",
              fontSize: "30px",
              paddingTop: "28px",
            }}
          >
            alaa-shammout-portfolio.vercel.app
          </div>
        </div>
      </div>
    ),
    size,
  );
}
