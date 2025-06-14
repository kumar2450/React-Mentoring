import { Outlet } from 'react-router-dom';

import MainHeader from '../components/Navigation/MainHeader.tsx';
import SessionsContextProvider from '../store/sessions-content.tsx';

export default function Root() {
  return (
    <SessionsContextProvider>
      <MainHeader />
      <Outlet />
    </SessionsContextProvider>
  );
}
