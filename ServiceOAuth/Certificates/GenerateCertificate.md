# Identity Server 4

## Signing Process (Tokens)

```powershell
[VPC-WIN10JORGEA] C:\Users\japodaca\Source\Repos
λ New-SelfSignedCertificate -DnsName "identityserver" -CertStoreLocation "cert:\LocalMachine\My" -HashAlgorithm sha256 -KeyLength 2048 -NotAfter (Get-Date).AddYears(10)


	PSParentPath: Microsoft.PowerShell.Security\Certificate::LocalMachine\My

Thumbprint                                Subject
----------                                -------
5BE77FD60D8CAA80E9A8F695B713D7BCC15D639E  CN=identityserver


[VPC-WIN10JORGEA] C:\Users\japodaca\Source\Repos
λ $CertPassword = ConvertTo-SecureString -String “12345678” -Force –AsPlainText
[VPC-WIN10JORGEA] C:\Users\japodaca\Source\Repos
λ Export-PfxCertificate -Cert Cert:\LocalMachine\My\5BE77FD60D8CAA80E9A8F695B713D7BCC15D639E -FilePath C:\Users\japodaca\Source\Repos\service-fabric-sample-gateway\ServiceOAuth\Certificates\IdentityServer.pfx -Password $CertPassword


	Directory: C:\Users\japodaca\Source\Repos\service-fabric-sample-gateway\ServiceOAuth\Certificates


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----      09/Jun/2018   7:18 PM           2677 IdentityServer.pfx
```