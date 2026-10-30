# Kompetenzcheck 10d – Modellieren und Problemlösen

Stand: 30.10.2026 · neue Konfiguration · Version 1.0.0

## Inhalt

- `index.html`: generische Lernstandscheck-App aus dem Gesamtpaket vom 22.09.2026.
- `config.js`: neue Kompetenzliste, neue `datasetId` und bestehende Supabase-Verbindung.
- `Kompetenzen_fuer_Workflow_Helfer.txt`: alle sieben Kompetenzen im Importformat `Titel :: Erläuterung`.

## Wichtig: 10d ist bisher eine Legacy-Version

Das bisherige 10d-Repository verwendet noch eine monolithische HTML-Datei. Deshalb
musst du beim Wechsel auf die generische Vorlage **einmalig beide Dateien** (`index.html`
und `config.js`) ins Root von `klausurcheck-10d` hochladen.

Vorher die alte `index.html` sichern (z. B. über GitHub-Versionierung). NICHT die
bisherige Version nur durch `config.js` ergänzen; sie wertet diese Datei nicht aus.

Der neue Check hat eine eigene Kennung:
`10d-modellieren-problemloesen-2026-10-30`

Die alten Rückmeldungen in den Legacy-Tabellen bleiben unverändert. Für diesen
Wechsel **kein SQL** und keinen Datenbank-Reset ausführen.

## Nach dem Upload testen

1. Deployment des GitHub-Pages-Repositories abwarten.
2. Schüleransicht öffnen: https://9d2zkzpjqp-lang.github.io/klausurcheck-10d/?v=20261030
3. Lehreransicht öffnen: https://9d2zkzpjqp-lang.github.io/klausurcheck-10d/?view=dashboard&v=20261030
4. Einmal eine Testbewertung abgeben und überprüfen, ob sie im Dashboard auftaucht.
5. Testdaten über den Lehrer-Button „Alles zurücksetzen“ löschen, wenn der Test beendet ist.

## Einsatz in der Abschlussstunde

- Zu Beginn: Selbsteinschätzung zu allen sieben Kompetenzen.
- Im Lehrer-Dashboard einen manuellen Messpunkt „Beginn“ setzen.
- Übungen / Besprechung gezielt nach den Unsicherheiten der Klasse.
- Zum Abschluss: Lernende aktualisieren ihre Einschätzung **im selben Browser**.
- Manuellen Messpunkt „Ende“ speichern und Veränderungen vergleichen.
- Bei Bedarf die Auswertung als PDF oder CSV sichern.

Die Selbsteinschätzung ist keine objektive Leistungsmessung.

## Datenschutz / Zugang

- Schülerinnen und Schüler melden sich anonym an (kein Name nötig).
- Im Browser wird nur der Supabase-Publishable-Key verwendet, kein Secret Key.
- Die alten `10d`-Daten werden durch die neue `datasetId` nicht überschrieben.
- Die Lehrkraft benötigt den bestehenden Login.

Status bei Erstellung: Supabase-Projekt erreichbar, Tabellen vorhanden; **kein Deployment durchgeführt**.
