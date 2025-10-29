// payload.collections/pages.ts
import Hero from '@/components/Hero/Hero'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: { useAsTitle: 'title' },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'tenant',
      type: 'relationship',
      relationTo: 'tenants',
      required: true,
      admin: { position: 'sidebar' },
    },
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true },
    { name: 'published', type: 'checkbox' },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [Hero],
    },
  ],
  hooks: {
    // ensure slug is unique per tenant or add validations
  },
}
