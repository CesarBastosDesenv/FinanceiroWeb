import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ativoService{
    
    apiUrl = 'http://localhost:5083/api/Ativo';
    
    httpOpitions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
           
            
        })
    }


    constructor(
        private httpClient: HttpClient
    ){ }

    public ListarAtivos(ativo:  string): Observable<any>{
        return this.httpClient.get<any>(this.apiUrl);
    }

    public CadastrarAtivos(ativo: any): Observable<any>{
        return this.httpClient.post<any>(this.apiUrl, ativo, this.httpOpitions);
    }

    }