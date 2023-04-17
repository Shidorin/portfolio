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

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  submitting?: boolean;
  isSuccess?: boolean;
  isFailure?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export interface InputProps {
  className?: string;
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  placeholder?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageMobile: string;
  technologies: Skill[];
  demoLink: string;
  sourceCodeLink: string;
}

export interface IProjectData {
  projects: Project[];
}

export interface ILanguage {
  language: string;
  home: {
    title: string;
    description: string;
  };
}

export interface ILanguages {
  language: ILanguage[];
}
