# See https://aka.ms/containerimagehelp for information on how to use Windows Server 1709 containers with Service Fabric.
# FROM microsoft/aspnet:4.7.1-windowsservercore-1709
FROM microsoft/aspnet:4.7.1-windowsservercore-ltsc2016
ARG source
WORKDIR /inetpub/wwwroot
COPY ${source:-obj/Docker/publish} .
