# ben-kaye.github.io

Redirects the former GitHub Pages address to https://ben-kaye.com.

GitHub Pages publishes the root of `main`. Its custom domain is `ben-kaye.com`,
which lets GitHub issue a permanent redirect from `ben-kaye.github.io` while
the destination continues to be served by Cloudflare.

GitHub currently redirects to `http://ben-kaye.com`; Cloudflare immediately
redirects that to `https://ben-kaye.com`. Both redirects preserve the path and
query string. GitHub cannot enable its HTTPS enforcement until it has a
certificate for the custom domain; Cloudflare already provides the destination's
HTTPS certificate. No DNS changes are needed for this setup.

`index.html` and `404.html` provide browser redirects as a fallback, preserving
the path, query string, and fragment when JavaScript is enabled.

The actual website lives in https://github.com/ben-kaye/ben-kaye-site.
This repository contains only the redirect and does not deploy to Cloudflare.

The custom-domain setting was moved from the old site's GitHub Pages fallback
to this repository. To restore that fallback in future, move the domain setting
back to `ben-kaye-site` before removing the Cloudflare Worker routes.
