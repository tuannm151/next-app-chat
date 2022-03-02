import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Auth from "../components/Auth";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Auth />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
