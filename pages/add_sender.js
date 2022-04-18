import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>create order - sender</title>
        <Script src="https://telegram.org/js/telegram-web-app.js" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
        <input type="date" value="whatever" />
      </main>
    </div>
  )
}