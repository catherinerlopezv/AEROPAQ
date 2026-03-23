# AEROPAQ
Proyecto 1 Programación Web
# AEROPAQ - Sitio Web

AEROPAQ es un sitio web estático desarrollado para una empresa de paquetería con el objetivo de ampliar su presencia digital.
El sitio permite mostrar información de servicios, cobertura, contacto y un cotizador de envíos.

---

## Tecnologías utilizadas

* **React** – Librería principal para la construcción de la interfaz
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Node.js** – Entorno de ejecución
* **npm** – Gestor de paquetes

> Las dependencias y versiones específicas del proyecto se encuentran en el archivo `package.json`, el cual define los paquetes necesarios y su versionado ([OpenReplay Blog][1])

---

## Cómo ejecutar el proyecto

Sigue estos pasos para correr el proyecto en tu entorno local(rama: dev_cl):

### 1. Clonar el repositorio

```bash
git clone https://github.com/catherinerlopezv/AEROPAQ.git
```

### 2. Entrar a la carpeta del proyecto

```bash
cd AEROPAQ/aeropaq
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar el proyecto

```bash
npm start
```

### 5. Abrir en el navegador

El proyecto se ejecutará en:

```
http://localhost:3000
```

---

## Funcionalidades principales

* Página informativa de servicios
* Sección de cobertura
* Información sobre la empresa
* Preguntas frecuentes
* Formulario de contacto
* Cotizador de envíos con cálculo de costos y tiempos

---

## Notas

* Este proyecto es una **primera versión (MVP)** enfocada en validación de mercado.
* Puede escalarse en el futuro con más funcionalidades como autenticación, tracking en tiempo real y backend.

---
## Decisiones técnicas relevantes

  1. Arquitectura basada en componentes (Component-Based Architecture)
     
  2. Separación por funcionalidades (Feature-based structure)
      Los componentes están organizados por propósito y no por tipo técnico:
      Ejemplo:
      Navbar, Footer → componentes globales
      Coverage, Cotizador → lógica específica del negocio
     
  3. Uso de componentes reutilizables globales
      Se definieron componentes que probablemente se reutilizan en toda la app:
      Navbar
      Footer
     
  4. Estructura orientada a SPA (Single Page Application)
  
*Se implementó una arquitectura basada en componentes en React, organizando la aplicación por funcionalidades.
Se definieron componentes reutilizables como Navbar y Footer, y vistas independientes como Home, Contact y Services,
integradas mediante un sistema de rutas en una SPA. Además, se encapsuló la lógica de negocio en componentes específicos 
y se separaron los estilos mediante CSS, facilitando la escalabilidad y mantenibilidad del sistema.

---

[1]: https://blog.openreplay.com/es/entender-package-json-corazon-nodejs/?utm_source=chatgpt.com "Entendiendo package.json: El Corazón de Todo Proyecto Node.js"
