function FindProxyForURL(url, host) {
if (shExpMatch(host,"*.google.com")) {
return "SOCKS5 192.168.1.12:3080";
   }
 return "DIRECT"; 
}
