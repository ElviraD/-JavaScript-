// 链表：有一组节点组成的集合。每个节点都使用一个对象的引用指向它的后继，指向另一个节点的引用就做链。
// 单向链表
{
	// Node类
	function Node(element){
		this.element = element;
		this.next = null;
	}
	// LinkedList类
	function List(){
		this.head = new Node("head");
		this.find = function(item){
			var currNode = this.head;
			while(currNode.element != item){
				currNode = currNode.next;
			}
			return currNode;
		};
		this.insert = function(newElement,item){
			var newNode = new Node(newElement);
			var currNode = this.find(item);
			newNode.next = currNode.next;
			currNode.next = newNode;
		};
		this.remove = function(item){
			var prevNode = this.findPrevious(item);
			if(!(prevNode == null)){
				prevNode.next = prevNode.next.next;
			}
		};
		this.findPrevious = function(item) {
			var currNode = this.head;
			while(!(currNode.next == null) && (currNode.next.element != item)){
				currNode = currNode.next;
			}
			return currNode;
		}
		this.display = function(){
			var currNode = this.head;
			while(!(currNode.next == null)){
				console.log(currNode.next.element);
				currNode = currNode.next;
			}
		}
	}
}

// 双向链表
{
	function Node(element){
		this.element = element;
		this.prev = null;
		this.next = null;
	}
	function List(element){
		this.head = new Node('head');
		this.find = function(item){
			var currNode = this.head;
			while(currNode.element != item){
				currNode = currNode.next;
			}
			return currNode;
		};
		this.insert = function(newElement,item){
			var newNode = new Node(newElement);
			var currNode = this.find(item);
			newNode.next = currNode.next;
			newNode.prev = currNode;
			currNode.next = newNode;
		};
		this.remove = function(item){
			var currNode = this.find(item);
			if(!(currNode.next == null)){
				currNode.next.prev = currNode.prev;
				currNode.prev.next = currNode.next;
				currNode.prev = null;
				currNode.next = null;
			}
		};
		this.findLast = function(){
			var currNode = this.head;
			while(!(currNode.next == null)){
				currNode = currNode.next;
			}
			return currNode;
		};
		this.display = function(){
			var currNode = this.head;
			while(!(currNode.next == null)){
				console.log(currNode.next.element);
				currNode = currNode.next;
			}
		};
		this.dispReverse = function(){
			var currNode = this.head;
			currNode = this.findLast();
			while(!(currNode.prev == null)){
				console.log(currNode.element);
				currNode = currNode.prev;
			}
		}
	}
}

// 循环链表
{
	function Node(element){
		this.element = element;
		this.next = null;
	}
	function List(){
		this.head = new Node("head");
		this.head.next = this.head;
		this.find = function(item){
			var currNode = this.head;
			while(currNode.element != item){
				currNode = currNode.next;
			}
			return currNode;
		};
		this.insert = function(newElement,item){
			var newNode = new Node(newElement);
			var currNode = this.find(item);
			newNode.next = currNode.next;
			currNode.next = newNode;
		};
		this.remove = function(item){
			var prevNode = this.findPrevious(item);
			if(!(prevNode == null)){
				prevNode.next = prevNode.next.next;
			}
		};
		this.findPrevious = function(item) {
			var currNode = this.head;
			while(!(currNode.next == null) && (currNode.next.element != item)){
				currNode = currNode.next;
			}
			return currNode;
		}
		this.display = function(){
			var currNode = this.head;
			while(!(currNode.next == null) && !(currNode.next.element == 'head')){
				console.log(currNode.next.element);
				currNode = currNode.next;
			}
		}
	}
}

// 1、实现advance(n)方法，使当前节点向前移动n个节点
{
	this.advance = function(n){
		var currNode = this.head;
		while(n){
			if(this.currNode.next.element == 'head'){
				this.currNode = this.currNode.prev.prev;
			} else {
				this.currNode = this.currNode.prev;
			}
			n--;
		}
		return currNode;
	}
}

// 2、实现back(n)方法，使当前节点向后移动n个节点
{
	this.back = function(n){
		while (n){
	        if(this.currNode.next.element == "head"){
	            this.currNode = this.currNode.next.next;
	        }else{
	            this.currNode = this.currNode.next;
	        }        
	        n--;
	    }
	}
}

