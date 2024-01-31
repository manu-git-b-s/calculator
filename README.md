# DAY-15-TASK-2

# Calculator Task

This repository contains a dynamic calculator implemented using HTML, CSS, and JavaScript. The calculator is created entirely in the Document Object Model (DOM), leveraging the power of JavaScript to manipulate and generate HTML elements dynamically.

## Features

- **Interactive Interface:** The calculator features a user-friendly interface with buttons for digits, arithmetic operations, and additional functionalities.
- **Responsive Design:** The layout is designed to be responsive and visually appealing, ensuring a seamless user experience on various devices.
- **Dynamic Element Creation:** The code showcases a JavaScript function (`createElement`) that dynamically generates HTML elements, simplifying the process of creating and appending elements to the DOM.

## Structure

- **Container and Title:** The main container holds a title "CALCULATOR" and a description "Dynamic Calculator" to provide context.
- **Input and Buttons:** The calculator includes an input field for displaying the entered values and buttons for digits (0-9), arithmetic operators (+, -, \*, /), a decimal point, and an equals sign.
- **Styling:** CSS styling is applied to enhance the visual appeal, with different colors for numeric buttons, operators, and additional styling for clarity.

## Functions

- **appendToDisplay():** Appends the clicked button value to the calculator display.
- **clearDisplay():** Clears the calculator display.
- **calculateResult():** Evaluates the mathematical expression entered and displays the result.

## Keyboard Support

The calculator also supports keyboard input for a seamless user experience. Allowed keys include digits, arithmetic operators, and the equal sign. Invalid inputs trigger informative alerts to guide the user.

## Demo

Check out the live demo [here](https://calculator-manu.netlify.app).
