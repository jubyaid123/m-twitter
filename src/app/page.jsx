import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Message from './components/message';
import UserCard from './components/UserCard';
const Home = () => {
    // Dummy data for top messages and trending users
    const topMessages = [
        {
            id: 1,
            author: 'Author 1',
            date: '2021-01-01',
            content: 'Top Message 1',
            likes: 120,
            dislikes: 5,
            readCount: 300,
            keywords: ['keyword1', 'keyword2', 'keyword3']
        },
        {
            id: 2,
            author: 'Author 2',
            date: '2021-02-01',
            content: 'Top Message 2',
            likes: 105,
            dislikes: 3,
            readCount: 250,
            keywords: ['keyword4', 'keyword5']
        },
        {
            id: 3,
            author: 'Author 3',
            date: '2021-03-01',
            content: 'Top Message 3',
            likes: 95,
            dislikes: 2,
            readCount: 200,
            keywords: ['keyword6']
        },
    ];


    const trendingUsers = [
        { id: 1, name: 'User 1', followers: 5000 },
        { id: 2, name: 'User 2', followers: 4500 },
        { id: 3, name: 'User 3', followers: 4200 },
    ];

    return (

        <div className=" grid grid-cols-12">
            <div className="col-span-5 ">
                <div className=''>
                    <Image
                        src="/mtwitter-logos_white.png"
                        width={800}
                        height={400}
                        layout="responsive"
                        alt="Logo"
                    />
                </div>
                <div className=' flex flex-row justify-center items-center mb-1'>
                    <Link href="/signup" className=' text-black font-bold text-lg bg-white rounded mb-20 mr-10 p-3'>SIGN UP</Link>
                    <Link href="/login" className='text-black font-bold text-lg bg-white rounded mb-20 p-3 '>LOG IN</Link>
                </div>

            </div>
            <div className=" col-span-4  ">
                <div className=' flex flex-col justify-center items-center'>
                    <h2 className="text-2xl font-bold mt-20">WHAT USERS ARE SAYING</h2>
                    <div className=' mt-5 mb-5'>
                        {topMessages.map(message => (
                            <Message key={message.id} messageData={message} />
                        ))}

                    </div>
                </div>
            </div>
            <div className=' col-span-3'>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className="text-2xl font-bold mb-4 mt-20">TRENDY USERS</h2>
                    {trendingUsers.map(user => (
                        <UserCard key={user.id} userData={user} />
                    ))}
                </div>

            </div>

        </div>

    );
};

export default Home;




