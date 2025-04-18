import NextLink from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export default function Link(props: ComponentProps<typeof NextLink>) {
  return (
    <NextLink
      {...props}
      className={twMerge("hover:opacity-50", props.className)}
    />
  );
}
