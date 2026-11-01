# SONAT Offshore Sanity Studio

This Studio is connected to the Sonat Group Sanity project (`diimer9i`) and its
`production` dataset. It currently defines the editorial content types used by
the website: **Blog Category** and **Blog Post**.

## Run locally

```sh
npm install
npm run dev
```

## Build and deploy

```sh
npm run build
npm run deploy
```

Deploying publishes the Studio interface to Sanity Hosting. Content remains
protected by Sanity project access; publishing a Studio does not publish any
blog documents.

## Content model

- **Blog Category:** name, slug, optional description, and optional sort order.
- **Blog Post:** title, slug, category reference, card thumbnail, article header
  image, excerpt, rich-text body, author name, publication date, reading time,
  “What’s Inside” sidebar sections, and SEO title/description.

Sanity’s draft/publish workflow provides document status; there is no separate
`published` checkbox that could disagree with the actual published document.
