// export default () => {
//   return (
//     <>
//       <div className="bg-slate-200 rounded-lg h-full p-6 flex flex-col">
//         <div className="text-3xl text-center font-semibold">
//           Recent Transcations
//         </div>
//       </div>
//     </>
//   );
// };

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <>
      <Card shadow="sm" className="h-full">
        <div className="text-2xl py-6 text-center font-semibold">
          Recent Transactions
        </div>
        <CardBody>
          <div className="space-y-4 px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                  {/* <SendIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" /> */}
                </div>
                <div>
                  <div className="font-medium">Sent to John Doe</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    May 20, 2023
                  </div>
                </div>
              </div>
              <div className="text-red-500">-$50.00</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                  {/* <ReceiptIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" /> */}
                </div>
                <div>
                  <div className="font-medium">Received from Jane Smith</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    May 15, 2023
                  </div>
                </div>
              </div>
              <div className="text-green-500">+$100.00</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                  {/* <WalletIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" /> */}
                </div>
                <div>
                  <div className="font-medium">Wallet Deposit</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    May 10, 2023
                  </div>
                </div>
              </div>
              <div className="text-green-500">+$500.00</div>
            </div>
          </div>
        </CardBody>
        <CardFooter>
          <Link className=" text-base text-blue-500 underline" href="#">
            View all transactions
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};
