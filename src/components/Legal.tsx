export default function Legal() {
  return (
    <section className="relative py-16 md:py-20" style={{ background: 'var(--color-bg)' }}>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'var(--color-border)' }} />

      <div className="max-w-[900px] mx-auto px-6 md:px-10 space-y-16">
        {/* Impressum */}
        <div id="impressum">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-4 h-[2px] bg-[var(--color-accent)]" />
            <span className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Rechtliches
            </span>
          </div>
          <h2
            className="font-black tracking-[-0.04em] text-[var(--color-text)] mb-8"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}
          >
            Impressum
          </h2>

          <div className="space-y-6 text-[0.92rem] leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            <div>
              <h3 className="font-bold text-[var(--color-text)] mb-2">Angaben gemäss Art. 3 UWG</h3>
              <p>
                Porzi Tech GmbH<br />
                Churerstrasse 160A<br />
                8808 Pfäffikon SZ<br />
                Schweiz
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[var(--color-text)] mb-2">Vertreten durch</h3>
              <p>Fabio Porzi, Geschäftsführer</p>
            </div>

            <div>
              <h3 className="font-bold text-[var(--color-text)] mb-2">Kontakt</h3>
              <p>
                Telefon:{' '}
                <a href="tel:+41555259808" className="text-[var(--color-accent)] hover:underline">
                  055 525 98 08
                </a>
                <br />
                E-Mail:{' '}
                <a href="mailto:info@porzi-tech.ch" className="text-[var(--color-accent)] hover:underline">
                  info@porzi-tech.ch
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[var(--color-text)] mb-2">Handelsregister</h3>
              <p>
                Eingetragen im Handelsregister des Kantons Schwyz<br />
                UID: CHE-137.297.616<br />
                Sitz: Freienbach SZ
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[var(--color-text)] mb-2">Haftungsausschluss</h3>
              <p>
                Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte übernehmen wir keine Gewähr. Als
                Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen
                Gesetzen verantwortlich. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben unberührt.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[var(--color-text)] mb-2">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und
                jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>

        {/* Datenschutz */}
        <div id="datenschutz">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-4 h-[2px] bg-[var(--color-accent)]" />
            <span className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Rechtliches
            </span>
          </div>
          <h2
            className="font-black tracking-[-0.04em] text-[var(--color-text)] mb-8"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}
          >
            Datenschutzerklärung
          </h2>

          <div className="space-y-6 text-[0.92rem] leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            <div>
              <h3 className="font-bold text-[var(--color-text)] mb-2">1. Verantwortliche Stelle</h3>
              <p>
                Porzi Tech GmbH<br />
                Churerstrasse 160A<br />
                8808 Pfäffikon SZ<br />
                E-Mail:{' '}
                <a href="mailto:info@porzi-tech.ch" className="text-[var(--color-accent)] hover:underline">
                  info@porzi-tech.ch
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[var(--color-text)] mb-2">2. Erhebung und Speicherung personenbezogener Daten</h3>
              <p>
                Beim Besuch dieser Website werden durch den Hosting-Anbieter automatisch Informationen
                erfasst (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite,
                Browsertyp). Diese Server-Logfiles dienen der technischen Sicherheit und der
                Sicherstellung eines störungsfreien Betriebs. Eine Zusammenführung mit anderen
                Datenquellen findet nicht statt.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[var(--color-text)] mb-2">3. Kontaktaufnahme</h3>
              <p>
                Wenn Sie uns per Telefon oder E-Mail kontaktieren, speichern wir die von Ihnen
                mitgeteilten Daten zur Bearbeitung Ihrer Anfrage und für allfällige Anschlussfragen.
                Diese Daten geben wir nicht ohne Ihre Einwilligung an Dritte weiter.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[var(--color-text)] mb-2">4. Google Maps</h3>
              <p>
                Auf dieser Website ist eine Karte von Google Maps eingebunden. Beim Aufruf der
                Kontaktseite kann eine Verbindung zu Servern von Google hergestellt werden. Dabei
                können personenbezogene Daten (z. B. IP-Adresse) an Google übermittelt werden.
                Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
                Weitere Informationen finden Sie in der{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:underline"
                >
                  Datenschutzerklärung von Google
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[var(--color-text)] mb-2">5. Cookies und Tracking</h3>
              <p>
                Diese Website setzt derzeit keine Analyse- oder Marketing-Cookies ein. Es werden
                keine Tools wie Google Analytics eingesetzt.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[var(--color-text)] mb-2">6. Ihre Rechte</h3>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
                Verarbeitung Ihrer personenbezogenen Daten sowie ein Widerspruchsrecht gegen die
                Verarbeitung. Anfragen richten Sie bitte an die oben genannte Kontaktadresse.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[var(--color-text)] mb-2">7. Änderungen</h3>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
                aktuellen rechtlichen Anforderungen entspricht.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
