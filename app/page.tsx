import Image from "next/image";
import { socialLinks } from "./lib/config";
import BuyMeACoffe from "./components/bmc";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="profile rounded-full block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Hello!</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am Notenlish, I create projects and write about them here. Most of
          my experience is related to game development, but I also have
          experience with web development.
        </p>
        <p>
          I use Python and TypeScript generally. I've mostly dabbled with
          Next.js, React, and Tailwind CSS. I also have experience with Django
          and FastApi.
        </p>
        <p>
          You can find me on{" "}
          <a href={socialLinks.twitter} target="_blank">
            Twitter
          </a>{" "}
          and{" "}
          <a href={socialLinks.github} target="_blank">
            GitHub
          </a>
          . Contact me via the <a href="/contact">Contact</a> page.
        </p>
        <p>
          I also have an{" "}
          <a href="https://notenlish.itch.io" target="_blank">
            itch.io
          </a>{" "}
          page.
        </p>
      </div>
      <BuyMeACoffe />
    </section>
  );
}
