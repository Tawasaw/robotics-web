export type ProgramKey = "fll" | "ftc";

export interface Program {
  key: ProgramKey;
  shortName: string;
  name: string;
  ages: string;
  meetingTime: string;
  description: string;
  icon: "blocks" | "bot";
  points: string[];
}

export const programs: Program[] = [
  {
    key: "fll",
    shortName: "FLL",
    name: "FIRST LEGO League",
    ages: "Ages 9–16 (Grades 4–8)",
    meetingTime: "3 PM",
    description:
      "Hands-on robotics grounded in teamwork, Tarbiyah, and meaningful competition.",
    icon: "blocks",
    points: [
      "Learn engineering basics",
      "Build & code with LEGO",
      "Solve missions as a team",
      "Grow in confidence & tarbiyah"
    ]
  },
  {
    key: "ftc",
    shortName: "FTC",
    name: "FIRST Tech Challenge",
    ages: "Ages 12–18 (Grades 7–12)",
    meetingTime: "4 PM",
    description:
      "Hands-on robotics grounded in teamwork, Tarbiyah, and meaningful competition.",
    icon: "bot",
    points: [
      "Design, build, and code a competition robot as a team",
      "Pray Jama’a at the Masjid with your friends and families",
      "Excel at outreach, marketing, fundraising, and team building",
      "Compete at events — on the playing field and for awards",
      "Get mentorship from top talent in engineering and industry",
      "Open doors to scholarships and career connections",
      "Take home a new Dua, Hadith, or act of kindness"
    ]
  }
];
