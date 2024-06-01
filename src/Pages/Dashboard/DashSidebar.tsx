import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import sideNav from "./Sideicon.json";

const DashSidebar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Image to="/">
            <Pic src="https://demo.dashboardpack.com/marketing-html/img/logo.png" />
          </Image>

          <NavHolder>
            {sideNav.map((el) => (
              <Nav>
                <div>
                  <ICON>
                    <Icon src={el.icon} />
                  </ICON>
                  {el.name}
                </div>
                <FaAngleRight />
              </Nav>
            ))}
          </NavHolder>
        </Wrapper>
      </Container>
    </div>
  )
}

export default DashSidebar

const ICON = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-right: 20px;
`;

const Icon = styled.img``;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
  color: #959cbd;
  margin-bottom: 20px;
`;

const NavHolder = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
`;

const Pic = styled.img``;

const Image = styled(Link)``;

const Wrapper = styled.div`
  height: 90%;
  width: 85%;
`;

const Container = styled.div`
  width: 300px;
  height: 100%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;

  /* &::-webkit-scrollbar {
    visibility: hidden;

    &:hover {
      visibility: visible;
    }
  } */
`;