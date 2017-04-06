export interface CourseItem {
  id: string;
  authors?: string[];
  name: string;
  duration: number;
  topRated?: boolean;
  date: Date;
  description: string;
}

export interface ExtendedCourseItem extends CourseItem {
  link?: string;
}
