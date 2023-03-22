# ComandosGit
## Consulta 30 etiquetas de html
### Etiquetas iniciales
1. **!DOCTYPE html** Es el que le dice al navegador que estamos utilizando el estandar es decir html5
2. **html /html** Esta es la raíz del documento, dentro de esta deben estar el resto de etiquetas
### Metadatos
3. **head /head** Este representa la descripcción de la página web
4. **title /title** Define el titulo de la página web
5. **link** Se utiliza para enlazar elementos externos al html,por ejemplo el css
6. **meta** Para definir otros metadatos que no puede definir html, por ejemplo el nombre del autor del sitio web
7. **style /style** Para introducir en el documento html un código css en línea
### Etiquetas de seccciones
8. **body /body** El contenido que esté contenido aquí será el mostrado en la página web)
9. **nav /nav** Para lo que nos aparece en la parte de navegación de la web
10. **main /main** para definir el contenido principal del documento y solo puede existir uno por documento
11. **section /section** Define una sección de documento
12. **article /article** Define contenido independiente de la web
13. **aside /aside** Aquí es común ver el contenido adicional de la web,tiene que ver, pero no es muy importante
14. **h1,h2,h3,h4,h5,h6** Se utilizan para explicar el contenido que irá a continuación
15. **header /header** Define la cabecera de la página web. Logo, menu de navegación, etc
16. **footer /footer** Define el pie de la página
### Etiquetas para la agrupación de contenido
17. **p /p** Se utiliza para escribir párrafos
18. **hr** Se utiliza como separador
19. **pre /pre** Se utiliza para pegar texto manteniendo el formato que tenía
20. **blockquote /blockquote** Se utiliza para indicar que el contenido es texto citado
21. **ol /ol** Se utiliza para crear una lista orenada
22. **ul /ul** Se utiliza para crear ina lista des-ordenada
23. **li /li** Se utiliza para recoger el contenido de un elemento de cualquier lista
24. **dl /dl** Se utiliza patra crear una lista de definiciones
25. **figure /figure** Se utliza para indicar una figura ilustrada como parte del documento html5
26. **figure /figure** se utliza para definir el subtitulo de una figura
27. **div /div** Se utiliza para crear un contenedor genérico
### Etiquetas semánticas para texto
28. **a /a** Se utiliza para crear hiperenlaces en el documento html
29. **strong /strong** Se utiliza para definir una palabra o un conjunto de las mismas como importantes
30. **br** Se utiliza para crear un salto de línea 

### Consulta 30 estilos Css.
1. **Font-family** Se utiliza para definir la familia de la topográfia 
2. **Font-size** Se utiliza para definir el tamaño de al fuente, el valor se escribe en px o em (se recomienda em, pero si el usuario no cambia el tamaño por defecto es 16px)
3. **Color** Se utiliza para definir el color de la tipográfia
4. **Width** Se utiliza para definir el ancho del elemento
5. **Max-width o min-width** Se utiliza para el ancho máximo o mínimo de un elemento
6. **Padding** Es la distancia desde el borde de un elemento hasta su contenido
7. **Margin** La distancia entre un elemento y otro, desde el borde del elemento hacia afuera
8. **Border** Se utiliza para definir el borde de un elemento, su color, su estilo y su grosor
9. **Background** Se utiliza para definir los fondos de un objeto
10. **text-align** Se utiliza para la alineación del texto
11. **text-decoration** Se utiliza para dar efectos de subrayado, tachado,parpadeo
12. **letter-spacing** Se utiliza para dar espaciado especifico entre caracteres, se trabaja con px
13. **line-height** Se utiliza para el interlineado entre renglones de texto, se trabaja con px  
14. **vertical-align** Se utiliza para la alineación vertical del texto
###para elementos gráficos de la web
15. **width** Se utiliza para dar el ancho de un elemento o imagen, se trabaja con px, en y %
16. **height** Se utiliza para dar la altura a un elemento o imagen
17. **background-image** imagen de fondo para un elemento
18. **background-repeat** ret}petición o no de la magen dentro del fondo, se repite en *x* (horizontal) o en *y* (vertical)
ej:#content {background-repeat: repeat-x;}
19. **background-position** Se utiliza para dar la posición a la imagen dentro del fondo (centro,izquierda o derecha), se trabaja can px y %
ej:#content {background-position: center;}
20. **display** Es el modo en que se muetra un elemnto o imagen (también puede no mostrarse), uno muy común es el elemento en bloque (block)
21. **z-index** Se utiliza para definir la posición de un elemento o imagen en el eje z (para poner elementos tapando a otros elementos) 
### Para añadir espacios o márgenes
22. **text-shadow** Coloca una sombra difuminada en el texto dentro del elemento
23. **border-color** Establece el color del borde
24. **border-width** Establece el ancho de todos los bordes
25. **border-style** Establece el estilo de línes para todos los bordes
26. **border-left-color** Establece el color del borde ixquierdo
27. **border-left-style** Establece el estilo de línea del borde izquierdo
28. **border-left-width** Establece el ancho de la línea del borde izquierdo
29. **table-layout** Establece el ancho de las celdas de una tabla según el contenido
30. **text-transform** convierte texto a caracteres en mayúsculas o minúsculas

