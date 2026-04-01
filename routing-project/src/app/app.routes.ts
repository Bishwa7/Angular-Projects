import { Routes } from '@angular/router';
import { Home } from './components/routing/page/home/home';
import { About } from './components/routing/page/about/about';
import { Contact } from './components/routing/page/contact/contact';
import { Profile } from './components/routing/page/profile/profile';
import { PageNotFound } from './components/routing/page/page-not-found/page-not-found';

export const routes: Routes = [
    {path: "", component: Home},
    {
        path: "about/:id/:name",
        component: About
    },
    {
        path: "about/:id",
        component: About
    },
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
    },
    {
        path: "careers",
        redirectTo: "contact"
    },
    {
        path: "**",
        component: PageNotFound
    }
];
