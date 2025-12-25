import './globals.css'

export const metadata = {
  title: 'Wasel',
  description: 'Empowering Kuwait\'s youth through verified digital identities and AI-driven employment solutions.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

