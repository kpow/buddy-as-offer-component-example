import React from "react";

type ModalProps = {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
    textContent: string;
};

const Modal: React.FC<ModalProps> = ({ show, onClose, children, textContent }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
            {children}
                <button onClick={onClose}>{textContent}</button>
            </div>
        </div>
    );
};

export default Modal;
