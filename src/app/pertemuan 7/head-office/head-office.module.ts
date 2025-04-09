import { NgModule } from "@angular/core";
import { HeadOfficeComponent } from "./head-office.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {
        path: '', component: HeadOfficeComponent
    }
]

@NgModule({
    declarations: [HeadOfficeComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ]
})
export class HeadOfficePageModule{}