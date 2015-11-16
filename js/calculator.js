var calculator = angular.module('calculator', []);

calculator.controller('CalculatorController', function ($scope) {
	$scope.answer = 0;

	$scope.addOperand = function(operand) {
		$scope.answer += operand.toString();
	}
});
