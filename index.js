(function(_root , _name, _factory){
    if(!_root || _name || _factory)
        return null;

    if(typeof exports === 'object')
    {
        //this is for node js
        module.exports =_factory;
    }else {
        //this is for the browser
        _root[_name] = _factory;
    }
}(this , 'deepfreeze' , function(){
    var _deepfreeze = {};
    var isObject=function(obj){
        return (obj && Object(obj) === obj);
    }
    var deepfreeze = function(obj){
        if(isObject(obj) && !Object.isFrozen(obj)){
            Object.keys(obj).forEach(function(name){
                deepfreeze(name);
            });

        }
        return obj;

    }
    return deepfreeze;


}));
