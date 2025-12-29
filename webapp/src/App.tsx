import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TrpcProvider } from './lib/trpc';
import { GamemodsPage } from './pages/GamemodsPage';
import { ClassicMode } from './pages/ClassicMode';
import { getAllModesRoute, getStandardModeRoute } from './lib/routes';

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllModesRoute()} element={<GamemodsPage />} />
          <Route path={getStandardModeRoute({ MathMind: ':MathMind' })} element={<ClassicMode />} />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
};
