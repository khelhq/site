import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Khel — We build digital products that work";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#141414",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Main content row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
        >
          {/* K logo mark */}
          <svg
            width="48"
            height="56"
            viewBox="0 0 48 56"
            fill="none"
            style={{ flexShrink: 0 }}
          >
            <path
              d="M4 4 L4 52"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M4 30 L32 4"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M16 24 L36 52"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          {/* khel. text */}
          <span
            style={{
              fontSize: "44px",
              color: "white",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            khel.
          </span>

          {/* Vertical divider */}
          <div
            style={{
              width: "1px",
              height: "48px",
              backgroundColor: "rgba(255,255,255,0.3)",
              marginLeft: "8px",
              marginRight: "8px",
            }}
          />

          {/* Tagline */}
          <span
            style={{
              fontSize: "36px",
              color: "rgba(255,255,255,0.9)",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            We build digital products that work
          </span>
        </div>

        {/* CTA pill — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "48px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            backgroundColor: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "999px",
            padding: "10px 24px",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.85)",
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            See our work →
          </span>
        </div>

        {/* Subtle URL — bottom left */}
        <span
          style={{
            position: "absolute",
            bottom: "44px",
            left: "48px",
            fontSize: "16px",
            color: "rgba(255,255,255,0.35)",
            fontWeight: 300,
          }}
        >
          khelhq.vercel.app
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
