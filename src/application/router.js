import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
  MemoryRouter,
} from "react-router-dom";
import App from "../App";
import Expenses from "../pages/Expenses";
import Invoices from "../pages/Invoices";

export const Router = () => {
  return (
    <BrowserRouter basename="React-CI-CD">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
