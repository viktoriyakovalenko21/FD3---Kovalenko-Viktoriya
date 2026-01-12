import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 50px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const SearchBlock = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;

  svg {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #aaa;
    font-size: 1.2rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 15px 12px 45px;
  border-radius: 30px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #ff00cc;
    box-shadow: 0 0 15px rgba(255, 0, 204, 0.3);
  }
`;

export const CategoriesList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const CategoryBtn = styled.button`
  background: ${(props) => (props.$active ? '#ff00cc' : 'rgba(255, 255, 255, 0.05)')};
  color: white;
  border: 1px solid ${(props) => (props.$active ? '#ff00cc' : 'rgba(255, 255, 255, 0.1)')};
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    background: ${(props) => (props.$active ? '#ff00cc' : 'rgba(255, 255, 255, 0.15)')};
    transform: translateY(-2px);
  }
`;