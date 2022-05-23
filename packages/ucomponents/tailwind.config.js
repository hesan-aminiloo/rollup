module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.{js,jsx,ts,tsx}']
  },
}
