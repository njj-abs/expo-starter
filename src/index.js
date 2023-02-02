import { registerRootComponent } from 'expo';
import React from 'react';
import App from './App';

const Entry = () => <App/>;

registerRootComponent(Entry);
