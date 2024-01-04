import ShowData from '@/components/GetBook'
import React from 'react'
import Link from 'next/link'


const Home = () => {
    return (
        <main>
            <div className='m-10 flex flex-col items-center'>
                <h1 className="text-3xl font-semibold mb-4 text-center">List of Books</h1>
                <Link href={'/form'} className="bg-green-500 hover:bg-green-300 text-white py-2 px-4 rounded">
                    Add Data
                </Link>
            </div>
            <ShowData />
        </main>

    )
}

export default Home