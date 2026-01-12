import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  padding-bottom: 100px;
`;

export const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-family: 'Righteous', cursive;
  font-size: 2rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 15px;
  
  span {
    color: #ff00cc;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const ClearButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 0, 50, 0.5);
  color: #ff4d4d;
  padding: 8px 18px;
  border-radius: 20px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s;
  
  &:hover {
    background: rgba(255, 0, 50, 0.2);
    box-shadow: 0 0 15px rgba(255, 0, 50, 0.2);
  }
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 20px;
  transition: all 0.3s;

  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
    gap: 15px;
    position: relative;
  }

  &:hover {
    border-color: #3333ff;
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const ItemImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 25px;
  border: 2px solid #222;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 700px) {
    margin-right: 0;
    width: 120px;
    height: 120px;
  }
`;

export const ItemInfo = styled.div`
  flex-grow: 1;
  
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const ItemTitle = styled.h3`
  font-family: 'Righteous', cursive;
  font-size: 1.4rem;
  margin-bottom: 5px;
  letter-spacing: 1px;
  
  @media (max-width: 700px) {
    font-size: 1.2rem;
    white-space: normal;
  }
`;

export const ItemArtist = styled.p`
  color: #aaa;
  font-size: 0.9rem;
  text-transform: uppercase;
`;

export const CountGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(0, 0, 0, 0.3);
  padding: 5px 15px;
  border-radius: 30px;
  margin-right: 30px;

  @media (max-width: 700px) {
    margin-right: 0;
  }
`;

export const CountButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  
  &:hover:not(:disabled) {
    color: #ff00cc;
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

export const ItemPrice = styled.div`
  font-family: 'Righteous', cursive;
  font-size: 1.3rem;
  color: #f1c40f;
  width: 120px;
  text-align: right;
  
  @media (max-width: 700px) {
    width: auto;
    text-align: center;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
  margin-left: 20px;
  transition: 0.2s;
  
  &:hover {
    color: #ff4d4d;
    transform: scale(1.1);
  }
  
  @media (max-width: 700px) {
    position: absolute;
    top: 15px;
    right: 15px;
    margin-left: 0;
    color: #ff4d4d;
  }
`;

export const BottomPanel = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 30px;
    align-items: center;
  }
`;

export const TotalSum = styled.div`
  font-size: 1.1rem;
  color: #ccc;
  text-align: right;
  
  div {
    font-family: 'Righteous', cursive;
    font-size: 2rem;
    color: #fff;
    margin-top: 5px;
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 20px;
    width: 100%;
  }
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 12px 25px;
  border-radius: 30px;
  transition: all 0.3s;
  
  &:hover {
    color: #fff;
    border-color: #fff;
    background: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

export const PayButton = styled.button`
  background: linear-gradient(90deg, #ff00cc, #3333ff);
  border: none;
  padding: 15px 45px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 5px 20px rgba(51, 51, 255, 0.4);
  transition: all 0.3s;
  
  &:hover {
    box-shadow: 0 10px 40px rgba(255, 0, 204, 0.5);
    transform: translateY(-3px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 100px 0;
  
  h2 {
    font-family: 'Righteous', cursive;
    font-size: 2rem;
    margin: 20px 0;
  }
  
  p {
    color: #aaa;
    margin-bottom: 30px;
  }
`;