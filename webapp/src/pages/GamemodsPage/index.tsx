import { trpc } from '../../lib/trpc';

export const GamemodsPage = () => {
  const result = trpc.getGameMode.useQuery();
  console.log(result);
  return gamemods.map((mod) => (
    <div key={mod.key}>
      <h2>{mod.name}</h2>
      <p>{mod.description}</p>
    </div>
  ));
};
