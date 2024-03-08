import { lowerCase, localeLowerCase } from "lower-case";
import { v4 as uuidv4 } from "uuid";

import * as EmailValidator from "email-validator";

import { appendFileSync } from "node:fs";

function generateUniqueID(firstName, lastName) {
  let a = lowerCase(firstName);
  let b = lowerCase(lastName);
  let c = a.concat(b);
  let d = uuidv4().substring(0, 8);
  let e = c.concat(d);
  //console.log(e);
  return e;
}

function addAccount(a) {
  if (a.length == 4 && EmailValidator.validate(a[2]) == true && a[3] >= 18) {
    let b = generateUniqueID(a[0], a[1]);
    console.log(b);

    try {
      appendFileSync("users.txt", a + " " + b);
      console.log('The "data to append" was appended to file!');
    } catch (err) {
      /* Handle the error */
    }

    return true;
  } else return false;
}

export { generateUniqueID, addAccount };
