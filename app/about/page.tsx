import Link from "next/link";
import FAQ from "../components/ui/about/faq";

export default function AboutPage() {
  return (
    <div>
      <div className="mt-10 ml-4">
        <Link href="/">
          <div className="text-sm font-semibold leading-7 text-[#4fadca] hover:text-[#4fadca]/70 font-sans">
            <span aria-hidden="true">&larr;</span> Back
          </div>
        </Link>
      </div>
      <div className="flex justify-center -mt-10 -mb-36">
        <img
          src="/img/logos/ceelo-logo-2.png"
          className="w-60 md:w-96"
          alt="Cee Lo logo"
        />
      </div>
      <FAQ />
    </div>
  );
}
