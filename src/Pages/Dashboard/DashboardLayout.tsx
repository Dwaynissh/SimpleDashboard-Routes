import { Outlet } from "react-router-dom"
import Dashboardeader from "./DashHeader";
import DashSidebar from "./DashSidebar"
import DashDisplay from "./DashDisplay";
import styled from "styled-components";

const DashboardLayout = () => {
  return (
    <div>
        <MainHold>
            <DashSidebar/>
            <OutletHold>
                <Dashboardeader/>
                <DashDisplay/>
            </OutletHold>
        </MainHold>
        
        
    </div>
  )
}


export default DashboardLayout;

const OutletHold = styled.div`
height: 100vh;
width: calc(100% - 300px);
display: flex;
flex-direction: column;
position: relative;
`;
const MainHold = styled.div`
height: 100vh;
display: flex;
position: relative;
`;
