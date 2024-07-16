import { ReactElement } from "react";
type FieldType = {
  fieldName: String;
  fieldValue: String;
};

export type SocialIcons = {
  icon: ReactElement;
  path: String;
};
export type LinksType = {
  name: String;
  path: String;
};
export type StatsType = {
  num: number;
  text: String;
};
export type AboutMeType = {
  title: String;
  description: String;
  info: FieldType[];
};
export type ExperienceEducationType = {
  title: String;
  description: String;
  info: { date: String; title: String; place: String }[];
};
export type SkillsType = {
  title: String;
  description: String;
  skillList: { icon: ReactElement; name: String }[];
};
