import styled from "styled-components";
import DayJS from "dayjs";
import "dayjs/locale/pt-br";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import UserContext from "../contexts/UserContext";
import HabitsContext from "../contexts/HabitsContext";

import check from "../images/check.png";

export default function TodayPage() {
    const weekday = DayJS().locale('pt-br').format("dddd");
    const date = DayJS().locale('pt-br').format("DD/MM");
    const { user } = useContext(UserContext);
    const { todayHabits, setTodayHabits } = useContext(HabitsContext);
    const config = { headers: { Authorization: `Bearer ${user.token}` } }
    // const [todayHabits, setTodayHabits] = useState([
    //     {id: 610, name: "Ler 10 páginas", done: false, currentSequence: 2, highestSequence: 3},
    //     {id: 611, name: "Brincar com Ísis", done: false, currentSequence: 0, highestSequence: 2},
    //     {id: 614, name: "Pilates", done: false, currentSequence: 1, highestSequence: 1}
    // ]);
    
    useEffect(() => {
        const config = { headers: { Authorization: `Bearer ${user.token}` } };
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);

        request.then(response => {
            setTodayHabits(response.data);
        })

        request.catch(error => {
            alert("Algo com sua requisição deu errado, tente novamente, por favor.");   
        })
    }, [])

    let previousHighestSequence;

    function completeHabit(h, previousHighestSequence) {
        previousHighestSequence = h.highestSequence;
        console.log(previousHighestSequence);
        setTodayHabits([...todayHabits], h.done = true, h.currentSequence += 1);
        if(h.currentSequence > h.highestSequence){
            setTodayHabits([...todayHabits], h.highestSequence = h.currentSequence);
        }
        console.log(h)

        const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}/check`, "", config);

        request.catch(error => {
            alert("Algo com sua requisição deu errado, tente novamente, por favor.");
        })
    }

    function deselectHabit(h, previousHighestSequence) {
        console.log(previousHighestSequence);
        console.log(h.highestSequence);
        if(h.currentSequence === h.highestSequence && previousHighestSequence === h.highestSequence) {
            setTodayHabits([...todayHabits], h.highestSequence -= 1);
            console.log("entrou");
        }
        setTodayHabits([...todayHabits], h.done = false, h.currentSequence -= 1);
        console.log(h)

        const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}/uncheck`, "", config);

        request.catch(error => {
            alert("Algo com sua requisição deu errado, tente novamente, por favor.");
        });
    }

    function selectHabit(h) {
        if(!h.done) {
            completeHabit(h, previousHighestSequence);
        } else {
            deselectHabit(h, previousHighestSequence);
        }
    }

    if(todayHabits.length === 0) {
        return <div></div>;
    }

    return(
        <>
            <Header />
            <ContentContainer>
                <TitleContainer>
                    <h1>{weekday}, {date}</h1>
                    {todayHabits.find(h => h.done) 
                    ? <span className="progress">{Math.round(todayHabits.reduce((acc, h) => h.done ? acc +=1 : acc += 0, 0) / todayHabits.length * 100)}% dos hábitos concluídos</span>
                    : <span>Nenhum hábito concluído ainda</span>}
                </TitleContainer>
                <HabitsList>
                    {todayHabits.map(h =>
                        <li key={h.id} className="habit">
                            <div>
                                <h1>{h.name}</h1>
                                <h2>Sequência atual: <Span done={h.done}>{h.currentSequence} {h.currentSequence === 0 ? "" : h.currentSequence === 1 ? "dia" : "dias"}</Span></h2>
                                <h2>Seu recorde: <Span done={h.currentSequence === h.highestSequence && h.highestSequence !== 0}>{h.highestSequence} {h.highestSequence === 0 ? "" : h.highestSequence === 1 ? "dia" : "dias"}</Span></h2>
                            </div>
                            <Button onClick={() => selectHabit(h)} done={h.done}><img src={check} alt="Check icon" /></Button>
                        </li>  
                    )}
                </HabitsList>
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
    margin-bottom: 20px;

    h1 {
        font-size: 23px;
        color: #126BA5;
        padding-top: 30px;
        margin-bottom: 7px;
    }

    span {
        font-size: 18px;
        color: #BABABA;
    }

    .progress {
        color: #8FC549;
    }
`;

const HabitsList = styled.ul`
    width: 100%;

    .habit {
        height: 94px;
        background-color: #FFFFFF;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        padding: 13px 13px 13px 15px;
        margin-bottom: 10px;

        h1 {
            font-size: 20px;
            color: #666666;
            margin-bottom: 10px;
        }

        h2 {
            font-size: 13px;
            color: #666666;
            margin-bottom: 3px;
        }
    }
`;

const Button = styled.button`
    width: 69px;
    height: 69px;
    border: 1px solid #EBEBEB;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${props => props.done ? "#8FC549" : "#EBEBEB"};
`;

const Span = styled.span`
    color: ${props => props.done ? "#8FC549" : "#666666"};
`;