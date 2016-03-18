'use strict';

describe('Service: example', function () {

  // load the service's module
  beforeEach(module('angularBoilerplateApp'));

  // instantiate service
  var example;
  beforeEach(inject(function (_example_) {
    example = _example_;
  }));

  it('should do something', function () {
    expect(!!example).toBe(true);
  });

});
