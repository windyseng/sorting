describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('sorts an array of numbers', function(){
    expect( bubbleSort([1, 9, 5, 3, 7])).toEqual([1, 3, 5, 7, 9]);
  });
  it('checks if an array is already sorted and returns the sorted array', function(){
    expect( bubbleSort([2,4,6,8,10])).toEqual([2,4,6,8,10]);
  });
});
