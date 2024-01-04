
import BookDetail from '@/components/BookDetail';
import React from 'react'

const Books = ({ params }) => {
    const { id } = params;
    return (
        <div>
            <BookDetail id={id} />
        </div>
    )
}

export default Books
