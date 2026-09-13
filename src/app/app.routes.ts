import { Routes } from '@angular/router';
import { Atoms } from './presentation/pages/atoms/atoms';
import { Molecules } from './presentation/pages/molecules/molecules';
import { Organisms } from './presentation/pages/organisms/organisms';

export const routes: Routes = [
    { path: 'atoms', component: Atoms },
    { path: 'molecules', component: Molecules },
    { path: 'organisms', component: Organisms },
    { path: '**', redirectTo: 'atoms' },
];
