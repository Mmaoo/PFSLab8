function fibonacci(val){
  if(val != null && val !== ""){
    if(!isNaN(val) && val >= 0){
      var result;
      var first = 0;
      var second = 1;
      if(val === 0) return 0;
      else if(val === 1) return 1;
      else for(var i=2;i<=val;i++){
        result = first + second;
        first = second;
        second = result;
      }
      return result;
    }else{return("Podaj poprawną wartość");}
  }else{return "";}
}
export default fibonacci
