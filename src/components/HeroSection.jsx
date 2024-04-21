import styled from "styled-components";
const HeroSectionStyle = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:80vh;
    h1{
        font-size: 3em;
    }
    p{
        letter-spacing: 1px;
        padding:10px 0;
        margin: 10px 0;
        font-size: 30px;
        color: ${({theme}) => theme.colors.text};
    }
`;
const Button = styled.button`
    padding:10px;
    color: ${({theme}) => theme.colors.text};
    background-color: ${({theme,$bg}) => $bg ?? theme.colors.btn};
    cursor:pointer;
    font-size:1em;
    border: none;
    outline: none;
    border-radius: 5px;
    box-shadow: ${({theme}) => theme.colors.shadow};
    letter-spacing: 2px;
    &:hover{
        background-color: ${({theme}) => theme.colors.bg};
    }
`;
const HeroSection = ({title,btnbg}) => {
    return(
        <HeroSectionStyle>
            <div className="box">
                <h1>{title}</h1>
                <p>Simple project with react router dom and styled components.</p>
                <Button type="button" $bg={btnbg}>Hire Me</Button>
            </div>
        </HeroSectionStyle>
    )
}
export default HeroSection;