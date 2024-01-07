import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center mx-auto justify-center mt-4 space-y-6">
        <h1>Youly - A data analytic app for your youtube videos</h1>
        <Link href={"/analytics/dashboard"}> 
          <p>Get Started</p>
        </Link>
      </div>
    </>
  );
}
