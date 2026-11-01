import {defineField, defineType} from 'sanity'

const portableText = [
  {type: 'block', styles: [{title: 'Normal', value: 'normal'}, {title: 'Heading 2', value: 'h2'}, {title: 'Heading 3', value: 'h3'}, {title: 'Quote', value: 'blockquote'}]},
  {type: 'image', options: {hotspot: true}},
]

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'sidebar', title: 'Article sidebar'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Post title',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required().max(150),
    }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      group: 'content',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'blogCategory'}],
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Card excerpt',
      description: 'Short summary used on blog cards and previews.',
      type: 'text',
      rows: 3,
      group: 'content',
      validation: (rule) => rule.required().max(280),
    }),
    defineField({
      name: 'cardThumbnail',
      title: 'Card thumbnail',
      type: 'image',
      options: {hotspot: true},
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headerImage',
      title: 'Article header image',
      type: 'image',
      options: {hotspot: true},
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Article body',
      type: 'array',
      of: portableText,
      group: 'content',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'authorName',
      title: 'Author name',
      type: 'string',
      group: 'sidebar',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publication date',
      type: 'datetime',
      group: 'sidebar',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readingTimeMinutes',
      title: 'Reading time (minutes)',
      type: 'number',
      group: 'sidebar',
      validation: (rule) => rule.required().integer().min(1),
    }),
    defineField({
      name: 'tableOfContents',
      title: 'What’s Inside',
      description: 'Sidebar navigation links shown beside the article.',
      type: 'array',
      group: 'sidebar',
      of: [
        {
          type: 'object',
          name: 'articleSection',
          title: 'Article section',
          fields: [
            defineField({name: 'title', title: 'Section title', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'anchor', title: 'Heading anchor', type: 'slug', options: {source: 'title', maxLength: 80}, validation: (rule) => rule.required()}),
          ],
          preview: {select: {title: 'title'}},
        },
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      group: 'seo',
      validation: (rule) => rule.max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO description',
      type: 'text',
      rows: 3,
      group: 'seo',
      validation: (rule) => rule.max(160),
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'category.title', media: 'cardThumbnail'},
  },
})
