import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import CompleteProfile from './pages/CompleteProfile';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className='container xl:max-w-screen-xl'>
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='/complete-profile' element={<CompleteProfile />} />
          <Route path="/" element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </QueryClientProvider>
  )
}
export default App;