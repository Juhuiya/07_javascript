// 메서드 단축
var dog = {
    name : '그린',
    eat : function(food) {
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요~`);
    }
};

var dog2 = {
    name : "삔냥",
    eat(food) {
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요~`);
    }
};

dog.eat('고구마');
dog2.eat('사과');