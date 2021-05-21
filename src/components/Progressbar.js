import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";

import HabitsContext from "../contexts/HabitsContext";


export default function Progressbar() {
    const { todayHabits, setTodayHabits } = useContext(HabitsContext);
    let percentage;
    if(todayHabits.length !== 0) {
        percentage = todayHabits.reduce((acc, h) => h.done ? acc +=1 : acc += 0, 0) / todayHabits.length * 100;
    } else {
        percentage = 0;
    }

    return (
        <CircularProgressbar
            value={percentage}
            text={`Hoje`}
            background
            backgroundPadding={6}
            styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent"
        })}
      />
    );
}