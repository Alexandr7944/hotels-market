import About from "../pages/About";
import Admin from "../pages/admin/Admin";
import Basket from "../pages/basket/Basket";
import Catalog from "../pages/Catalog";
import HomePage from "../pages/homePage/HomePage";
import ProductIdPage from "../pages/ProductIdPage";

export const routes = [
  { path: '/hotel-market/about', element: About },
  { path: '/hotel-market/catalog', element: Catalog },
  { path: '/hotel-market/catalog/:id', element: ProductIdPage },
  { path: '/hotel-market/basket', element: Basket },
  { path: '/hotel-market/admin', element: Admin },
  { path: '/hotel-market/home', element: HomePage },
]

