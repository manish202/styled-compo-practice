import styled from "styled-components";
const StyledFooter = styled.footer`
    text-align:center;
    padding:10px;
    color: ${({theme}) => theme.colors.text};
    letter-spacing: 2px;
`;
const Footer = () => {
    return(
        <StyledFooter>
            <h2>Design & developed by manish prajapati.</h2>
        </StyledFooter>
    )
}
export default Footer;