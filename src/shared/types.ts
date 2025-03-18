import { JSX } from "react";

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element,
  title: string,
  description: string,
}

export interface ClassType {
  title: string,
  description?: string,
  image: string,
}