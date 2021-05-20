import styled from "styled-components";
import { useState } from "react";

export default function NewHabitContainer({ setEnableNewHabit }) {
    const [habitName, setHabitName] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);

    const [days, setDays] = useState([
        { weedkay: "D", day: 0, isSelected: false},
        { weedkay: "S", day: 1, isSelected: false},
        { weedkay: "T", day: 2, isSelected: false},
        { weedkay: "Q", day: 3, isSelected: false},
        { weedkay: "Q", day: 4, isSelected: false},
        { weedkay: "S", day: 5, isSelected: false},
        { weedkay: "S", day: 6, isSelected: false},
    ]);

    function selectDay(day) {
        if(!day.isSelected) {
            setSelectedDays([...selectedDays, day])
            setDays([...days], day.isSelected = true);
        } else {
            setSelectedDays(selectedDays.filter(d => d !== day));
            setDays([...days], day.isSelected = false);
        }
    }

    console.log(days);
    console.log(selectedDays);

    return(
        <NewHabit>
            <input type="text" placeholder="nome do hábito" onChange={(e) => setHabitName(e.target.value)} />
            <ul>
                {days.map(day => 
                    <li className={`weekday ${day.isSelected ? "selecionado" : ""}`} onClick={() => selectDay(day)}>{day.weedkay}</li>
                )}
            </ul>
            <div><span onClick={() => setEnableNewHabit(false)}>Cancelar</span><button>Salvar</button></div>
        </NewHabit>
    );
}

const NewHabit = styled.div`
    width: 100%;
    height: 180px;
    padding: 18px 18px 15px 18px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;

    input {
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        font-size: 20px;
        color: #666666;
        padding-left: 7px;

        ::placeholder {
            color: #DBDBDB;    
        }
    }

    ul {
        display: flex;
        
        /*li {
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
            cursor: pointer;
            background-color: ${props => props.selected ? "black" : "red"}
        }*/
    }

    div {
        margin-top: 30px;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        span {
            font-size: 16px;
            color: #52B6FF;
            cursor: pointer;
            margin-right: 23px;
        }

        button {
            width: 84px;
            height: 35px;
            border-radius: 5px;
            border: none;
            background-color: #52B6FF;
            color: #FFFFFF;
            font-size: 16px;
            cursor: pointer;
        }
    }
`;