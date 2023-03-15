import { Settings } from 'http2';
import { UserRole } from '../consts/userConsts';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}

export { UserRole };
