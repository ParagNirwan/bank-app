import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'
const Home = () => {

    const loggedIn = { firstName: "Parag" };


    return (
        <section className='home'>
            <div className='home-content'>
                <header className="home-header">
                    <HeaderBox type="greeting" title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and Manage your Account and Transactions efficiently" />

                    <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={5450.69} />
                </header>
            </div>


        </section>
    )
}

export default Home;