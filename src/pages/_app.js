import "../scss/main.scss";

import "antd/dist/antd.css";

function MyApp({ Component, pageProps,router }) {
  return <Component {...pageProps } router={router}  />;
}

export default MyApp;
