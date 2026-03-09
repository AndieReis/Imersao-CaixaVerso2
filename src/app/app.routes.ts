import { Routes } from '@angular/router';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PBindingComponent } from './components/p-binding/p-binding.component';

export const routes: Routes = [
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'p-binding', component: PBindingComponent}
];
