import { Block } from 'payload'
import { TextBlock } from '../Text/config'

const Hero: Block = {
  slug: 'hero',
  fields: [
    {
      name: 'variant',
      type: 'select',
      options: ['split', 'centered', 'video', 'minimal'],
      defaultValue: 'centered',
      required: true,
    },
    {
      name: 'backgroundType',
      type: 'radio',
      label: 'Background Type',
      options: [
        { label: 'Color', value: 'color' },
        { label: 'Image', value: 'image' },
        { label: 'Video', value: 'video' },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Background Color',
      defaultValue: '#ffffff',
      admin: {
        description: 'Use HEX or CSS color (e.g. #000000 or rgb(255,255,255)).',
        condition: (data) => {
          return data.blocks[0]?.backgroundType === 'color'
        },
      },
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      admin: {
        condition: (data) => data.blocks[0]?.backgroundType === 'image',
      },
    },
    {
      name: 'videoUrl',
      type: 'text',
      label: 'Background Video URL',
      admin: {
        condition: (data) => data.blocks[0]?.backgroundType === 'video',
      },
    },
    { name: 'title', type: 'text' },
    { name: 'subtitle', type: 'text' },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Side Image (Split Layout)',
      admin: {
        condition: (data) => {
          return data.blocks[0]?.variant === 'split'
        },
      },
    },
    { name: 'description', type: 'textarea' },
    { name: 'ctaText', type: 'text' },
    { name: 'ctaLink', type: 'text' },
    { name: 'Text', type: 'blocks', blocks: [TextBlock] },
  ],
}

export default Hero
