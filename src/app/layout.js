export const metadata = {
  title: 'JEE CBT — Lakshya JEE 2026',
  description: 'Computer Based Test platform for JEE Main preparation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js" />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"
          dangerouslySetInnerHTML={{
            __html: `document.addEventListener('DOMContentLoaded', function() {
              if (window.renderMathInElement) {
                renderMathInElement(document.body, {
                  delimiters: [
                    { left: '$$', right: '$$', display: true  },
                    { left: '$',  right: '$',  display: false }
                  ],
                  throwOnError: false
                });
              }
            });`,
          }}
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}