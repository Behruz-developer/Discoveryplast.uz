import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomeLoyout from "./Pages/HomeLoyout";
import Home from "./Pages/Home";
import './assets/sass/main.scss'
import Categories_page from "./Pages/Categories_page";
import News_page from "./Pages/News_page";
import Products_page from "./Pages/Products_page";
import Categorie_slug from "./Pages/Categorie_slug";
import Products_slug from "./Pages/Products_slug";
import News_slug from "./Pages/News_slug";


const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeLoyout />}>
            <Route path="/" element={<Home />} />
            <Route path="/category_page" element={<Categories_page />} />
            <Route path="/category_page/:slug" element={<Categorie_slug />} />
            <Route path="/products_page" element={<Products_page />} />
            <Route path="/products_page/:slug" element={<Products_slug />} />
            <Route path="/news_page" element={<News_page />} />
            <Route path="/news_page/:slug" element={<News_slug />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
