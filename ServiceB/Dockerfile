FROM microsoft/aspnet:4.7.1-windowsservercore-ltsc2016

#RUN powershell -NoProfile -Command Remove-Item -Recurse C:\inetpub\wwwroot\*

WORKDIR /inetpub/wwwroot

COPY bin/Release/Publish .
