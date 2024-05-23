import { Button } from "@nextui-org/react";
import SidebarComps from "./SidebarComps";

export default () => {
  return (
    <>
      <div className="bg-white min-w-52  h-screen flex flex-col justify-between p-3 ">
        <div className="flex flex-col mt-16 my-16 mb-8">
          <div className="mx-auto">
            <img className="w-12" src="/wallet.png" alt="" />
          </div>
          <div className="flex w-full">
            <p className="nunito mx-auto font-bold text-inherit nunito text-3xl">
              Niyo
            </p>
          </div>
        </div>
        <SidebarComps />
        <Button color="danger" variant="light">
          Logout
        </Button>
      </div>
    </>
  );
};
