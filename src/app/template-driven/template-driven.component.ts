import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-template-driven',
    templateUrl: './template-driven.component.html',
    styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

    @ViewChild('myForm', { static: true }) myForm: NgForm

    user = {
        name: '',
        age: '',
        email: '',
        confirmEmail: ''
    }

    constructor(
        private http: HttpClient
    ) { }

    ngOnInit() {
    }

    onSubmit(myForm: NgForm) {
        console.log(myForm);
    }

    getAddress(cep) {
        this.http.get(`http://viacep.com.br/ws/${cep}/json`).toPromise().then((address: any) => {
            this.myForm.form.patchValue({
                address: {
                    street: address.cidade,
                    neighborhood: address.logradouro,
                    city: address.localidade,
                    state: address.uf
                }
            })
        }).catch((err) => [

        ])
    }

}
