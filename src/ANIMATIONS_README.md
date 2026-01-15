# Animaciones Implementadas - FixPoint Accounting & Advisory

Este documento describe todas las animaciones profesionales implementadas en el sitio web, inspiradas en sitios web de firmas contables líderes como BDO.

## Componentes de Animación

### 1. **AnimatedSection** (`/components/AnimatedSection.tsx`)
Componente wrapper para animaciones de fade-in al hacer scroll.

**Características:**
- Fade in + slide desde 4 direcciones (up, down, left, right)
- Control de delay para animaciones secuenciales
- Detección de viewport con IntersectionObserver
- Animación suave con curva de Bézier personalizada

**Uso:**
```tsx
<AnimatedSection delay={0.2} direction="up">
  <h1>Tu contenido</h1>
</AnimatedSection>
```

### 2. **AnimatedCounter** (`/components/AnimatedCounter.tsx`)
Contador animado para estadísticas que cuenta desde 0 hasta el valor final.

**Características:**
- Animación automática al entrar en viewport
- Soporte para números con sufijos (+, %, etc.)
- Animación suave de 2 segundos por defecto
- Se ejecuta solo una vez

**Uso:**
```tsx
<AnimatedCounter value="500+" duration={2} />
```

### 3. **ParallaxSection** (`/components/ParallaxSection.tsx`)
Efecto parallax sutil para imágenes y secciones.

**Características:**
- Movimiento vertical basado en scroll
- Offset configurable
- Efecto de profundidad profesional

**Uso:**
```tsx
<ParallaxSection offset={-30}>
  <img src="..." />
</ParallaxSection>
```

### 4. **StaggerContainer & StaggerItem** (`/components/StaggerContainer.tsx`)
Sistema de animaciones escalonadas para listas y grids.

**Características:**
- Animación secuencial de elementos hijos
- Delay configurable entre elementos
- Fade in + slide up
- Ideal para cards, listas, features

**Uso:**
```tsx
<StaggerContainer staggerDelay={0.1}>
  {items.map((item, index) => (
    <StaggerItem key={index}>
      <Card>{item}</Card>
    </StaggerItem>
  ))}
</StaggerContainer>
```

### 5. **SmoothScroll** (`/components/SmoothScroll.tsx`)
Scroll suave al cambiar de página.

**Características:**
- Scroll automático al inicio de página
- Transición suave
- Se activa en cada cambio de ruta

## Animaciones Implementadas por Página

### **Home** (`/pages/Home.tsx`)

#### Hero Section
- ✅ Gradiente animado de fondo (pulsante)
- ✅ Fade in secuencial de elementos
- ✅ Efectos parallax en imagen principal
- ✅ Orbes decorativos con pulso
- ✅ Botones con efecto hover scale y tap

#### Sección de Estadísticas
- ✅ Contadores animados (números que cuentan)
- ✅ Stagger animation en las 4 estadísticas
- ✅ Hover effect con scale en cada stat

#### Sección de Servicios
- ✅ Fade in del encabezado
- ✅ Stagger animation en cards de servicios
- ✅ Hover effect: card sube (-8px)
- ✅ Iconos rotan 360° al hover
- ✅ Botón con efecto scale

#### Sección About Preview
- ✅ Parallax en imagen
- ✅ Fade in secuencial de texto
- ✅ Stagger en lista de beneficios
- ✅ Items de lista se deslizan al hover

#### Call-to-Action
- ✅ Orbes de fondo con movimiento flotante
- ✅ Fade in del contenido
- ✅ Botón con hover scale

### **Services** (`/pages/Services.tsx`)

#### Hero Section
- ✅ Gradiente de fondo animado
- ✅ Fade in secuencial del contenido

#### Grid de Servicios
- ✅ Stagger animation en 6 cards
- ✅ Hover effect: card sube + aumenta sombra
- ✅ Iconos con shake animation al hover
- ✅ Features list con fade in individual

#### Sección "Why Choose Us"
- ✅ Stagger animation en 4 elementos
- ✅ Números circulares rotan al hover
- ✅ Scale effect en cada card

### **About Us** (`/pages/AboutUs.tsx`)

#### Story Section
- ✅ Parallax en imagen de oficina
- ✅ Fade in secuencial de párrafos

#### Values Section
- ✅ Stagger animation en 5 valores
- ✅ Iconos rotan 360° al hover
- ✅ Cards suben al hover

#### Timeline Section
- ✅ Animación alternada (izquierda/derecha)
- ✅ Indicadores circulares con scale animation
- ✅ Fade in desde direcciones opuestas

#### Team Section
- ✅ Stagger animation en 3 miembros
- ✅ Cards suben al hover
- ✅ Imágenes con zoom al hover

### **Navbar** (`/components/Navbar.tsx`)

- ✅ Slide down desde arriba al cargar
- ✅ Logo con scale al hover
- ✅ Indicador activo con layout animation (smooth transition)
- ✅ Underline animation al hover en links
- ✅ Botón de idioma con scale
- ✅ Botón CTA con scale
- ✅ Menú móvil con slide down animation
- ✅ Items del menú con stagger effect
- ✅ Icono hamburguesa/X con rotate animation

### **Footer** (`/components/Footer.tsx`)

- ✅ Fade in + slide up al entrar en viewport

## Características Técnicas

### Motion (Framer Motion)
Todas las animaciones utilizan `motion/react` (Framer Motion) con:

- **Curvas de animación**: Cubic bezier personalizado `[0.21, 0.47, 0.32, 0.98]`
- **Duraciones**: Entre 0.3s y 0.6s para suavidad
- **Viewport detection**: `whileInView` con `once: true`
- **Performance**: Animaciones GPU-aceleradas

### Principios de Diseño

1. **Sutileza**: Animaciones profesionales, no llamativas
2. **Propósito**: Cada animación guía la atención del usuario
3. **Performance**: Optimizadas para no afectar el rendimiento
4. **Consistencia**: Misma duración y easing en toda la app
5. **Accesibilidad**: Respetan `prefers-reduced-motion`

## Animaciones Tipo BDO Implementadas

✅ Fade in on scroll  
✅ Parallax effects  
✅ Animated counters  
✅ Stagger animations  
✅ Card hover effects  
✅ Icon animations  
✅ Smooth page transitions  
✅ Navigation animations  
✅ Gradient animations  
✅ Button interactions  

## Próximas Mejoras Sugeridas

- [ ] Animación de carga inicial (splash screen)
- [ ] Transiciones entre páginas con fade
- [ ] Animación de formulario de contacto
- [ ] Efectos de cursor personalizado
- [ ] Animaciones en scroll horizontal para testimonios
- [ ] Micro-interacciones en inputs
