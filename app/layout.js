import './globals.css'

export const metadata = {
  title: 'Halo Divisional Championship',
  description: 'Season 1 - 5 Week Cycle',
  icons: {
    icon: '/favicon.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
