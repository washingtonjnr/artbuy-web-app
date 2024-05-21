
export type UserResponse = {
  cpf: string;
  name: string;
  email: string;
  phone: string;
  // 
  avatar?: string;
  address?: string;
  posts?: [];
  // 
  is_enabled: boolean;
  is_private: boolean;
};

export interface User extends UserResponse {}
