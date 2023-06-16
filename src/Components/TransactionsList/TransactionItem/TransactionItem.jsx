import React, { useEffect, useState, useContext } from "react";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// scss
import './TransactionItem.scss'

// Context
import { Context } from "../../Context/Context";

export default function TransactionItem({ item }) {
    const [dates, setDates] = useState('')
    let arrDate = item.date.split(',')
    const { getTarget, getDate, getDescription, getPrice, getStatus, getType, setActiveDetalie } = useContext(Context)
    
    function DayDate(d){
        if(d === undefined)d=new Date();
        let res=d.getDate()+'.'+d.getMonth()+'.'+d.getFullYear()+': ';
            switch(d.getDay()){
                case 0: 
                    res+= 'Sunday';
                break;
                case 1:
                    res+= 'Monday';
                break;
                case 2:
                    res+='Tuesday';
                break;
                case 3:
                    res+= 'Wednesday';
                break;
                case 4:
                    res+= 'Thursday';
                break;
                case 5:
                    res+='Friday';
                break;
                case 6:
                    res+='Saturday';
                break;
            }
        return res;
    }




    useEffect(() => {
        
        // Обробляємо дату транзакції і якщо дата за останій тиждень виводимо день тижня інакше дату.
        const currentDate = new Date()
        const dateTransaction = arrDate[0]
        const patsDate = dateTransaction.split('/')

        let day = parseInt(patsDate[0])
        let month = parseInt(patsDate[1]) - 1 
        let year = 2000 + parseInt(patsDate[2])

        let date = new Date(year, month, day)

        currentDate.setDate(currentDate.getDate() - 7)

        if (date >= currentDate) {
            let dateName = DayDate(date).split(': ')[1]
            setDates(dateName)
        } else {
            setDates(arrDate[0])
        }

    }, [])

    return(
        <div className="transaction-item" 
        onClick={() => {
            getTarget(item.target)
            getDate(item.date)
            getDescription(item.description)
            getPrice(item.sum)
            getStatus(item.status)
            getType(item.type)
            setActiveDetalie(true)
        }}>
            <div className="transaction-item__wrapper">
                <div className="transaction-item__icons">
                    <img src={item.icons} alt={item.target} />
                </div>
                <div className="transaction-item__inner">
                    <div className="transaction-item__target">
                        {item.target}
                    </div>
                    <div className="transaction-item__description">
                    {item.pending ? `pending - ${item.description}` : item.description}
                    </div>
                    <div className="transaction-item__bottom">
                        {item.userName !== '' ? `${item.userName} - ` : ''}
                        {dates}
                    </div>
                </div>
                <div className="transaction-item__prices">
                    <div className="transaction-item__price">
                        {item.type === 'payment' ? `+$${item.sum}` : `$${item.sum}`}
                    </div>
                    {item.type === 'credit' && <div className="transaction-item__procent"><span>3</span>%</div>}
                </div>
                <button className="transaction-item__arrow">
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
            </div>
        </div>
    )
}