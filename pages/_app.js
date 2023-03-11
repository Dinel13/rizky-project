import Layout from "components/layout/Layout";
import { AuthProvider } from "store/context";
import "styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
