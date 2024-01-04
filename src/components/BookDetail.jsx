"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const BookDetail = ({ id }) => {
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBookById = async () => {
            try {
                const response = await axios.get(`https://testcasefe2023.ignorelist.com/api/v1/data/${id}`, {
                    headers: {
                        'nim': '21081010149'
                    }
                });
                setBook(response.data.data);
            } catch (error) {
                console.error('Error fetching book:', error);
            }
        };

        fetchBookById();
    }, [id]);

    return (
        <div>
            {book ? (
                <>
                    <div className='max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg'>
                        <h1 className="text-3xl font-semibold mb-4 text-center">{book.title}</h1>
                        <p className="mb-2">Description: {book.description}</p>
                        <p className="mb-2">Price: {book.price}</p>
                        <p className="mb-5">Author: {book.author}</p>
                        <div className="text-center">
                            <Link href={'/'} className="bg-blue-500 text-white  py-2 px-4 rounded hover:bg-blue-700">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex justify-center items-center h-screen">
                    <div className="p-8 rounded-lg">
                        <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
                            <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
                            <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
                            <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                            <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                        </svg>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookDetail;
