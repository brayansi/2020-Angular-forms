import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ValidetorsService } from '../services/validetors.service';

@Component({
    selector: 'app-data-driven',
    templateUrl: './data-driven.component.html',
    styleUrls: ['./data-driven.component.scss']
})
export class DataDrivenComponent implements OnInit {

    form: FormGroup;
    formList: FormGroup;

    states = [
        { name: 'São Paulo', sigle: 'SP' },
        { name: 'Minas Gerais', sigle: 'MG' },
        { name: 'Rio de Janeiro', sigle: 'RJ' }
    ];

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private validetorsService : ValidetorsService
    ) { }

    ngOnInit() {
        const fb = this.formBuilder;
        
        this.formList = fb.group({
            fruits: fb.array([this.createFruit()])
        })
                
        this.form = fb.group({
            user: fb.group({
                name: [null, [Validators.required, Validators.minLength(4), this.validetorsService.nameValidation], [this.validetorsService.userValidation.bind(this.validetorsService)]],
                age: [null],
                email: [null],
                confirmEmail: [null],
                sexo: ['male'],
                isWorks: [null, Validators.pattern('true')]
            }),
            address: fb.group({
                cep: [null],
                state: [null],
                city: [null],
                neighborhood: [null],
                street: [null],
                number: [null],
            })
        })
    }

    addFruit() {
        const fruits = this.formList.get('fruits') as FormArray;
        fruits.push(this.createFruit());
    }

    removeFruit(index) {
        const fruits = this.formList.get('fruits') as FormArray;
        fruits.removeAt(index);
    }

    createFruit() {
        return this.formBuilder.group({
            name: [null, [Validators.required, Validators.minLength(4)]],
            price: [null, [Validators.required]]
        })
    }

    onSubmit() {
        console.log(this.form)
    }

    getAddress() {
        this.http.get(`http://viacep.com.br/ws/${this.form.get('address.cep').value}/json`).toPromise().then((address: any) => {
            this.form.patchValue({
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
