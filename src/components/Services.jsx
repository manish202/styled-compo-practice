import styled from "styled-components";
const Section = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:80vh;
    flex-wrap: wrap;
`;
const Card = styled.div`
    margin:10px;
    padding:20px;
    border: 2px solid white;
    width:250px;
    background-color:${({theme}) => theme.colors.cardbg};
    color:${({theme}) => theme.colors.text};
    letter-spacing: 2px;
`;
const data = [
    {title:"Hello world 1",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, ab."},
    {title:"Hello world 2",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, ab."},
    {title:"Hello world 3",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, ab."},
    {title:"Hello world 4",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, ab."},
    {title:"Hello world 5",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, ab."},
    {title:"Hello world 6",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, ab."},
    {title:"Hello world 7",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, ab."},
    {title:"Hello world 8",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, ab."},
    {title:"Hello world 9",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, ab."},
    {title:"Hello world 10",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, ab."},
]
const Services = () => {
    return(
        <Section>
            {data.map(({title,desc},ind) => <Card key={ind}><h3>{title}</h3><p>{desc}</p></Card>)}
        </Section>
    )
}
export default Services;