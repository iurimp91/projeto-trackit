import styled from "styled-components";
import logo from "../images/logo.png";

export default function SignUpPage() {
    return(
        <MainContainer>
            <Logo src={logo} />
            <Input type="text" placeholder="email" />
            <Input type="password" placeholder="senha" />
            <Input type="text" placeholder="nome" />
            <Input type="text" placeholder="foto" />
            <Button>Entrar</Button>
            <Span>Já tem uma conta? Faça login!</Span>
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

    ::placeholder {
        font-size: 20px;
        color: #DBDBDB;    
        padding-left: 7px;
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
`;

const Span = styled.span`
    font-size: 14px;
    color: #52B6FF;
    text-decoration: underline;
    cursor: pointer;
`;