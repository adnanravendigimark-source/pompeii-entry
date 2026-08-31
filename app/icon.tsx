import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#243010",
          borderRadius: "14px",
          border: "2.5px solid #B58A38",
          boxSizing: "border-box",
        }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 64 64"
          fill="none"
        >
          {/* Classical Roman Temple Pediment (Roof) */}
          <path d="M32 14L52 24H12L32 14Z" fill="#B58A38" />
          <path d="M32 17.5L47 23H17L32 17.5Z" fill="#243010" fillOpacity="0.35" />

          {/* Horizontal Entablature Architrave Bar */}
          <rect x="12" y="25" width="40" height="3" rx="0.5" fill="#FAF9F6" />

          {/* 4 Classical Fluted Columns */}
          <rect x="15.5" y="29.5" width="4.5" height="15" rx="0.5" fill="#FAF9F6" />
          <rect x="24.5" y="29.5" width="4.5" height="15" rx="0.5" fill="#FAF9F6" />
          <rect x="35" y="29.5" width="4.5" height="15" rx="0.5" fill="#FAF9F6" />
          <rect x="44" y="29.5" width="4.5" height="15" rx="0.5" fill="#FAF9F6" />

          {/* Upper Stepped Base */}
          <rect x="13.5" y="45.5" width="37" height="2.5" rx="0.5" fill="#B58A38" />
          {/* Lower Stepped Base Platform */}
          <rect x="10.5" y="48.5" width="43" height="3" rx="0.5" fill="#FAF9F6" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
