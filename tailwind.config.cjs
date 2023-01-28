/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  mode: 'jit',
  // you dont need `purge: enabled: production` because you are using jit
  purge: [
    "./src/**/*.svelte",
    "./src/**/*.html"
  ],
  theme: {},
  plugins: [],
}