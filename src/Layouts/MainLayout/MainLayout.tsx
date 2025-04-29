import SideBar from "./Sidebar";

// import Head from './Head'; // Import the Head component
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

// Prevent Font Awesome from adding its CSS since it's already imported
config.autoAddCss = false;

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="main-section">
   
      <SideBar />
      <main className="p-6 main-layout">
        {children}
      </main>

    </section>
  );
}
