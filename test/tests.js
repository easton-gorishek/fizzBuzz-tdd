const test = QUnit.test;

function even(number) {
 if(number % 2 === 0) {
   return true;
 }
 else {
   return false;
 }
}


test('returns true if even', function(assert) {
  const number = 10;
  const expect = true;
  const result = even(number);

  assert.equal(result, expect);
});

test('returns false if number is odd', function(assert) {
  const number = 5;
  const expect = false;
  const result = even(number);

  assert.equal(result, expect);
});



