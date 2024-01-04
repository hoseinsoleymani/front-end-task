import { create } from 'zustand';

export interface User {
  username: string;
  password: string;
}

interface AuthenticationState {
  login: ({ password, username }: User) => void;
  logout: () => void;
  isUserAuthenticated: boolean;
  user: User | null;
}

export const useAuthenticationStore = create<AuthenticationState>((set) => ({
  login: ({ password, username }) =>
    set(() => ({
      user: {
        password,
        username,
      },
      isUserAuthenticated: true,
    })),
  logout() {
    set(() => ({
      isUserAuthenticated: false,
      user: null,
    }));
  },
  isUserAuthenticated: false,
  user: null,
}));
