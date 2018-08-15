// 数组
// 1、创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法。
{
	function Student(){
		this.score = [];
		this.add = add;
		this.average = average;
	}
	function add(n){
		this.score.push(n);
	}
	function average(){
		var total = 0;
		for(var i = 0;i<this.score.length;i++){
			total += this.score[i];
		}
		return total / this.score.length;
	}

	// var stu = new Student();
	// stu.add(80);
	// stu.add(89);
	// stu.add(80);
	// console.log(stu.average());	//83
}

// 2、将一组单词存储在一个数组中，并按正序和倒序分别显示这些单词
{
	var words = ['data','structures','and','algorithms','with','javascript'];

	// console.log(words);	// [ 'data', 'structures', 'and', 'algorithms', 'with', 'javascript' ]
	// console.log(words.reverse());	// [ 'javascript', 'with', 'algorithms', 'and', 'structures', 'data' ]
}
// 3、创建一个weekTemp对象，是它可以使用一个二维数组来存储每月的有用数据，增加一下方法用以显示月平均数和所有周的平均数。
{
	function weekTemp(month,week,allWeek){
		this.database = [month,week,allWeek];
		this.monthAve = monthAve;
		this.weekAve = weekAve;
		this.allWeekAve = allWeekAve;
	}
	function monthAve(){
		var total = 0;
		for(var i = 0;i<this.database[0].length;i++){
			total += this.database[0][i];
		}
		return total / this.database[0].length;
	}
	function weekAve(){
		var total = 0;
		for(var i = 0;i<this.database[1].length;i++){
			total += this.database[1][i];
		}
		return total / this.database[1].length;
	}
	function allWeekAve(){
		var total = 0;
		for(var i = 0;i<this.database[2].length;i++){
			total += this.database[2][i];
		}
		return total / this.database[2].length;
	}

	// var month = [1,2,3,4,5,6,7];
	// var week = [1,2,3,4,5,6,7];
	// var allWeek = [1,2,3,4,5,6,7];
	// var obj = new weekTemp(month,week,allWeek);
	// console.log(obj.monthAve(),obj.weekAve(),obj.allWeekAve());// 4 4 4
}

// 4、创建一个对象，它将字母存储在一个数组中，并且用一个方法可以将字母连在一起，显示成一个单词。
{
	function character(arr){
		this.char = arr;
		this.words = function(){
			return this.char.join("");
		};
	}

	// var chars = new character(['d','a','t','a']);
	// console.log(chars.words());	//data
}