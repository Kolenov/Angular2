export interface CourseItem {
  id: string;
  link?: string;
  author?: string;
  name: string;
  duration: number;
  topRated?: boolean;
  date: Date;
  description: string;
}
