import { Routes } from '@angular/router';
import { authGuard } from './shared/services/guard/auth.guard';

import { HomeComponent } from './features/core/home/home.component';
import { InvalidDataComponent } from './features/core/invalid-data/invalid-data.component';
import { PageNotFoundComponent } from './features/core/page-not-found/page-not-found.component';

import { AddDriverComponent } from './entities/driver/add-driver/add-driver.component';
import { ListDriversComponent } from './entities/driver/list-drivers/list-drivers.component';
import { DeleteDriverComponent } from './entities/driver/delete-driver/delete-driver.component';
import { UpdateDriverComponent } from './entities/driver/update-driver/update-driver.component';

import { AddPackageComponent } from './entities/package/add-package/add-package.component';
import { ListPackagesComponent } from './entities/package/list-packages/list-packages.component';
import { DeletePackageComponent } from './entities/package/delete-package/delete-package.component';
import { UpdatePackageComponent } from './entities/package/update-package/update-package.component';

import { LoginComponent } from './features/user/login/login.component';
import { RegisterComponent } from './features/user/register/register.component';

import { StatsComponent } from './features/user/stats/stats.component';

import { TranslateComponent } from './features/cloud-services/translate/translate.component';
import { Text2SpeechComponent } from './features/cloud-services/text-2-speech/text-2-speech.component';
import { GenAiComponent } from './features/cloud-services/gen-ai/gen-ai.component';

export const routes: Routes = [
    {title: 'Home', path: '', component: HomeComponent, canActivate: [authGuard]},
    
    {title: 'Add Driver', path: 'add-driver', component: AddDriverComponent, canActivate: [authGuard]},
    {title: 'List Drivers', path: 'list-drivers', component: ListDriversComponent, canActivate: [authGuard]},
    {title: 'Delete Driver', path: 'delete-driver', component: DeleteDriverComponent, canActivate: [authGuard]},
    {title: 'Update Driver', path: 'update-driver', component: UpdateDriverComponent, canActivate: [authGuard]},
    
    {title: 'Add Package', path: 'add-package', component: AddPackageComponent, canActivate: [authGuard]},
    {title: 'List Packages', path: 'list-packages', component: ListPackagesComponent, canActivate: [authGuard]},
    {title: 'Delete Package', path: 'delete-package', component: DeletePackageComponent, canActivate: [authGuard]},
    {title: 'Update Package', path: 'update-package', component: UpdatePackageComponent, canActivate: [authGuard]},
    
    {title: 'Translate', path: 'translate', component: TranslateComponent, canActivate: [authGuard]},
    {title: 'Text 2 Speech', path: 'text-2-speech', component: Text2SpeechComponent, canActivate: [authGuard]},
    {title: 'Generative AI', path: 'gen-ai', component: GenAiComponent, canActivate: [authGuard]},
    
    {title: 'Statistics', path: 'statistics', component: StatsComponent, canActivate: [authGuard]},
    {title: 'Login', path: 'login', component: LoginComponent},
    {title: 'Register', path: 'register', component: RegisterComponent},
    
    {title: 'Invalid Data', path: 'invalid-data', component: InvalidDataComponent},
    {title: '404', path: '**', component: PageNotFoundComponent}
];
