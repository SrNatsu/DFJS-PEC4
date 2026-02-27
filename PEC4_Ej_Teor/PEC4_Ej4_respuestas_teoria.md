# Ejercicio 4

## Dentro de la carpeta ```PEC4_Ej_Teor```, crea un fichero Markdown que tenga como nombre ```PEC4_Ej4_respuestas_teoria.md``` y responde a cada uno de los siguientes puntos:

### Explica qué son y cuándo se deberían utilizar las siguientes variables locales de la directiva estructural ```NgFor```:

La directiva ```NgFor``` permite iterar sobre una colección y generar una plantilla por cada elemento.

* **```index```:** Permite acceder al índice de un elemento y mostrarlo.

* **```even```:** Permite acceder a los resultados con índice par.

* **```odd```:** Permite acceder a los resultados con índice impar.

* **```first```:** Permite acceder al primer elemento.

* **```last```:** Permite acceder al último elemento.

### ¿Para qué sirve la opción ```trackBy``` de la directiva estructural ```NgFor```? Pon ejemplos de uso.

La opción ```trackBy``` se usa para identificar de forma única a cada elemento. La función recibe una función con dos parámetros: ```index``` e ```item```.

Un ejemplo sería recorrer una lista de elementos.

En el componente tendríamos:
```typescript
export class ArticleList {
    articles = [
        {id: 1, name: 'Camiseta', price: 9.99},
        {id: 2, name: 'Pantalón', price: 24.99}
    ];

    trackByID(idx: number, article: any): number {
        return article.id;
    }
}
```

En la plantilla HTML tendríamos:
```html
<ul>
    <li *ngFor="let article of articles; trackBy: trackByID">
        {{ article.name }} - {{ article.price }}€
    </li>
</ul>
```

### ¿Es posible ejecutar dos directivas estructurales simultáneamente? Explica la razón tanto si es si posible como si no lo es.

No, no es posible ejecutar dos directivas estructurales a la vez. Esto se debe a que Angular internamente modifica la estructura del DOM. Al escribir dos directivas seguidas, ambas requieren controlar la creación del mismo elemento del DOM.