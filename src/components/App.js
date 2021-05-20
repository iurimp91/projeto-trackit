import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";

import GlobalStyle from "../css/GlobalStyle";
import LogInPage from "./LogInPage";
import SignUpPage from "./SignUpPage";
import HabitsPage from "./HabitsPage";
import TodayPage from "./TodayPage";
import UserContext from "../contexts/UserContext";
import DaysContext from "../contexts/DaysContext";

export default function App() {
    const [user, setUser] = useState({});
    const [days, setDays] = useState([
        { weekday: "D", day: 0, isSelected: false},
        { weekday: "S", day: 1, isSelected: false},
        { weekday: "T", day: 2, isSelected: false},
        { weekday: "Q", day: 3, isSelected: false},
        { weekday: "Q", day: 4, isSelected: false},
        { weekday: "S", day: 5, isSelected: false},
        { weekday: "S", day: 6, isSelected: false},
    ]);

    return(
        <BrowserRouter>
            <DaysContext.Provider value={{ days, setDays }}>
                <UserContext.Provider value={{ user, setUser }}>
                    <GlobalStyle />
                    <Switch>
                        <Route exact path="/">
                            <LogInPage />
                        </Route>
                        <Route exact path="/cadastro">
                            <SignUpPage />
                        </Route>
                        <Route exact path="/habitos">
                            <HabitsPage />
                        </Route>
                        <Route exact path="/hoje">
                            <TodayPage />
                        </Route>
                    </Switch>
                </UserContext.Provider>
            </DaysContext.Provider>
        </BrowserRouter>
    );
}