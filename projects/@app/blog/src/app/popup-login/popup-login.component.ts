import { Component, Input, OnInit } from "@angular/core";
@Component({
    templateUrl: './popup-login.component.html',
})
export class PopupLoginComponent implements OnInit {
    @Input() user: object;

    constructor() {}

    public ngOnInit(): void {
        console.log('Info: Come from PopupLoginComponent');
        console.log('User data is => ', this.user);
    }
}