var arrString = ['apple','blue','red','fun'];

$('#yolo').click(function() {
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function randomString(strings) {
  document.write(strings[randomNumber(0, 3)]);
};

randomString(arrString);
});