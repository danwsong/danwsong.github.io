import {
  EmailIcon,
  GitHubIcon,
  Link,
  LinkedInIcon,
  LogoLink,
  ResumeIcon,
} from "@/components";

export default function Home() {
  return (
    <div>
      <p className="text-4xl mb-8">
        Hey, I&apos;m <span className="text-accent font-bold">Daniel</span>!{" "}
        <span className="inline-block animate-wave">👋</span>
      </p>
      <div className="flex flex-col gap-4">
        <p>
          I&apos;m a software engineer at{" "}
          <Link
            href="https://www.ziprecruiter.com/"
            className="text-ziprecruiter"
          >
            ZipRecruiter
          </Link>
          . I studied{" "}
          <Link
            href="https://uwaterloo.ca/future-students/programs/computer-science"
            className="text-accent"
          >
            computer science
          </Link>{" "}
          at the University of Waterloo.
        </p>
        <p>
          In my spare time, I enjoy playing basketball 🏀, learning new
          languages (working on Japanese right now! 🌸), and taking{" "}
          <Link href="/photos" className="text-accent">
            photos
          </Link>{" "}
          on 35mm film 📷.
        </p>
        <p>Enjoy your stay!</p>
        <div className="flex gap-4">
          <LogoLink href="mailto:dan.w.song@gmail.com" icon={EmailIcon} />
          <LogoLink href="https://github.com/danwsong" icon={GitHubIcon} />
          <LogoLink
            href="https://www.linkedin.com/in/danwsong/"
            icon={LinkedInIcon}
          />
          <LogoLink href="/resume.pdf" icon={ResumeIcon} />
        </div>
      </div>
    </div>
  );
}
