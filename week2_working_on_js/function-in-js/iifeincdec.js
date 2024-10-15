var counter = (function(){
var count = 0;
return{
    increment:function(){
        count++
    },
    getcount: function(){
        return count;
    },
};
})();

counter.increment();
counter.increment();
console.log(counter.getcount())