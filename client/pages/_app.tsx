import { SWRConfig } from "swr";
import Layout from "../components/Layout/Layout";
import { axiosConnect } from "../config/axios";
import AuthProvider from "../context/auth";
import "../styles/globals.css";
import "../utils/customIcon/style.css";

function MyApp({ Component, pageProps }) {
  const value = {
    fetcher: (url) =>
      axiosConnect
        .get(url)
        .then((res) => res.data)
        .catch((err) => {
          throw err.response.data;
        }),
  };

  return (
    <AuthProvider>
      <SWRConfig value={value}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </AuthProvider>
  );
}

export default MyApp;
