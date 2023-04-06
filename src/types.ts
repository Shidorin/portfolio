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

export interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
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
