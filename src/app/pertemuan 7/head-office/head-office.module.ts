import { NgModule } from "@angular/core";
import { HeadOfficeComponent } from "./head-office.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '', component: HeadOfficeComponent
    }
]

@NgModule({
    declarations: [HeadOfficeComponent],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class HeadOfficePageModule{}