import { Routes } from '@angular/router';
import { Home } from './components/routing/page/home/home';
import { About } from './components/routing/page/about/about';
import { Contact } from './components/routing/page/contact/contact';
import { Profile } from './components/routing/page/profile/profile';

export const routes: Routes = [
    {path: "", component: Home},
    {
        path: "about",
        component: About
    },
    {
        path: "contact",
        component: Contact
    },
    {
        path: "profile",
        component: Profile
    }
];
