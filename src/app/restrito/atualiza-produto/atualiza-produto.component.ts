import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-atualiza-produto',
  templateUrl: './atualiza-produto.component.html',
  styleUrls: ['./atualiza-produto.component.css']
})
export class AtualizaProdutoComponent implements OnInit {

  public produtoId: number = 0;
  public produto: Produto = new Produto(0,"","","",0);

  constructor(private _produtoService: ProdutoService, private _router: Router, private _activatedRoute: ActivatedRoute){
    this._activatedRoute.params.subscribe(params => this.produtoId = params['id']);
  }

  ngOnInit(): void {
    this.listarProduto();
  }


  listarProduto(): void{
    this._produtoService.getProduto(this.produtoId).subscribe(
      (Res: any) =>{
        this.produto = new Produto(
          Res[0].id,
          Res[0].produto,
          Res[0].descricao,
          Res[0].foto,
          Res[0].preco,
        );
      }
    )
  }

  atualizar(id: number){
    this._produtoService.atualizarProduto(id, this.produto).subscribe(
      produto => {this.produto = new Produto(0,"","","",0)},
      err => {alert("Erro ao atualizar")}
    );

    this._router.navigate(["restrito/lista"]);
  }


}
