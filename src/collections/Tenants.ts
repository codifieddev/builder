// payload.collections/tenants.ts
import { Access, CollectionConfig } from 'payload'

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

export const Tenants: CollectionConfig = {
  slug: 'tenants',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: access,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'domains', type: 'array', fields: [{ name: 'domain', type: 'text' }] },
    {
      name: 'theme',
      type: 'group',
      fields: [
        { name: 'primaryColor', type: 'text' },
        { name: 'font', type: 'text' },
      ],
    },
    { name: 'settings', type: 'json' },
    {
      name: 'createdBy',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      defaultValue: ({ req: { user } }) => user?.id,
    },
  ],
}
