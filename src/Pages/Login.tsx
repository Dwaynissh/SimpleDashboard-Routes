import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Hold>
            Name
            <Input placeholder="Please Enter Your Name Here" />
          </Hold>
          <Hold>
            Email
            <Input type="text" placeholder="Please Enter Your Email Here" />
          </Hold>

          <Text>
            Don't Have an Account ..?{" "}
            <NavLink to="/signin" style={{ textDecoration: "none" }}>
              <span>Signin Then.!!</span>
            </NavLink>
            <NavLink to="/" style={{ textDecoration: "none" }}>Exit</NavLink>
          </Text>
          <Btn>
                <NavLink to="/dashboard">
                    <Submit>
                        Submit
                    </Submit>
                </NavLink>
                
            </Btn>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Login;

const Submit = styled.button`
padding: 20px 50px;
border-radius: 10px;
border: none;
background-color: white;
cursor: pointer;
`;
const Btn = styled.div`
width: 100%;   
margin-top: 50px;
display: flex;
justify-content: center;
align-items: center;
`;
const Text = styled.div`
  margin-top: 20px;
  span {
    color: red;
  }
`;

const Input = styled.input`
  height: 50px;
  border: none;
  outline: none;
  background-color: white;
  font-size: 20px;
  color: black;
  padding: 10px 10px 10px 10px;
`;

const Hold = styled.div`
  width: 80%;
  height: 80px;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  margin-top: 10px;

  select {
    background-color: white;
    height: 50px;
    color: black;
  }
`;

const Wrapper = styled.div`
  width: 50%;
  height: 70%;
  border-radius: 40px;
  background-color: lawngreen;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  background-color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;