FlipTable = {
      a : '\u0250'
    , b : 'q'
    , c : '\u0254'
    , d : 'p'
    , e : '\u01DD'
    , f : '\u025F'
    , g : '\u0183'
    , h : '\u0265'
    , i : '\u0131'
    , j : '\u027E'
    , k : '\u029E'
    , l : '\u05DF'
    , m : '\u026F'
    , n : 'u'
    // , o
    , p : 'd'
    , q : 'b'
    , r : '\u0279'
    // , s
    , t : '\u0287'
    , u : 'n'      // &#652;
    , v : '\u028C'
    , w : '\u028D'
    // , x
    , y : '\u028E'
    // , z
    , A : '\u2200'
    , B : 'B'
    , C : '\u0186'
    , D : '\u15E1'
    , E : '\u018E'
    , F : '\u2132'
    , G : '\u05E4'
    , H : 'H'
    , I : 'I'
    , J : '\u017F'
    , K : 'K'
    , L : '\u02E5'
    , M : 'W'
    , N : 'N'
    , O : 'O'
    , P : '\u0500'
    , Q : '\u01D1'
    , R : '\u0223'
    , S : 'S'
    , T : '\u2534' //725
    , U : '\u2229'
    , V : '\u039B'
    , W : '\u0429'
    , X : 'X'
    , Y : '\u2144'
    , Z : 'Z'
    , 0 : '0'
    , 1 : '\u0196'
    , 2 : '\u1105'
    , 3 : '\u0190'
    , 4 : '\u3123'
    , 5 : '\u03DB'
    , 6 : '9'
    , 7 : '\u3125'
    , 8 : '8'
    , 9 : '6'
    , ',' : "'"
    , '.' : '\u02D9'
    , '?' : '\u00BF'
    , '!' : '\u00A1'
    , '"' : ',,'
    , "'" : ','
    , '`' : ','
    , '&' : '\u214B'
    , '_' : '\u203E'
    , '.' : '\u02D9'
    , '(' : ')'
    , ')' : '('
    , '[' : ']'
    , ']' : '['
    , '(' : ')'
    , '{' : '}'
    , '?' : '\u00BF'
    , '!' : '\u00A1'
    , '>' : '<'
    , '<' : '>'
    , '_' : '\u203E'
    , ';' : '\u061B'
    , "\'" : ','
    , '\\' : '\\'
    , '\u203F' : '\u2040'
    , '\u2045' : '\u2046'
    , '\u2234' : '\u2235'
};


flipText = function(content) {
  var len = content.length;
  var result = new Array();
  for (var idx = 0  ; idx < len  ; idx++) {
    var cOld = content[idx];
    var cNew = FlipTable[content[idx]];
    var xdi = len -1 - idx;
    result[xdi] = (cNew == undefined) ? cOld : cNew;
  };
  return result.join('');
};

/*  ------   This is the way it should be ------  */
/*
(function ( $ ) {

  $.fn.flipElementText = function() {
    this.text(flipText(this.text()));
    return this;
  };

}( jQuery ));
*/


/*  ------        This is what works      ------  */
/*
*/
Meteor.startup(function () {
  if (Meteor.isClient) {
//    console.log("~~~~ warehouseman:fliptext --> client-side startup ~~~~~~~~~ ");
    (function ( $ ) {

      $.fn.flipElementText = function() {
        this.text(flipText(this.text()));
        return this;
      };

    }( jQuery ));

  }
});
