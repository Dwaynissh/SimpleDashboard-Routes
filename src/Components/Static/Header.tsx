import styled from "styled-components";
import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <div>
        <HeaderHolder>
            <HWrapp>
                <Name>
                    <h1>DWAYNE MILES</h1>
                </Name>
                <Navigations>
                    <Navs>Home</Navs>
                    <Navs>About</Navs>
                    <Navs>Contact</Navs>
                    <Navs>Services</Navs>
                </Navigations>
                <Btns>
                    <NavLink to="/signin" style={{ textDecoration: "none"}}>
                        <Button>Get Started</Button>    
                    </NavLink>
                </Btns>
            </HWrapp>
        </HeaderHolder>
    </div>
  )
}

export default Header


// const HeaderHolder = styled.div`
    
// `;
// const HeaderHolder = styled.div`
    
// `;
// const HeaderHolder = styled.div`
    
// `;
// const HeaderHolder = styled.div`
    
// `;

const Button = styled.div`
font-size: 20px;
color: #383838;
`;
const Btns = styled.div`
height: 100%;
width: 20%;
display: flex;
justify-content: flex-end   ;
align-items: center; 
&:hover{
    cursor: pointer;
}
`;
const Navs = styled.div`
font-size: 20px;
color: #383838;
`;
const Navigations = styled.div`
height: 100%;
width: 40%;  
display: flex;
justify-content: center;
align-items: center;
gap: 50px;
&:hover{
    cursor: pointer;
}
`;
const Name = styled.div`
height: 100%;
width: 20%; 
display: flex;
justify-content: flex-start;
align-items: center;
color: white;
`;
const HWrapp = styled.div`
height: 100%;
width: 80%;
display: flex;
justify-content: space-between;
align-items: center;
`;
const HeaderHolder = styled.div`
height: 80px;
width: 100%;
background-color: lawngreen;
display: flex;
justify-content: center;
align-items: center;
`;