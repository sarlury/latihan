import { NgModule } from "@angular/core";
import { ParentComponent } from "./parent.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChildComponent } from "../child/child.component";

const routes: Routes = [
    {path: '', component: ParentComponent}
]

@NgModule({
    declarations: [ParentComponent, ChildComponent],
    imports:[
        CommonModule, 
        ReactiveFormsModule, 
        FormsModule, 
        RouterModule.forChild(routes)
    ]
})
export class ParentModulePage{}