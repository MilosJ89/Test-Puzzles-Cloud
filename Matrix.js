// nema provera ako su nizovi razlicitih duzina
function Skalar(a,b){
  let res = 0;
	for (var i = 0; i < a.length; i++) {
        res += a[i] * b[i];
    }
  return res;
}

// ovo sam preuzeo odavde: https://stackoverflow.com/questions/27205018/multiply-2-matrices-in-javascript
// mogla je da se iskoristi funkcija skalar umesto unutrasnje petlje, ali je ovako jednostavnije, jer ne moras da transponujes
function Mnozi(a, b) {
  var aNumRows = a.length, aNumCols = a[0].length,
      bNumRows = b.length, bNumCols = b[0].length,
      m = new Array(aNumRows); 
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols); 
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;           
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return m;
}

// isto kao iznad, samo uradjeno sa Skalar funkcijom, i transponovanjem
function MnoziPrekoSkalar(a, b) {
  var aNumRows = a.length, aNumCols = a[0].length,
      bNumRows = b.length, bNumCols = b[0].length,
      m = new Array(aNumRows); 
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols); 
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = Skalar(a[r],b.map(x => x[c]));    
    }
  }
  return m;
}

// stepenovanje je samo uzastopno mnozenje samim sobom:
function Stepen(a,k){
  let rez = [];
  let len = a.length;
  
  for (var r = 0; r < len; ++r) {
    rez[r] = new Array(len); 
    for (var c = 0; c < len; ++c) {
      rez[r][c] = 0;
      if(r==c)
        rez[r][c] = 1;
    }
  }
  // za slucaj kad je na nulti stepen, vraca se identity matrica
  if(k==0)
    return rez;
  
  for(let i = 0; i < k; i++)
  {
     rez = Mnozi(rez,a);
  }
  return rez;
}




var a = [[1, 0], [0, 1]],
    b = [[1, 2], [4, 6]];
console.log("obicno:",Mnozi(a,b));
console.log("skalar:",MnoziPrekoSkalar(a,b));
console.log("stepen 0",Stepen(b,0));
console.log("stepen 1",Stepen(b,1));
console.log("stepen 2",Stepen(b,2));
console.log(Skalar([1,2,2],[1,2,2]));