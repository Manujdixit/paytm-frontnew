import { Link } from "react-router-dom";
import Card from "../components/dashboard/Card";
import ReceivedCard from "../components/dashboard/ReceivedCard";
import SentCard from "../components/dashboard/SentCard";
import RecentTrans from "../components/dashboard/RecentTrans";
import Activity from "../components/dashboard/Activity";
import QuickActions from "../components/dashboard/QuickActions";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F4FAFA]">
      <header className="flex p-10 items-center justify-between px-4 md:px-10 mx-auto">
        <Link className="flex items-center gap-2" to="/">
          {/* Uncomment and adjust the following lines if you want to use an image and title */}
          {/* <img src="/wallet.png" className="h-8 w-8" alt="Wallet Icon" /> */}
          {/* <span className="font-bold text-inherit nunito text-3xl">Niyo</span> */}
          <span className="font-bold text-inherit text-3xl">Dashboard</span>
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="/home"
        >
          Home
        </Link>
      </header>
      <main className="h-full px-10 pb-5">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className=" ">
            <Card />
          </div>
          <div className="  flex flex-col h-full gap-4">
            <ReceivedCard />
            <SentCard />
          </div>
          <div className="row-span-1">
            <QuickActions />
          </div>
          <div className="bg-white rounded-lg col-span-2">
            <Activity />
          </div>
          <div className="row-span-1">
            <RecentTrans />
          </div>
          {/* <div className=" bg-slate-400 col-span-3">
            <div class="grid grid-cols-3 gap-3">
              <div class="row-span-3 bg-white p-3 rounded-md">Cell 1</div>
              <div class="row-span-2 bg-white p-3 rounded-md">Cell 2</div>
              <div class="bg-white p-3 rounded-md">Cell 3</div>
              <div class="bg-white p-3 rounded-md">Cell 4</div>
              <div class="col-span-2 bg-white p-3 rounded-md">Cell 5</div>
              <div class="bg-white p-3 rounded-md">Cell 6</div>
              <div class="bg-white p-3 rounded-md">Cell 7</div>
              <div class="bg-white p-3 rounded-md">Cell 8</div>
            </div>
          </div> */}
          {/* Map over an array of data if needed */}
          {/* {cardsData.map((data, index) => (
            <Card key={index} data={data} />
          ))} */}
        </section>
      </main>
    </div>
  );
}
