import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-data-driven',
    templateUrl: './data-driven.component.html',
    styleUrls: ['./data-driven.component.scss']
})
export class DataDrivenComponent implements OnInit {

    form: FormGroup;

    constructor() { }

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(null),
            email: new FormControl(null)
        });
    }

}
