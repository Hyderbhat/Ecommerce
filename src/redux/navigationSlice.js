import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    isMenuOpen: false,
    isShopSubmenuOpen: false,
  },
  reducers: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleShopSubmenu(state) {
      state.isShopSubmenuOpen = !state.isShopSubmenuOpen;
    },
  },
});

export const { toggleMenu, toggleShopSubmenu } = navigationSlice.actions;
export default navigationSlice.reducer;