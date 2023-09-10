import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    "~/node_modules/flowbite/**/*.js"
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
    require('daisyui'),
  ],
  daisyui: {
    themes: false,
    darkTheme: "dark",
    base: false,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "daisyui-",
    logs: true,
  },
}
