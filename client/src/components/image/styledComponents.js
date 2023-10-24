import styled from 'styled-components';
import bgimage from '../../landing.jpg';

export const Container = styled.div`
    background-image: url(${bgimage});
    background-size: cover; // Esto ajusta la imagen para cubrir todo el elemento
    background-position: center; // Esto centra la imagen
    width: 100%;
    height: 900px; // Establece el alto que desees
`;

