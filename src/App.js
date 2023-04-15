import { globalStyles } from 'stitches.config';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from 'routes/home/Home';
import { useAuth } from './context';
import Dashboard, { DashboardHome, Journal, Settings } from 'routes/dashboard';

const App = () => {
  const { authenticated, initialized, user } = useAuth();

  globalStyles();

  return (
    <>
      {initialized && (
        <Routes>
          {!authenticated && (
            <Route
              path="/"
              element={authenticated ? <Navigate to="/dashboard" /> : <Home />}
            />
          )}
          <Route
            path="*"
            element={
              authenticated ? <Navigate to="/dashboard" /> : <Navigate to="/" />
            }
          />
          {authenticated && (
            <Route path="dashboard" element={user && <Dashboard />}>
              <Route index element={user && <DashboardHome />} />
              <Route path="journal" element={user && <Journal />} />
              <Route path="settings" element={user && <Settings />} />
            </Route>
          )}
        </Routes>
      )}
    </>
  );
};

export default App;
