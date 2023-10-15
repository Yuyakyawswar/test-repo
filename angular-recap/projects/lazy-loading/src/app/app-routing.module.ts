import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from './guard/admin.guard';
import { memberGuard } from './guard/member.guard';

const routes: Routes = [
  { path: 'public',
    loadChildren: () =>
    import('./business/public/public.module').then(m => m.PublicModule) },
  { path: 'admin',
    loadChildren: () =>
    import('./business/admin/admin.module').then(m => m.AdminModule),
    canMatch: [adminGuard] },
  { path: 'member',
    loadChildren: () =>
    import('./business/member/member.module').then(m => m.MemberModule),
    canMatch: [memberGuard] },
  { path: '', redirectTo: 'public', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
