import { useRoutes } from "react-router-dom";

import { useAuthContext } from "./context/useAuth";
import { HomePage, MoviesPage, PlacesPage, NotFoundPage, Login } from "./pages";
import Navigation from "./components/Navigation";

export const RoutesApp = () => {
  const { auth } = useAuthContext();

  const routes = [
    !auth.isAuthenticated
      ? { path: "/", element: <Login /> }
      : {
          path: "/",
          element: <Navigation />,
          children: [
            { path: "/", element: <HomePage /> },
            { path: "movies", element: <MoviesPage /> },
            { path: "places", element: <PlacesPage /> },
            { path: "*", element: <NotFoundPage /> },
          ],
        },
    { path: "*", element: <NotFoundPage /> },
  ];

  return useRoutes(routes);
};
