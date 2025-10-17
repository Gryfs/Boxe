import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import {Contact} from './pages/contact/contact';
import {News} from './pages/news/news';

export const routes: Routes = [
    {path: '', component: Home},
  {path: 'contact', component: Contact},
  {path: 'news', component: News},
];
