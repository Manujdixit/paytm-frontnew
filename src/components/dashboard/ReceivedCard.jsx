import { Card } from "@nextui-org/react";
import { FaArrowUp } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

export default () => {
  return (
    <Card shadow="sm">
      <div className="bg-green-100 rounded-lg p-7 flex items-center justify-between ">
        <div className="flex items-center">
          <div className="bg-green-500 p-2 rounded-full text-white">
            <GiReceiveMoney size={24} />
          </div>
          <div className="ml-4">
            <p className="font-bold text-sm">Earnings</p>
            <p className="font-bold text-2xl">$198K</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaArrowUp className="text-green-500" />
          <p className="ml-1 text-sm">2% this month</p>
        </div>
      </div>
    </Card>
  );
};
