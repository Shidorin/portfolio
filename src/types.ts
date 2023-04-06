export interface Skill {
  name: string;
  img: string;
}

export interface SkillSet {
  title: string;
  stacks: Skill[];
}

export interface SkillsData {
  skills: SkillSet[];
}
