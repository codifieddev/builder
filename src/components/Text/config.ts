import { Block } from 'payload'

export const TextBlock: Block = {
  slug: 'textBlock',
  labels: {
    singular: 'Text Block',
    plural: 'Text Blocks',
  },
  fields: [
    {
      name: 'headingType',
      type: 'select',
      label: 'Heading Type',
      options: [
        { label: 'H1', value: 'h1' },
        { label: 'H2', value: 'h2' },
        { label: 'H3', value: 'h3' },
        { label: 'H4', value: 'h4' },
        { label: 'Paragraph', value: 'p' },
      ],
      defaultValue: 'h2',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading Text',
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'Body Text',
      admin: {
        description: 'Supports plain text or short paragraph content.',
      },
    },
    {
      name: 'alignment',
      type: 'select',
      label: 'Text Alignment',
      defaultValue: 'left',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
    },
    {
      name: 'theme',
      type: 'select',
      label: 'Text Theme',
      defaultValue: 'light',
      options: [
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
        { label: 'Accent', value: 'accent' },
      ],
      admin: {
        description: 'Choose text color preset that matches your section background.',
      },
    },
    {
      name: 'maxWidth',
      type: 'select',
      label: 'Text Width',
      defaultValue: 'md',
      options: [
        { label: 'Narrow', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Wide', value: 'lg' },
      ],
    },
  ],
}
