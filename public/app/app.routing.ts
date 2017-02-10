import { Routes, RouterModule } from '@angular/router';

import { ApplicationComponent } from './components/application/application.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  }
];

export const routing = RouterModule.forRoot(routes);