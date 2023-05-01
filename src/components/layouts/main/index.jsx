import { Footer } from "components/footer";
import { Header } from "components/header";
import { Outlet } from "react-router-dom";
import './style.scss';


export const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <div className="page-layout">
        <Outlet />
      </div>
      <Footer />

    </div>
  )
}
