window.KLAUSURCHECK_CONFIG = {
  title: "Kompetenzcheck 10d",
  className: "10d",
  topic: "Modellieren und Problemlösen mit quadratischen Funktionen",
  datasetId: "10d-modellieren-problemloesen-2026-10-30",
  version: "1.0.0",
  usageMode: "diagnose",

  // Für einen Vergleich zwischen Stundenbeginn und Stundenende.
  history: { enabled: true, autoMinutes: 2 },
  // Fragen können in dieser Klasse priorisiert werden.
  upvotesEnabled: true,

  competencies: [
    {
      id: "problem",
      title: "Sachprobleme verstehen",
      info: "Gegebene und gesuchte Größen erkennen, wesentliche Angaben markieren und die Situation mit einer Skizze oder Tabelle ordnen."
    },
    {
      id: "variablen",
      title: "Variablen und Bedingungen festlegen",
      info: "Eine sinnvolle Variable mit Einheit wählen, weitere Größen durch sie ausdrücken und Einschränkungen des Sachzusammenhangs beachten."
    },
    {
      id: "rekonstruktion",
      title: "Funktionsgleichungen rekonstruieren",
      info: "Aus vorgegebenen Punkten, einem Scheitelpunkt oder anderen Eigenschaften die Gleichung einer quadratischen Funktion bestimmen – zum Beispiel bei einem Brückenbogen."
    },
    {
      id: "modell",
      title: "Funktionsgleichungen aus Sachzusammenhängen entwickeln",
      info: "Aus Beziehungen zwischen Größen eine quadratische Funktion herleiten, etwa aus Zaunlängen und Flächeninhalten oder aus Eintrittspreis und Besucherzahl."
    },
    {
      id: "weg",
      title: "Passende Lösungswege auswählen",
      info: "An der Fragestellung erkennen, ob ein Funktionswert, eine Nullstelle, ein Maximum oder ein Minimum benötigt wird."
    },
    {
      id: "rechnen",
      title: "Mathematische Berechnungen durchführen",
      info: "Funktionswerte berechnen, quadratische Gleichungen lösen und Scheitelpunkte beziehungsweise Extremwerte bestimmen."
    },
    {
      id: "deuten",
      title: "Ergebnisse interpretieren und überprüfen",
      info: "Ergebnisse mit Einheiten und einem Antwortsatz deuten, sinnvolle Wertebereiche beachten und die Plausibilität im Sachzusammenhang prüfen."
    }
  ],

  supabaseUrl: "https://tgokrdtlvtfyxaqscuwx.supabase.co",
  supabasePublishableKey: "sb_publishable_YKnRHgSUgHx6dj-wDHWvOA_OKEFAaaW"
};
