export async function getPageBySlug(tenantId: string, slug: string) {
  console.log(
    `${process.env.PAYLOAD_URL}/api/pages?where[tenant][equals]=${tenantId}&where[slug][equals]=${slug}`,
  )
  const res = await fetch(
    `${process.env.PAYLOAD_URL}/api/pages?where[tenant][equals]=${tenantId}&where[slug][equals]=${slug}`,
    // { next: { revalidate: 60 } },
  )

  const json = await res.json()
  return json?.docs?.[0] ?? null
}
