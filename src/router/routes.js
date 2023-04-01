import About from "../pages/About";
import Admin from "../pages/admin/Admin";
import Basket from "../pages/basket/Basket";
import Catalog from "../pages/Catalog";
import ProductIdPage from "../pages/ProductIdPage";

export const routes = [
  { path: '/about', element: About },
  { path: '/catalog', element: Catalog },
  { path: '/catalog/:id', element: ProductIdPage },
  { path: '/basket', element: Basket },
  { path: '/admin', element: Admin },
]

