var calculator = angular.module('calculator', []);

calculator.controller('CalculatorController', function ($scope) {
	var digits = [];
	$scope.display = 0;
	$scope.equation = {
		operands: [],
		operator: ''
	};

	var renderDisplay = function(number) {
		if(number.length < 11) {
			$scope.display = number;
		} else {
			$scope.display = parseFloat(number).toExponential(6);
		}
	}

	$scope.clearDisplay = function() {
		$scope.display = 0;
	};

	$scope.clearEverything = function() {
		$scope.clearDisplay();
		$scope.equation.operands = [];
		$scope.equation.operator = '';
		digits = [];
	};

	$scope.addDigit = function(number) {
		digits.push(number.toString());
		display = digits.join('').toString();

		renderDisplay(display);
	};

	$scope.setDecimal = function() {
		if(digits.length < 11 && digits.indexOf('.') === -1) {
			digits.push('.');
		}
	};


	$scope.addOperator = function(operator) {
		$scope.equation.operator= operator;
		if($scope.equation.operands.length == 2){
			$scope.equation.operands.pop();
		} else {
			$scope.equation.operands.push(digits.join('').toString());
			digits = [];
			renderDisplay('0');
		}
	}

	$scope.evalEquation = function() {
		var equate = '';
		if ($scope.equation.operands.length == 1) {
			$scope.equation.operands.push(digits.join(''));
			digits = [];
		}
		equate = $scope.equation.operands.join($scope.equation.operator);
		var answer = eval(equate);
		$scope.equation.operands.shift();
		$scope.equation.operands.unshift(answer.toString());

		renderDisplay(answer.toString());
	}

});
