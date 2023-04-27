import store from "@/src/store/store";
import { Provider } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <Provider store={store}>
      <Header />
      <main className="mx-auto my-12">{props.children}</main>
      <Footer />
    </Provider>
  );
}

export default Layout;
