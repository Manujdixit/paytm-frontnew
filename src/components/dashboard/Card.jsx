import { Card, CardBody } from "@nextui-org/card";

export default () => {
  return (
    <Card
      shadow="lg"
      className="min-w-96 max-h-64 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white p-6 rounded-xl shadow-lg"
    >
      <CardBody className="grid">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wider mb-2">
            Card Holder
          </span>
          <i className="fa-solid fa-compass"></i>
        </div>
        <h2 className="text-2xl font-bold mb-4 nunito">John Doe</h2>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <div className="mb-4">
              <span className="text-xs font-medium uppercase tracking-wider">
                Card Number
              </span>
              <p className="text-base font-medium">1234 5678 xxxx xxxx</p>
            </div>
            <div>
              <span className="text-xs font-medium uppercase tracking-wider">
                Expires
              </span>
              <p className="text-lg font-medium">12/24</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider">
              Balance
            </span>
            <p className="text-2xl font-bold">$5,678.00</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
