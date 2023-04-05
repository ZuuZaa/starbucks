import { MainLayout } from "components/layouts/MainLayout"
import { Gifts } from "pages/Gifts"
import { Home } from "pages/Home"
import { Join } from "pages/Join"
import { Location } from "pages/Location"
import { Login } from "pages/Login"
import { Menu } from "pages/Menu"
import { Rewards } from "pages/Rewards"
import { Route, Routes } from "react-router-dom"


export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="menu" element={<Menu />} />
                <Route path="rewards" element={<Rewards />} />
                <Route path="gifts" element={<Gifts />} />
                <Route path="location" element={<Location />} />
                <Route path="login" element={<Login />} />
                <Route path="join" element={<Join />} />
            </Route>
        </Routes>
    )
}