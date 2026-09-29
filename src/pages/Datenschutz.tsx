import PageHeader from '../components/PageHeader'
import { LegalContent, LegalBlock, LegalLink } from '../components/LegalContent'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Datenschutz() {
  usePageMeta('Datenschutzerklärung | Porzi Tech GmbH', 'Datenschutzerklärung der Porzi Tech GmbH, Pfäffikon SZ.')

  return (
    <>
      <PageHeader overline="Datenschutz" title="Datenschutzerklärung" />
      <LegalContent>
        <LegalBlock title="1. Verantwortliche Stelle">
          <p>
            Porzi Tech GmbH<br />
            Churerstrasse 160A<br />
            8808 Pfäffikon SZ<br />
            E-Mail: <LegalLink href="mailto:info@porzi-tech.ch">info@porzi-tech.ch</LegalLink>
          </p>
        </LegalBlock>

        <LegalBlock title="2. Erhebung und Speicherung personenbezogener Daten">
          <p>
            Beim Besuch dieser Website werden durch den Hosting-Anbieter automatisch Informationen
            erfasst (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite,
            Browsertyp). Diese Server-Logfiles dienen der technischen Sicherheit und der
            Sicherstellung eines störungsfreien Betriebs. Eine Zusammenführung mit anderen
            Datenquellen findet nicht statt.
          </p>
        </LegalBlock>

        <LegalBlock title="3. Kontaktaufnahme">
          <p>
            Wenn Sie uns per Telefon oder E-Mail kontaktieren, speichern wir die von Ihnen
            mitgeteilten Daten zur Bearbeitung Ihrer Anfrage und für allfällige Anschlussfragen.
            Diese Daten geben wir nicht ohne Ihre Einwilligung an Dritte weiter.
          </p>
        </LegalBlock>

        <LegalBlock title="4. Google Maps">
          <p>
            Auf der Kontaktseite dieser Website ist eine Karte von Google Maps eingebunden. Beim
            Aufruf der Kontaktseite kann eine Verbindung zu Servern von Google hergestellt werden.
            Dabei können personenbezogene Daten (z. B. IP-Adresse) an Google übermittelt werden.
            Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            Weitere Informationen finden Sie in der{' '}
            <LegalLink href="https://policies.google.com/privacy">Datenschutzerklärung von Google</LegalLink>.
          </p>
        </LegalBlock>

        <LegalBlock title="5. Cookies und Tracking">
          <p>
            Diese Website setzt derzeit keine Analyse- oder Marketing-Cookies ein. Es werden
            keine Tools wie Google Analytics eingesetzt.
          </p>
        </LegalBlock>

        <LegalBlock title="6. Ihre Rechte">
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
            Verarbeitung Ihrer personenbezogenen Daten sowie ein Widerspruchsrecht gegen die
            Verarbeitung. Anfragen richten Sie bitte an die oben genannte Kontaktadresse.
          </p>
        </LegalBlock>

        <LegalBlock title="7. Änderungen">
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
            aktuellen rechtlichen Anforderungen entspricht.
          </p>
        </LegalBlock>
      </LegalContent>
    </>
  )
}
