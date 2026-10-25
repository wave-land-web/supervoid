# Notes for Claude

Read README.md first. It covers commands, code style, project layout and content. This file only adds what the code doesn't make obvious.

- **Verify against a production build.** Run `npm run build`, then serve `dist/` (`npx serve dist`). The dev server's script timing is different: the work-page hero's autoplay bug only reproduced in a production build.
- **Block analytics when testing in a browser.** Pages send Umami pageviews and Mux Data beacons. In Playwright, abort requests to `cloud.umami.is` and `litix.io` before loading any page.
- **Use a fresh browser context after rebuilding.** `serve` sends no cache headers, so a reused context can load the previous build's HTML.
- **Refactors shouldn't change the built HTML.** Diff `dist/**/*.html` before and after, normalizing hashed `/_astro/` file names and Astro's scoped-style ids.
- **Work-page clips (hero and gallery) are `CoverVideo`**: `<mux-video>` bundled from npm over a first-frame still, played and paused by an IntersectionObserver. The CDN `<mux-player>` is only used on /reel. If you ever need to start that player from code, use `autoplay="muted"`: a `play()` call right after it's defined gets aborted by the player's own load.
- **The bar to match:** wave-land-web/product-insight and wave-land-web/waveland, which are the same agency and stack. Port their patterns, but not their Sanity CMS plumbing.
