import React from "react";
import './index.scss';

const Modal = ({ children, isOpen, setModalOpen }) => {
    if(!isOpen){
        return null
    }
    return  <div className='backdrop'>
                <div className="modal">
                    <button type="button" className="modal-close" />
                    {children}
                </div>
            </div>
};

export default Modal;