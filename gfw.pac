function FindProxyForURL(url, host) {
if (host == "www.google.com") 
 return "SOCKS 192.168.1.12:3080";
return "DIRECT"; 
}
