export interface Job {
  id: string;
  enterpriseId: number;
  title: string;
  salaryStart: number;
  salaryEnd: number;
  createAt: string;
  expiredAt: string;
  des: string;
  expStart: string;
  expEnd: string;
  status: boolean;
  applicants: number;
}

export interface Business {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  status: string;
  createAt: string;
  updateAt: string;
  password: string;
  avatar: string;
  address: string;
  dateOfBirth: string;
  gender: number;
  emailVerified: boolean;
  phone: string;
  role: string;
  permissionList: string[];  // An array of permission strings
  jobs: Job[];  // An array of Job objects
}