// 3、实现show()方法，只显示当前节点的数据
{
	this.show = function(){
		return this.currNode.element;
	}
}
// 4、使用单向链表写一段程序，记录用户输入的一组测试成绩
{
	function Node(element){
		this.element = element;
		this.next = null;
	}
	function List(){
		this.head = new Node("head");
		this.find = function(item){
			var currNode = this.head;
			while(currNode.element != item){
				currNode = currNode.next;
			}
			return currNode;
		};
		this.insert = function(newElement,item){
			var newNode = new Node(newElement);
			var currNode = this.find(item);
			newNode.next = currNode.next;
			currNode.next = newNode;
		};
		this.remove = function(item){
			var prevNode = this.findPrevious(item);
			if(!(prevNode == null)){
				prevNode.next = prevNode.next.next;
			}
		};
		this.findPrevious = function(item) {
			var currNode = this.head;
			while(!(currNode.next == null) && (currNode.next.element != item)){
				currNode = currNode.next;
			}
			return currNode;
		}
		this.display = function(){
			var currNode = this.head;
			while(!(currNode.next == null)){
				console.log(currNode.next.element);
				currNode = currNode.next;
			}
		}
	}

	// var cities = new List();
	// cities.insert('1','head');
	// cities.insert('2','1');
	// cities.insert('3','2');
	// cities.insert('4','3');
	// cities.insert('5','4');
	// cities.display();
	// cities.remove('3');
	// cities.display();
}
// 5、使用双向链表写一段程序
{
	function Node(element){
		this.element = element;
		this.prev = null;
		this.next = null;
	}
	function List(element){
		this.head = new Node('head');
		this.find = function(item){
			var currNode = this.head;
			while(currNode.element != item){
				currNode = currNode.next;
			}
			return currNode;
		};
		this.insert = function(newElement,item){
			var newNode = new Node(newElement);
			var currNode = this.find(item);
			newNode.next = currNode.next;
			newNode.prev = currNode;
			currNode.next = newNode;
		};
		this.remove = function(item){
			var currNode = this.find(item);
			if(!(currNode.next == null)){
				currNode.next.prev = currNode.prev;
				currNode.prev.next = currNode.next;
				currNode.prev = null;
				currNode.next = null;
			}
		};
		this.findLast = function(){
			var currNode = this.head;
			while(!(currNode.next == null)){
				currNode = currNode.next;
			}
			return currNode;
		};
		this.display = function(){
			var currNode = this.head;
			while(!(currNode.next == null)){
				console.log(currNode.next.element);
				currNode = currNode.next;
			}
		};
		this.dispReverse = function(){
			var currNode = this.head;
			currNode = this.findLast();
			while(!(currNode.prev == null)){
				console.log(currNode.element);
				currNode = currNode.prev;
			}
		}
	}

	// var cities = new List();
	// cities.insert('1','head');
	// cities.insert('2','1');
	// cities.insert('3','2');
	// cities.insert('4','3');
	// cities.insert('5','4');
	// cities.display();
	// console.log('\n');
	// cities.remove('3');
	// console.log('\n');
	// cities.display();
	// console.log('\n');
	// cities.dispReverse();
}

// 6、40人围成圈，每数到三杀一个人，最后生还两人，求两人位置。
{
	function Node(element){
		this.element = element;
		this.next = null;
	}
	function List6(){
		this.head = new Node("head");
		this.head.next = this.head;
		this.currNode = this.head;
		this.find = function(item){
			var currNode = this.head;
			while(currNode.element != item){
				currNode = currNode.next;
			}
			return currNode;
		};
		this.insert = function(newElement,item){
			var newNode = new Node(newElement);
			var currNode = this.find(item);
			newNode.next = currNode.next;
			currNode.next = newNode;
		};
		this.remove = function(item){
			var prevNode = this.findPrevious(item);
			if(!(prevNode == null)){
				prevNode.next = prevNode.next.next;
			}
		};
		this.findPrevious = function(item) {
			var currNode = this.head;
			while(!(currNode.next == null) && (currNode.next.element != item)){
				currNode = currNode.next;
			}
			return currNode;
		}
		this.display = function(){
			var currNode = this.head;
			while(!(currNode.next == null) && !(currNode.next.element == 'head')){
				console.log(currNode.next.element);
				currNode = currNode.next;
			}
		}
		this.back = function(n){
			while (n){
		        if(this.currNode.next.element == "head"){
		            this.currNode = this.currNode.next.next;
		        }else{
		            this.currNode = this.currNode.next;
		        }        
		        n--;
		    }
		}
	}
	function JosePhList(num){
		var Person = new List6();
		Person.insert('1','head');
		for(var i=1;i<num;i++){
			Person.insert((i+1).toString(),i.toString());
		}
		// Person.display();
		var left = num;	// 剩余人数
		while(left > 2){
			Person.back(3);
			Person.remove(Person.currNode.element);
			left--;
		}
		Person.display();
	}
	JosePhList(41);

	// 使用数组的方法实现
	// function Joseph(num){
	// 	var player = [];
	// 	for(var i=1;i<=num;i++){
	// 		player.push(i);
	// 	}
	// 	var flag = 0;
	// 	while(player.length>2){
	// 		var outPlayerNum = 0;
	// 		var len = player.length;
	// 		for(var i=0;i<len;i++){
	// 			flag++;
	// 			if(flag == 3){
	// 				flag = 0;
	//				// console.log('Out:'+player[i-outPlayerNum]);
	// 				player.splice(i-outPlayerNum,1);
	// 				outPlayerNum++;
	// 			}
	// 		}
	// 	}
	// 	return player;
	// }
	// console.log(Joseph(41));
}