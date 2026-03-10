import { Routes } from '@angular/router';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PBindingComponent } from './components/p-binding/p-binding.component';
import { EBindingComponent } from './components/e-binding/e-binding.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { DirIfComponent } from './components/dir-if/dir-if.component';
import { DirForComponent } from './components/dir-for/dir-for.component';

export const routes: Routes = [
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'p-binding', component: PBindingComponent},
  {path: 'e-binding', component: EBindingComponent},
  {path: 'two-way', component: TwoWayComponent},
  {path: 'dir-if', component: DirIfComponent},
  {path: 'dir-for', component: DirForComponent}

];
