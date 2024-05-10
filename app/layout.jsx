import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: 'Ecoturismo Puerto Boyaca',
  description: 'Jose Luis Salinas',
};

import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  )
};