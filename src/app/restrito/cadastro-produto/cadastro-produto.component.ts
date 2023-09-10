
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit{
  
  public produto: Produto = new Produto(0,"","","",0);

  constructor(private _produtoService:ProdutoService, private _router: Router){}

  ngOnInit(): void {
    
  }

  cadastrar(){
    this._produtoService.cadastrarProduto(this.produto).subscribe(
      produto =>{
        this.produto = new Produto(0,"","","",0);
        alert("Cadastro Efetuado com Sucesso")
      },
      err => {
        alert("Erro ao Cadastrar");
      }
    );

    this._router.navigate(["restrito/lista"]);
  }

}