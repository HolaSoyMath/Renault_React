import { createRoot } from 'react-dom/client'
import Login from "./pages/login/Login.jsx";
import AppHistorico from './pages/historico/AppHistorico.jsx';

function Componente() {
  const local = (window.location.pathname);
  if (local === "/") {
    return <Login />
  } else if(local === "/historico") {
    return <AppHistorico />;
  };
}

createRoot(document.getElementById("root")).render(Componente());
