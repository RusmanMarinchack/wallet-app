import React, { useContext } from "react";

import { faAngleLeft, faDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// scss
import './TransactionDetail.scss'

// Context
import { Context } from "../Context/Context";

export default function TransactionDetail() {
    const { target, date, description, price, status, type, activeDetalie, setActiveDetalie } = useContext(Context)

    return(
        <div className={`transaction-detail ${activeDetalie && "active"}`}>
            <div className="transaction-detail__wrapper">
                <div className="transaction-detail__btn-back">
                    <button onClick={() => {
                        setActiveDetalie(false)
                    }}>
                        <FontAwesomeIcon icon={faAngleLeft}/>
                    </button>
                </div>
                <div className="transaction-detail__header">
                    <div className="transaction-detail__price">
                        {type === 'payment' && '+'}
                        <FontAwesomeIcon icon={faDollar}/>
                        <span>{price}</span>
                    </div>
                    <div className="transaction-detail__target">
                        {target}
                    </div>
                    <div className="transaction-detail__date">
                        {date}
                    </div>
                </div>
                <div className="transaction-detail__main">
                    <div className="transaction-detail__tabel">
                        <div className="transaction-detail__status">
                            Status: {status}
                        </div>
                        <div className="transaction-detail__description">
                            {description}
                        </div>
                        <div className="transaction-detail__total transaction-detail-total">
                            <div className="transaction-detail-total__label">Total</div>
                            <div className="transaction-detail-total__price">{price}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}