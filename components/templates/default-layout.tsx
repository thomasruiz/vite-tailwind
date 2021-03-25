import React from 'react';
import { Sidebar } from '../organisms/sidebar';

export { DefaultLayout };

type Children = React.ReactNode;

function DefaultLayout({ children }: { children: Children }) {
  return (
    <section className='flex max-w-7xl m-auto'>
      <Sidebar/>
      <main className='p-5 pb-10 border-l-2 border-solid border-gray-100 min-h-screen'>
        {children}
      </main>
    </section>
  );
}
