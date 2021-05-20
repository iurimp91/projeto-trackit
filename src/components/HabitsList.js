import styled from "styled-components";
import trash from "../images/trash.png";

export default function HabitsList({ userHabits, setUserHabits }) {
    console.log(userHabits);

    return(
        <HabitContainer>
            {userHabits.map(h =>
                <li key={h.id} className="habit">
                    <span>{h.name}</span>
                    <ul>
                        <Li selected={h.days.includes(0) ? true : false}>D</Li>
                        <Li selected={h.days.includes(1) ? true : false}>S</Li>
                        <Li selected={h.days.includes(2) ? true : false}>T</Li>
                        <Li selected={h.days.includes(3) ? true : false}>Q</Li>
                        <Li selected={h.days.includes(4) ? true : false}>Q</Li>
                        <Li selected={h.days.includes(5) ? true : false}>S</Li>
                        <Li selected={h.days.includes(6) ? true : false}>S</Li>
                    </ul>
                    <img src={trash} alt="Trash icon" />
                </li>   
            )}
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

const Li = styled.li`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4px;
    color: ${props => props.selected ? "#FFFFFF" : "#DBDBDB"};
    background-color: ${props => props.selected ? "#CFCFCF" : "#FFFFFF"};     
`;