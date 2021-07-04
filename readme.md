¿Por qué evitar los callbacks en las llamadas asíncronas?

porque es codigo complejo y mas difíciles de entender de manera intuitiva.

¿Qué es una promesa?
es un concepto para resolver el problema de asincronía de una forma mucho más elegante y práctica
las promesas en Javascript se representan a través de un OBJECT y cada promesa estará en un estado concreto: pendiente, aceptada o rechazada

¿Qué es el callback hell?
consiste en múltiples Callbacks anidados que provocan que el código se vuelva difícil de leer y 'debuggear'; ésta es la principal razón por la cual se debe evitar.
