import Image from "next/image";
import Categories from "./components/Categories";


export default function Home() {
  return (
   <main className="max-w-[1500px] mx-auto px-6">
        {/* Nexus Flow
        <h1 className="text-nexus">
          Django nexus flow
        </h1>
        <h2 className="text-nexus-dark">
          full-stack development environment for Django and Next.js.
        </h2> */}
        <Categories />
      </main>
  );
}
