export interface Competition {
  name: string;
  result: string;
  details: string[];
}

export interface Team {
  emoji: string;
  icon: "rocket" | "moon";
  title: string;
  number: string;
  record: string;
  recordLabel: string;
  summary: string;
  competitions: Competition[];
  highlights: string[];
}

export const teams: Team[] = [
  {
    emoji: "🚀",
    icon: "rocket",
    title: "Mars Rovers",
    number: "FTC #30619",
    record: "17–5",
    recordLabel: "overall record across three official competitions",
    summary:
      "Mars Rovers had an exceptionally strong rookie season, finishing with an overall 17–5 record across three official competitions.",
    competitions: [
      {
        name: "The Play Space #7 Qualifier",
        result:
          "Ranked 1st of 15 teams · Winning Alliance Captain · 2nd Place Inspire Award",
        details: [
          "Ranked 1st of 15 teams",
          "Captained the #1 alliance",
          "Undefeated in the playoffs (3–0)",
          "Became the Winning Alliance Captain",
          "Earned 2nd Place Inspire Award"
        ]
      },
      {
        name: "Santa Clara QT #1",
        result: "Ranked 1st of 27 teams · Winning Alliance Captain · Design Award",
        details: [
          "Ranked 1st among 27 teams",
          "Captained the #1 alliance and won the tournament",
          "Second Winning Alliance Captain title",
          "Received the Design Award for engineering and design"
        ]
      },
      {
        name: "NorCal Regional Championship",
        result: "Silicon Division",
        details: [
          "Qualifier success advanced them to the Northern California Regional Championship",
          "Competed in the Silicon Division against many of the region's strongest teams"
        ]
      }
    ],
    highlights: [
      "Two qualifier victories",
      "Two #1 qualification rankings",
      "Two Winning Alliance Captain awards",
      "Design Award",
      "2nd Place Inspire Award",
      "Advancement to NorCal Regionals"
    ]
  },
  {
    emoji: "🌑",
    icon: "moon",
    title: "Eclipse",
    number: "FTC #30618",
    record: "11–7",
    recordLabel: "rookie-season record across two official tournaments",
    summary:
      "Eclipse also made an impressive FTC debut, finishing its rookie season with an 11–7 overall record across two official tournaments.",
    competitions: [
      {
        name: "San Jose QT #1",
        result: "Innovate Award sponsored by RTX",
        details: [
          "Ranked 7th of 14",
          "Selected for the #3 playoff alliance",
          "Reached the lower-bracket stages of the playoffs",
          "Won the Innovate Award sponsored by RTX, recognizing creative and innovative robot design"
        ]
      },
      {
        name: "Mountain View QT",
        result: "4th of 27 · #3 Alliance Captain",
        details: [
          "Finished 4th of 27 teams",
          "Became captain of the #3 alliance",
          "Went 3–2 in the playoffs, reaching Lower Bracket Round 5",
          "Missed further advancement by only three points, 134–131"
        ]
      }
    ],
    highlights: [
      "Innovate Award winner",
      "Top-four qualification finish at Mountain View",
      "#3 Alliance Captain",
      "Strong 11–7 rookie-season record"
    ]
  }
];
