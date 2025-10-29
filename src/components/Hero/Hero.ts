import { Block } from 'payload'

const Hero: Block = {
  slug: 'hero',
  fields: [
    { name: 'title', type: 'text' },
    { name: 'subtitle', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media' },
  ],
}

export default Hero
