import React from 'react'

import { MdDelete } from "react-icons/md";

export default function Remove({ onRemove, id }: { onRemove: Function, id: string }) {

    return (
        <div style={{ cursor: 'pointer' }} onClick={() => onRemove(id)}> <MdDelete color='red' size={20} /></div >
    )
}
