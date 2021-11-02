import React from 'react';
import s from './MyModal.module.css'

const MyModal = ({children}) => {
    return (
        <div className={[s.myModal,s.active].join(' ')}>
            <div className={s.myModalContent}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;