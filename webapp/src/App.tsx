export const App = () => {
  const gamemods = [
    { key: 'classic', name: 'Classic', description: 'classic' },
    { key: 'timed', name: 'Timed', description: 'timed' },
    { key: 'challenge', name: 'Challenge', description: 'challenge' },
  ];
  return gamemods.map((mod) => (
    <div key={mod.key}>
      <h2>{mod.name}</h2>
      <p>{mod.description}</p>
    </div>
  ));
};
