type IconProps = {
  className?: string;
};

export function IconSediment({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
      <circle cx="12" cy="26" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="20" cy="29" r="2.2" fill="currentColor" />
      <circle cx="27" cy="25" r="2.6" fill="currentColor" opacity="0.55" />
      <path
        d="M8 16c3-5 8-8 12-8s9 3 12 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconHardness({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
      <path
        d="M12 28V14l8-5 8 5v14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M12 22h16" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function IconIron({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
      <path
        d="M20 8c5 6 9 11 9 16a9 9 0 1 1-18 0c0-5 4-10 9-16Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M16 24c.6 2.4 2 4 4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconSulfur({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
      <path
        d="M14 26c0-4 3-5 6-7s6-3 6-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M20 30a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function IconTaste({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
      <path
        d="M12 16c2-4 6-6 8-6s6 2 8 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10 22h20v6a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6v-6Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function IconUv({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
      <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M20 8v4M20 28v4M8 20h4M28 20h4M11.5 11.5l2.8 2.8M25.7 25.7l2.8 2.8M11.5 28.5l2.8-2.8M25.7 14.3l2.8-2.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export const treatmentIcons = {
  sediment: IconSediment,
  hardness: IconHardness,
  iron: IconIron,
  sulfur: IconSulfur,
  "taste-odor": IconTaste,
  uv: IconUv,
} as const;
