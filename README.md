

inputText - Bea
inputNumber - Jose
inputSelect - Jose
button - Bea

diseño pantallas - pendiente 

usamos css

login - Bea (hacerlo en el backend tambien) 
diseño de logo de app - Bea 
usaremos React hook forms para los forms


---------------------------------
Hojas de reparto SEMANAL (para organizarse el dia de reparto y en base al resultado recalcular lo que le deben los consumidores). 
- fecha
- grupo
- indicencias
- anotaciones
- Por pesona: nombre, kg, tomates, patatas, cebollas, miel, berenjenas, miel, con, sin, importe, pagado) todas las cestas 3€ kg y el plus en algun grupo
-- por defecto los kg son los que tenga configurados los usuarios pero debe ser editable.


Cada dia que reparte se hace una hoja de reparto, por cada grupo.
Immprimible.
Sumar las hojas de todo el mes y generar la factura para cada individuo. 

Lo ideal seria hacerle un sumatorio de los kg y dinero de cada cliente. 
Generar un recibo mensual. 

Reparte una vez a la semana mas o menos a cada grupo. 

Grupo --> crear, editar y borrar
 [repartos: bool(recibido), bool(pagado)], [recibos mensuales].


1 modelo usuario login (pilar y hugo)
2 modelo cliente (populados sus registros)
3 modelo registro reparto cliente/semana 
4 modelo hoja de reparto grupal (suma de 3.reparto) + totales (una vez confirmados los repartos, forman parte del cliente array de repartos recibidos de donde se sacará el recibo mensual)
5 modelo grupo de consumo (consumidores, hojas de reparto)
                                                              
