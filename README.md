# 🅰️ PEC 4 - Frameworks: Introducción a Angular

Esta entrega contiene la resolución de la **PEC 4** de la asignatura **Desarrollo Front-end con frameworks Javascript** de la UOC. El objetivo de esta práctica es sentar las bases del desarrollo de aplicaciones web SPA utilizando Angular, comprendiendo su CLI, la arquitectura de componentes y la gestión del flujo de datos.

## 📂 Estructura del repositorio

El proyecto sigue estrictamente la estructura de carpetas solicitada en el enunciado:

```text
PEC4/
├── README.md
├── PEC4_Ej_Teor/
│   ├── PEC4_Ej1_respuestas_teoria.md
│   ├── PEC4_Ej4_respuestas_teoria.md
│   └── PEC4_Ej6_respuestas_teoria.md
└── PEC4_Ej_Prac/
    ├── ecommerce/
    └── PEC4_Ej2_respuestas_estructura.md
```

## 📋 Descripción de los ejercicios

### 📚 Bloque teórico (```PEC4_Ej_Teor``` y ```Ej2```)

Se ha dado respuesta a los fundamentos del *framework*:

* **Angular CLI (```Ej1```):** Funcionalidad de comandos esenciales (```ng new```, ```ng generate```, ```ng serve```, ```ng test```).

* **Estructura y Decoradores (```Ej2```):** Análisis de la arquitectura inicial generada, uso de ```@NgModule``` y ```@Component```, así como buenas prácticas sobre plantillas en línea.

* **Directivas (```Ej4```):** Análisis de variables locales en directivas estructurales (```NgFor```), uso de ```trackBy``` para optimización del renderizado y el solapamiento de directivas.

* **Estrategias y Ciclo de vida (```Ej6```):** Profundización en las técnicas de ```ViewEncapsulation``` (Shadow DOM), el sistema de *Change Detection* (estrategia ```OnPush```) y los *Hooks* principales (```OnInit```, ```OnChanges```, ```OnDestroy```, ```AfterViewInit```).

### 💻 Bloque práctico (```PEC4_Ej_Prac/ecommerce```)

Desarrollo de una mini-aplicación de comercio electrónico basada en componentes.

* **Desarrollo Moderno:** El proyecto hace uso de características modernas de Angular (14+), como componentes **Standalone** y el nuevo sistema de *Control Flow* (```@for```, ```@if```) para el renderizado de plantillas.

* **Componente Hijo (```article-item```):** Componente presentacional (tonto) optimizado con ```ChangeDetectionStrategy.OnPush```. Recibe un modelo ```Article``` mediante ```@Input``` y emite eventos de tipo ```ArticleQuantityChange``` mediante ```@Output``` al interactuar con los botones de cantidad. Utiliza directivas de atributo (```[ngClass]```, ```[class.sale]```) para reaccionar visualmente al estado del artículo.

* **Componente Padre (```article-list```):** Componente inteligente (*Smart Component*) definido mediante plantillas y estilos *inline*. Mantiene el estado del array de artículos e implementa la lógica de negocio (incremento/decremento de cantidades) recibida de las emisiones de sus componentes hijos.

## 🚀 Instalación y ejecución

Para ejecutar este proyecto en local, es necesario disponer de Node.js y Angular CLI instalados globalmente (```npm install -g @angular/cli```).

1. Acceder al directorio de la aplicación:
   ```bash
   cd PEC4_Ej_Prac/ecommerce
   ```

2. Instalar las dependencias del proyecto:
   ```bash
   npm i
   ```

3. Levantar el servidor de desarrollo:
   ```bash
   ng serve
   ```
   La aplicación se abrirá automáticamente en tu navegador por defecto (```http://localhost:4200/```).