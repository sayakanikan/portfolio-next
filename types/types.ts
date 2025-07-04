export type Project = {
  id: number;
  name: string;
  slug: string;
  type: string;
  project_year: string;
  client: string;
  description: string;
  image_url: string;
  tech_stack_ids: string[];
  column_size: number;
  text_color: string;
  live_url: string;
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
  is_show: boolean;
  sort: string;
  created_at: Date;
}