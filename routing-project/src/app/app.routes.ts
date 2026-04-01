import { Routes } from '@angular/router';
import { Home } from './components/routing/page/home/home';
import { About } from './components/routing/page/about/about';
import { Contact } from './components/routing/page/contact/contact';
import { Profile } from './components/routing/page/profile/profile';
import { PageNotFound } from './components/routing/page/page-not-found/page-not-found';
import { ContactDetails } from './components/routing/page/contact-details/contact-details';
import { User } from './components/routing/page/user/user';
import { UserProfile } from './components/routing/page/user-profile/user-profile';
import { UserSettings } from './components/routing/page/user-settings/user-settings';

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
        path: "contact-details/:id",
        component: ContactDetails
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
        path: "user",
        component: User,
        children: [
            {path:"", redirectTo: "user-profile", pathMatch:'full'},
            {path:"user-profile", component: UserProfile},
            {path: "user-settings", component: UserSettings}
        ]
    },
    {
        path: "**",
        component: PageNotFound
    }
];
