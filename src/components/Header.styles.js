import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;

  @media (max-width: 600px) {
    padding: 15px 20px;
    flex-direction: column;
    gap: 15px;
  }
`;

export const Logo = styled(Link)`
  font-family: 'Righteous', cursive;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #ff00cc, #3333ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(255, 0, 204, 0.3);

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const CartInfo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 25px;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;

  &:hover {
    background: #ff00cc;
    border-color: #ff00cc;
    box-shadow: 0 0 15px #ff00cc;
  }
  
  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Price = styled.span`
  font-family: 'Righteous', cursive;
  color: #fff;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  padding-right: 15px;
`;
