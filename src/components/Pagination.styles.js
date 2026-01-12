import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
  list-style: none;
`;

export const PageButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${(props) => (props.$active ? '#ff00cc' : 'rgba(255, 255, 255, 0.2)')};
  background: ${(props) => (props.$active ? '#ff00cc' : 'transparent')};
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #ff00cc;
    border-color: #ff00cc;
    transform: scale(1.1);
  }
`;