import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import axios from "axios";

import Header from "./Header";
import Footer from "./Footer";
import NewHabitContainer from "./NewHabitContainer";
import HabitsList from "./HabitsList";
import UserContext from "../contexts/UserContext";

import addButton from "../images/add-button.png";

export default function HabitsPage() {
    const [enableNewHabit, setEnableNewHabit] = useState(false);
    const [userHabits, setUserHabits] = useState([]);
    const [habitName, setHabitName] = useState("");
    const { user } = useContext(UserContext);

    function addHabit() {
        setEnableNewHabit(true);
    }

    function getUserHabits() {
        const config = { headers: { Authorization: `Bearer ${user.token}` } };
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);

        request.then(response => {
            setUserHabits(response.data);
        });

        request.catch(error => {
            alert("Algo deu errado com sua requisição, por favor, tente novamente.");
        });
    }

    useEffect(getUserHabits,[]);

    return(
        <>
            <Header />
            <ContentContainer>
                <TitleContainer>
                    <h1>Meus hábitos</h1>
                    <img src={addButton} alt="Add item icon" onClick={addHabit} />
                </TitleContainer>
                {
                    enableNewHabit &&
                    <NewHabitContainer
                        setEnableNewHabit={setEnableNewHabit}
                        habitName={habitName}
                        setHabitName={setHabitName}
                        getUserHabits={getUserHabits}
                    />
                }
                {userHabits.length === 0 
                    ? <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
                    : <HabitsList userHabits={userHabits} setUserHabits={setUserHabits} getUserHabits={getUserHabits} />    
                } 
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

    span {
        font-size: 18px;
        color: #666666;
        line-height: 22px;
    }
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

    img {
        width: 40px;
        height: 35px;
        margin-top: 30px;
        cursor: pointer;
    }
`;