// payload.collections/pages.ts
import Hero from '@/components/Hero/Hero'
import { Access, CollectionConfig, FieldAccess } from 'payload'

const access: Access = ({ req }) => {
  const data = req.data
  const user = req.user
  const url = req?.url
  if (url?.includes('/api') || user?.role === 'superadmin') {
    return true
  } else if (user?.role == 'admin') {
    return {
      createdBy: {
        equals: user.id,
      },
    }
  } else {
    return false
  }
}

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: { useAsTitle: 'title' },
  access: {
    read: access,
  },
  fields: [
    {
      name: 'tenant',
      type: 'relationship',
      relationTo: 'tenants',
      required: true,
      admin: { position: 'sidebar' },
      filterOptions: ({ user }) => {
        if (!user) return false
        if (user.role === 'superadmin') return true

        return {
          createdBy: { equals: user.id },
        }
      },
    },
    {
      name: 'createdBy',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      defaultValue: ({ req: { user } }) => user?.id,
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
  hooks: {},
}
