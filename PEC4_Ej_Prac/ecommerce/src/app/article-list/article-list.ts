import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticleItem } from '../article-item/article-item';
import { CommonModule } from '@angular/common';
import { ArticleQuantityChange } from '../models/article-quantity-change';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleItem, CommonModule],
  template: ` <h1 id="title" class="title">Lista de artículos</h1>
    <div id="list" class="list">
      @for (article of articleList; track article.name) {
        <app-article-item
          [article]="article"
          (articleQuantityChange)="onChangeQuantity($event)"
        ></app-article-item>
      }
    </div>`,
  styles: `
    .title {
      font-size: 3rem;
      text-align: center;
    }
    .list {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: stretch;
      justify-content: center;
      gap: 1rem;
    }
  `,
})
export class ArticleList implements OnInit {
  articleList!: Article[];

  constructor() {}

  ngOnInit(): void {
    this.articleList = [
      {
        name: 'Camiseta',
        imageUrl: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg',
        price: 29.99,
        isOnSale: true,
        quantityInCart: 1,
      },
      {
        name: 'Pantalones',
        imageUrl: 'https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg',
        price: 49.99,
        isOnSale: false,
        quantityInCart: 1,
      },
      {
        name: 'Gorra',
        imageUrl: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg',
        price: 19.99,
        isOnSale: true,
        quantityInCart: 5,
      },
    ];
  }

  onChangeQuantity(articleQuantityChange: ArticleQuantityChange) {
    const article = this.articleList.filter(
      (article) => article.name === articleQuantityChange.article.name,
    );
    article[0].quantityInCart += articleQuantityChange.quantity;
  }
}
