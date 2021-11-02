import React from 'react';
import s from './MyModal.module.css'

const MyModal = ({children,visible, setVisible}) => {
    const rootClasses=[s.myModal]
    if(visible){
        rootClasses.push(s.active)
    }
    return (
        <div className={rootClasses.join(' ')}>
            <div className={s.myModalContent}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;