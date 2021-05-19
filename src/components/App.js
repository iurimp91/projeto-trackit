import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";

import GlobalStyle from "../css/GlobalStyle";
import LogInPage from "./LogInPage";
import SignUpPage from "./SignUpPage";
import HabitsPage from "./HabitsPage";
import TodayPage from "./TodayPage";
import UserContext from "../contexts/UserContext";

export default function App() {
    const [user, setUser] = useState({});

    return(
        <BrowserRouter>
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
        </BrowserRouter>
    );
}