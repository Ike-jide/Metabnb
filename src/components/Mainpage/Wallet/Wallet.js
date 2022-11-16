import React, { useState } from "react";
import "./Wallet.css";
import {AiOutlineRight} from "react-icons/ai"

function Wallet() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Connect Wallet
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <div className="modal-header"><h2>Connect Wallet</h2></div>
                        <div className="modal-footer">
                            <p>
                                Choose your preferred wallet
                            </p>
                            <div className="slot"><div className="slot-1"><img src="./images/Wallet/image 66.png" alt="" /><p>Metamask</p></div><AiOutlineRight/></div>
                            <div className="slot"><div className="slot-1"><img src="./images/Wallet/image 69.png" alt="" /><p>WalletConnect</p></div><AiOutlineRight/></div>
                        </div>

                        <button className="close-modal" onClick={toggleModal}>
                        <img src="./images/Wallet/x.png" alt="" />
                        </button>
                    </div>
                </div>
            )}

        </>
    );
}

export default Wallet;