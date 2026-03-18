import { useState } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './router';
import LoadingPage from './pages/front/LoadingPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingPage onComplete={handleLoadingComplete} enableWheelRotation={false} />;
  }

  return <RouterProvider router={router} />;
}

export default App;
