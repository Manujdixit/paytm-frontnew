import { FaChartBar } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";
import { Card } from "@nextui-org/react";

export default () => {
  return (
    <>
      <Card shadow="sm">
        <div className="flex flex-col p-4 justify-center ">
          <div className="text-2xl font-semibold text-center">
            Quick Actions
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Perform Quick Actions
          </div>
          <div className="flex flex-col-2 justify-center p-10 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="box h-16 w-16 bg-slate-200 rounded-2xl p-5"
            >
              <IoIosSend size={24} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="box h-16 w-16 bg-slate-200 rounded-2xl p-5"
            >
              <FaChartBar size={24} />
            </motion.div>
          </div>
        </div>
      </Card>
    </>
  );
};
