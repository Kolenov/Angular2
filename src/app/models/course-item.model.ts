export interface CourseItem {
  id: number;
  name: string;
  description: string;
  isTopRated?: boolean;
  date: Date;
  author?: {
    id: number,
    firstName: string,
    lastName: string
  }[];
  length?: number;
  duration?: number;
}

export interface ExtendedCourseItem extends CourseItem {
  link?: string;
}
