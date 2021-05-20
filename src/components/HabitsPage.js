import styled from "styled-components";
import { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import NewHabitContainer from "./NewHabitContainer";

import addButton from "../images/add-button.png";
import trash from "../images/trash.png";

export default function HabitsPage() {
    const [enableNewHabit, setEnableNewHabit] = useState(false);

    function addHabit() {
        setEnableNewHabit(true);
        console.log("oi");
    }

    return(
        <>
            <Header />
            <ContentContainer>
                <TitleContainer>
                    <h1>Meus hábitos</h1>
                    <img src={addButton} alt="Add item icon" onClick={addHabit} />
                </TitleContainer>
                {enableNewHabit && <NewHabitContainer setEnableNewHabit={setEnableNewHabit} />}
                <HabitsList>
                    <li className="habit">
                        <span>Ler 1 capítulo de livro</span>
                        <ul><li>D</li><li>S</li><li>T</li><li>Q</li><li>Q</li><li>S</li><li>S</li></ul>
                        <img src={trash} alt="Trash icon" />
                    </li>
                </HabitsList>
                <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
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

const HabitsList = styled.ul`
    width: 100%;

    .habit {
        width: 100%;
        height: 91px;
        border-radius: 5px;
        background-color: #FFFFFF;
        padding: 18px 18px 15px 18px;
        margin-bottom: 10px;
        position: relative;

        span {
            font-size: 20px;
            color: #666666;
        }

        ul {
            margin-top: 10px;
            display: flex;
        
            li {
                width: 30px;
                height: 30px;
                border-radius: 5px;
                border: 1px solid #D4D4D4;
                color: #DBDBDB;
                font-size: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 4px;
            }
        }

        img {
            width: 13px;
            height: 15px;
            position: absolute;
            top: 11px;
            right: 10px;
            cursor: pointer;
        }
    }
`;