export enum UserRole {
  ADMINISTRADOR = 'ADMINISTRADOR',
  EVALUADOR = 'EVALUADOR',
  EVALUADO = 'EVALUADO'
}

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  active: boolean;
  createdAt: Date;
}
