import { createBrowserRouter} from "react-router-dom";
import App from "./App";
import Prova_Tela_1 from "./pages/Prova_Tela_1";
import Prova_Tela_2 from "./pages/Prova_Tela_2";
import Prova_Tela_3 from "./pages/Prova_Tela_3";
import Prova_Tela_4 from "./pages/Prova_Tela_4";
import Prova_Tela_5 from "./pages/Prova_Tela_5";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/prova_Tela_1", element:<Prova_Tela_1 /> },
      {path: "/prova_Tela_2", element:<Prova_Tela_2 /> },
      {path: "/prova_Tela_3", element:<Prova_Tela_3 /> },
      {path: "/prova_Tela_4", element:<Prova_Tela_4 /> },
      {path: "/prova_Tela_5", element:<Prova_Tela_5 /> },

    ]
  }
])