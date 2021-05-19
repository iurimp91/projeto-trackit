import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <Bottom>
            <Link to="/habitos">
                <span>Hábitos</span>
            </Link>
            <Link to="/">
                <span>Histórico</span>
            </Link>
            <Link to="/hoje">
                <button>Hoje</button>
            </Link>
        </Bottom>
    );
}

const Bottom = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;

    span {
        font-size: 18px;
        color: #52B6FF;
        cursor: pointer;
    }

    button {
        width: 91px;
        height: 91px;
        border-radius: 100px;
        background-color: #52B6FF;
        color: #FFFFFF;
        border: none;
        cursor: pointer;
        font-size: 18px;
        position: absolute;
        bottom: 10px;
        left: calc((100vw - 91px) / 2);
    }
`;