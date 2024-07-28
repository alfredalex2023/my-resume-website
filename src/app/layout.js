// layout.js
// This file defines the RootLayout component which wraps all other components in the application.

import Link from "next/link";
import "../../styles/globals.css";

// Metadata for the website
export const metadata = {
  title: "My Resume Website",
  description: "A simple resume website built with Next.js",
};

// RootLayout component wraps around all other components
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>{/* Add any additional <head> elements here */}</head>
      <body>
        {/* Navigation bar */}
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        {/* Main content */}
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
