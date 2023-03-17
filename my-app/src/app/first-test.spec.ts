describe('First Test',()=>{
  let testVariable: any ;

  beforeEach(() => {
    testVariable = {};
  });

  it('should return true if is true',()=>{
    //arrange
    testVariable.a =false;

    //act
    testVariable.a =true;

    expect(testVariable.a).toBe(true);
  })

})
