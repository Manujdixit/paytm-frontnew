import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import "./home.css";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <Navbar className="p-2" onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <img src="/wallet.png" className="h-8" />
          <NavbarBrand>
            <p className="font-bold text-inherit nunito text-3xl">Niyo</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-14 " justify="center">
          <NavbarItem>
            <Link href="#" className="text-slate-500">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-slate-500">
              About
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="#">
              Get started
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem>
            <Link href="#" color="foreground" className="w-full" size="lg">
              Features
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="#" color="foreground" className="w-full" size="lg">
              About
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="#" className="w-full" size="lg">
              Sign in
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="#" className="w-full" size="lg">
              Sign up
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>

      <main className="flex-1">
        <section className="w-full md:py-24 lg:py-36">
          <div className="container px-4 md:px-6  mx-auto">
            <div className="lg:grid lg:gap-60 lg:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Secure and Convenient Digital Wallet
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl ">
                    Manage your finances with ease. Store your cards, send and
                    receive payments, and track your spending all in one place.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button radius="sm" color="primary">
                    Sign Up
                  </Button>
                  <Button radius="sm" variant="flat">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <Player
                  autoplay
                  loop
                  src="https://lottie.host/df729c10-9a81-4bb3-aa6d-734913bfde44/fFjafXGhBE.json"
                  style={{ height: "550px", width: "550px" }}
                ></Player>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100  flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm ">
                  How it Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Seamless Digital Wallet Experience
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                  Our virtual wallet app makes it easy to manage your finances
                  on the go. Store your cards, send and receive payments, and
                  track your spending all in one secure place.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-64">
              <div className="flex flex-col justify-center space-y-4 lg:ml-8">
                {" "}
                {/* Added margin-left here */}
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Store Your Cards</h3>
                      <p className="text-gray-500 ">
                        Add your debit, credit, and loyalty cards to your
                        digital wallet for easy access.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Send and Receive</h3>
                      <p className="text-gray-500 ">
                        Securely send and receive payments with friends, family,
                        and businesses.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Track Spending</h3>
                      <p className="text-gray-500 ">
                        Monitor your transactions and spending history to better
                        manage your finances.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Player
                className="hidden lg:block"
                autoplay
                loop
                src="https://lottie.host/c10e3119-6f58-4fb7-a436-57be2e359856/wEEBIpa2sN.json"
                style={{ height: "450px", width: "450px" }}
              ></Player>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Secure Your Finances with Niyo
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                Our virtual wallet app uses the latest security measures to
                protect your financial information and transactions.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row lg:justify-end">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                href="#"
              >
                Learn More
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                href="#"
              >
                Download App
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t flex justify-center bg-blue-700">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                Download Niyo Today
              </h2>
              <p className="mx-auto max-w-[600px] text-slate-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                Get Niyo on your mobile device and start managing your finances
                securely and conveniently.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                  href="#"
                >
                  <AppleIcon className="mr-2 h-5 w-5" />
                  App Store
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                  href="#"
                >
                  <PlayIcon className="mr-2 h-5 w-5" />
                  Google Play
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-8 md:px-6 border-t justify-between">
        <div className="flex flex-col sm:flex-row items-center">
          <Link className="flex items-center justify-center gap-2" href="#">
            <img src="/wallet.png" alt="" className="h-6" />
            <span className="text-lg font-semibold text-black">Niyo</span>
          </Link>
        </div>
        <p className="text-xs text-gray-500 ">
          © 2024 Niyo. All rights reserved.
        </p>
        <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contact
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Support
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Blog
          </Link>
        </nav>
      </footer>
    </>
  );
}

function AppleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  );
}

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}