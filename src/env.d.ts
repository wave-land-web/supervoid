/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Swiper ships its stylesheets as extensionless package subpath exports (e.g.
// `swiper/css/bundle` -> swiper-bundle.min.css). Vite's ambient `*.css` module
// only covers paths that literally end in .css, so TypeScript has nothing to
// resolve these side-effect imports to. Declare them as untyped modules.
declare module 'swiper/css'
declare module 'swiper/css/bundle'
