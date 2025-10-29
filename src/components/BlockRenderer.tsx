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

// export function Hero({ title, subtitle }: any) {
//   return (
//     <section className="flex flex-col items-center justify-center py-20 bg-gray-100">
//       <h1 className="text-4xl font-bold mb-4">{title}</h1>
//       <p className="text-lg text-gray-700 max-w-xl text-center">{subtitle}</p>
//     </section>
//   )
// }

export const Hero = (props: any) => {
  const { variant, ...rest } = props

  switch (variant) {
    // case "split":
    //   return <HeroSplit {...rest} />;
    case 'centered':
      return <HeroCentered {...rest} />
    // case "video":
    //   return <HeroVideo {...rest} />;
    // case "minimal":
    //   return <HeroMinimal {...rest} />;
    // default:
    //   return <HeroCentered {...rest} />;
  }
}

// export const HeroCentered = ({
//   title,
//   subtitle,
//   description,
//   backgroundType,
//   backgroundColor,
//   backgroundImage,
//   ctaText,
//   ctaLink
// }: any) => {
//   let style =
//     backgroundType == 'image'
//       ? {
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: 'cover',
//         }
//       : {
//           backgroundColor: backgroundColor,
//         }
//   return (
//     <section
//       className={`relative flex flex-col items-center justify-center text-center text-white py-32`}
//       style={style}
//     >
//       <div className="bg-black/50 absolute inset-0" />
//       <div className="relative z-10 max-w-2xl">
//         {subtitle && <p className="text-lg mb-2">{subtitle}</p>}
//         <h1 className="text-5xl font-bold mb-4">{title}</h1>
//         {description && <p className="text-lg opacity-90">{description}</p>}
//       </div>
//     </section>
//   )
// }

export const HeroCentered = ({
  title,
  subtitle,
  description,
  backgroundType,
  backgroundColor,
  backgroundImage,
  ctaText,
  ctaLink,
}: any) => {
  const style =
    backgroundType === 'image'
      ? {
          backgroundImage: `url(${backgroundImage.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }
      : {
          backgroundColor: backgroundColor || '#f5f5f5',
        }

  console.log(backgroundImage)

  return (
    <section className="relative py-20 md:py-32 flex flex-col items-center gap-1" style={style}>
      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {title}
        </h1>

        {description && (
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {ctaText && (
            <a
              href={ctaLink || '#'}
              className="px-6 py-3 bg-green-400 hover:bg-green-500 text-gray-900 rounded-lg font-medium text-base transition-colors duration-200"
            >
              {ctaText}
            </a>
          )}

          {subtitle && (
            <a
              href="#"
              className="px-6 py-3 text-gray-900 font-medium text-base hover:text-gray-600 transition-colors duration-200 inline-flex items-center gap-2"
            >
              {subtitle}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
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