### Consulta que es Display block, inline e inline-block

**Display block** Un elemento que ocupa el ancho máximo disponible

**inline** Elementos en línea, solo ocupan el ancho que necesitan para mostrar su contenido, se colocan de izquierda a derecha, cuando no tienen espacio pasan a línea de abajo

**inline-block** Es la combinación de los dos tipos de elementos anteriores, estos admiten dimensiones, pero todavía son elementos en línea (estarán colocados uno al lado de otro)

### Mencionar en la consulta anterior de las etiquetas cuales son
etiquetas block, inline e inline-block

### Consultar cuales son los eventos en JavaScript.
**abort (onabort)** El evento se produce cuando el usuario detiene la carga de una imagen, bien sea po detener la carga, por realizar una acción que lo detiene o porque se retira de la página.

**blur (onblur)** se da el onblur cuando de el elemento pierde el foco de la aplicación, esto es por ejemplo donde puede estar situado el cursor (un botón, un campo de trxto, etc)

**click (onclick)** Se produce cuando se da clic en un botón o un enlace

**dragdrop (ondragdrop)** Cuando el usuario suelta algo que había arrastrado sobre la página

**error (onerror)** Cuando no se puede cargar un documento o una imagen y esta queda rota

**focus (onfocus)** Se produce cuando un elemento de la página gana el foco de la aplicación

**keydown (onkeydown)** Se produce cuando el usuario presiona una tecla, este se produce en el momento de la pulsación

**keypress (onkeypress)** Se produce cuando el usuario deja pulsada una tecla un tiempo determinado, antes de este se produce un onkeydown en el momento ene lque se pulsa la tecla

**keyup (onkeyup)** Se produce cuando el usuario de ja de apretar una tecla, cuando se libera

**mousedown (onmousedown)** Se produce cuando el usuario pulsa sobre un elemento de la página

**mousemove (onmousemove)** Se produce cuando el ratón se mueve por la página

**mouseout (onmouseout)** Se produce cuando el puntero del ratón sale del área ocupada por un elemento de la página 

**mouseover (onmouseover)**  Se produce cuando el puntero del ratón entra en el área ocupada por un elemento de la página

**move (onmove)** Se ejecuta cuando se mueve la ventana del navegador o un frame

**resize (onresize)** Se produce cuando se redimensiona la ventana del navegador o el frame (si la página los tiene)

**reset (onreset)** (está relacionado con los formularios) y se produce cuando el usuario hace clic en el botón de reset de un formulario

**select (onselect)** Se ejecuta cuando el usuario selecciona un elemento de un formulario

**submit (onsubmit)** Se produce cuando el usuario apreta el botón de enviar el formulario, se da antes del envío propiamente dicho

**unload (onunload)** Se da cuando se abandona una página, bien sea por entrar aun enlace que lo lleve a otra página o por cerrar la ventana del navegador 

 ### Consultar que son los selectores simples y los compuestos.

**Selector css simple** Es el que está formado por una única cadena textual un selector individual es el *

_selectores por tipo de elemento del DOM son: div, p..._

_selector de ID #_

_selector de clase ._

_selector de pseudoclase ;_

_selector de pseudoelemento :: (notación actual)_

_los combinadores son +, ~, >,entre otros_

**Selectores css compuesto**
Es una cadena de selectores simples sin combinadores 






Trabajo de clase con comandos de Git
