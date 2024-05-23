import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { motion } from "framer-motion";
// Ensure you create and style this CSS file

export default () => {
  return (
    <div className="flex flex-col">
      <motion.div
        whileHover={{ scale: 1.025 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="box"
      >
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active button" : "button")}
        >
          <div className="flex items-center gap-2">
            <i class="fa-solid fa-house"></i>
            Dashboard
          </div>
        </NavLink>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.025 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="box"
      >
        <NavLink
          to="/transactions"
          className={({ isActive }) => (isActive ? "active button" : "button")}
        >
          <div className="flex items-center gap-2">
            <i class="fa-solid fa-paper-plane"></i>Send
          </div>
        </NavLink>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.025 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="box"
      >
        <NavLink
          to="/balance"
          className={({ isActive }) => (isActive ? "active button" : "button")}
        >
          <div className="flex items-center gap-2">
            <i class="fa-solid fa-chart-simple"></i> Balance
          </div>
        </NavLink>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.025 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="box"
      >
        <NavLink
          to="/transactions"
          className={({ isActive }) => (isActive ? "active button" : "button")}
        >
          <div className="flex items-center gap-2">
            <i class="fa-solid fa-money-bill-transfer"></i> Transactions
          </div>
        </NavLink>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.025 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="box"
      >
        <NavLink
          to="/transactions"
          className={({ isActive }) => (isActive ? "active button" : "button")}
        >
          <div className="flex items-center gap-2">
            <i class="fa-solid fa-file-invoice"></i> Invoices
          </div>
        </NavLink>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.025 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="box"
      >
        <NavLink
          to="/transactions"
          className={({ isActive }) => (isActive ? "active button" : "button")}
        >
          <div className="flex items-center gap-2">
            <i class="fa-solid fa-gear"></i> Settings
          </div>
        </NavLink>
      </motion.div>
    </div>
  );
};
