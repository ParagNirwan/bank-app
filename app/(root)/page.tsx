import RightSidebar from "@/components/ui/RightSidebar";
import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react";
import { getLoggedInUser } from "@/lib/actions/user.action";
const Home = async () => {
  const loggedIn = /*await getLoggedInUser();*/ {
    name: "Parag Nirwan",
    email: "paragnirwan.de@gmail.com",
  };
  const transactions = [];
  const banks = [];

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and Manage your Account and Transactions efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={5450.69}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{}, {}]} />
    </section>
  );
};

export default Home;
