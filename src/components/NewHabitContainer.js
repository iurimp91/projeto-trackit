import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";

import Loading from "./Loading";
import DaysContext from "../contexts/DaysContext";
import UserContext from "../contexts/UserContext";

export default function NewHabitContainer({ setEnableNewHabit, habitName, setHabitName }) {
    const [body, setBody] = useState(null);
    const { days, setDays } = useContext(DaysContext);
    const { user } = useContext(UserContext);
   
    function selectDay(day) {
        if(body !== null) {
            return;
        }
        if(!day.isSelected) {
            setDays([...days], day.isSelected = true);
        } else {
            setDays([...days], day.isSelected = false);
        }
    }

    let selectedDays = [];
    function getSelectedDays() {
        days.forEach(d => {
            if(d.isSelected) {
                selectedDays.push(d.day);
            }
        })
    }

    function createHabit() {
        getSelectedDays(); 
        const newBody = { name: habitName, days: selectedDays }
        setBody(newBody);

        const config = { headers: { Authorization: `Bearer ${user.token}` } }

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", newBody, config);
    
        request.then(response => {
            console.log("deu certo");
            setBody(null);
            setEnableNewHabit(false);
            setHabitName("");
            resetDays();
        })

        request.catch(response => {
            alert("Algo com sua requisição deu errado, tente novamente, por favor.");
            setBody(null);
        })
    }

    function resetDays() {
        setDays(days.map(d => {
            return { weekday: d.weekday, day: d.day, isSelected: false }
        }));
    }
    console.log(days);

    return(
        <NewHabit>
            <Input 
                disabled={body === null ? false : true}
                type="text"
                placeholder="nome do hábito"
                onChange={(e) => setHabitName(e.target.value)}
                value={habitName}
            />
            <ul>
                {days.map(day => 
                    <Weekday 
                        selected={day.isSelected}
                        onClick={() => selectDay(day)}>
                        {day.weekday}
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