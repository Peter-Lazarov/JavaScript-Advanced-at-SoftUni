(function solve(){
    String.prototype.ensureStart = function(string){
        if(!this.startsWith(string)){
            return string + this;
        }
        return this.toString();
    }

    String.prototype.ensureEnd = function(string){
        if(!this.endsWith(string)){
            return this + string;
        }
        return this.toString();
    }

    String.prototype.isEmpty = function(){
        return !this.toString();
    }

    String.prototype.truncate = function(n){
        if(n < 4){
            return ".".repeat(n);
        }

        if(this.length <= n){
            return this.toString();
        }

        if(this.includes(" ")){
            let words = this.split(" ");
            let result = [];
            for (const word of words) {
                if(result.join(" ").length + word.length + 3 <= n){
                    result.push(word);
                }else{
                    break;
                }
            }
            return result.join(" ") + "...";
        }

        return this.slice(0, n-3) + "...";
    }

    String.format = function(string, ...parameters){
        for (let i = 0; i < parameters.length; i++) {
            string = string.replace(`{${i}}`, parameters[i]);
        }

        return string;
    }
})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');
console.log();
