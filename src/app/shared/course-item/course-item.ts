export class CourseItem {
  public name: string;
  public duration: number;
  public date: Date;
  public description: string;

  constructor(name: string, duration: number, date: Date, description: string) {
    this.name = name;
    this.duration = duration;
    this.date = date;
    this.description = description;
  }
}

// export interface CourseItem {
//   name: string;
//   duration: number;
//   date: Date;
//   description: string;
// }
