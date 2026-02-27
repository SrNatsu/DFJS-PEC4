# Ejercicio 2

## ¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado ```ecommerce```? (A las preguntas que te haga Angular CLI puedes contestar utilizando las opciones por defecto).<br><br>Con Angular Cli crea el proyecto angular ecommerce y explica brevemente la estructura y ficheros que ha generado Angular CLI:

El comando a utilizar es ```ng new ecommerce```.

* **```tsconfig.app.json```:** Contiene la configuración específica de TypeScript para la aplicación.

* **```tsconfig.json```:** Contiene la configuración global de TypeScript.

* **```angular.json```:** Contiene la configuración de Angular. (Configuración de ```build``` y ```serve```, assets, estilos globales, scripts).

* **```package.json```:** Contiene la configuración de las dependencias del proyecto. Además, contiene scripts de comandos para ejecutar (```ng serve```, ```ng build```...).

* **```.editorconfig```:** Define reglas de formato del código (indentación, espacios, etc.).

* **```.gitignore```:** Especifica qué archivos y carpetas no se subirán al repositorio.


* **```node_modules```:** Directorio que contiene todas las dependencias instaladas del proyecto.

* **```src```:** Directorio que contiene el código fuente de la aplicación.

* **```index.html```:** Archivo HTML principal donde se carga la aplicación Angular.

* **```main.ts```:** Archivo TypeScript que funciona como punto de entrada de la aplicación.

* **```styles.css```:** Archivo CSS que contiene los estilos globales de la aplicación.

* **```assets```:** Directorio donde se guardarán recursos estáticos (imágenes, iconos, archivos multimedia).

* **```app```:** Directorio que contiene la lógica principal de la aplicación.

* **```app.*```:** Archivos que juntos componen la aplicación (Antiguamente ```app.component.*```).
  
  * **```app.ts```:** Componente raíz de la aplicación.
  
  * **```app.html```:** Plantilla HTML del componente principal.
  
  * **```app.css```:** Estilos del componente principal.
  
  * **```app.spec.ts```:** Archivo para pruebas unitarias del componente.

* **```app.module.ts```:** Este archivo está obsoleto, ya que actualmente los proyectos son *standalone*. En versiones anteriores, este archivo se utilizaba para declarar un módulo de la aplicación, se declaraba el componente de arranque.

Actualmente existen dos archivos adicionales:

* **```app.config.ts```:** Contiene la configuración global de la aplicación (proveedores, configuración de router, configuración de servicios).

* **```app.routes.ts```:** Define las rutas de la aplicación utilizando el sistema de routing moderno basado en ```Routes```.

## Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:

* **```app.module.ts - @NgModule```:** Decorador que marca una clase como **módulo**. Un módulo agrupa componentes, directivas, tuberías y servicios relacionados y proporciona metadatos que indican a Angular cómo compilar y ejecutar la aplicación.

  * **```declarations```:** Define los componentes, directivas y pipes que pertenecen a este módulo. Solo pueden declararse en un único módulo.

  * **```imports```:** Especifica otros módulos cuyos elementos exportados necesita este módulo. Permite reutilizar funcionalidades.

  * **```providers```:** Define los servicios que estarán disponibles mediante el sistema de inyección de dependencias.

  * **```bootstrap```:** Indica el componente raíz que Angular debe cargar al iniciar la aplicación.

* **```app.component.ts - @Component```:** Decorador que marca una clase como **componente**, aportando metadatos necesarios para definir su vista y comportamiento.

  * **```selector```:** Define el selector CSS con el que se usará el componente en HTML.

  * **```templateUrl```:** Especifica la ruta al archivo HTML qu edefine la vista del componente.

  * **```styleUrls```:** Array de archivos CSS que se aplican exclusivamente a este componente.

Cabe destacar que, en Angular 15+, con la aparición de los componentes *standalone* ya no es necesario usar ```@NgModule```.

## ¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en ```templateUrl```, ```styleUrls```? ¿Es recomendable hacer esto?

Sí, es posible. No es recomendable utilizarlo ya que dificulta la lectura del código, y se considera mala práctica. En proyectos pequeños, se podría aplicar para agilizar el proceso, pero en proyectos más amplios es recomendable separar cada parte del proyecto en su propio fichero, de esta manera el código se hace más legible, mantenible y reutilizable.