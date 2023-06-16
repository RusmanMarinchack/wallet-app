import React from "react";

// Data
import { DataTransactions } from '../../DataTransactions/DataTransactions'

// Components
import TransactionItem from "../TransactionItem/TransactionItem";

// scss
import './LatestTranslate.scss'

export default function LatestTranslate() {
    return(
        <div className="latest-translate">
            <div className="latest-translate__wrapper">
                <h3 className="latest-translate__title _title">Latest translate</h3>
                <div className="latest-translate__inner">
                    <ul className="latest-translate__list">
                        {DataTransactions.length <= 0 
                        ?
                        <li style={{padding: 10}}>Has no actions</li>
                        :
                        DataTransactions.map(item => {
                            return (
                                <TransactionItem item={item} key={item.id} />
                            )
                        })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}