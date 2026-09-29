import PageHeader from '../components/PageHeader'
import { LegalContent, LegalBlock, LegalLink } from '../components/LegalContent'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Impressum() {
  usePageMeta('Impressum | Porzi Tech GmbH', 'Impressum der Porzi Tech GmbH, Churerstrasse 160A, 8808 Pfäffikon SZ.')

  return (
    <>
      <PageHeader overline="Impressum" title="Impressum" />
      <LegalContent>
        <LegalBlock title="Angaben gemäss Art. 3 UWG">
          <p>
            Porzi Tech GmbH<br />
            Churerstrasse 160A<br />
            8808 Pfäffikon SZ<br />
            Schweiz
          </p>
        </LegalBlock>

        <LegalBlock title="Vertreten durch">
          <p>Fabio Porzi, Geschäftsführer</p>
        </LegalBlock>

        <LegalBlock title="Kontakt">
          <p>
            Telefon: <LegalLink href="tel:+41555259808">055 525 98 08</LegalLink>
            <br />
            E-Mail: <LegalLink href="mailto:info@porzi-tech.ch">info@porzi-tech.ch</LegalLink>
          </p>
        </LegalBlock>

        <LegalBlock title="Handelsregister">
          <p>
            Eingetragen im Handelsregister des Kantons Schwyz<br />
            UID: CHE-137.297.616<br />
            Sitz: Freienbach SZ
          </p>
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
      </LegalContent>
    </>
  )
}
