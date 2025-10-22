// Define ColorStyles
export type ColorStyles = {
  id: number;
  name?: string;
  industry?: industry[];
  header?: string;
  bg?: string;
  hoverBg?: string;
  text?: string;
  border?: string;
  hoverBorder?: string;
  link?: string;
  hoverLink?: string;
  groupHoverLink?: string;
  groupHoverBorder?: string;
  headerMenuBefore?: string;
  navAfter?: string;
};

export type industry = {
  name: string;
};

// Color mapping for different UI elements
export const colorMapBase: Record<string, ColorStyles> = {
  primary: {
    id: 1,
    name: "primary",
    industry: [{ name: "primary" }, { name: "Fitness" }],
    bg: "bg-primary-500",
    header: "bg-primary-900",
    hoverBg: "hover:bg-primary-400",
    text: "text-primary-500",
    border: "border-primary-500",
    hoverBorder: "hover:border-primary-500",
    link: "text-primary-500",
    hoverLink: "hover:text-primary-500",
    groupHoverLink: "group-hover:text-primary-500",
    groupHoverBorder: "group-hover:border-primary-500",
    headerMenuBefore: "group-hover:before:bg-primary-500",
    navAfter: "after:bg-primary-500",
  },
  red: {
    id: 2,
    name: "Red",
    industry: [{ name: "Fitness" }, { name: "Food" }],
    bg: "bg-red-500",
    header: "bg-red-900",
    hoverBg: "hover:bg-red-400",
    text: "text-red-500",
    border: "border-red-500",
    hoverBorder: "hover:border-red-500",
    link: "text-red-500",
    hoverLink: "hover:text-red-500",
    groupHoverLink: "group-hover:text-red-500",
    groupHoverBorder: "group-hover:border-red-500",
    headerMenuBefore: "group-hover:before:bg-red-500",
    navAfter: "after:bg-red-500",
  },
  blue: {
    id: 3,
    name: "Blue",
    industry: [
      { name: "Technology" },
      { name: "Travel" },
      { name: "Education" },
      { name: "Spa" },
    ],
    bg: "bg-blue-500",
    header: "bg-[#263c97]",
    hoverBg: "hover:bg-blue-600",
    text: "text-blue-500",
    border: "border-blue-500",
    hoverBorder: "hover:border-blue-500",
    link: "text-blue-700",
    hoverLink: "hover:text-blue-500",
    groupHoverLink: "group-hover:text-blue-500",
    groupHoverBorder: "group-hover:border-blue-500",
    headerMenuBefore: "group-hover:before:bg-blue-500",
    navAfter: "after:bg-blue-500",
  },
  orange: {
    id: 4,
    name: "Orange",
    industry: [{ name: "Fitness" }, { name: "Food" }, { name: "Technology" }],
    header: "bg-orange-900",
    bg: "bg-orange-500",
    hoverBg: "hover:bg-orange-400",
    text: "text-orange-500",
    border: "border-orange-500",
    hoverBorder: "hover:border-orange-500",
    link: " text-orange-700",
    hoverLink: "hover:text-orange-500",
    groupHoverLink: " group-hover:text-orange-500",
    groupHoverBorder: "group-hover:border-orange-500",
    headerMenuBefore: "group-hover:before:bg-orange-500",
    navAfter: "after:bg-orange-500",
  },
  pink: {
    id: 5,
    name: "Pink",
    industry: [{ name: "Beauty" }, { name: "Mother and Baby" }],
    header: "bg-pink-900",
    bg: "bg-pink-500",
    hoverBg: "hover:bg-pink-400",
    text: "text-pink-500",
    border: "border-pink-500",
    hoverBorder: "hover:border-pink-500",
    link: " text-pink-700",
    hoverLink: "hover:text-pink-500",
    groupHoverLink: " group-hover:text-pink-700",
    groupHoverBorder: "group-hover:border-pink-500",
    headerMenuBefore: "group-hover:before:bg-pink-500",
    navAfter: "after:bg-pink-500",
  },
  green: {
    id: 6,
    name: "Green",
    industry: [
      { name: "Agriculture" },
      { name: "Food" },
      { name: "Mother and Baby" },
    ],
    header: "bg-green-900",
    bg: "bg-green-500",
    hoverBg: "hover:bg-green-400",
    text: "text-green-500",
    border: "border-green-500",
    hoverBorder: "hover:border-green-500",
    link: " text-green-700",
    hoverLink: "hover:text-green-500",
    groupHoverLink: " group-hover:text-green-700",
    groupHoverBorder: "group-hover:border-green-500",
    headerMenuBefore: "group-hover:before:bg-green-500",
    navAfter: "after:bg-green-500",
  },
  sky: {
    id: 7,
    name: "Sky",
    industry: [
      { name: "Technology" },
      { name: "Travel" },
      { name: "Fitness" },
      { name: "Spa" },
      { name: "Mother and Baby" },
    ],
    header: "bg-sky-900",
    bg: "bg-sky-500",
    hoverBg: "hover:bg-sky-400",
    text: "text-sky-500",
    border: "border-sky-500",
    hoverBorder: "hover:border-sky-500",
    link: " text-sky-700",
    hoverLink: "hover:text-sky-500",
    groupHoverLink: " group-hover:text-sky-700",
    groupHoverBorder: "group-hover:border-sky-500",
    headerMenuBefore: "group-hover:before:bg-sky-500",
    navAfter: "after:bg-sky-500",
  },
  cyan: {
    id: 8,
    name: "Cyan",
    industry: [{ name: "Technology" }, { name: "Travel" }, { name: "Spa" }],
    header: "bg-cyan-900",
    bg: "bg-cyan-500",
    hoverBg: "hover:bg-cyan-400",
    text: "text-cyan-600",
    border: "border-cyan-500",
    hoverBorder: "hover:border-cyan-500",
    link: " text-cyan-700",
    hoverLink: "hover:text-cyan-500",
    groupHoverLink: " group-hover:text-cyan-700",
    groupHoverBorder: "group-hover:border-cyan-500",
    headerMenuBefore: "group-hover:before:bg-cyan-500",
    navAfter: "after:bg-cyan-500",
  },
  slate: {
    id: 9,
    name: "Slate",
    industry: [{ name: "Technology" }, { name: "Education" }],
    header: "bg-slate-900",
    bg: "bg-slate-500",
    hoverBg: "hover:bg-slate-400",
    text: "text-slate-500",
    border: "border-slate-500",
    hoverBorder: "hover:border-slate-500",
    link: " text-slate-700",
    hoverLink: "hover:text-slate-500",
    groupHoverLink: " group-hover:text-slate-700",
    groupHoverBorder: "group-hover:border-slate-500",
    headerMenuBefore: "group-hover:before:bg-slate-500",
    navAfter: "after:bg-slate-500",
  },
  lime: {
    id: 10,
    name: "lime",
    industry: [{ name: "Agriculture" }, { name: "Fitness" }],
    header: "bg-lime-900",
    bg: "bg-lime-500",
    hoverBg: "hover:bg-lime-400",
    text: "text-lime-500",
    border: "border-lime-500",
    hoverBorder: "hover:border-lime-500",
    link: " text-lime-700",
    hoverLink: "hover:text-lime-500",
    groupHoverLink: " group-hover:text-lime-700",
    groupHoverBorder: "group-hover:border-lime-500",
    headerMenuBefore: "group-hover:before:bg-lime-500",
    navAfter: "after:bg-lime-500",
  },
  teal: {
    id: 11,
    name: "teal",
    industry: [
      { name: "Travel" },
      { name: "Education" },
      { name: "Spa" },
      { name: "Agriculture" },
    ],
    header: "bg-teal-900",
    bg: "bg-teal-500",
    hoverBg: "hover:bg-teal-400",
    text: "text-teal-500",
    border: "border-teal-500",
    hoverBorder: "hover:border-teal-500",
    link: " text-teal-700",
    hoverLink: "hover:text-teal-500",
    groupHoverLink: " group-hover:text-teal-700",
    groupHoverBorder: "group-hover:border-teal-500",
    headerMenuBefore: "group-hover:before:bg-teal-500",
    navAfter: "after:bg-teal-500",
  },
  rose: {
    id: 12,
    name: "rose",
    industry: [
      { name: "Beauty" },
      { name: "Food" },
      { name: "Mother and Baby" },
    ],
    header: "bg-rose-900",
    bg: "bg-rose-500",
    hoverBg: "hover:bg-rose-400",
    text: "text-rose-500",
    border: "border-rose-500",
    hoverBorder: "hover:border-rose-500",
    link: " text-rose-700",
    hoverLink: "hover:text-rose-500",
    groupHoverLink: " group-hover:text-rose-700",
    groupHoverBorder: "group-hover:border-rose-500",
    headerMenuBefore: "group-hover:before:bg-rose-500",
    navAfter: "after:bg-rose-500",
  },
  emerald: {
    id: 13,
    name: "emerald",
    industry: [
      { name: "Education" },
      { name: "Agriculture" },
      { name: "Travel" },
    ],
    header: "bg-emerald-900",
    bg: "bg-emerald-500",
    hoverBg: "hover:bg-emerald-400",
    text: "text-emerald-500",
    border: "border-emerald-500",
    hoverBorder: "hover:border-emerald-500",
    link: " text-emerald-700",
    hoverLink: "hover:text-emerald-500",
    groupHoverLink: " group-hover:text-emerald-700",
    groupHoverBorder: "group-hover:border-emerald-500",
    headerMenuBefore: "group-hover:before:bg-emerald-500",
    navAfter: "after:bg-emerald-500",
  },
  amber: {
    id: 14,
    name: "amber",
    industry: [
      { name: "Food" },
      { name: "Education" },
      { name: "Agriculture" },
      { name: "Mother and Baby" },
    ],
    header: "bg-amber-900",
    bg: "bg-amber-500",
    hoverBg: "hover:bg-amber-400",
    text: "text-amber-500",
    border: "border-amber-500",
    hoverBorder: "hover:border-amber-500",
    link: " text-amber-700",
    hoverLink: "hover:text-amber-500",
    groupHoverLink: " group-hover:text-amber-700",
    groupHoverBorder: "group-hover:border-amber-500",
    headerMenuBefore: "group-hover:before:bg-amber-500",
    navAfter: "after:bg-amber-500",
  },
  fuchsia: {
    id: 15,
    name: "fuchsia",
    industry: [{ name: "Beauty" }],
    header: "bg-fuchsia-900",
    bg: "bg-fuchsia-500",
    hoverBg: "hover:bg-fuchsia-400",
    text: "text-fuchsia-500",
    border: "border-fuchsia-500",
    hoverBorder: "hover:border-fuchsia-500",
    link: " text-fuchsia-700",
    hoverLink: "hover:text-fuchsia-500",
    groupHoverLink: " group-hover:text-fuchsia-700",
    groupHoverBorder: "group-hover:border-fuchsia-500",
    headerMenuBefore: "group-hover:before:bg-fuchsia-500",
    navAfter: "after:bg-fuchsia-500",
  },
  purple: {
    id: 15,
    name: "purple",
    industry: [{ name: "Beauty" }],
    header: "bg-purple-900",
    bg: "bg-purple-500",
    hoverBg: "hover:bg-purple-400",
    text: "text-purple-500",
    border: "border-purple-500",
    hoverBorder: "hover:border-purple-500",
    link: " text-purple-700",
    hoverLink: "hover:text-purple-500",
    groupHoverLink: " group-hover:text-purple-700",
    groupHoverBorder: "group-hover:border-purple-500",
    headerMenuBefore: "group-hover:before:bg-purple-500",
    navAfter: "after:bg-purple-500",
  },
  violet: {
    id: 15,
    name: "violet",
    industry: [{ name: "Beauty" }, { name: "Spa" }],
    header: "bg-violet-900",
    bg: "bg-violet-500",
    hoverBg: "hover:bg-violet-400",
    text: "text-violet-500",
    border: "border-violet-500",
    hoverBorder: "hover:border-violet-500",
    link: " text-violet-700",
    hoverLink: "hover:text-violet-500",
    groupHoverLink: " group-hover:text-violet-700",
    groupHoverBorder: "group-hover:border-violet-500",
    headerMenuBefore: "group-hover:before:bg-violet-500",
    navAfter: "after:bg-violet-500",
  },
};

export const colorMap: Record<string, ColorStyles> = colorMapBase;

// Updated SortedColorMapItem type with string industry
export type SortedColorMapItem = {
  key: string;
  industry: string;
} & Omit<ColorStyles, "industry">;

// Simplify the approach to create the sorted array
export const sortedColorMapArray: SortedColorMapItem[] = [];

// Fill the array with entries
Object.entries(colorMap).forEach(([key, value]) => {
  if (!value.industry || value.industry.length === 0) {
    const { industry, ...rest } = value;
    sortedColorMapArray.push({
      key,
      industry: "No Industry",
      ...rest,
    });
  } else {
    value.industry.forEach((ind) => {
      const { industry, ...rest } = value;
      sortedColorMapArray.push({
        key,
        industry: ind.name,
        ...rest,
      });
    });
  }
});

// Sort the array by industry name
export const sortedColorMapByIndustry = [...sortedColorMapArray].sort(
  (a, b) => {
    return a.industry.localeCompare(b.industry);
  }
);
