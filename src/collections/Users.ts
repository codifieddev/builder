import { User } from '@/payload-types'
import type { Access, CollectionConfig } from 'payload'

const access: Access = async ({ req }) => {
  const user = req.user
  let role = user!?.role
  if (role == 'superadmin') {
    return true
  }
  return false
}

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'role'],
  },
  auth: true,
  access: {
    read: access,
    create: access,
    delete: access,
    update: access,
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      label: 'Role',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Super Admin', value: 'superadmin' },
      ],
      defaultValue: 'admin',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
