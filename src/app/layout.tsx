import { CartProvider } from "./components/cart-context";
import "./globals.css";
import Navbar from "@/app/components/navbar"


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">

      <CartProvider>
          <Navbar />

          {/* Page Content */}
          <main className="flex-grow">{children}</main>
        </CartProvider>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-4 text-center text-gray-500 text-sm bg-[#0c2132]">
          © {new Date().getFullYear()} TheContractor. All rights reserved.
        </div>


      </body>
    </html>
  );
}






