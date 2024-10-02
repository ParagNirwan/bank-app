import MobileNavbar from "@/components/ui/MobileNavbar";
import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";
import { redirect } from "next/navigation";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = /* await getLoggedInUser()*/ {
    firstName: "Parag",
    lastName: "Nirwan",
    name: "Parag Nirwan",
    email: "paragnirwan.de@gmail.com",
  };

  if (!loggedIn) {
    redirect("/sign-in");
  }
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" alt="menu icon" width={30} height={30} />

          <div>
            <MobileNavbar user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
