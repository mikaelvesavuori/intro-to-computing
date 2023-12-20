// Imported module, this one is part of the Node runtime
import fs from 'fs';

// A function that contains several instructions
function myProgram() {
  // Variables
  const filePath = './file.txt';
  const text = 'Hello!';

  // Calling the `writeFileSync` method on the fs module (exposed as part of its API)
  // This will write a file with the contents of the `text` variable
  // into a file that will be located at`filePath`
  fs.writeFileSync(filePath, text);

  // Calling and assigning the result of the `readFileSync` operation to this constant variable, `value`
  const value = fs.readFileSync(filePath, 'utf-8');

  // Printing out the value
  console.log(value);
}

// Call the "program" contained in the `myProgram` function
myProgram();