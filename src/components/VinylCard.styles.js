import styled, { keyframes } from 'styled-components';

export const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 25px;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-10px);
    border-color: #ff00cc;
    box-shadow: 0 10px 30px rgba(255, 0, 204, 0.2);
  }
`;

export const Image = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 4px solid #111;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  transition: transform 0.5s;

  ${Card}:hover & {
    animation: ${spin} 3s linear infinite;
  }
`;

export const Title = styled.h3`
  font-family: 'Righteous', cursive;
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #fff;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Artist = styled.p`
  font-size: 0.9rem;
  color: #aaa;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: auto;
  background: rgba(0, 0, 0, 0.2);
  padding: 5px 5px 5px 15px;
  border-radius: 30px;
`;

export const Price = styled.span`
  font-family: 'Righteous', cursive;
  font-size: 1.1rem;
  color: #f1c40f;
`;

export const AddButton = styled.button`
  background: linear-gradient(90deg, #ff00cc, #3333ff);
  border: none;
  border-radius: 20px;
  padding: 8px 15px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
  
  &:active {
    transform: scale(0.95);
  }
`;