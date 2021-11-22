import "../scss/main.scss";

import "antd/dist/antd.css";
import { AuthProvider } from "../hook/auth";

function MyApp({ Component, pageProps, router }) {
  return (
    <AuthProvider>
      <Component {...pageProps} router={router} />
    </AuthProvider>
  );
}

export default MyApp;
