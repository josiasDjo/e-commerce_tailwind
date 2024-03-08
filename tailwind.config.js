/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg_blockOne': "url('/src/images/portrait-jeune-adulte-portant-maquette-capuche.jpg')",
        'bg_blockTwo': "url('/src/images/224f2a1b41563535c2ffcaab1acf428f_e4633e3e-0b7b-4bda-bb5a-cd614b8a04f5_1800x1800.jpg')",
        "bg_class-1B": "url('/src/images/craghoppers-mens-anderson-waterproof-cagoule-p49528-266366_medium.jpg')",
        "bg_class-2B": "url('/src/images/mastermind-homme-x-streetwear-messenger-bag-black-1.jpg')",
      }
    },
  },
  plugins: [],
}

