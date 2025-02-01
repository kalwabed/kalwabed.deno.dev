import Layout from "../components/Layout.tsx";
import SuperCenter from "../components/SuperCenter.tsx";

export default function Home() {
  return (
    <Layout>
      <SuperCenter>
        <div className="flex flex-col">
          <div className="space-y-3">
            <p className="text-3xl md:text-4xl font-bold px-3 md:px-0">
              Hello,{" "}
              <a
                href="https://www.kalwabed.com"
                className="transition hover:no-underline underline hover:text-blue-500 focus:outline-none"
              >
                Kalwabed
              </a>{" "}
              here.
            </p>
            <div className="text-gray-600 font-light tracking-wide text-center">
              Website powered by{" "}
              <a
                href="https://deno.land"
                className="transition hover:no-underline underline hover:text-blue-500 focus:outline-none"
              >
                Deno
              </a>
            </div>
          </div>
        </div>
      </SuperCenter>
    </Layout>
  );
}
