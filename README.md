# Financial Talent Platform

A modern, responsive web application built with React, TypeScript, and Tailwind CSS for showcasing financial talent solutions.

## Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Component Library**: Built with shadcn/ui components
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, CSS Variables
- **UI Components**: shadcn/ui, Radix UI primitives
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/jstreich13/finance-flair-deck.git
cd finance-flair-deck
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deploying as a static site

This project is configured to build as a standalone static website suitable for GitHub Pages, Netlify, Vercel (static export), Cloudflare Pages, S3/CloudFront, or any static host.

### Build

```sh
npm run build
```

The output will be in `dist/`. A `404.html` is created automatically for SPA routing on GitHub Pages, and a Netlify `_redirects` file is included in `public/`.

### Preview locally

```sh
npm run preview
```

### Upload to any static host

Serve the contents of `dist/` at your domain or subpath. The Vite `base` is set to `./` so assets resolve correctly from subpaths.

### GitHub Pages

1. Push this repository to GitHub.
2. In GitHub, go to Settings → Pages.
3. Set Source to Deploy from a branch → `gh-pages` (or use GitHub Actions to deploy `dist/`).
4. Deploy the `dist/` folder. The `404.html` handles SPA routes.

### Netlify

- Drag-and-drop the `dist/` folder to Netlify, or
- Create a new site from Git: build command `npm run build`, publish directory `dist/`.
  The `_redirects` file ensures all routes serve `index.html`.

### Vercel

- Create a new project from this repo.
- Set Framework Preset: Vite.
- Build command: `npm run build`, Output directory: `dist/`.

No server required. This is a static SPA build.

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── CTA.tsx         # Call-to-action section
│   ├── Features.tsx    # Features showcase
│   ├── Hero.tsx        # Hero section
│   ├── ProblemSolution.tsx # Problem/solution comparison
│   ├── Results.tsx     # Results/metrics section
│   └── Team.tsx        # Team and backers section
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── assets/             # Static assets
```

## Customization

The design system is defined in `src/index.css` with CSS custom properties for colors, gradients, and animations. All components use Tailwind CSS classes and can be easily customized.

## License

This project is for demonstration purposes.