import { ArrowLeft, ArrowRight, LogOut, Plus } from 'lucide-react'
import React from 'react'
import Card from './components/Card'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

const App = () => {
    useGSAP(() => {
        gsap.from('#upper', {
            y: -100,
            duration: 1,
            ease: 'power2.inOut'
        });

        gsap.from('#lower', {
            y: 100,
            duration: 1,
            ease: 'power2.inOut'
        });

        gsap.from('#card', {
            y: 100,
            duration: 1.2,
            ease: 'power2.inOut'
        });

        gsap.from('#button', {
            opacity: 0,
            duration: 2
        })

    }, []);

    const transactions = [
        {
          name: "Adam Costa",
          bank: "Standard Chartered Bank",
          time: "5:02 PM",
          amount: "$200",
          type: "in",
        },
        {
          name: "Sarah Eric",
          bank: "Payment Received",
          time: "3:22 PM",
          amount: "$200",
          type: "out",
        },
        {
          name: "Millie Bobby",
          bank: "Payment Received",
          time: "3:22 PM",
          amount: "$200",
          type: "out",
        },
        {
          name: "William Edward",
          bank: "Payment Received",
          time: "3:22 PM",
          amount: "$200",
          type: "out",
        },
        {
          name: "Adam Costa",
          bank: "Standard Chartered Bank",
          time: "5:02 PM",
          amount: "$200",
          type: "in",
        },
    ];

    return (
        <div className='h-screen w-full overflow-auto'>
            {/* UPPER PART */}
            <div id='upper' className='h-1/3 md:h-2/5 bg-[#332ff6] rounded-bl-4xl rounded-br-4xl flex flex-col justify-center items-center gap-7'>
                {/* Wallet Arrow */}
                <div className='w-full px-10 md:px-20 flex justify-start items-center gap-3'>
                    <ArrowLeft className='cursor-pointer text-white size-8 md:size-10'/>
                    <span className='cursor-pointer text-2xl md:text-3xl text-white font-semibold'>Wallet</span>
                </div>

                {/* Earnings */}
                <div className='text-center text-white'>
                    <p className='text-2xl md:text-3xl font-semibold'>Your Earnings</p>
                    <h2 className='text-5xl md:text-6xl mt-3 font-semibold'>$1340.56</h2>
                </div>

                {/* Add/Withdraw Buttons */}
                <div className='w-full flex text-black gap-4 justify-center'>
                    <a href="#" className='flex bg-white p-4 md:p-5 cursor-pointer hover:bg-gray-200 px-5 md:px-8 font-semibold rounded-xl text-lg md:text-xl items-center gap-2'><Plus /><span>Add Money</span></a>
                    <a href="#" className='flex bg-white p-4 md:p-5 cursor-pointer hover:bg-gray-200 px-5 md:px-8 font-semibold rounded-xl text-lg md:text-xl items-center gap-2'><LogOut /><span>Withdraw</span></a>
                </div>
            </div>

            {/* LOWER PART */}
            <div id='lower' className='w-full h-auto flex justify-start items-center flex-col mt-10'>
                {/* Timeline Bar */}
                <div className='w-sm md:w-96 h-1 bg-gray-50 relative flex justify-center items-center'>
                    <span className='absolute -top-3 text-gray-500 text-lg md:text-xl font-semibold'>Oct 26, 2022</span>
                </div>

                {/* CARDS */}
                <div className='w-full max-w-4xl mx-auto' id='card'>
                    {
                        transactions.map((item, idx) => (
                            <Card key={idx} type={item.type} name={item.name} bank={item.bank} time={item.time} amount={item.amount} />
                        ))
                    }
                </div>
                
                {/* Button */}
                <button id='button' className='hover:bg-blue-700 cursor-pointer flex text-white bg-[#5569fe] text-xl font-light mt-5 tracking-widest items-center p-4 w-4/5 md:w-2/3 lg:w-1/2 lg:text-2xl rounded-xl justify-around'>
                    <p className='lg:ml-35'>Continue</p>
                    <ArrowRight className='bg-blue-700 rounded-full p-1 size-8' />
                </button>
                
            </div>
        </div>
  )
}

export default App