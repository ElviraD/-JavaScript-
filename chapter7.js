// 字典：是一种以键值对的形式存储数据的数据结构

{
	function Dictionary(){
		this.database = new Array();
		this.find = function(key){
			return this.database[key];
		};
		this.add = function(key,value){
			this.database[key] = value;
		};
		this.remove = function(key){
			delete this.database[key];
		};
		this.showAll = function(){
			for(var key in Object.keys(this.database)){
				console.log(key + ':' + this.database[key]);
			}
		};
		this.show = function(key){
			console.log(key + ':' + this.find(key));
		}
		this.clear = function(){
			this.database = [];
		};
		this.count = function(){
			return Object.keys(this.database).length;
		}
	}
}

// 1、写一个程序，该程序从一个文本文件中读入名字和电话号码，然后将其存入一个字典。该程序需包含如下功能：显示单个电话号码、显示所有电话号码、增加新电话号码、删除电话号码、清空所有电话号码？
{
	function Dictionary(){
		this.database = new Array();
		this.find = function(key){
			return this.database[key];
		};
		this.add = function(key,value){
			this.database[key] = value;
		};
		this.remove = function(key){
			delete this.database[key];
		};
		this.showAll = function(){
			for(var key in Object.keys(this.database)){
				console.log(key + ':' + this.database[key]);
			}
		};
		this.show = function(key){
			console.log(key + ':' + this.find(key));
		}
		this.clear = function(){
			this.database = [];
		};
		this.count = function(){
			return Object.keys(this.database).length;
		};
		// 使用Ajax异步加载
		this.load = function(url){
			var that = this;
			var xhr = new XMLHttpRequest();
			xhr.open('get',url,true);
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xhr.send();
			xhr.onreadystateChange = function(){
				if(xhr.readyState == 4 && xhr.status == 200){
					var sarr = xhr.responseText.split(/\s{2,}/);
					for(var i=0;i<sarr.length;i++){
						if ( sarr[i] == "" ) continue;
						var _arr = sarr[i].split(/\s{2,}/);
						var name = _arr[0];
						var tel = _arr[1];
						that.add(name,tel);
					}
				}
			}
		}
	}
	var DList = new Dictionary();
	DList.load('test.txt');
	DList.add('tom1','123456789');
	DList.showAll();

	// 文本文件获取，查到的资料应该是这么获取，但是验证有问题。。。
	// var DList = new Dictionary();
	// var fso = new ActiveXObject("Scripting.FileSystemObject");
	// var ts = fso.OpenTextFile("../test.txt",1);
	// var s = ts.ReadAll();
	// var sarr = s.split('\n');
	// for(var i=0;i<sarr.length;i++){
	// 	if ( sarr[i] == "" ) continue;
	// 	var _arr = sarr[i].split(/\s{2,}/);
	// 	var name = _arr[0];
	// 	var tel = _arr[1];
	// 	DList.add(name,tel);
	// }
	// DList.showAll();
}
// 2、使用 Dictionary 类写一个程序，该程序用来存储一段文本中各个单词出现的次数。
{
	function Dictionary(){
		this.database = new Array();
		this.find = function(key){
			return this.database[key];
		};
		this.add = function(key,value){
			var val = this.find(key);
			if(val){
				this.database[key] = val + 1;
			} else {
				this.database[key] = value;
			}
		};
		this.remove = function(key){
			delete this.database[key];
		};
		this.showAll = function(){
			for(var key in Object.keys(this.database).sort()){
				console.log(key + ':' + this.database[key]);
			}
		};
		this.show = function(key){
			console.log(key + ':' + this.find(key));
		}
		this.clear = function(){
			this.database = [];
		};
		this.count = function(){
			return Object.keys(this.database).length;
		}
	}
}

// 3、单词按字母顺序排序
{
	function Dictionary(){
		this.database = new Array();
		this.find = function(key){
			return this.database[key];
		};
		this.add = function(key,value){
			this.database[key] = value;
		};
		this.remove = function(key){
			delete this.database[key];
		};
		this.showAll = function(){
			for(var key in Object.keys(this.database).sort()){
				console.log(key + ':' + this.database[key]);
			}
		};
		this.show = function(key){
			console.log(key + ':' + this.find(key));
		}
		this.clear = function(){
			this.database = [];
		};
		this.count = function(){
			return Object.keys(this.database).length;
		}
	}
}