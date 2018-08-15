// 队列
function queue(){
	this.database = [];
	this.enqueue = function(ele){
		this.database.push(ele);
	};
	this.dequeue = function(){
		this.database.shift();
	};
	this.front = function(){
		return this.database[0]
	}
	this.back = function(){
		this.database[this.database.length-1];
	};
	this.toString = function(){
		var str = '';
		for (var i = 0; i < this.database.length; i++) {
			str += this.database[i] + '\n';
		}
		return str;
	};
	this.empty = function(){
		return (this.database.length == 0) ? true : false;
	}
}

// 1、定义一个deque类，允许队列两端添加删除元素
function deque(){
	this.database = [];
	this.enfront = function(ele){
		this.database.unshift(ele);
	};
	this.defront = function(){
		this.database.shift();
	};
	this.enback = function(ele){
		this.database.push(ele);
	};
	this.deback = function(){
		this.database.pop();
	};
	this.front = function(){
		return this.database[0]
	}
	this.back = function(){
		this.database[this.database.length-1];
	};
	this.toString = function(){
		var str = '';
		for (var i = 0; i < this.database.length; i++) {
			str += this.database[i] + '\n';
		}
		return str;
	};
	this.empty = function(){
		return (this.database.length == 0) ? true : false;
	}
}

// var q1 = new deque();
// q1.enback('1');
// q1.enback('2');
// q1.enback('3');
// q1.enfront('0');
// console.log(q1.toString());
// q1.deback();
// console.log(q1.toString());
// q1.defront();
// console.log(q1.toString());

// 2、 使用deque类判断给定单词是否为回文
var p2 = new deque();
var words = 'anana';
var arr  = words.split("");
var len = arr.length;
for(var i=0;i<len;i++){
	p2.enfront(arr[i]);
}
var reverse = p2.toString().split("\n").join("");
console.log(words == reverse);

// 3、优先队列，优先级高的元素优先码大
function queue3(){
	this.database = [];
	this.enqueue = function(ele){
		this.database.push(ele);
	};
	this.dequeue = function(){
		var entry = 0;
		for(var i=0;i<this.database.length;i++){
			if(this.database[i].code > this.database[entry].code){
				entry = i;
			}
		}
		return this.database.splice(entry,1);
	};
	this.front = function(){
		return this.database[0]
	}
	this.back = function(){
		this.database[this.database.length-1];
	};
	this.toString = function(){
		var str = '';
		for (var i = 0; i < this.database.length; i++) {
			str += this.database[i].name + ' Code：' + this.database[i].code + '\n';
		}
		return str;
	};
	this.empty = function(){
		return (this.database.length == 0) ? true : false;
	}
}

function Person(name,code){
	this.name = name;
	this.code = code;
}

var eq3 = new queue3();
var p3_1 = new Person('name_1',2);
eq3.enqueue(p3_1);
var p3_2 = new Person('name_2',4);
eq3.enqueue(p3_2);
var p3_3 = new Person('name_3',7);
eq3.enqueue(p3_3);
var p3_4 = new Person('name_4',1);
eq3.enqueue(p3_4);
var p3_5 = new Person('name_5',5);
eq3.enqueue(p3_5);
// console.log("List:");
// console.log(eq3.toString());
// var seen = eq3.dequeue();
// console.log("Patient being treated："+seen[0].name+" "+seen[0].code);
// console.log(eq3.toString());

// 4、候诊室程序，a:患者进入候诊室；b:患者就诊；c:显示等待就诊名单
function waiting(patient,waitList){
	// 患者进入诊室，入队
	console.log(patient.name + " enter the waiting room.");
	waitList.enqueue(patient);
	// 患者就诊
	var seen = waitList.dequeue();
	console.log("Patient being treated："+seen[0].name);
	// 显示等待就诊名单
	console.log("Patients waiting to be seen:");
	console.log(waitList.toString());
}
var p4_1 = new Person('name_1',4);
waiting(p4_1,eq3);