import UpdateData from '@/components/updateData';
import React from 'react'

const Update = ({ params }) => {
    const { id } = params;
    return (
        <div>
            <UpdateData id={id} />
        </div>
    )
}

export default Update