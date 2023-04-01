import About from "../pages/About";
import Admin from "../pages/admin/Admin";
import Basket from "../pages/basket/Basket";
import Catalog from "../pages/Catalog";
import ProductIdPage from "../pages/ProductIdPage";

export const routes = [
  { path: '/hotels-market/about', element: About },
  { path: '/hotels-market/catalog', element: Catalog },
  { path: '/hotels-market/catalog/:id', element: ProductIdPage },
  { path: '/hotels-market/basket', element: Basket },
  { path: '/hotels-market/admin', element: Admin },
]

