import styled from "styled-components";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


const LayoutContainerStyled = styled.div`
    min-height: 100vh;
    height: auto;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

const ContentContainerStyled = styled.div`
    height: calc(100vh - 120px);
`;

const Layout = ({ children }) => {
    return (
        <LayoutContainerStyled>
            <NavBar />  
            <ContentContainerStyled>{children}</ContentContainerStyled>
        </LayoutContainerStyled>
    );
}

export default Layout;