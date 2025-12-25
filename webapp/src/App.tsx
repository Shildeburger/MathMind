import { TrpcProvider } from './lib/trpc';
import { GamemodsPage } from './pages/GamemodsPage';

export const App = () => {
  return (
    <TrpcProvider>
      <GamemodsPage />
    </TrpcProvider>
  );
};
