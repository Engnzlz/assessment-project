# Proyecto Assessment - BPO Training Platform

Este proyecto Angular fue desarrollado como parte de un assessment para el equipo de capacitación en una empresa BPO. El objetivo fue implementar diseños proporcionados en un archivo Figma, creando una aplicación funcional y responsiva.

## Descripción del Proyecto

El proyecto consiste en una plataforma que mejora el desempeño de los agentes dentro de sus respectivas campañas. Incluye varios componentes y módulos que representan diferentes funcionalidades y secciones de la aplicación, como glosarios interactivos, herramientas de drag and drop, y otros elementos visuales y de interacción.

## Estructura del Proyecto

* **`src/app`**: Contiene el código fuente de la aplicación, incluyendo componentes y módulos.
    * **`components`**: Componentes reutilizables, como `drag-and-drop` y `sidebar-menu`.
    * **`modules`**: Módulos de la aplicación, incluyendo:
        * `cuisine`
        * `currency`
        * `customers`
        * `geography-card`
        * `glossary`
        * `holidays`
        * `home`
        * `kpi`
        * `language`
        * `retention-glossary`
        * `sports`
        * `steps-of-retention`
        * `systems`
        * `technical-knowledge`
    * `app.component.*`: Archivos del componente principal de la aplicación.
    * `app.config.*`: Archivos de configuración de la aplicación.
* **`assets`**: Contiene los recursos estáticos de la aplicación (imágenes, logos).
* **`README.md`**: Este archivo, con la descripción del proyecto e instrucciones de ejecución.

## Tecnologías Utilizadas

* Angular (versión 17).
* HTML, CSS, SCSS.
* TypeScript.
* Angular CLI.
* CDK Drag and Drop (para componentes interactivos).

## Instrucciones de Ejecución

1.  **Clonar el Repositorio:**
    ```bash
    git clone [https://github.com/Engnzlz/assessment-project.git](https://github.com/Engnzlz/assessment-project.git)
    ```
2.  **Instalar Dependencias:**
    ```bash
    npm install
    ```
3.  **Ejecutar la Aplicación:**
    ```bash
    ng serve
    ```
4.  **Navegar a la Aplicación:**
    Abre tu navegador y navega a `http://localhost:4200/`.

## Componentes Destacados

* **`glossary`**: Muestra un glosario interactivo con filtrado alfabético.
* **`drag-and-drop`**: Permite la interacción de arrastrar y soltar para ordenar elementos.
* **`language`**: Componente con ejercicios interactivos, incluyendo completar espacios en blanco.
* **`sidebar-menu`**: Menu lateral, con las diferentes secciones

## Consideraciones

* El diseño de los componentes fue implementado siguiendo las especificaciones proporcionadas en el archivo Figma.
* Se prestó especial atención a la responsividad de los componentes para asegurar una experiencia de usuario óptima en diferentes dispositivos.
* Las imágenes utilizadas en los componentes se encuentran en el directorio `assets`.

## Posibles Mejoras

* Implementar una API para obtener datos dinámicamente.
* Añadir pruebas unitarias y de integración para asegurar la calidad del código.
* Mejorar la usabilidad y la accesibilidad de la aplicación.
* Optimizar el rendimiento de la aplicación. 

## Enlaces

* **Archivo Figma:** [https://www.figma.com/design/BKLdrHgaKES93KDEWKY5Qf/CIP?node-id=1656-46733&m=dev&t=Q7DfW025IpktO4ax-1]
* **Figma Downloads:** [https://www.figma.com/downloads/](https://www.figma.com/downloads/)
* **Noto Sans - Google Fonts:** [https://fonts.google.com/specimen/Noto+Sans](https://fonts.google.com/specimen/Noto+Sans)

## Contacto

Si tienes alguna pregunta o necesitas información adicional, no dudes en contactarme.
