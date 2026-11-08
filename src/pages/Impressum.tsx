import { PageHeader } from '../components/ui'
import { LegalContent, LegalBlock, LegalLink } from '../components/LegalContent'
import { usePageMeta } from '../hooks/usePageMeta'
import { useLang } from '../lib/i18n'
import { contact, pictureCredits } from '../lib/site'

function Credits({ intro }: { intro: string }) {
  return (
    <>
      <p>{intro}</p>
      <ul className="space-y-1.5 text-small">
        {pictureCredits.map((p) => (
          <li key={p.href}>
            {p.what}: <LegalLink href={p.href}>{p.who}</LegalLink>, {p.licence}
          </li>
        ))}
      </ul>
    </>
  )
}

const address = (
  <p>
    {contact.company}<br />
    {contact.street}<br />
    {contact.city}<br />
    Schweiz / Switzerland
  </p>
)

export default function Impressum() {
  const { lang } = useLang()
  const en = lang === 'en'
  usePageMeta(
    en ? 'Legal notice | Porzi Tech GmbH' : 'Impressum | Porzi Tech GmbH',
    en ? 'Legal notice of Porzi Tech GmbH, Churerstrasse 160A, 8808 Pfäffikon SZ.' : 'Impressum der Porzi Tech GmbH, Churerstrasse 160A, 8808 Pfäffikon SZ.',
  )

  const phone = <LegalLink href={contact.phoneHref}>{contact.phone}</LegalLink>
  const email = <LegalLink href={contact.emailHref}>{contact.email}</LegalLink>

  if (en) {
    return (
      <>
        <PageHeader overline="Legal notice" title="Legal notice" />
        <LegalContent>
          <LegalBlock title="Company">{address}</LegalBlock>
          <LegalBlock title="Represented by"><p>Fabio Porzi, Managing Director</p></LegalBlock>
          <LegalBlock title="Contact"><p>Phone: {phone}<br />Email: {email}</p></LegalBlock>
          <LegalBlock title="Commercial register">
            <p>Registered in the commercial register of the Canton of Schwyz<br />UID: {contact.uid}<br />Registered office: Freienbach SZ</p>
          </LegalBlock>
          <LegalBlock title="Disclaimer">
            <p>
              The content of this website has been compiled with the greatest care. We accept no liability for the
              accuracy, completeness or timeliness of the content.
            </p>
          </LegalBlock>
          <LegalBlock title="Copyright">
            <p>
              The content and works on this website are subject to Swiss copyright law. Any reproduction, editing,
              distribution or other use beyond the limits of copyright law requires the written consent of the author.
            </p>
          </LegalBlock>
          <LegalBlock title="Picture credits">
            <Credits intro="Some pictures on this website come from Wikimedia Commons:" />
          </LegalBlock>
        </LegalContent>
      </>
    )
  }

  return (
    <>
      <PageHeader overline="Impressum" title="Impressum" />
      <LegalContent>
        <LegalBlock title="Angaben gemäss Art. 3 UWG">{address}</LegalBlock>
        <LegalBlock title="Vertreten durch"><p>Fabio Porzi, Geschäftsführer</p></LegalBlock>
        <LegalBlock title="Kontakt"><p>Telefon: {phone}<br />E-Mail: {email}</p></LegalBlock>
        <LegalBlock title="Handelsregister">
          <p>Eingetragen im Handelsregister des Kantons Schwyz<br />UID: {contact.uid}<br />Sitz: Freienbach SZ</p>
        </LegalBlock>
        <LegalBlock title="Haftungsausschluss">
          <p>
            Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte übernehmen wir keine Gewähr. Als
            Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben unberührt.
          </p>
        </LegalBlock>
        <LegalBlock title="Urheberrecht">
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und
            jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </LegalBlock>
        <LegalBlock title="Bildnachweis">
          <Credits intro="Einige Bilder dieser Website stammen von Wikimedia Commons:" />
        </LegalBlock>
      </LegalContent>
    </>
  )
}
