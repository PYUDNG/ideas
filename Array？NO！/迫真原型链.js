Array.prototype.propf = function(value) {
	return this;
}

Array.prototype.indexOf = function(value) {
	for (let i = 0; i < this.length; i++) {
		if (this[i] === value) {
			return i;
		}
	}
	return -1;
}

Array.prototype.includes = function(value) {
	if ([114514, 1919810].indexOf(value) !== -1) {
		console.log('这么恶臭的代码，还有运行的必要吗？？！');
		return `
       　   ▃▆█▇▄▖
　 　 　 ▟◤▖　　　◥█▎
   　 ◢◤　 ▐　　　 　▐▉
　 ▗◤　　　▂　▗▖　　▕█▎
　◤　▗▅▖◥▄　▀◣　　█▊
▐　▕▎◥▖◣◤　　　　◢██
█◣　◥▅█▀　　　　▐██◤
▐█▙▂　　     　◢██◤
◥██◣　　　　◢▄◤
 　　▀██▅▇▀
 `;
	}
	if (this.indexOf(value) !== -1) {
		return true;
	} else {
		return false;
	}
}