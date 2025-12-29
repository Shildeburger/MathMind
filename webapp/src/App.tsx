import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TrpcProvider } from './lib/trpc';
import { GamemodsPage } from './pages/GamemodsPage';
import { ClassicMode } from './pages/ClassicMode';
import { getAllModesRoute, getClassicModeRoute } from './lib/routes';
import { classicModeRouteParams } from './lib/routes';

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllModesRoute()} element={<GamemodsPage />} />
          <Route path={getClassicModeRoute(classicModeRouteParams)} element={<ClassicMode />} />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
};
