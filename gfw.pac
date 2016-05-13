function isMatchProxy(url, pattern) {
    try {
        return new RegExp(pattern.replace('.', '\.')).test(url);
    } catch (e) {
        return false;
    }
}

function FindProxyForURL(url, host) {
    var Proxy = 'PROXY 192.168.1.17:16808;';
    var list = ["google","facebook","twitter","android","chrome","t.co","youtu","blogspot","wordpress","wikipedia.org","wikileaks","dropbox"];
    for(var i=0, l=list.length; i<l; i++) {
        if (isMatchProxy(url, list[i])) {
            return Proxy;
        }
    }
    return 'DIRECT';
}
