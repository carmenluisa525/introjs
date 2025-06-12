
//Se puede invocar una función declarada, antes de su definición gracias al hoisting

sumar4();

//Esta es la función declara

function sumar4() {
    console.log(2 + 2);
}
//Est oprovoca un error;ReferenceError:cannot access `sumar2`before initialitation
sumar2(); //Error aquí
//Esta es una función expresada (función anónima asignada a una constante)
const sumar2 = function(){
    console.log(3 + 3);
}

//esto es porque JavaScript se ejecuta en 2 etapas. Esto es lo que se conoce como Hoisting
//En la primera etapa,registra todas las funciones y determina las variables
//En esta etapa se llama creación
//La segunda etapa es la que ejecuta el código.Se llama ejecución.

//El flujo de ejeución de javaScript es el orden en el que el motor de javascript procesa el código.

//Aquí te explico los conceptos clave para entender cómo se maneja el flujo de ejecución.

//1. Ejecución síncrona:
//JavaScript es un lenguaje de programación single-Threaded, lo que significa que ejecuta una tarea a la vez en un solo hilo.
//-las instrucciones se ejecutan de arriba haca abajo, una a la vez, en el orden
//en que aparecen en el código.
//2. Fases del flujo de ejecución:
//Fase de creación(Hoisting):
//-Durante esta fasse, el motor de js escanea el código y realiza el hoisting (elevación) de las declaraciones de variables
//y funciones
//-Las declaraciones de variables con var s elevan al inicio de su ámbito (scope) pero no se inicializan.
//las declaraciones de variables con let y cont también se elevan pero no se inicializan y permanecenen una "zona muerta temporal" (TDZ)
//hasta que se ejecuta su asignación.
//-Las funciones declaradas (usando function) se elvan completad, incluyenfo su cuerpo.
//-fase de ejecución:
//- En esta fase, el motor de JS ejecuta el código líne por línea, asignando valores a las variables y ejecutando las funciones
//3.Pilas  colas:
//-Pila de Ejecución (Call Stack):
//-La pila de ejecucón maneja el seguimiento de las funciones que está invocando.
//se añde un marco de pila (stack frame) a la pila.Cuando la función temina,se elimina el marco
//-Cola de ejecución (Task Queue):
//-La cola de tareas gestiona las funciones qu deben ejecutarse después de que de coplete el código síncrono actual.
//Esto incluye callbacks de eventos, promesas resultas y otro tipo de tareas asíncronas.
//4.Eventos y Asíncronía:
//Eventos y el Event Loop:
//JS utiliza un modelo basado en eventos par manejar tareas asincronicas.Cuando ocurre un evento como
//(un clicdel usuario o la resolución de una promeda), se coloca callback en la cola de tareas
//-El evento Loop es un mecanismo que monitorea la pila de ejecución y la cola de tareas
//Si la pila de ejecución está vacía, el Evento Loop toma el primer callBack de la cola de tareas y lo coloca
//en la pila de ejecución para ser procesado.
//-Promesas y Microtask Queu:
//Las promesas añaden otra capa de asincronía.Las promesas resueltas se colocan en la cola de microtareas (Microtask queue) ,tienen prioridad
//sobre la cola de tareas normal.
//Entendder el flujo de ejecución de JS es crucial para escribir y depurar código asíncrono de manera efectiva.