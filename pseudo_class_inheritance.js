Function.prototype.method = function (name, func) {
     this.prototype[name] = func;
};

Function.method('new', function () {
     var that = Object.create(this.prototype);
     var other = this.apply(that, arguments);
     return (typeof other === 'object' && other) || that;
});

var Mammal = function (name) {
     this.name = name;
};

Mammal.prototype.get_name = function () {
     return this.name;
}

Mammal.prototype.says = function () {
     return this.saying || '';
};

var myMammal = new Mammal('Herb the Mammal');
var name = myMammal.get_name();

console.dir(myMammal);
console.log(name);

var Cat = function (name) {
     this.name = name;
     this.saying = 'meow';
}

Cat.prototype = new Mammal();

Cat.prototype.purr = function (n) {
     var i, s = 'r';
     for (i = 0; i < n; i += 1) {
          if (s[i-1]) {
               s += '-'
          }
          s += 'r'
     }
     return s;
}

Cat.prototype.get_name = function () {
     return this.says( ) + ' ' + this.name + ' ' + this.says( );
};

var myCat = new Cat( 'Hentrietta' );
var says = myCat.says( );
var pur = myCat.purr( 5 ); 
var name = myCat.get_name( );

console.log(
     {
          myCat,
          says,
          pur,
          name
     }
);


Function.method('inherits', function () {
     return this.says( ) + ' ' + this.name + ' ' + this.says( );
});

var Some_cat = function (name) {
     this.name = name;
     this.saying = 'meow';
}.
     inherits(Mammal).
     method( 'purr' , function ( n ) {
          var i, s = '';
          for (i = 0; i < n; i += 1) {
               if (s[i - 1]) {
                    s += '-'
               }
               s += 'r';
          }
     }).
     method('get_name', function ( ) {
          return this.says( ) + ' ' + this.name + ' ' + this.says( );
     });
