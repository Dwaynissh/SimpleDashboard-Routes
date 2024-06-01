import styled from "styled-components";
import {BiSearch} from "react-icons/bi"
import {BsBell} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import photo from "../../Assets/globe.jpg"

const DashHeader = () => {
  return (
    <div>
      <DHead>
        <NavsHolder>
          <Search>
            <BiSearch/>
            <input type="text" placeholder="Search Here...."/>
          </Search>
          <Notifications>
            <BsBell/>
            <AiOutlineMail/>
            <Circle>

            </Circle>
          </Notifications>
        </NavsHolder>
      </DHead>
    </div>
  )
}

export default DashHeader


const Circle = styled.div`
padding: 20px 20px;
border-radius: 50%;
/* background-image: url(${photo}); */
background-color: white;
margin-right: 15px;
cursor: pointer;
`;
const Notifications = styled.div`
color: white;
display: flex;
justify-content: flex-end;
align-items: center;
gap: 30px;
cursor: pointer;
`;
const Search = styled.div`
height: 100%;
width: 18%;
border-radius: 20px;
color: white;
background-color: #6280f9;
display: flex;
justify-content: flex-start;
align-items: center;
margin-left: 20px;
padding-left: 20px;
cursor: pointer;
input {
  background-color: inherit;
  color: white;
  outline: none;
  border: none;
  margin-left: 10px;
}
`;
const NavsHolder = styled.div`
height: 20%;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;
const DHead = styled.div`
padding-top: 30px;
height: 25vh;
width: 100%;
background-color: #4c6ef8;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
`;