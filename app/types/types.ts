export type Project = {
  id: number;
  name: string;
  project_year: string;
  image_url: string;
  column_size: string;
  text_color: string;
}

export type Experience = {
  id: number;
  type: string;
  date_start_end: string;
  position_name: string;
  company_name: string;
  description: string;
}

export type Article = {
  id: number;
  title: string;
  image_url: string;
  description: string;
  content: string;
  created_at: Date;
}

export type TechStack = {
  id: number;
  name: string;
  img_url: string;
  sort: string;
  created_at: Date;
}