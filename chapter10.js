// 树
{
	function Node(data,left,right){
		this.data = data;
		this.left = left;
		this.right = right;
		this.show = function(){
			return this.data;
		};
	}
	// 二叉查找树
	function BST(){
		this.root = null;
		// 中序遍历
		this.inOrder = function(node){
			if(!(node == null)){
				inOrder(node.left);
				console.log(node.show() + ' ');
				inOrder(node.right);
			}
		};
		// 先序遍历
		this.preOrder = function(node){
			if(!(node == null)){
				console.log(node.show() + ' ');
				preOrder(node.left);
				preOrder(node.right);
			}
		}
		// 后序遍历
		this.postOrder = function(node){
			if(!(node == null)){
				postOrder(node.left);
				postOrder(node.right);
				console.log(node.show() + ' ');
			}
		}
		this.insert = function(data){
			var n = new Node(data,null,null);
			if(this.root == null){
				this.root = n;
			} else {
				var current = this.root;
				var parent;	
				while(true){
					parent = current;
					if(data < current.data){
						current = current.left;
						if(current == null){
							parent.left = n;
							break;
						}
					} else {
						current = current.right;
						if(current == null){
							parent.right = n;
							break;
						}
					}
				}
			}
		};
		// 查找最小值
		this.getMin = function(){
			var current = this.root;
			while(!(current.left == null)){
				current = current.left;
			}
			return current.data;
		};
		// 查找最大值
		this.getMax = function(){
			var current = this.root;
			while(!(current.right == null)){
				current = current.right;
			}
			return current.data;
		};
		// 查找给定值
		this.getData = function(data){
			var current = this.root;
			while(current != null){
				if(data < current.data){
					current = current.left;
				} else if(data > current.data) {
					current = current.right;
				} else {
					return current;
				}
			}
			return null;
		};
		this.remove = function(data){
			root = removeNode(this.root,data);
		};
		function removeNode(node,data){
			if(node == null){
				return null;
			}
			if(data = node.data){
				if(node.left == null && node.right == null){
					return null;
				}
				if(node.left == null){
					return node.right;
				}
				if(node.right == null){
					return node.left;
				}
				var tempNode = getSmallest(node.right);	// 右子树上的最小值  查找待删除节点左子树上的最大值或者右子树上的最小值
				node.data = tempNode.data;
				node.right = removeNode(node.right,tempNode.data);
				return node;
			} else if(data < node.data){
				node.left = removeNode(node.left,data);
				return node;
			} else {
				node.right = removeNode(node.left,data);
				return node;
			}
		};
	}
}

