// Create a WeakMap to store metadata associated with DOM elements
const metadataMap = new WeakMap();

// Function to add metadata to a DOM element
function addMetadata(element, metadata) {
  metadataMap.set(element, metadata);
}

// Function to get metadata associated with a DOM element
function getMetadata(element) {
  return metadataMap.get(element);
}

// Example usage:
const button = document.createElement("button");
button.textContent = "Click me";
console.log(typeof button);

// Add metadata to the button
addMetadata(button, {
  id: 123,
  description: "This button is used for submitting a form",
});

// Later in the code, you can retrieve the metadata associated with the button
const metadata = getMetadata(button);
console.log(metadata); // { id: 123, description: 'This button is used for submitting a form' }

// Now, suppose the button element is removed from the DOM
button.remove();

// Since we used a WeakMap, the button's metadata will be automatically garbage collected
// and there won't be any memory leak
