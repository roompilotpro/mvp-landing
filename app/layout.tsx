import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RoomPilot - Affordable Room Rentals Without the Fees",
  description: "The automation-first room rental marketplace. 2% fees vs competitors' 8%. Fast payouts. Full landlord control.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
