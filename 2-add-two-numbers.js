/**
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 https://leetcode.com/problems/add-two-numbers/description/

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]


TEMA LISTAS ENLAZADAS: https://medium.com/@bohndez.dev/estructuras-de-datos-linked-list-en-javascript-e84f3c50a4c4
https://www.youtube.com/watch?v=qk67wS7WYxo
https://elhacker.info/manuales/Lenguajes%20de%20Programacion/Fundamentos_de_programaci%C3%B3n_4ta_Edici%C3%B3n_Luis_Joyanes_Aguilar_2.pdf
 */

const convertArrToNumber = (arr) => {
  let strNumber = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    strNumber += `${arr[i]}`;
  }
  return Number(strNumber);
};

const convertNumberToArr = (val) => {
  let arr = String(val).split("");
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(Number(arr[i]));
  }
  return result;
};

const getSolution = (arr1, arr2) => {
  const val1 = convertArrToNumber(arr1);
  const val2 = convertArrToNumber(arr2);
  const sum = val1 + val2;
  return convertNumberToArr(sum);
};

//console.log(getSolution([2, 4, 3], [5, 6, 4]));
//console.log(getSolution([0], [0]));
//console.log(getSolution([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));

// ESTE ES UN CASO DE LISTAS ENLAZADAS

//function ListNode(val, next = null) {
//  this.val = val;
//  this.next = next;
//}

class ListNode {
  val;
  next;
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0); // Nodo ficticio para simplificar el manejo del resultado
  let current = dummyHead; // Puntero para construir la lista resultado
  let carry = 0; // Variable para manejar el acarreo

  // Iteramos mientras haya nodos en l1 o l2 o exista un acarreo
  while (l1 !== null || l2 !== null || carry !== 0) {
    console.log("dummyHead", dummyHead);
    console.log("current", current);
    // Obtenemos los valores de los nodos actuales, o 0 si no existen
    let val1 = l1 !== null ? l1.val : 0;
    let val2 = l2 !== null ? l2.val : 0;

    // Calculamos la suma de los valores y el acarreo
    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10); // Calculamos el nuevo acarreo
    let digit = sum % 10; // Obtenemos el dígito a almacenar

    // Creamos un nuevo nodo con el dígito y lo añadimos al resultado
    current.next = new ListNode(digit);
    current = current.next;

    // Avanzamos los punteros de l1 y l2 si no son nulos
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  // Retornamos el resultado excluyendo el nodo ficticio inicial
  //console.log(dummyHead.next);
  return dummyHead.next;
};

// Ejemplo de uso:
// l1 = [2 -> 4 -> 3] (342)
// l2 = [5 -> 6 -> 4] (465)
// Resultado esperado: [7 -> 0 -> 8] (807)
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

//let result = addTwoNumbers(l1, l2);

// Imprimir el resultado
const printList = (node) => {
  let output = [];
  while (node !== null) {
    output.push(node.val);
    node = node.next;
  }
  console.log(output.join(" -> "));
};
//console.log(l1);
//console.log(l2);
//printList(result);

const recorrerNodos = (nodos) => {
  let nodosData = nodos;
  let dummyHead = new ListNode(0);
  let current = dummyHead;

  while (nodosData !== null) {
    current.next = new ListNode(nodosData.val);
    current = current.next;
    nodosData = nodosData.next;
  }
  return dummyHead.next;
};

let nodosPrueba = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

function printNodos() {
  let nodos = recorrerNodos(nodosPrueba);

  while (nodos !== null) {
    console.log(nodos.val);
    nodos = nodos.next;
  }
}

printNodos();
