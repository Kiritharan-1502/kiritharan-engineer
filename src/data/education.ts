export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  details?: string;
}

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "Visvesvaraya Technological University",
    degree: "B.E. Computer Science",
    duration: "Dec 2021 – May 2025"
  },
  {
    id: "edu-2",
    institution: "St. Claret PU College",
    degree: "Intermediate, PCMB",
    duration: "May 2019 – May 2021"
  }
];
