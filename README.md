# Futuristic Portfolio

A responsive, GitHub Pages-ready personal portfolio with editable placeholder
content and a required interactive WebGL 3D hero.

## Edit your content

Most visible content is in `app/page.tsx`. Search for square brackets such as
`[YOUR NAME]`, `[Project One]`, and `[Your Skill]`, then replace them with your
own information. Replace the photo placeholder in the hero with an optimized
portrait image placed in `public/`.

Update the profile links and email address near the bottom of `app/page.tsx`.
Colors, typography, spacing, and responsive styles are in `app/globals.css`.

## Run locally

Requirements: Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal.

## Production build

```bash
npm run build
```

The static website is generated in `dist/client`.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. Open **Settings → Pages** in the repository.
3. Under **Build and deployment**, select **GitHub Actions**.
4. Push a commit to `main` or manually run the deployment workflow.

The included workflow automatically handles both a repository site such as
`username.github.io/repository-name` and a user site such as
`username.github.io`.

## Main features

- Mandatory real-time 3D hero built with React Three Fiber and Three.js
- Desktop navigation and full-screen mobile menu
- 0–100% scroll progress indicator
- Section breadcrumbs
- Expandable experience and education timelines
- Pointer-responsive skills mind map
- Responsive project cards and contact footer
- Reduced-motion and keyboard-accessible interaction support

The visual direction is inspired by the supplied reference, but the design,
code, graphics, and placeholder copy are original.
