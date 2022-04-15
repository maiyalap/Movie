import react from "react";
import PropTypes from 'prop-types';

// styled
import { Wrapper, Content, Text } from "./HeroImage.styles";

const HeroImage = ( { image,title,text } ) => (
    <Wrapper image={image}>
        <Content>
            <text>
               <h1>{title}</h1> 
               <p>{text}</p>
            </text>
        </Content>
    </Wrapper>

);

HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
};

export default HeroImage;

