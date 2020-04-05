import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
// primeNG
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SplashComponent } from './components/splash.component';

export const routes: Routes = [
	{
		path: '',
		component: SplashComponent,
		data: {animation: 'splash'}
	},
	{
		path: 'main',
		loadChildren: () => import('./modules/main.module').then(m => m.MainModule),
		data: {animation: 'main'}
	}
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		CommonModule,
		HttpClientModule
	],
	declarations: [
		AppComponent,
		SplashComponent,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }