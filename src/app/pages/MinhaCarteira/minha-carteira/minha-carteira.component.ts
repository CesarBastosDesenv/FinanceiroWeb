import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ativoService } from 'src/app/services/ativoService';
import { Ativo } from 'src/app/models/Ativo';

@Component({
  selector: 'app-minha-carteira',
  templateUrl: './minha-carteira.component.html',
  styleUrls: ['./minha-carteira.component.css']
})
export class MinhaCarteiraComponent implements OnInit {
  public form: FormGroup;
  public listaAtivos:Ativo[] = [];
  public faPlusCircle = faPlusCircle;

  constructor ( 
    public ativoService : ativoService,
    public formBuilder : FormBuilder,
    private rest : ativoService
  ){

    this.form = this.formBuilder.group({
      nomeAtivo: new FormControl('', [Validators.required,Validators.maxLength(40)]),
      nomeCompleto: new FormControl('',[Validators.required,Validators.maxLength(40)]),
    })
  }

  listarAtivos(){
    this.ativoService.ListarAtivos('previous').subscribe(res => {
    this.listaAtivos = res.data;
     })
   }

   salvarDados(){
    this.rest.CadastrarAtivos(this.form.value).subscribe(result => []);
    this.form.reset();
    this.ngOnInit();
    }

  ngOnInit(): void { 
    this.listarAtivos();     
  }
}

