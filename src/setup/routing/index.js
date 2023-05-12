import { MainLayout } from "components/layouts/main"
import { Oleato } from "features/menu/oleato"
import { Product } from "features/menu/product"
import { Products } from "features/menu/products"
import { Gifts } from "pages/Gifts"
import { Home } from "pages/Home"
import { Join } from "pages/Join"
import { Login } from "pages/Login"
import { Menu } from "pages/Menu"
import { Rewards } from "pages/Rewards"
import { Location } from "pages/location"
import { Route, Routes } from "react-router-dom"


export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="menu" element={<Menu />}>
                    <Route index element={<Products />} />
                    <Route path=":id" element={<Product/>} />
                    <Route path=":cat/:subcat" element={<Oleato/>} />
                </Route>
                <Route path="rewards" element={<Rewards />} />
                <Route path="gifts" element={<Gifts />} />
                <Route path="location" element={<Location />} />
                <Route path="login" element={<Login />} />
                <Route path="join" element={<Join />} />
            </Route>
        </Routes>
    )
}