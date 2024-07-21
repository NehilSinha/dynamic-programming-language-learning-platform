import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


import { HomeComponent } from './default/home/home.component';
import { LearnComponent } from './learn/learn.component';
import { NotFoundComponent } from './default/not-found/not-found.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DotnetInfoComponent } from './learn/languages/.net/dotnet-info/dotnet-info.component';
import { CInfoComponent } from './learn/languages/C/c-info/c-info.component';
import { PyInfoComponent } from './learn/languages/python/py-info/py-info.component';
import { PyInstallationComponent } from './learn/languages/python/py-installation/py-installation.component';
import { PyLanguageReferenceComponent } from './learn/languages/python/py-language-reference/py-language-reference.component';
import { PyStandardLibraryComponent } from './learn/languages/python/py-standard-library/py-standard-library.component';
import { PyModulesComponent } from './learn/languages/python/py-modules/py-modules.component';
import { PyDistributingModulesComponent } from './learn/languages/python/py-distributing-modules/py-distributing-modules.component';
import { AngularInfoComponent } from './learn/languages/angular/angular-info/angular-info.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'learn/c', component: CInfoComponent },
    { path: 'learn/python', component: PyInfoComponent },
    { path: 'learn/python/installation', component: PyInstallationComponent },
    { path: 'learn/python/documentation', component: PyLanguageReferenceComponent },
    { path: 'learn/python/library', component: PyStandardLibraryComponent },
    { path: 'learn/python/modules', component: PyModulesComponent },
    { path: 'learn/python/distribution', component: PyDistributingModulesComponent },
    { path: 'learn/angular', component: AngularInfoComponent},
    { path: 'learn/dotnet', component: DotnetInfoComponent },
    { path: 'learn', component: LearnComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: '**', component: NotFoundComponent }
];
