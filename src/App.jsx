import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sendmoney from "./pages/Sendmoney";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PaymentSuccess from "./pages/PaymentSuccess";
import Protected from "./components/Protected";
import Transactions from "./pages/Transactions";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Protected Component={Signup} />} />
          <Route path="/signin" element={<Protected Component={Signin} />} />
          <Route
            path="/dashboard"
            element={<Protected Component={Dashboard} />}
          />
          <Route path="/send" element={<Protected Component={Sendmoney} />} />
          <Route
            path="/paymentsuccess"
            element={<Protected Component={PaymentSuccess} />}
          />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
