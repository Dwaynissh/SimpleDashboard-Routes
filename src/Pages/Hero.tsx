import styled from "styled-components"
import globe from "../Assets/globe.jpg"

const Hero = () => {
  return (
    <div>
      <HeroMain>
        <HeroWrapp>
            <TextContent>
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magni quia  <br />sunt voluptas.</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus deserunt neque iusto aut enim repellendus voluptatibus magni consequuntur ex maiores impedit obcaecati officia nemo, sapiente voluptatem accusantium nesciunt laboriosam esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident numquam dolor voluptate eius debitis repellendus eaque, deleniti ad itaque quasi, harum beatae nulla suscipit doloribus quia maiores, quod inventore? </p>
            </TextContent>
            <ImageContent>
              <img src={globe} alt="" />
            </ImageContent>
        </HeroWrapp>
      </HeroMain>
    </div>
  )
}

export default Hero


const ImageContent = styled.div`
height: 100%;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
img{
  height: 60%;
  width: 90%;
  border-radius: 8px;
}
`;
const TextContent = styled.div`
height: 100%;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const HeroWrapp = styled.div`
height: 100%;
width: 80%;
display: flex;
justify-content: center;
align-items: center;
`;
const HeroMain = styled.div`
height: calc(90vh - 80px);
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #ffffff;
`;