import { Routes } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { InvalidDataComponent } from './core/invalid-data/invalid-data.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

import { AddDriverComponent } from './driver/add-driver/add-driver.component';
import { ListDriversComponent } from './driver/list-drivers/list-drivers.component';
import { DeleteDriverComponent } from './driver/delete-driver/delete-driver.component';
import { UpdateDriverComponent } from './driver/update-driver/update-driver.component';

import { AddPackageComponent } from './package/add-package/add-package.component';
import { ListPackagesComponent } from './package/list-packages/list-packages.component';
import { DeletePackageComponent } from './package/delete-package/delete-package.component';
import { UpdatePackageComponent } from './package/update-package/update-package.component';

import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

import { StatsComponent } from './user/stats/stats.component';

import { TranslateComponent } from './cloud-services/translate/translate.component';
import { Text2SpeechComponent } from './cloud-services/text-2-speech/text-2-speech.component';
import { GenAiComponent } from './cloud-services/gen-ai/gen-ai.component';

export const routes: Routes = [
    {title: 'Home', path: '', component: HomeComponent},
    {title: 'Invalid Data', path: 'invalid-data', component: InvalidDataComponent},
    
    {title: 'Add Driver', path: 'add-driver', component: AddDriverComponent},
    {title: 'List Drivers', path: 'list-drivers', component: ListDriversComponent},
    {title: 'Delete Driver', path: 'delete-driver', component: DeleteDriverComponent},
    {title: 'Update Driver', path: 'update-driver', component: UpdateDriverComponent},
    
    {title: 'Add Package', path: 'add-package', component: AddPackageComponent},
    {title: 'List Packages', path: 'list-packages', component: ListPackagesComponent},
    {title: 'Delete Package', path: 'delete-package', component: DeletePackageComponent},
    {title: 'Update Package', path: 'update-package', component: UpdatePackageComponent},

    {title: 'Statistics', path: 'statistics', component: StatsComponent},
    
    {title: 'Translate', path: 'translate', component: TranslateComponent},
    {title: 'Text 2 Speech', path: 'text-2-speech', component: Text2SpeechComponent},
    {title: 'Generative AI', path: 'gen-ai', component: GenAiComponent},

    {title: 'Login', path: 'login', component: LoginComponent},
    {title: 'Register', path: 'register', component: RegisterComponent},
    
    {title: '404', path: '**', component: PageNotFoundComponent},
];
