import styled from "styled-components";

interface iProps {
main? : string;
amount?: number;
date?: string;
percent?: number;
}


const CardProps = ({ main, amount, date, percent}: iProps) => {
  return (
    <div>
        <Card>
            <CardWrapp>
                <TopSec>
                    <LeftSec>
                        {main} <br />
                        ${amount}
                    </LeftSec>
                    <RightSec>
                        <DateHolder>
                            {date}
                        </DateHolder>
                    </RightSec>
                </TopSec>
                <BottomSec>
                    <Line>

                    </Line>
                    {percent}%
                </BottomSec>
            </CardWrapp>
        </Card>
    </div>
  )
}

export default CardProps

const Line = styled.div`
height: 5px;
width: 60%;
border-radius: 10px;
background-color: red;
`;
const BottomSec = styled.div`
height: 40%;
width: 100%;
display: flex;
justify-content: flex-start;
align-items: flex-end;
gap: 5px;
color: red;
`;


const DateHolder = styled.div`
height: 20%;
width: 50%;
background-color: lightblue;
color: white;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
`;
const RightSec = styled.div`
height: 100%;
width: 50%;
display: flex;
justify-content: flex-end;
align-items: center;
`;
const LeftSec = styled.div`
height: 100%;
width: 50%;
`;
const TopSec = styled.div`
height: 60%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
const CardWrapp = styled.div`
height: 80%;
width: 90%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Card = styled.div`
height: 200px;
width: 300px;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
`;