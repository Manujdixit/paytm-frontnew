import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sendmoney from "./pages/Sendmoney";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PaymentSuccess from "./pages/PaymentSuccess";
import Protected from "./components/Protected";
import Transactions from "./pages/Transactions";
import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" Component={Home} />
        <Route path="/send" element={<Protected Component={Sendmoney} />} />
        <Route
          path="/paymentsuccess"
          element={<Protected Component={PaymentSuccess} />}
        />
        <Route
          path="/transactions"
          element={<Protected Component={Transactions} />}
        />
      </Routes>

      <Routes>
        <Route path="/dashboard" element={<Protected Component={Layout} />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
