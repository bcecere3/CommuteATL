'use strict';

describe('Filter: exampleFilter', function () {

  // load the filter's module
  beforeEach(module('angularBoilerplateApp'));

  // initialize a new instance of the filter before each test
  var exampleFilter;
  beforeEach(inject(function ($filter) {
    exampleFilter = $filter('exampleFilter');
  }));

  it('should return the input prefixed with "exampleFilter filter:"', function () {
    var text = 'angularjs';
    expect(exampleFilter(text)).toBe('exampleFilter filter: ' + text);
  });

});
