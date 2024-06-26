import React from 'react';
import { MdDelete } from "react-icons/md";


// The 'bin' icon to remove the respective user from the displayed users list. 
export default React.memo(function Remove({ onRemove, uid }: { onRemove: Function, uid: number }) {

    return (
        <div style={{ cursor: 'pointer' }} onClick={() => onRemove(uid)}> <MdDelete color='red' size={20} /></div >
    );
});
