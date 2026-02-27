# Ejercicio 4

## Dentro de la carpeta ```PEC4_Ej_Teor```, crea un fichero Markdown que tenga como nombre ```PEC4_Ej4_respuestas_teoria.md``` y responde a cada uno de los siguientes puntos:

### Explica qué son y cuándo se deberían utilizar las siguientes variables locales de la directiva estructural ```NgFor```:

La directiva ```NgFor``` permite iterar sobre una colección y generar una plantilla por cada elemento.

* **```index```:** Devuelve el índice del elemento actual.

* **```even```:** Devuelve ```true``` si el índice del elemento es par.

* **```odd```:** Devuelve ```true``` si el índice del elemento es impar.

* **```first```:** Devuelve ```true``` si el elemento es el primero de la lista.

* **```last```:** Devuelve ```true``` si el elemento es el último de la lista.

### ¿Para qué sirve la opción ```trackBy``` de la directiva estructural ```NgFor```? Pon ejemplos de uso.

La opción ```trackBy``` permite a Angular identificar de forma única cada elemento de una colección. La función recibe dos parámetros: ```index``` e ```item```.

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