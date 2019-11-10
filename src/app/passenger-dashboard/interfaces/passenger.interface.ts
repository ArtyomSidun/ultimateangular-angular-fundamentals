export interface IChild {
  name: string;
  age: number;
}

export interface IPassenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate: number | null;
  children?: IChild[];
}
