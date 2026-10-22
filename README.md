# SONAT Offshore

Static implementation of the SONAT Offshore website, built section-by-section from the supplied Figma file.

## Local preview

```sh
python3 -m http.server 4173 --directory public
```

Open `http://localhost:4173`.

## Cloudflare Pages

Create a Pages project connected to this repository with:

- Build command: leave empty
- Build output directory: `public`

The included `wrangler.toml` also declares `public` as the Pages output directory for Wrangler-based deployments.
