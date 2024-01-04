"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const UpdateData = ({ id }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [author, setAuthor] = useState('');
    const [updateSuccess, setUpdateSuccess] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://testcasefe2023.ignorelist.com/api/v1/data/${id}`, {
                    headers: {
                        'nim': '21081010149'
                    }
                });
                const book = response.data.data;
                setTitle(book.title);
                setDescription(book.description);
                setPrice(book.price);
                setAuthor(book.author);

            } catch (error) {
                console.error('Error fetching book:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`https://testcasefe2023.ignorelist.com/api/v1/data/${id}`, {
                title,
                description,
                price,
                author
            }, {
                headers: {
                    'nim': '21081010149'
                }
            });
            console.log('Data berhasil diperbarui', response.data);
            setUpdateSuccess(true);
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold mb-4">Update Data</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border rounded-md py-2 px-3 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="border rounded-md py-2 px-3 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="border rounded-md py-2 px-3 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Author:</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="border rounded-md py-2 px-3 w-full" />
                </div>
                <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
                    Update
                </button>
            </form>
            {updateSuccess && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded shadow-md">
                        <p className="mb-4">Book successfully updated</p>
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

export default UpdateData;
