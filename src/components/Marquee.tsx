const items = [
  'SPS-Programmierung',
  'Steuerungsbau',
  'Anlagenservice',
  'Elektroschema',
  'Inbetriebnahme',
  'Fahrzeugtechnik',
  'Revisionen & Umbauten',
  'Schweizer Qualität',
  'Pfäffikon SZ',
]

const repeated = [...items, ...items]

export default function Marquee() {
  return (
    <div
      className="marquee-wrap relative overflow-hidden border-y py-4"
      style={{
        borderColor: 'var(--color-border)',
        background: 'var(--color-surface)',
      }}
    >
      <div className="marquee-track flex gap-0 whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-6 text-[0.7rem] uppercase tracking-[0.22em] font-black"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {item}
            <span style={{ color: 'var(--color-accent)', opacity: 0.7 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
