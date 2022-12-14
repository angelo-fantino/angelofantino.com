import Layout from "../components/Layout";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
