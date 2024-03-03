import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout.jsx";



import "./styles/styles.css"
import GlobalPage from "./pages/GlobalPages.jsx";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<GlobalPage />} />
     
     
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
