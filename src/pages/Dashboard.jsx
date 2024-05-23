import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <div className="h-screen bg-slate-100">
        <header className="flex h-20 items-center justify-between px-4 md:px-10   mx-auto bg-red-300">
          <Link className="flex items-center gap-2" to="#">
            {/* <img src="/wallet.png" className="h-8 w-8" alt="Wallet Icon" />
            <span className="font-bold text-inherit nunito text-3xl">Niyo</span> */}
            <span className="font-bold text-inherit text-3xl">Dashboard</span>
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="#"
          >
            Home
          </Link>
        </header>
        <div className=" h-screen p-10">
          <div className="bg-yellow-100 h-screen"></div>
        </div>
      </div>
    </>
  );
}
