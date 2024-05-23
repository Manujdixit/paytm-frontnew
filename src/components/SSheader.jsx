import { Link } from "react-router-dom";

export default function SSheader() {
  return (
    <>
      <header className="flex h-14 items-center justify-between px-4 md:px-6 max-w-screen-2xl mx-auto">
        <Link className="flex items-center gap-2" to="#">
          <img src="/wallet.png" className="h-8 w-8" alt="Wallet Icon" />
          <span className="font-bold text-inherit nunito text-3xl">Niyo</span>
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="#"
        >
          Home
        </Link>
      </header>
    </>
  );
}
