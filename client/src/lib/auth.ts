import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  username: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  username: null,
  login: (username: string, password: string) => {
    if (username === 'testuser' && password === 'password123') {
      set({ isAuthenticated: true, username });
      return true;
    }
    return false;
  },
  logout: () => set({ isAuthenticated: false, username: null }),
}));
