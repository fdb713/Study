function FindProxyForURL(url, host) {
if (dnsDomainIs(host, ".google.com"))
 return "PROXY 192.168.1.17:16808";
return "DIRECT"; 
}
