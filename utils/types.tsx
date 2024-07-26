import { ReactElement } from "react";
type FieldType = {
  fieldName: { [key: string]: string };
  fieldValue: { [key: string]: string };
  icon?: ReactElement;
};

export type SocialIcons = {
  icon: ReactElement;
  path: String;
};
export type LinksType = {
  name: { [key: string]: String };
  path: String;
};
export type StatsType = {
  num: number;
  text: { [key: string]: string };
};
export type AboutMeType = {
  title: { [key: string]: string };
  description: { [key: string]: string };
  info: FieldType[];
};
export type ExperienceEducationType = {
  title: { [key: string]: string };
  description: { [key: string]: string };
  info: { date: String; title: { [key: string]: string }; place: { [key: string]: string } }[];
};
export type SkillsType = {
  title: { [key: string]: string };
  description: { [key: string]: string };
  skillList: { icon: ReactElement; name: String }[];
};
export type ProjectsType = {
  num: String;
  category: { [key: string]: string };
  title: { [key: string]: string };
  description: { [key: string]: string };
  stack: { name: String }[];
  type: { [key: string]: string };
  image: String;
};
