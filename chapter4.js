// 栈
function stack(){
	this.database = [];
	this.top = 0;
	this.push = function(ele){
		this.database[this.top++] = ele;
	}
	this.pop = function(){
		return this.database[--this.pos];
	}
	this.peek = function(){
		return this.database[this.pos-1];
	}
	this.length = function(){
		return this.top;
	};
	this.clear = function(){
		this.pos = 0;
	};
}


// 1、判断一个算术表达式中的括号是否匹配
// 思路：遇到'(','{','['将其压入栈，遇到')','}',']'判断栈顶与其是否匹配
function check(exp){
	var s = new stack();
	var str = exp.split("");
	for(var i = 0;i<str.length;i++){
		if(['(','{','['].indexOf(str) > -1){
			s.push(str);
		} else if([')','}',']'].indexOf(str) > -1) {
			var top = s.pop();
			if((top == '(' && str == ')')||(top == '[' && str == ']')||(top == '{' && str == '}')){
				continue;
			} else {
				return false;
			}
		}
	}
	if(s.length() > 0){
		return false;
	}
	return true;
	// for(var i = 0;i<str.length;i++){
	// 	if(str[i] === '('){
	// 		s.push(str[i]);
	// 	}
	// 	if(str[i] === ')'){
	// 		if(s.pop() == '('){
	// 			return true;
	// 		} else {
	// 			return i;
	// 		}
	// 	}
	// }
	// if(s.length() > 0){
	// 	return str.lastIndexof("(");
	// }
	// return true;
}

// 2、使用两个栈，一个用来存储操作数，一个用来存储操作符，设计并实现一个js函数，该函数可以将中缀表达式转换为后缀表达式，然后利用栈对该表达式求值。
// 运算符判断
function isOperator(value){
	var operatorString = "+-*/()";
	return operatorString.indexOf(value) > -1
}


// 3、佩兹糖果盒，不改变其他颜色糖果将黄色糖果移出

function candy(arr){
	var results = [];
	var candys = new stack();
	var likes = new stack();
	for(var i=0;i<arr.length;i++) {
		if(arr[i] != 2) {
			likes.push(arr[i]);
		}
	}
	while(likes.length()>0){
		candys.push(likes.pop());
	}
	while(candys.length()>0){
		results.push(candys.pop());
	}
	return results;
}