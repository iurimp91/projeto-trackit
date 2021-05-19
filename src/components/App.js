import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyle from "../css/GlobalStyle";
import LogInPage from "./LogInPage";
import SignUpPage from "./SignUpPage";
import HabitsPage from "./HabitsPage";
import TodayPage from "./TodayPage";

export default function App() {
    return(
        <BrowserRouter>
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
        </BrowserRouter>
    );
}