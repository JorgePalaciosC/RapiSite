import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function Layout(){
      return (
    <>
       <Header />
      <main>
        <Outlet /> {/* AQUI se cargan las páginas */}
      </main>
      {/* <Footer /> */}
    </>
  )
};

export default Layout;