import Link from "next/link";
import "./globals.css";
import Header from "./components/Header";
import Footer  from "./components/Footer";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* Navbar */}
        <nav className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">Buildify</h1>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              <Link href="/order/1" className="hover:text-blue-600 transition">Order</Link>
              <Link href="/login" className="hover:text-blue-600 transition">Login</Link>
              <Link href="/register" className="hover:text-blue-600 transition">Sign Up</Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
