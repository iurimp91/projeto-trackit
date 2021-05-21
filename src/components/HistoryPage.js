import styled from "styled-components";
import Calendar from 'react-calendar'
import { useState, useEffect, useContext } from "react";
import DayJS from "dayjs";
import axios from "axios";

import "../css/Calendar.css";
import Header from "./Header";
import Footer from "./Footer";
import UserContext from "../contexts/UserContext";

export default function HistoryPage() {
    const [date, setDate] = useState(new Date());
    const { user } = useContext(UserContext);
    const [habitsHistory, setHabitsHistory] = useState([]);
    
    useEffect(() => {
        const config = { headers: { Authorization: `Bearer ${user.token}` } };
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily", config);
    
        request.then(response => {
            setHabitsHistory(response.data);
        })
    
    },[])

    if(habitsHistory.length === 0) {
        return <div></div>;
    }

    const onChange = date => {
        setDate(date);
    };

    function tileClassName({ date, view }) {
        console.log(date);
        let style = "";
        // Add class to tiles in month view only
        if (view === 'month') {
            // Check if a date React-Calendar wants to check is on the list of dates to add class to
            
            for (let i = 0; i < habitsHistory.length; i++) {
                if (habitsHistory[i].day === DayJS(date).format('DD/MM/YYYY')) {
                    console.log('entrou');
                    if (habitsHistory[i].habits.find(d => d.done === false)) {
                        return 'notcompleted';
                    } else {
                        return 'completed';
                    }
                }
            } 
        } 
    }

    console.log(habitsHistory);
    console.log(DayJS(date).format('DD/MM/YYYY'));

    return(
        <>
            <Header />
            <ContentContainer>
                <TitleContainer>
                    <h1>Histórico</h1>
                </TitleContainer>
                <Calendar
                    onChange={onChange}
                    date={date}
                    calendarType="US"
                    tileClassName={tileClassName}
                />
            </ContentContainer>
            <Footer />
        </>
    );
}

const ContentContainer = styled.div`
    height: 100%;
    margin-top: 70px;
    background-color: #F2F2F2;
    padding: 0 18px 110px 18px;
`;

const TitleContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h1 {
        font-size: 23px;
        color: #126BA5;
        margin-top: 30px;
    }
`;