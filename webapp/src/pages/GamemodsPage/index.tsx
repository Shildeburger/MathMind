import { trpc } from '../../lib/trpc';
import { Link } from 'react-router-dom';
import { getClassicModeRoute } from '../../lib/routes';

export const GamemodsPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getGameMode.useQuery();
  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <div>
        <p>Profile</p>
      </div>
      <h1>Game Mods</h1>
      {data?.gamemods.map((mod) => (
        <div key={mod.key}>
          <h2>
            <Link to={getClassicModeRoute({ MathMind: mod.key })}>{mod.name}</Link>
          </h2>
          <p>{mod.description}</p>
        </div>
      ))}
    </div>
  );
};
