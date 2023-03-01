import { Routes, Route } from "react-router-dom";
import { Categorias } from "./pages/Categorias";
import { Produtos } from "./pages/Produtos";

import { Home } from "./pages/Home";
import { Error } from "./pages/Error";

export function Router() {
  return (
    <Routes>
     
      <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/produtos" element={<Produtos />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}