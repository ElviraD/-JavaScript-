// 列表
function List(){
	this.listSize = 0;
	this.database = [];
	this.pos = 0;
	this.length = function(){
		return this.listSize;
	}
	this.append = function(ele){
		this.database[this.listSize++] = ele;
	}
	this.find = function(ele) {
		for(var i =0;i<this.database.length;i++){
			if(this.database[i] == ele){
				return i;
			}
		}
		return -1;
	};
	this.insert = function(ele,after){
		var index = this.find(after);
		if(index>-1){
			this.database.splice(index+1,0,ele);
			++this.listSize;
			return true;
		}
		return false;
	};
	this.remove = function(ele){
		var index = this.find(ele);
		if(index>-1){
			this.database.splice(index,1);
			--this.listSize;
			return true;
		}
		return false;
	}
	this.toString = function(){
		return this.database;
	};
	this.contains = function(ele){
		for(var i =0;i<this.database.length;i++){
			if(this.database[i] == ele){
				return true;
			}
		}
		return false;
	}
}
// 1、增加一个向列表中插入元素的方法，该方法只在待插元素大于列表的所有元素时才执行插入操作。

List.prototype.insertLarge = function(ele,after){
	var condition = this.database.every(function(item){
		return typeof ele == 'string' ? ele.toLowerCase()>iten.toLowerCase() : ele>item;
	});
	if (condition) {
		 return this.database.insert(ele,after);
	}
	return false;
};

// 2、增加一个向列表中插入元素的方法，该方法只在待插元素小于列表的所有元素时才执行操作。
List.prototype.insertSmall = function(ele,after){
	var condition = this.database.every(function(item){
		return typeof ele == 'string' ? ele.toLowerCase()<iten.toLowerCase() : ele<item;
	});
	if (condition) {
		 return this.database.insert(ele,after);
	}
	return false;
};

// 3、创建一个Person类，该类用于保存人得姓名与性别信息。创建一个至少10个Person对象的列表。写一个函数显示列表中所有拥有相同性别的人。
function Person(name,sex){
	this.name = name;
	this.sex = sex;
}
List.prototype.sameSex =function(){
	var male = [];
	var female = [];
	this.database.forEach((item)=>{
		return item.sex === 'male' ? male.push(item) : female.push(item);
	});
	console.log('male:');
	male.forEach((item) => {console.log(item.name, item.sex)});
	console.log('female:');
	female.forEach((item) => {console.log(item.name, item.sex)});
};
var personlist = new List();
for(var i =0;i<20;i++){
	personlist.append(new Person(`name${i}`,(()=>{
		return Math.random()>0.5 ? 'male' : 'female';
	})()));
}
personlist.sameSex();

// 4、影碟租赁程序，客户检出后，将其加入一个已租影片列表。每当有客户检出一部影片，都显示该列表的内容。

var movielist = new List();
var customerlist = new List();
var lendedlist = new List();
class Customer{
	constructor(name,movie){
		this.name = name;
		this.movie = movie;
	}
}

function checkOut(name,movie,movielist,customerlist){
	if(movielist.contain(movie)){
		var c = new Customer(name,movie);
		customerlist.append(c);
		lendedlist.append(movie);
		movielist.remove(movie);
		console.log(lendedlist.toString());
	} else {
		console.log(`${movie} is not existed`);
	}
}

// 5、影碟租赁程序创建一个check-in()函数，当客户归还一部影片时，将该影片从已租列表删除，同时添加在现有影片列表中。
function checkIn(movie,movielist,lendedlist){
	if(lendedlist.contain(movie)){
		lendedlist.remove(movie);
		movielist.append(movie);
		console.log(lendedlist.toString());
	}
}