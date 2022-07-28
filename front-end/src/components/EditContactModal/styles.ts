import styled from 'styled-components';

export const Overlay = styled.div`
  /* background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px); */
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 500px;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary.lighter};
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  h1 {
    font-size: 22px;
    color: ${({ theme }) => theme.colors.gray[900]};
    margin-bottom: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .cancel-button {
    background: transparent;
    border: none;
    font-size: 16px;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const Button = styled.button`
  height: 52px;
  border: none;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.danger.main};
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  color: #FFF;
  font-weight: bold;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.danger.light};
  }
`;