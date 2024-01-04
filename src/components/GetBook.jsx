"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const ShowData = () => {
    const [books, setBooks] = useState([]);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [bookToDelete, setBookToDelete] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://testcasefe2023.ignorelist.com/api/v1/data', {
                headers: {
                    'nim': '21081010149'
                }
            });

            if (response.data && Array.isArray(response.data.data)) {
                setBooks(response.data.data);
            } else {
                setBooks([]);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setBooks([]);
        }
    };

    const handleDelete = async (id) => {
        setConfirmDelete(true);
        setBookToDelete(id);
    };

    const confirmDeletion = async () => {
        try {
            await axios.delete(`https://testcasefe2023.ignorelist.com/api/v1/data/${bookToDelete}`, {
                headers: {
                    'nim': '21081010149'
                }
            });
            setConfirmDelete(false);
            setBookToDelete(null);
            fetchData();
        } catch (error) {
            console.error('Error deleting book:', error);
            setConfirmDelete(false);
            setBookToDelete(null);
        }
    };

    const cancelDeletion = () => {
        setConfirmDelete(false);
        setBookToDelete(null);
    };


    return (
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-3 gap-4">
                {books && books.length > 0 ? (
                    books.map((book, index) => (
                        <div key={index} className="relative">
                            <Link href={`/books/${book.id}`} className="hover:text-blue-500">
                                <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                                    <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                                    <p className="mb-2">Description: {book.description}</p>
                                    <p className="mb-2">Price: {book.price}</p>
                                    <p className="mb-2">Author: {book.author}</p>
                                </div>
                            </Link>
                            <div className="absolute top-2 right-2 space-x-2">
                                <div className='flex flex-col items-center'>
                                    <Link href={`/form/${book.id}`} className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 m-1 rounded">
                                        Update
                                    </Link>
                                    <button onClick={() => handleDelete(book.id)} className="bg-red-500 hover:bg-red-700 text-white  py-2 px-4 m-1 rounded">
                                        Delete
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))
                ) : (
                    <p>No books available</p>
                )}
            </div>
            {confirmDelete && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded shadow-md">
                        <p className="mb-4">Are you sure you want to delete this book?</p>
                        <div className="flex justify-end">
                            <button onClick={confirmDeletion} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-2 rounded">
                                Confirm
                            </button>
                            <button onClick={cancelDeletion} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default ShowData;
