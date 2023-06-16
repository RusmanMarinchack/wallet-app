import React, { useState, useEffect, useContext } from "react";

import { faDollar, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Data
import {DataTransactions} from "../../DataTransactions/DataTransactions";

// scss
import './Header.scss'
import { Context } from "../../Context/Context";

export default function Header() {
    const [balance, setBalance] = useState()
    const [limit, setLimit] = useState()
    const [farmatedNamber, setFarmatedNamber] = useState()

    const { getBalance } = useContext(Context)

    useEffect(() => {
        setBalance(17.30)
        setLimit(1500)
        getBalance(balance)
        setFarmatedNamber((limit - balance).toFixed(2).toLocaleString('en', 'UA', {}).replace(',', '.'))
    }, [farmatedNamber, balance])

    return(
        <div className="header">
            <div className="header__wrapper">
                <div className="header__inner">

                    <div className="header__box-balance header-item box-balance">
                        <h4 className="box-balance__name">Card balance</h4>
                        <div className="box-balance__price">
                            <FontAwesomeIcon icon={faDollar} />
                            <span>{balance}</span>
                        </div>
                        <div className="box-balance__available discription">
                            $ <span>{farmatedNamber}</span> Available
                        </div>
                    </div>

                    <div className="header__daily-points header-item box-daily-points">
                        <h4 className="box-daily-points__name">Daily Points</h4>
                        <div className="box-daily-points__number discription">
                            <span>456</span>K
                        </div>
                    </div>
                </div>

                <div className="header__no-payment header-item box-no-payment">
                    <h4 className="box-no-payment__name">No Payment Due</h4>
                    <div className="box-no-payment__info discription">You’ve paid your <span>June</span> balance.</div>
                    <div className="box-no-payment__cheack">
                        <FontAwesomeIcon icon={faCheck}/>
                    </div>
                </div>
            </div>
        </div>
    )
} 