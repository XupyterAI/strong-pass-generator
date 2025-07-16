import { Html, Head, Main, NextScript } from "next/document";
import SEO from "./components/Head";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <SEO />
      </Head>
      <body className={`antialised`}>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
