import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { fetchCoins } from "../api";
import { isDarkAtom } from "../atoms";
import { ICoin } from "../interfaces/Coins";
import {
  Container,
  Header,
  CoinsList,
  Coin,
  Title,
  Loader,
  Img,
  Button,
} from "../styles/Coins";

function Coins() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Helmet>
        <title>J3y3ho Coin</title>
      </Helmet>
      <Header>
        <div>
          <Title>J3y3ho Coin</Title>
        </div>
        <div>
          <Button onClick={toggleDarkAtom}>Toggle Theme</Button>
        </div>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
export default Coins;
