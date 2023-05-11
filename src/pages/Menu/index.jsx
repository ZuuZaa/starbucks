import { Products } from "features/menu/products";
import { Sidebar } from "features/menu/sidebar";
import './style.scss';

export const Menu = () => {

  return (
    <main className="menu-page">
      <Sidebar />
      <Products />
    </main>
  )
}
