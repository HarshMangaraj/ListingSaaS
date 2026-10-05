import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

type LogoProps = {
  light?: boolean;
};

export function Logo({ light = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold tracking-wide ${
          light ? "bg-accent text-ink" : "bg-ink text-accent"
        }`}
      >
        LK
      </span>
      <span className={`text-[17px] font-semibold tracking-tight ${light ? "text-white" : "text-ink"}`}>
        {SITE_NAME}
      </span>
    </Link>
  );
}
