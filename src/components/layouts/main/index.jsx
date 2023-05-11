import { Footer } from "components/footer";
import { Header } from "components/header";
import { Outlet, useLocation } from "react-router-dom";
import './style.scss';


export const MainLayout = () => {

  const path = useLocation()

  return (
    <div className="main-layout">
      <div className="progress-bar"></div>
      <Header />
      <div className="page-layout">
        <Outlet />
      </div>
      { path.pathname !== '/location' && <Footer />}
    </div>
  )
}
