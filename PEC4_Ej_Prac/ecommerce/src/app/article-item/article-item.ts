import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [],
  templateUrl: './article-item.html',
  styleUrl: './article-item.css',
})
export class ArticleItem implements OnInit {
  article!: Article;

  constructor() {}

  ngOnInit(): void {
    this.article = {
      name: 'Camiseta',
      imageUrl: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg',
      price: 30,
      isOnSale: true,
      quantityInCart: 1,
    };
  }

  changeQuantity(value: number): void {
    this.article.quantityInCart += value;
  }
}
