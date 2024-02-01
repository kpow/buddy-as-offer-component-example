import React from "react";

type ModalProps = {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
    modalTitleContent: string
};

const Modal: React.FC<ModalProps> = ({ show, onClose, children, modalTitleContent }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h3>{modalTitleContent}</h3>
                    <button onClick={onClose}>X</button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
