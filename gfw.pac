function FindProxyForURL(url, host) {
if (shExpMatch(url,"*.google.*")) {
return "SOCKS 192.168.1.12:3080";
}
 return "DIRECT"; 
}
