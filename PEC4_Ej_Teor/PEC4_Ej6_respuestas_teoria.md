# Ejercicio 6

## Dentro de la carpeta  ```PEC4_Ej_Teor```,  crea un fichero Markdown que tenga como nombre ```PEC4_Ej6_respuestas_teoria.md``` y responde a las siguientes preguntas:

### ¿Cuáles son los ```style encapsulation``` de los componentes? Pon un ejemplo de uso de cada uno de ellos.

* **```Emulated```:** Angular modifica los selectores CSS añadiendo atributos únicos al componente, simula el comportamiento de Shadow DOM y los estilos solo afectan al componente. Modo por defecto.

  ```typescript
  encapsulation: ViewEncapsulation.Emulated
  ```

* **```None```:** Aplica los estilos del componente globalmente, sin ningún tipo de encapsulamiento. Los efectos se aplican a cualquier elemento que coincida con el selector.
  
  ```typescript
  encapsulation: ViewEncapsulation.None
  ```

* **```ShadowDom```:** Utiliza la API nativa de Shadow DOM del navegador para encapsular estilos.
  
  ```typescript
  encapsulation: ViewEncapsulation.ShadowDom
  ```

### ¿Qué es el ```shadow DOM?```

El ```shadow DOM``` es una tecnología estándar de los navegadores que permite crear un árbol DOM encapsulado y aislado dentro de un elemento HTML.

### ¿Qué es el ```changeDetection```?

Es el mecanismo que utiliza Angular para mantener sincronziado el modelo de datos con la vista. Es decir, detecta cuándo cambian los datos y actualiza la interfaz automáticamente.

### ¿Qué diferencias existen entre las estrategias ```Default``` y ```OnPush```? ¿Cuándo debes usar una y otra? Ventajas e inconvenientes.

```Default``` utiliza la estrategia ```CheckAlways```, donde la detección de cambios es automática hasta que se desactiva explícitamente.

  * **Ventajas:**
    * Es más simple de usar, ya que todo se actualiza automáticamente.
    * Menos probabilidad de errores.
    * No hay preocupación por cómo se modifican los datos.
  * **Inconvenientes:**
    * Menor rendimiento para aplicaciones grandes.
    * Puede haber renderizados innecesarios si se actualizan muchos componentes.

```OnPush``` utiliza la estrategia ```CheckOnce```, donde la detección de cambios es automática y se desactiva hasta que se vuelva a activar explícitamente.

  * **Ventajas:**
    * Tiene mejor rendimiento, ya que hace menos comprobaciones de cambios.
    * Evita renderizados innecesarios.
  * **Inconvenientes:**
    * Es más complejo, ya que el desarrollador debe controlar cuándo y cómo se actualiza la vista.
    * Los datos deben ser inmutables o gestionados con ```ChangeDetectorRef``` o ```async pipe```.

### Explica con detalle el ciclo de vida de los componentes. Haz hincapié en cuándo se disparan los *hooks* ```OnChanges```, ```OnInit```, ```AfterViewInit``` y ```OnDestroy```, puesto que son los más utilizados.

* **```OnChanges```:** *Hook* del ciclo de vida que se llama cuando uno o más componentes o directivas reciben cambios.

* **```OnInit```:** *Hook* del ciclo de vida que se llama después de que Angular haya inicializado todas las propiedades de entrada.

* **```AfterViewInit```:** *Hook* del ciclo de vida que se llamadespués de que Angular haya inicializado completamente la vista de un componente.

* **```OnDestroy```:** *Hook* del ciclo de vida que se llama cuando una directiva, tubería o servicio se destruye.