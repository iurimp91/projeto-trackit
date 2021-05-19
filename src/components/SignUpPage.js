import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Loading from "./Loading";

import logo from "../images/logo.png";

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const history = useHistory();
    const [body, setBody] = useState(null);

    function signUp() {
        const makeBody = { email, name, image, password };
        setBody(makeBody);
        
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", makeBody);    
        
        request.then((response) => {
            history.push("/");
        });

        request.catch(response => {
            alert("Houve algum problema com seu pedido, por favor, verifique os dados e tente novamente.");
            setBody(null);
        })
    }

    return(
        <MainContainer>
            <Logo src={logo} alt="Track It complete logo" />
            <Input disabled={body === null ? false : true} type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <Input disabled={body === null ? false : true} type="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} />
            <Input disabled={body === null ? false : true} type="text" placeholder="nome" onChange={(e) => setName(e.target.value)} />
            <Input disabled={body === null ? false : true} type="text" placeholder="foto" onChange={(e) => setImage(e.target.value)} />
            <Button disabled={body === null ? false : true}  onClick={signUp}>{body === null ? "Cadastrar" : <Loading />}</Button>
            <Link to={body === null ? "/" : ""}>
                <Span>Já tem uma conta? Faça login!</Span>
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