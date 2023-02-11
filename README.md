# Página de E-commerce con React Js
## Segunda Pre-entrega del proyecto final del curso de React Js de CoderHouse
Alumna: Valentina Llanos Pontaut <br><br>
Para el presente proyecto se me ocurrió crear una página que venda productos como CD's, vinilos, DVD's y libros de música. El nombre de la tienda será "Myousic".<br>
Para esta segunda pre-entrega se cumplió con las siguientes consignas:<br>
- Crear un componente ItemCount.jsx, que debe estar compuesto de un botón y controles, para incrementar y decrementar la cantidad requerida de ítems:
  - El número contador nunca puede superar el stock disponible
  - De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd
  - Si hay stock al clickear el botón se debe ejecutar onAdd con un número que debe ser la cantidad seleccionada por el usuario
- Crea los componentes Item.jsx e ItemList.jsx para mostrar algunos productos en tu ItemListContainer.jsx:
  - Item.jsx es un componente destinado a mostrar información breve del producto que el user clickeará luego para acceder a los detalles
  - ItemList.jsx es un agrupador de un set de componentes Item.jsx
- Los ítems deben provenir de un llamado a una promise que los resuelva en tiempo diferido (setTimeout) de 2 segundos, pars emular retrasos de red
- Crear un componente ItemDetailContainer.jsx con la misma premisa que ItemListContainer.jsx
- Al iniciar utilizando un efecto de montaje, debe llamar a un async mock que en 2 segundos le devuelva un ítem, y lo guarde en un estado prop
- Crear un componente ItemDetail.jsx que deberá mostrar la vista de detalle de un ítem incluyendo su descripción, una foto y el precio
- Rutas a configurar:
  - ´/´ navega a ItemListContainer
  - ´/category/:id´ navega a ItemListContainer
  - ´/item/:id´ navega a ItemDetailContainer

![gif](/src/Myousic-Google-Chrome-2023-02-11-13-30-41.gif)
