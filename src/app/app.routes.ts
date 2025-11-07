import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from './Layouts/main-layout/main-layout';
import { Home } from './Pages/home/home';
import { About } from './Pages/about/about';
import { Contact } from './Pages/contact/contact';
import { PrivacyPolicy } from './Pages/privacy-policy/privacy-policy';
import { Dealer } from './Pages/dealer/dealer';
import { Warranty } from './Pages/warranty/warranty';
import { Faq } from './Pages/faq/faq';
import { Product } from './Pages/product/product';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'about', component: About },
      { path: 'contact', component: Contact },
      { path: 'privacy-policy', component: PrivacyPolicy },
      { path: 'dealer', component: Dealer },
      { path: 'warranty', component: Warranty },
      { path: 'FAQ', component: Faq },
      { path: 'products', component: Product },

      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
];
