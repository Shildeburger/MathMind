import { trpc } from '../../lib/trpc';

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
      <h1>Game Mods</h1>
      {data?.gamemods.map((mod) => (
        <div key={mod.key}>
          <h2>{mod.name}</h2>
          <p>{mod.description}</p>
        </div>
      ))}
    </div>
  );
};
