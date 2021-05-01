import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppCustomInputComponent } from "./app-custom-input.component";
@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [AppCustomInputComponent],
    exports: [AppCustomInputComponent]
})
export class AppCustomInputModule {}