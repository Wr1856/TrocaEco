import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50:'#e8f0eb',
          100:'#b7cfc0',
          200:'#94b8a2',
          300:'#639877',
          400:'#45845d',
          500:'#166534',
          600:'#145c2f',
          700:'#104825',
          800:'#0c381d',
          900:'#092a16',
        }
      },
    },
  },
  plugins: [],
}
export default config
