import './globals.css'

export const metadata = {
  title: 'Wasel',
  description: 'Empowering Kuwait\'s youth through verified digital identities and AI-driven employment solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

