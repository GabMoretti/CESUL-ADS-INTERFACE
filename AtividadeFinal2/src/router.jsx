import { createBrowserRouter} from "react-router-dom";
import App from "./App";
import TelaLogin from "./TelaLogin";
import SegundaTela from "./SegundaTela";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/telaLogin", element:<TelaLogin /> },
      {path: "/segundaTela", element:<SegundaTela /> },

    ]
  }
])