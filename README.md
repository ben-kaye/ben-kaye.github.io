# ben-kaye.github.io

Redirects the former GitHub Pages address to https://ben-kaye.com.

GitHub Pages publishes the root of `main`. Its custom domain is `ben-kaye.com`,
which lets GitHub issue a permanent redirect from `ben-kaye.github.io` while
the destination continues to be served by Cloudflare.

`index.html` and `404.html` provide browser redirects as a fallback, preserving
the path, query string, and fragment when JavaScript is enabled.

The actual website lives in https://github.com/ben-kaye/ben-kaye-site.
This repository contains only the redirect and does not deploy to Cloudflare.
