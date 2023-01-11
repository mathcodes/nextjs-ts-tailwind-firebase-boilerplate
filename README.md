<hr>
<h1 align="center">nextjs-typescript-tailwindcss-firebase</h1>
<hr>

This is a starter template for [Next.js](https://nextjs.org/) projects with [TypeScript](https://www.typescriptlang.org/) and [Tailwind CSS](https://tailwindcss.com/). Includes [Firebase](https://firebase.google.com/) authentication and database.

<hr>
<h2 align="center">Getting Started</h2>
<hr>

## Configuration

### Firebase config:

Register a new web app under your [Firebase project](https://console.firebase.google.com/u/0/) and copy the config to your `.env.local` file:
```js
NEXT_PUBLIC_FIREBASE_API_KEY

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN

NEXT_PUBLIC_FIREBASE_PROJECT_ID

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET

NEXT_PUBLIC_FIREBASE_MESSAGING_SET

NEXT_PUBLIC_FIREBASE_APP_ID

NEXT_PUBLIC_BASE_URL
```

### TypeScript config:
tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### Tailwind config:
tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};
```

### NextJS config:
next.config.js
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
```
<hr>
<h2 align="center">Installation</h2>
<hr>

Install dependencies:

```bash
npm install
# or
yarn
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

### Production

Build the application:

```bash
npm run build
# or
yarn build
```

Start the application:

```bash
npm run start
# or
yarn start
```

## License
```
MIT
```


<h1 align="center">Let's Connect!</h1>

<p align="center">
  <a href="https://jonchristie.net" target="_blank">
    <img src="https://img.shields.io/static/v1?label=|&message=SITE&color=4faeba&style=plastic&logo=react&logo-color=white"/>
  </a>
  <a href="https://www.linkedin.com/in/jonpchristie/" target="_blank">
    <img src="https://img.shields.io/static/v1?label=|&message=LINKED-IN&color=4faeba&style=plastic&logo=linkedin&logo-color=white"/>
  </a>
  <a href="https://twitter.com/jcircle9" target="_blank">
    <img src="https://img.shields.io/static/v1?label=|&message=TWITTER&color=4faeba&style=plastic&logo=twitter&logo-color=white"/>
  </a>
  <a href="https://angel.co/u/jon-christie-1" target="_blank">
      <img src="https://img.shields.io/static/v1?label=|&message=ANGEL-LIST&color=4faeba&style=plastic&logo=angellist&logo-color=white"/>
  </a>
  <a href="https://github.com/mathcodes/mathcodes.github.io/raw/sync/public/Jon_Christie_Resume_2023.pdf" target="_blank">
      <img src="https://img.shields.io/static/v1?label=|&message=RESUME&color=4faeba&style=plastic&logo=react&logo-color=white"/>
  </a>
</p>