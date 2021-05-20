import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

import Loading from "./Loading";

export default function NewHabitContainer({ setEnableNewHabit }) {
    const [habitName, setHabitName] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    const [body, setBody] = useState(null);

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
        if(body !== null) {
            return;
        }
        if(!day.isSelected) {
            setSelectedDays([...selectedDays, day])
            setDays([...days], day.isSelected = true);
        } else {
            setSelectedDays(selectedDays.filter(d => d !== day));
            setDays([...days], day.isSelected = false);
        }
    }

    function createHabit() {
        const newBody = { name: habitName, day: selectedDays.map(d => d.day) }
        setBody(newBody);
        console.log(newBody);
        //const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", newBody);
    }

    console.log(days);
    console.log(selectedDays);

    return(
        <NewHabit>
            <Input 
                disabled={body === null ? false : true}
                type="text"
                placeholder="nome do hábito"
                onChange={(e) => setHabitName(e.target.value)}
            />
            <ul>
                {days.map(day => 
                    <Weekday 
                        selected={day.isSelected}
                        onClick={() => selectDay(day)}>
                        {day.weedkay}
                    </Weekday>
                )}
            </ul>
            <div className="newhabit-buttons">
                <CancelButton
                    disabled={body === null ? false : true}
                    onClick={() => setEnableNewHabit(false)}>
                    Cancelar
                </CancelButton>
                <SaveButton
                    disabled={body === null ? false : true}
                    onClick={createHabit}>
                    {body === null ? "Salvar" : <Loading />}
                </SaveButton>
            </div>
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

    ul {
        display: flex;
    }

    .newhabit-buttons {
        margin-top: 30px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`;

const Input = styled.input`
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 6px;
    font-size: 20px;
    padding-left: 7px;
    color: ${props => props.disabled ? "#AFAFAF" : "#666666"};
    background-color: ${props => props.disabled ? "#F2F2F2" : "#FFFFFF"};

    ::placeholder {
        color: #DBDBDB;    
    }
`;

const Weekday = styled.li`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4px;
    cursor: pointer;
    color: ${props => props.selected ? "#FFFFFF" : "#DBDBDB"};
    background-color: ${props => props.selected ? "#CFCFCF" : "#FFFFFF"};
`;

const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    border-radius: 5px;
    border: none;
    background-color: #52B6FF;
    color: #FFFFFF;
    font-size: 16px;
    cursor: pointer;
    opacity: ${props => props.disabled ? 0.7 : 1};
`;

const CancelButton = styled.button`
    font-size: 16px;
    color: #52B6FF;
    cursor: pointer;
    margin-right: 23px;
    background-color: transparent;
    border: none;
    opacity: ${props => props.disabled ? 0.7 : 1};
`;