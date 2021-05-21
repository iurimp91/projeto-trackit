import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

export default function HistoryPage() {
    return(
        <>
            <Header />
            <ContentContainer>
                <TitleContainer>
                    <h1>Histórico</h1>
                </TitleContainer>
            </ContentContainer>
            <Footer />
        </>
    );
}

const ContentContainer = styled.div`
    height: 100%;
    margin-top: 70px;
    background-color: #F2F2F2;
    padding: 0 18px 110px 18px;
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
`;