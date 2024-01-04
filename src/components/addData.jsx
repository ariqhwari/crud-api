"use client";
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const createData = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [author, setAuthor] = useState('');
    const [createSuccess, setCreateSuccess] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://testcasefe2023.ignorelist.com/api/v1/data',
                {
                    title,
                    description,
                    price,
                    author
                },
                {
                    headers: {
                        'nim': '21081010149'
                    }
                }
            );
            console.log('Data berhasil dibuat:', response.data);
            setTitle('');
            setDescription('');
            setPrice('');
            setAuthor('');
            setCreateSuccess(true)
        } catch (error) {
            console.error('Error creating data:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold mb-4">Tambah Data</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border rounded-md py-2 px-3 w-full" />
                </div>
                <div>
                    <label className="block mb-1">Description:</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="border rounded-md py-2 px-3 w-full" />
                </div>
                <div>
                    <label className="block mb-1">Price:</label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="border rounded-md py-2 px-3 w-full" />
                </div>
                <div>
                    <label className="block mb-1">Author:</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="border rounded-md py-2 px-3 w-full" />
                </div>
                <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
                    Submit
                </button>
            </form>
            {createSuccess && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded shadow-md">
                        <p className="mb-4">Book successfully created</p>
                        <div className="flex justify-center">
                            <Link href={'/'} className="bg-green-500 hover:bg-green-300 text-gray-800 font-bold py-2 px-4 rounded">
                                Back
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default createData;
