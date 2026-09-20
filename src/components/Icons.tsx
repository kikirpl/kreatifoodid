import type { ReactElement, SVGProps } from "react";

/**
 * Ikon garis sederhana — mengikuti bahasa visual lingkaran ikon pada
 * company profile PT Kreatif Food Indonesia.
 */

export type IconName =
  | "snowflake"
  | "pin"
  | "store"
  | "recycle"
  | "shield"
  | "leaf"
  | "hourglass"
  | "globe"
  | "utensils"
  | "trending"
  | "factory"
  | "truck"
  | "handshake"
  | "tag"
  | "scissors"
  | "warehouse"
  | "check"
  | "heart"
  | "bone"
  | "drumstick"
  | "target"
  | "sparkle"
  | "thermometer"
  | "award"
  | "crown"
  | "file"
  | "stamp"
  | "scale"
  | "building"
  | "coins"
  | "user"
  | "user-shield"
  | "wing";

const paths: Record<IconName, ReactElement> = {
  snowflake: (
    <>
      <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />
      <path d="M12 6.4 9.6 4.4M12 6.4l2.4-2M12 17.6l-2.4 2M12 17.6l2.4 2" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="2.8" />
    </>
  ),
  store: (
    <>
      <path d="M4 9h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
      <path d="M3.5 9 5 4h14l1.5 5" />
      <path d="M9.5 20v-5h5v5" />
    </>
  ),
  recycle: (
    <>
      <path d="M8.5 4.8 12 3l3.5 1.8" />
      <path d="M12 3v7" />
      <path d="M5.2 17.4 4 13.6l3.6-1.4" />
      <path d="m4 13.6 6 3.5" />
      <path d="M18.8 17.4 20 13.6l-3.6-1.4" />
      <path d="m20 13.6-6 3.5" />
      <path d="M7.5 20.5h9" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4.4 2.9 7.7 7 9 4.1-1.3 7-4.6 7-9V6z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4c0 8-4.8 12.5-10.5 12.5A4.5 4.5 0 0 1 5 12c0-5 5.5-8 15-8z" />
      <path d="M4.5 20C7 15 11 11.5 16 9.5" />
    </>
  ),
  hourglass: (
    <>
      <path d="M7 3h10M7 21h10" />
      <path d="M7 3c0 4 4 5.4 4 9s-4 5-4 9" />
      <path d="M17 3c0 4-4 5.4-4 9s4 5 4 9" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9.5h17M3.5 14.5h17" />
      <path d="M12 3c2.6 3 3.8 6 3.8 9S14.6 18 12 21c-2.6-3-3.8-6-3.8-9S9.4 6 12 3z" />
    </>
  ),
  utensils: (
    <>
      <path d="M7 3v8M5 3v4a2 2 0 0 0 4 0V3M7 11v10" />
      <path d="M17 3c-1.6 1.2-2.4 3-2.4 5.2 0 1.4.8 2.3 2.4 2.5V21" />
    </>
  ),
  trending: (
    <>
      <path d="M4 17 9.5 11l3.5 3.2L20 7" />
      <path d="M15.5 7H20v4.4" />
    </>
  ),
  factory: (
    <>
      <path d="M4 20V10l5 3.2V10l5 3.2V10l5 3.2V20z" />
      <path d="M4 20h16" />
      <path d="M7.5 20v-3h2.5v3" />
    </>
  ),
  truck: (
    <>
      <path d="M3 7h10v9H3z" />
      <path d="M13 10.5h4l3 3.2V16h-7z" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </>
  ),
  handshake: (
    <>
      <path d="m3 11 3-3 3.5 1.2L12 8l2.5 1.2L18 8l3 3" />
      <path d="M6.5 13.5 9 16l1.6-1.4L12.4 16l1.6-1.4L16 16l2-2" />
      <path d="M3 11v3.5M21 11v3.5" />
    </>
  ),
  tag: (
    <>
      <path d="M4 11.2V5a1 1 0 0 1 1-1h6.2a2 2 0 0 1 1.4.6l7 7a2 2 0 0 1 0 2.8l-5.8 5.8a2 2 0 0 1-2.8 0l-7-7A2 2 0 0 1 4 11.2z" />
      <circle cx="8.2" cy="8.2" r="1.4" />
    </>
  ),
  scissors: (
    <>
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="6" cy="18" r="2.4" />
      <path d="M8 7.6 19 18M8 16.4 19 6" />
    </>
  ),
  warehouse: (
    <>
      <path d="M3 20V9.6L12 5l9 4.6V20z" />
      <path d="M7 20v-6h10v6" />
      <path d="M7 17h10" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.4 12.2 2.4 2.4 4.8-5" />
    </>
  ),
  heart: <path d="M12 20s-7-4.2-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.8-7 9-7 9z" />,
  bone: (
    <>
      <path d="M6.2 9.4a2.6 2.6 0 1 1 2.2-4.2 2.6 2.6 0 0 1 4 2l5 5a2.6 2.6 0 0 1 3.4 3.9 2.6 2.6 0 0 1-4.4 1.9 2.6 2.6 0 0 1-4-2l-5-5a2.6 2.6 0 0 1-1.2-1.6z" />
    </>
  ),
  drumstick: (
    <>
      <path d="M15.6 4.4a5 5 0 0 0-7.9 5.9l-.9 2.4 2.5-.9a5 5 0 0 0 6.3-7.4z" />
      <path d="m9.3 11.8-4.4 4.4a2.2 2.2 0 0 0 .3 3.4 2.2 2.2 0 0 0 3.3.2l4.4-4.4" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="12" cy="12" r="1.2" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3.5 13.6 9l5.4 1.6L13.6 12 12 17.5 10.4 12 5 10.6 10.4 9z" />
      <path d="M18.5 16.5 19.2 19l2.3.8-2.3.8-.7 2.4" />
    </>
  ),
  thermometer: (
    <>
      <path d="M13.5 13.2V5.5a2 2 0 0 0-4 0v7.7a4 4 0 1 0 4 0z" />
      <path d="M11.5 9.5v5.6" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="m8.6 13.2-1.2 7 4.6-2.4 4.6 2.4-1.2-7" />
    </>
  ),
  crown: (
    <>
      <path d="M4 17 3 7l5 3.6L12 4l4 6.6L21 7l-1 10z" />
      <path d="M4 20h16" />
    </>
  ),
  file: (
    <>
      <path d="M6 3h7.5L19 8.5V21H6z" />
      <path d="M13.5 3v5.5H19" />
      <path d="M9 13h6M9 16.5h4" />
    </>
  ),
  stamp: (
    <>
      <path d="M9 10.5c0-2-1.5-3-1.5-4.6A3.5 3.5 0 0 1 12 3a3.5 3.5 0 0 1 4.5 2.9c0 1.6-1.5 2.6-1.5 4.6z" />
      <path d="M5 14.5h14V18H5z" />
      <path d="M4 21h16" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16M7 20h10" />
      <path d="M5 8h14M5 8l-2.5 6h5zM19 8l2.5 6h-5z" />
    </>
  ),
  building: (
    <>
      <path d="M5 21V4h9v17" />
      <path d="M14 10h5v11" />
      <path d="M8 8h3M8 12h3M8 16h3M16.5 14h1M16.5 17.5h1" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="12" cy="7" rx="7" ry="3" />
      <path d="M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7" />
      <path d="M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M5 20c0-3.6 3.1-5.5 7-5.5s7 1.9 7 5.5" />
    </>
  ),
  "user-shield": (
    <>
      <circle cx="10" cy="8" r="3.2" />
      <path d="M4 20c0-3.3 2.7-5.2 6-5.2h1" />
      <path d="M17 12.2 14 13.4v2.8c0 1.8 1.2 3.2 3 3.8 1.8-.6 3-2 3-3.8v-2.8z" />
    </>
  ),
  wing: (
    <>
      <path d="M4 5c7 0 12 3.6 15.5 10.5" />
      <path d="M4 5c0 6.5 3.5 11 9.5 12.5" />
      <path d="M19.5 15.5 21 19l-3.6-.6" />
    </>
  ),
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

export default function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}