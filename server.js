/*for ( let i = 0; i < 64; i++ ) {
     for ( let k = 0; i < 64; i++ ) {
          console.log( Base64.fromNumber(i) + Base64.fromNumber(k) );
     }
}*/


Base64 = {
    _Rixits: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    fromNumber: function (number) {
        if (isNaN(Number(number)) || number === null ||
            number === Number.POSITIVE_INFINITY)
            throw "The input is not valid";
        if (number < 0)
            throw "Can't represent negative numbers now";

        var rixit;
        var residual = Math.floor(number);
        var result = '';
        while (true) {
            rixit = residual % 64
            result = this._Rixits.charAt(rixit) + result;
            residual = Math.floor(residual / 64);
            if (residual == 0)
                break;
            }
        return result;
    },

    toNumber : function(rixits) {
        var result = 0;
        rixits = rixits.split('');
        for (var e = 0; e < rixits.length; e++) {
            result = (result * 64) + this._Rixits.indexOf(rixits[e]);
        }
        return result;
    }
}

arr = []
for (let i = 0; i < 4096;i++){b=Base64.fromNumber(i);
arr.push(('AA').substring(0, 2 - b.length) + b)}

console.log(JSON.stringify(arr));





