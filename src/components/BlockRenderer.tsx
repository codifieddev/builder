export const BlockRenderer = ({ block }: { block: any }) => {
  switch (block.blockType) {
    case 'hero':
      return <Hero {...block} />
    case 'about':
      return <About {...block} />
    default:
      return null
  }
}

export function Hero({ title, subtitle }: any) {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg text-gray-700 max-w-xl text-center">{subtitle}</p>
    </section>
  )
}

export function About({ title, description }: any) {
  return (
    <section className="py-16 px-8 bg-white">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 max-w-2xl">{description}</p>
    </section>
  )
}
