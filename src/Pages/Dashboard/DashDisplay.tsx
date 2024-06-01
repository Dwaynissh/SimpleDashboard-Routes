import styled from "styled-components"
import CardProps from "../../Components/Props/CardProps"

const DashDisplay = () => {
  return (
    <div>
        <CardsHolder>
            <CardsHolderWrapp>
                <InsideWrapp>
                    <CardProps main="Revenue" amount={3500} date="Today" percent={60}/>
                </InsideWrapp>
            </CardsHolderWrapp>
        </CardsHolder>
    </div>
  )
}

export default DashDisplay

const InsideWrapp = styled.div`
height: 90%;
width: 95%;
/* display: flex;
justify-content: center;
align-items: center; */
`;
const CardsHolderWrapp = styled.div`
height: 100%;
width: 95%;
background-color: #f5f6ff;
border-radius: 8px;
position: absolute;
top: 110px;
display: flex;
justify-content: center;
align-items: center;
`;
const CardsHolder = styled.div`
height: 65vh;
width: 100%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`;