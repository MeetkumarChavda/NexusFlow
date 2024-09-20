import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="">
        Nexus Flow
        <h1 className="text-nexus">
          Django nexus flow
        </h1>
        <h2 className="text-nexus-dark">
          full-stack development environment for Django and Next.js.
        </h2>
      </main>
    </div>
  );
}
