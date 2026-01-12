import styled, { keyframes } from 'styled-components';

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroSection = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

export const HeroTitle = styled.h1`
  font-family: 'Righteous', cursive;
  font-size: 5rem;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 20px;
  animation: ${fadeInUp} 0.8s ease;

  .filled {
    color: #fff;
    text-shadow: 0 0 20px rgba(255, 0, 204, 0.6);
  }
  
  .outline {
    color: transparent;
    -webkit-text-stroke: 2px #3333ff;
    display: block;
    font-size: 6rem;
  }

  @media (max-width: 1024px) {
    font-size: 4rem;
    
    .outline {
      font-size: 5rem;
    }
  }

  @media (max-width: 600px) {
    font-size: 2.5rem;
    
    .outline {
      font-size: 3rem;
      -webkit-text-stroke: 1px #3333ff;
    }
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;
  animation: ${fadeInUp} 1s ease;
`;

export const CtaButton = styled.button`
  background: linear-gradient(90deg, #ff00cc, #3333ff);
  color: white;
  border: none;
  padding: 18px 40px;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 50px;
  cursor: pointer;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(51, 51, 255, 0.4);
  transition: transform 0.2s;
  animation: ${fadeInUp} 1.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(255, 0, 204, 0.5);
  }
`;

export const CatalogSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
`;

export const SectionTitle = styled.h2`
  font-family: 'Righteous', cursive;
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-align: center;
  
  span {
    color: #ff00cc;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 30px;
  
  @media (max-width: 600px) {
    gap: 15px;
    grid-template-columns: 1fr;
  }
`;

export const SkeletonCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  height: 380px;
  animation: pulse 1.5s infinite ease-in-out;
  
  @keyframes pulse {
    0% {
      opacity: 0.3;
    }
    
    50% {
      opacity: 0.1;
    }
    
    100% {
      opacity: 0.3;
    }
  }
`;

export const NotFoundMsg = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #aaa;
  margin-top: 50px;
`;

export const ErrorMsg = styled.div`
  text-align: center;
  color: #ff4d4d;
  font-size: 1.5rem;
  margin-top: 50px;
`;