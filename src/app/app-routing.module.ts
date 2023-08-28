import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiComponent } from './ui/ui.component';
import { UiCompareComponent } from './ui/ui-compare/ui-compare.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpinerComponent } from './ui/spiner/spiner.component';

const routes: Routes = [
  { path: '', component: UiComponent },
  // { path: 'compare', component: UiCompareComponent },
  // { path: '', component: UiCompareComponent },
  { path: 'spiner', component: SpinerComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
