import React from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { logoutAccount } from "@/lib/actions/user.action";

const Footer = ({ user, type }: FooterProps) => {
  const handleLogout = async () => {
    const router = useRouter();
    const loggedOut = await logoutAccount();
    if (loggedOut) {
      router.push("/sign-in");
    }
  };

  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">
          {user?.firstName[0]}
          {user?.lastName[0]}
        </p>
      </div>
      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate text-gray-700 font-semibold">
          {user?.name}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>

      <div className="footer_image" onClick={handleLogout}>
        <Image src="icons/logout.svg" fill alt="logout" />
      </div>
    </footer>
  );
};

export default Footer;
