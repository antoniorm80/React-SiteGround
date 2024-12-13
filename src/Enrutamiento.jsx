import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./Pages/components/NavBar";
import { HomePage } from "./Pages/HomePage";
import { ContactPage } from "./Pages/ContactPage";
import { AboutPage } from "./Pages/AboutPage";
import { UsuarioProvider } from "./Pages/context/UsuarioProvider";
import { LoginPage } from "./Pages/LoginPage";


export const Enrutamiento = () => {
  return (
    <UsuarioProvider>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={ <HomePage></HomePage>  }></Route>
        <Route path="/login" element={ <LoginPage></LoginPage>  } ></Route>
        <Route path="/about" element={ <AboutPage></AboutPage>  } ></Route>
        <Route path="/contact" element={ <ContactPage></ContactPage> }></Route>
        <Route path="/*" element={ <Navigate to='/'/> } ></Route>
      </Routes>
    </UsuarioProvider>
  );
};
