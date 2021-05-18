import styled from "styled-components";
import logo from "../images/logo-header.png";
import bob from "../images/bob.png";
import addButton from "../images/add-button.png";
import trash from "../images/trash.png";

export default function HabitsPage() {
    return(
        <>
            <Header>
                <img src={logo} />
                <UserPicture src={bob} />
            </Header>
            <ContentContainer>
                <TitleContainer>
                    <h1>Meus hábitos</h1>
                    <img src={addButton} />
                </TitleContainer>
                <NewHabitContainer>
                    <input type="text" placeholder="nome do hábito" />
                    <ul><li>D</li><li>S</li><li>T</li><li>Q</li><li>Q</li><li>S</li><li>S</li></ul>
                    <div><span>Cancelar</span><button>Salvar</button></div>
                </NewHabitContainer>
                <HabitsList>
                    <li className="habit">
                        <span>Ler 1 capítulo de livro</span>
                        <ul><li>D</li><li>S</li><li>T</li><li>Q</li><li>Q</li><li>S</li><li>S</li></ul>
                        <img src={trash} />
                    </li>
                </HabitsList>
                <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
            </ContentContainer>
        </>
    );
}

const Header = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    position: fixed;
    left: 0;
    top: 0;
`;

const UserPicture = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 100px;
`;

const ContentContainer = styled.div`
    margin-top: 70px;
    background-color: #F2F2F2;
    padding: 0 18px 10px 18px;

    span {
        font-size: 18px;
        color: #666666;
        line-height: 22px;
    }
`;

const TitleContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h1 {
        font-size: 23px;
        color: #126BA5;
        margin-top: 30px;
    }

    img {
        width: 40px;
        height: 35px;
        margin-top: 30px;
        cursor: pointer;
    }
`;

const NewHabitContainer = styled.div`
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
        
        li {
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
        }
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

const HabitsList = styled.ul`
    width: 100%;

    .habit {
        width: 100%;
        height: 91px;
        border-radius: 5px;
        background-color: #FFFFFF;
        padding: 18px 18px 15px 18px;
        margin-bottom: 10px;
        position: relative;

        span {
            font-size: 20px;
            color: #666666;
        }

        ul {
            margin-top: 10px;
            display: flex;
        
            li {
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
            }
        }

        img {
            width: 13px;
            height: 15px;
            position: absolute;
            top: 11px;
            right: 10px;
            cursor: pointer;
        }
    }

    
`;