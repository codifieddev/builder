export async function getTenantByDomain(domain: string) {
  const res = await fetch(
    `${process.env.PAYLOAD_URL}/api/tenants?where[domains.domain][equals]=${domain}`,
    // { next: { revalidate: 3600 } }, // 1 hour cache
  )

  const json = await res.json()
  return json?.docs?.[0] ?? null
}
