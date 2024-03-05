console.log('bobbyhadz.com');

// ✅ checking if an `id` attribute exists on an element
const box = document.getElementById('box');

if (box.hasAttribute('id')) {
  console.log('✅ the id attribute exists');

  console.log(box.getAttribute('id')); // 👉️ "box"
} else {
  console.log('⛔️ the id attribute does NOT exist');
}

// ------------------------------------

// ✅ checking if a data-* attribute exists on an element

console.log(box.hasAttribute('data-example'));
