import { PageHeader } from '../components/ui'
import { LegalContent, LegalBlock, LegalLink } from '../components/LegalContent'
import { usePageMeta } from '../hooks/usePageMeta'
import { useLang } from '../lib/i18n'
import { contact } from '../lib/site'

export default function Datenschutz() {
  const { lang } = useLang()
  const en = lang === 'en'
  usePageMeta(
    en ? 'Privacy policy | Porzi Tech GmbH' : 'Datenschutzerklärung | Porzi Tech GmbH',
    en ? 'Privacy policy of Porzi Tech GmbH, Pfäffikon SZ.' : 'Datenschutzerklärung der Porzi Tech GmbH, Pfäffikon SZ.',
  )

  const responsible = (
    <p>
      {contact.company}<br />
      {contact.street}<br />
      {contact.city}<br />
      {en ? 'Email' : 'E-Mail'}: <LegalLink href={contact.emailHref}>{contact.email}</LegalLink>
    </p>
  )
  const googlePolicy = 'https://policies.google.com/privacy'

  if (en) {
    return (
      <>
        <PageHeader overline="Privacy" title="Privacy policy" />
        <LegalContent>
          <LegalBlock title="1. Controller">{responsible}</LegalBlock>
          <LegalBlock title="2. Collection and storage of personal data">
            <p>
              When you visit this website, the hosting provider automatically records information (e.g. IP address,
              date and time of access, page visited, browser type). These server log files serve technical security and
              smooth operation. They are not combined with other data sources.
            </p>
          </LegalBlock>
          <LegalBlock title="3. Contacting us">
            <p>
              If you contact us by phone or email, we store the data you provide in order to handle your enquiry and any
              follow-up questions. We do not pass this data on to third parties without your consent.
            </p>
          </LegalBlock>
          <LegalBlock title="4. Google Maps">
            <p>
              The contact page offers a map from Google Maps. The map only loads after you click “Load map”. Only then
              does your browser connect to Google’s servers, and personal data (e.g. your IP address) may be transmitted
              to Google. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. For more
              information, see <LegalLink href={googlePolicy}>Google’s privacy policy</LegalLink>.
            </p>
          </LegalBlock>
          <LegalBlock title="5. Cookies, fonts and tracking">
            <p>
              This website uses no analytics or marketing cookies and no tools such as Google Analytics. Fonts are served
              from our own server. Your language choice (German or English) is saved in your browser’s local storage and
              is not sent to us.
            </p>
          </LegalBlock>
          <LegalBlock title="6. Your rights">
            <p>
              You have the right to information, correction, deletion and restriction of the processing of your personal
              data, and the right to object to its processing. Please send requests to the contact address above.
            </p>
          </LegalBlock>
          <LegalBlock title="7. Changes">
            <p>We may amend this privacy policy so that it always meets current legal requirements.</p>
          </LegalBlock>
        </LegalContent>
      </>
    )
  }

  return (
    <>
      <PageHeader overline="Datenschutz" title="Datenschutzerklärung" />
      <LegalContent>
        <LegalBlock title="1. Verantwortliche Stelle">{responsible}</LegalBlock>
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
            Auf der Kontaktseite kann eine Karte von Google Maps angezeigt werden. Die Karte wird
            erst geladen, wenn Sie auf «Karte laden» klicken. Erst dann stellt Ihr Browser eine
            Verbindung zu Servern von Google her, und es können personenbezogene Daten (z. B.
            IP-Adresse) an Google übermittelt werden. Anbieter ist Google Ireland Limited, Gordon
            House, Barrow Street, Dublin 4, Irland. Weitere Informationen finden Sie in der{' '}
            <LegalLink href={googlePolicy}>Datenschutzerklärung von Google</LegalLink>.
          </p>
        </LegalBlock>
        <LegalBlock title="5. Cookies, Schriften und Tracking">
          <p>
            Diese Website setzt keine Analyse- oder Marketing-Cookies ein. Es werden keine Tools
            wie Google Analytics eingesetzt. Die Schriften werden von unserem eigenen Server
            geladen. Ihre Sprachwahl (Deutsch oder Englisch) wird im lokalen Speicher Ihres
            Browsers abgelegt und nicht an uns übermittelt.
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
