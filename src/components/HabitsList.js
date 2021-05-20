import styled from "styled-components";
import trash from "../images/trash.png";

export default function HabitsList({ userHabits, setUserHabits }) {

    return(
        <HabitContainer>
            <li className="habit">
                <span>Ler 1 capítulo de livro</span>
                <ul><li>D</li><li>S</li><li>T</li><li>Q</li><li>Q</li><li>S</li><li>S</li></ul>
                <img src={trash} alt="Trash icon" />
            </li>
        </HabitContainer>
    );
}

const HabitContainer = styled.ul`
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