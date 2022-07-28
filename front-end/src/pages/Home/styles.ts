import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;

  position: relative;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    background: #fff;
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow: 8px 4px 18px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: #BCBCBC;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;

  strong {
    font-size: 24px;
  }

  button {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;
`;

export const Card = styled.div`
  background: #FFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  img {
      width: 125px;
      max-height: 125px;
      border-radius: 4px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  }

  .info {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 8px;

    .contact-name {
      margin-bottom: 4px;
    }

    span {
      display: block;
      gap: 2px;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 6px;
  }
`;

export const EditButton = styled.button`
  color: #fff;
  background: ${({ theme }) => theme.colors.primary.main};
  text-decoration: none;
  font-weight: bold;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  transition: all 0.2s ease-in;
  margin-left: 8px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.dark};
  }
`
export const DeleteButton = styled.button`
  color: #fff;
  background: ${({ theme }) => theme.colors.danger.main};
  text-decoration: none;
  font-weight: bold;
  border: none;
  padding: 6px 10px;
  border-radius: 4px;
  transition: all 0.2s ease-in;
  margin-left: 8px;

  &:hover {
    background: ${({ theme }) => theme.colors.danger.dark};
  }
`

export const FooterModalHome = styled.footer`
  margin-top: 8px;
  display: flex;
  align-items: center;

  button {
    width: 100%;
  }
`;

export const CancelButton = styled.button`
  height: 52px;
  border: none;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.gray[200]};
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  color: #FFF;
  font-weight: bold;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[900]};
  }
`