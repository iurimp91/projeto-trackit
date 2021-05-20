import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";

import Loading from "./Loading";

import logo from "../images/logo.png";
import UserContext from "../contexts/UserContext";

export default function LogInPage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [body, setBody] = useState(null);
    const history = useHistory();
    const { user, setUser } = useContext(UserContext);

    function signIn() {
        const newBody = { email, password };
        setBody(newBody);
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", newBody);
    
        request.then(response => {
            setUser(response.data);
            history.push("/hoje");
        });

        request.catch(error => {
            alert("Por favor, confira seu email e senha e tente novamente.");
            setBody(null);
        });
    }

    return(
        <MainContainer>
            <Logo src={logo} alt="Track It complete logo" />
            <Input disabled={body === null ? false : true} type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <Input disabled={body === null ? false : true} type="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} />
            <Button disabled={body === null ? false : true} onClick={signIn}>{body === null ? "Entrar" : <Loading />}</Button>
            <Link to={body === null ? "/cadastro" : ""}>
                <Span>Não tem uma conta? Cadastre-se!</Span>
            </Link>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    width: 180px;
    height: 180px;
    margin-bottom: 30px;
`;

const Input = styled.input`
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 6px;
    padding-left: 7px;
    font-size: 20px;
    color: ${props => props.disabled ? "#AFAFAF" : "#666666"};
    background-color: ${props => props.disabled ? "#F2F2F2" : "#FFFFFF"};

    ::placeholder {
        color: #DBDBDB;   
    }
`;

const Button = styled.button`
    width: 303px;
    height: 45px;
    background-color: #52B6FF;
    border-radius: 5px;
    color: #FFFFFF;
    border: none;
    font-size: 21px;
    cursor: pointer;
    margin-bottom: 25px;
    opacity: ${props => props.disabled ? 0.7 : 1};
`;

const Span = styled.span`
    font-size: 14px;
    color: #52B6FF;
    text-decoration: underline;
    cursor: pointer;
`;