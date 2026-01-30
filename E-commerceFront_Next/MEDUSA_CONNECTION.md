# Guía de Conexión con Medusa JS

Este documento explica cómo está integrada la tienda con el backend de Medusa y cómo realizar extensiones o modificaciones en la conectividad.

## 1. Inicialización del Cliente

El cliente de Medusa se inicializa en [src/lib/medusa.ts](file:///d:/E-commerce/my-storefront/src/lib/medusa.ts). Utilizamos el SDK oficial `@medusajs/medusa-js`.

```typescript
import Medusa from "@medusajs/medusa-js"

export const medusa = new Medusa({ 
  baseUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000", 
  maxRetries: 3 
})
```

## 2. Configuración de Entorno

Asegúrate de tener las siguientes variables en tu archivo `.env.local`:

- `NEXT_PUBLIC_MEDUSA_BACKEND_URL`: URL del servidor Medusa (ej. https://api.tutienda.com).
- `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY`: Tu clave pública de Medusa (obtenida en el dashboard de Medusa).

## 3. Endpoints Principales Utilizados

### Productos
Para obtener productos, se utiliza `medusa.products.list()`. En componentes como `FeaturedProducts`, manejamos la respuesta para extraer precios y miniaturas.

### Categorías
La navegación utiliza `medusa.productCategories.list()` para generar dinámicamente el menú del Catálogo.

### Carrito (Cart)
Aunque actualmente usamos un `CartContext` local para persistencia rápida, la conexión con Medusa sigue este flujo:
1. Crear carrito: `medusa.carts.create()`
2. Añadir item: `medusa.carts.lineItems.create(cart_id, { variant_id, quantity })`

## 4. Mejores Prácticas

- **Tipado**: Siempre define interfaces para las respuestas de Medusa (ver ejemplo en `FeaturedProducts.tsx`).
- **Manejo de Errores**: Utiliza bloques `try-catch` alrededor de las llamadas al SDK para evitar caídas del frontend si el backend no responde.
- **Caché**: Next.js maneja el caché de las peticiones `fetch` que Medusa-JS utiliza internamente. Puedes configurar revalidación si usas el App Router.

---
*Este documento es parte de la arquitectura de NariñoTex.*
