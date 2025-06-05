module.exports = {
    content: [
      "./layouts/**/*",
      "./content/**/*",
      "./static/**/*",
      "./**/*.html"
    ],
    safelist: [
      'min-h-screen',
      'flex',
      'flex-col',
      'flex-1',
      'items-center',
      'justify-center',
      'w-full',
      'max-w-xl',
      'max-w-2xl',
      'max-w-3xl',
      'max-w-4xl',
      'max-w-5xl',
      'mx-auto',
      'px-4',
      'text-7xl',
      'font-bold',
      'text-green-800',
      'mb-4',
      'text-center',
      'text-xl',
      'text-gray-500',
      'font-sans',
      'prose',
      'prose-lg',
      'max-w-none',
      'prose-headings:text-gray-900',
      'prose-a:text-blue-600',
      'prose-img:max-w-full',
      'prose-img:h-auto'
    ],
    theme: {
      extend: {
        typography: {
          DEFAULT: {
            css: {
              maxWidth: 'none',
              img: {
                marginTop: '2rem',
                marginBottom: '2rem',
                borderRadius: '8px',
              },
              'h1': {
                fontSize: '2.25rem',
                fontWeight: '700',
                marginTop: '3rem',
                marginBottom: '1.5rem',
              },
              'h2': {
                fontSize: '1.875rem',
                fontWeight: '600',
                marginTop: '2.5rem',
                marginBottom: '1rem',
              },
              'h3': {
                fontSize: '1.5rem',
                fontWeight: '600',
                marginTop: '2rem',
                marginBottom: '0.75rem',
              },
              'pre': {
                backgroundColor: '#f6f8fa',
                borderRadius: '6px',
                padding: '1rem',
              },
              'code': {
                backgroundColor: '#f6f8fa',
                borderRadius: '4px',
                padding: '0.2rem 0.4rem',
                color: '#d6336c',
              },
              'pre code': {
                backgroundColor: 'transparent',
                padding: 0,
                borderRadius: 0,
                color: 'inherit',
              },
            },
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }