import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

export const Header = styled.header`
  margin-top: 10px;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 20px;
  height: 30px;
  border: 1px solid white;
  transition: color 0.2s ease-in;
  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`

export const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  border: 1px solid white;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

export const Loader = styled.span`
  text-align: center;
  display: block;
`;

export const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

export const CoinsList = styled.ul``;