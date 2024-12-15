import {
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
// import MainLayout from './layouts/MainLayout';
// import Hero from './components/Hero';
// import Header from './components/Header';
// import About from './components/About';
import NotFound from './pages/NotFound';
import ProfilesPage from './pages/ProfilesPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <NotFound />,
    },
    {
      path: '/profiles',
      element: <ProfilesPage />,
    },
  ]);

  return <RouterProvider router={router} />;

  // old way to doing things
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<MainLayout />}>
  //       <Route index path="/" element={<HomePage />} />
  //       <Route path="/Hero" element={<Hero />} />
  //       <Route path="/Header" element={<Header />} />
  //       <Route path="/About" element={<About />} />
  //       <Route path="*" element={<NotFound />} />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
}

export default App;
