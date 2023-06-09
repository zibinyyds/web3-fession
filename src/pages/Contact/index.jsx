import { useQuery, gql } from '@apollo/client';
import { uniswapClient } from '../../config/graphql';

// tokens(first: 10) {
//   id
//   name
//   symbol
//   decimals
// }
// rewardTokens(first: 5) {
//   id
//   token {
//     id
//   }
//   type
// }
const GET_TOKENS = gql`
  query {
      tokens(first: 5) {
        id
        name
        symbol
        decimals
        lastPriceUSD
      }
  }
`;

export default function TokensList() {
  const { data, loading, error } = useQuery(GET_TOKENS, { client: uniswapClient });
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <ul>
      {data.tokens.map(token => (
        <li key={token.id}>
          {token.name} ({token.id}): {token.decimals} ETH
        </li>
      ))}
    </ul>
  );
}