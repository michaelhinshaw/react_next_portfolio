import "tailwindcss/tailwind.css";
import Link from "next/link";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
