import styled from "styled-components";
import DayJS from "dayjs";
import "dayjs/locale/pt-br";

import Header from "./Header";
import Footer from "./Footer";

import check from "../images/check.png";

export default function TodayPage() {
    const weekday = DayJS().locale('pt-br').format("dddd");
    const date = DayJS().locale('pt-br').format("DD/MM");

    return(
        <>
            <Header />
            <ContentContainer>
                <TitleContainer>
                    <h1>{weekday}, {date}</h1>
                    <span>Nenhum hábito concluído ainda</span>
                </TitleContainer>
                <HabitsList>
                    <li className="habit">
                        <div>
                            <h1>Ler 1 capítulo de livro</h1>
                            <h2>Sequência atual: 3 dias</h2>
                            <h2>Seu recorde: 5 dias</h2>
                        </div>
                        <button><img src={check} alt="Check icon" /></button>
                    </li>
                    <li className="habit">
                        <div>
                            <h1>Ler 1 capítulo de livro</h1>
                            <h2>Sequência atual: 3 dias</h2>
                            <h2>Seu recorde: 5 dias</h2>
                        </div>
                        <button><img src={check} alt="Check icon" /></button>
                    </li>
                    <li className="habit">
                        <div>
                            <h1>Ler 1 capítulo de livro</h1>
                            <h2>Sequência atual: 3 dias</h2>
                            <h2>Seu recorde: 5 dias</h2>
                        </div>
                        <button><img src={check} alt="Check icon" /></button>
                    </li>
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

        button {
            width: 69px;
            height: 69px;
            background-color: #EBEBEB;
            border: 1px solid #EBEBEB;
            border-radius: 5px;
            cursor: pointer;
        }
    }
`;