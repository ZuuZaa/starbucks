import { RewardsLayout } from "components/layouts"
import { MainLayout } from "components/layouts/main"
import { Gifts } from "pages/Gifts"
import { Home } from "pages/Home"
import { Join } from "pages/Join"
import { Login } from "pages/Login"
import { Menu } from "pages/Menu"
import { Rewards, RewardsApp } from "pages/Rewards"
import { Location } from "pages/location"
import { Route, Routes } from "react-router-dom"


export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="menu" element={<Menu />} />
                <Route path="rewards" element={<RewardsLayout />}>
                    <Route index element={<Rewards/>}/>
                    <Route path="app" element={<RewardsApp/>}/>
                </Route>
                <Route path="gifts" element={<Gifts />} />
                <Route path="location" element={<Location />} />
                <Route path="login" element={<Login />} />
                <Route path="join" element={<Join />} />
            </Route>
        </Routes>
    )
}