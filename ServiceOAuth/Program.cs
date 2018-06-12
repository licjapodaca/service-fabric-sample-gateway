using Microsoft.AspNetCore.Hosting;
using Microsoft.ServiceFabric.Services.Runtime;
using System;
using System.Diagnostics;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace ServiceOAuth
{
    internal static class Program
    {
        /// <summary>
        /// This is the entry point of the service host process.
        /// </summary>
        private static void Main()
        {
			//var host = new WebHostBuilder()
			//	.UseKestrel()
			//	.UseUrls("http://localhost:7589")
			//	.UseContentRoot(Directory.GetCurrentDirectory())
			//	.UseIISIntegration()
			//	.UseStartup<Startup>()
			//	.Build();

			//host.Run();
			try
			{
				// The ServiceManifest.XML file defines one or more service type names.
				// Registering a service maps a service type name to a .NET type.
				// When Service Fabric creates an instance of this service type,
				// an instance of the class is created in this host process.

				ServiceRuntime.RegisterServiceAsync("ServiceOAuthType",
					context => new ServiceOAuth(context)).GetAwaiter().GetResult();

				ServiceEventSource.Current.ServiceTypeRegistered(Process.GetCurrentProcess().Id, typeof(ServiceOAuth).Name);

				// Prevents this host process from terminating so services keeps running. 
				Thread.Sleep(Timeout.Infinite);
			}
			catch (Exception e)
			{
				ServiceEventSource.Current.ServiceHostInitializationFailed(e.ToString());
				throw;
			}
		}
    }
}
