export interface User {
  id: string; 
  firstName: string; 
  lastName: string; 
  email: string; 
  userName: string; 
  status: 'active' | 'inactive';
  createAt: Date; 
  updateAt: Date; 
  password: string;
  avatar: string;
  address: string;
  emailVerified: 0 | 1; 
  phone: string; 
  role: 'admin' | 'user' | 'enterprise'; 
  deletedAt: string; 
  permissionList: string[]; 
  dateOfBirth: string;
  gender: number
}
