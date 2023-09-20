import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from "../Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}