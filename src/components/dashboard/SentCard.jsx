// import { Card, CardBody } from "@nextui-org/card";

import { Card } from "@nextui-org/react";
import { FaArrowDown } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";

export default () => {
  return (
    <Card shadow="sm">
      <div className="bg-red-100 rounded-lg p-7 flex items-center justify-between ">
        <div className="flex items-center">
          <div className="bg-red-700 p-2 rounded-full text-white">
            <GiPayMoney size={24} />
          </div>
          <div className="ml-4">
            <p className="font-bold text-sm">Expenses</p>
            <p className="font-bold text-2xl">$198K</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaArrowDown className="text-red-500" />
          <p className="ml-1 text-sm">2% this month</p>
        </div>
      </div>
    </Card>
  );
};
