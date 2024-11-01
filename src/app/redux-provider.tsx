"use client";

import React from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { NavbarComponent, FooterComponent } from '@/components';

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <NavbarComponent />
      {children}
      <FooterComponent />
    </Provider>
  );
}