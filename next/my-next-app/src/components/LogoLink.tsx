import Link from "./Link";

interface LogoLinkProps {
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export default function LogoLink({ href, icon: Icon }: LogoLinkProps) {
  return (
    <Link href={href}>
      <Icon className="fill-foreground w-8 h-8" />
    </Link>
  );
}
