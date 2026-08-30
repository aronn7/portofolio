import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  const getClsx = () => {
    if (typeof clsx === "function") return clsx;
    if (clsx && typeof clsx.clsx === "function") return clsx.clsx;
    return (...args) =>
      args
        .flat(Infinity)
        .filter((x) => typeof x === "string" && x.trim().length > 0)
        .join(" ");
  };

  const activeClsx = getClsx();
  return twMerge(activeClsx(inputs));
}

export default cn;
