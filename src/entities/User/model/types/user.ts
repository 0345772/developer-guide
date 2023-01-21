import { Settings } from 'http2';

export interface User {
  id: string;
  username: string;
  avatar?: string;
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
