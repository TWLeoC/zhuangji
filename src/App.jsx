import { RouterProvider } from 'react-router';
import { router } from './router';
import Home from './pages/front/Home/Home';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
