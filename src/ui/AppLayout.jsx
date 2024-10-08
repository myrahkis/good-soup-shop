import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const nav = useNavigation();
  const isLoading = nav.state === "loading";

  // console.log(nav);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] text-2xl selection:bg-secondary-color selection:text-light-bg-color extra-small:">
      {isLoading && <Loader />}
      <Header />
      <main className="scrollbar overflow-y-auto">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
