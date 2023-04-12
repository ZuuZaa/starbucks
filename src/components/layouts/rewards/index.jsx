import { Outlet } from "react-router-dom";
import './style.scss';


export const RewardsLayout = () => {
  return (
    <main className="rewards-layout">
        <Outlet/>
    </main>
  )
}
