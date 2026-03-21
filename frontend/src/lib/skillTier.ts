/** Maps each skill label to a proficiency tier (v1.1 spec). */
export function skillTier(label: string): 1 | 2 | 3 {
  const tier1 = new Set([
    'Strategic Sourcing',
    'Power BI',
    'Cost Analysis',
    'Qlik Sense',
    'ERP Systems',
    'Process improvement',
  ])
  const tier2 = new Set([
    'Contract Negotiation',
    'SAP MM',
    'RFQ / RFP',
    'Excel (Advanced)',
  ])

  if (tier1.has(label)) return 1
  if (tier2.has(label)) return 2
  return 2
}
