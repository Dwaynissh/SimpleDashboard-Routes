import styled from "styled-components"
import { NavLink } from "react-router-dom"

const Signin = () => {
  return (
    <div>
        <Main>
            <CardWrapp>
                <LoginWrapp>
                    <Name>
                        <h1>DWAYNE MILES</h1>
                    </Name>
                    <Input>
                         Name
                    </Input>
                    <input type="text" placeholder="John Prince" />
                    <Input>
                        Email
                    </Input>
                    <input type="email" placeholder="Johnprince@gmail.com" />
                    <Input>
                        Address
                    </Input>
                    <input type="Address" placeholder="45 Oniru Victoria Island" />
                    <Input>
                     Year Of Birth
                    </Input>
                    <select name="" id="">
                        <option value="">1998</option>
                        <option value="">1999</option>
                        <option value="">2000</option>
                        <option value="">2001</option>
                    </select>
                    <Btn>
                        <Submit>
                            Submit
                        </Submit>
                    </Btn>
                </LoginWrapp>
            </CardWrapp>
            <Text>
            Already Have an Account ..? 
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <span> Login Then.!!</span>
            </NavLink>
          </Text>
        </Main>
    </div>
  )
}

export default Signin

// const Main = styled.div`
    
// `;
const Text = styled.div`
color: white;
margin-top: 20px;
`;
const Submit = styled.button`
padding: 20px 50px;
border-radius: 10px;
border: none;
background-color: lawngreen;
`;
const Btn = styled.div`
width: 100%;   
margin-top: 50px;
display: flex;
justify-content: center;
align-items: center;
`;

const Input = styled.div`
width: 100%;  
margin-top: 30px;
font-size: 20px;
font-weight: bold;
`;

const Name = styled.div`
height: 10%;
width: 100%; 
display: flex;
justify-content: center;
align-items: center;
color: #4b9303;
`;

const LoginWrapp = styled.div`
height: 85%;
width: 80%;
input{
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    padding-left: 20px;
    font-size: 17px;
    outline-color: lawngreen;
}
select{
    width: 100%;
    height: 40px;
}
`;
const CardWrapp = styled.div`
height: 80%;
width: 50%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`;
const Main = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: lawngreen;
`;