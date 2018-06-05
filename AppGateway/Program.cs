using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.ServiceFabric.Services.Runtime;
using System;
using System.Diagnostics;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace AppGateway
{
	internal static class Program
	{
		/// <summary>
		/// This is the entry point of the service host process.
		/// </summary>
		private static void Main()
		{
			//IConfigurationRoot configuration;

			//var builder = new ConfigurationBuilder()
			//	.SetBasePath(Directory.GetCurrentDirectory())
			//	.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

			//configuration = builder.Build();

			//if (configuration["TipoArquitectura"] == "Microservicios")
			//{
				try
				{
					// The ServiceManifest.XML file defines one or more service type names.
					// Registering a service maps a service type name to a .NET type.
					// When Service Fabric creates an instance of this service type,
					// an instance of the class is created in this host process.

					ServiceRuntime.RegisterServiceAsync("AppGatewayType",
						context => new AppGateway(context)).GetAwaiter().GetResult();

					ServiceEventSource.Current.ServiceTypeRegistered(Process.GetCurrentProcess().Id, typeof(AppGateway).Name);

					// Prevents this host process from terminating so services keeps running. 
					Thread.Sleep(Timeout.Infinite);
				}
				catch (Exception e)
				{
					ServiceEventSource.Current.ServiceHostInitializationFailed(e.ToString());
					throw;
				}
			//}
			//else // Servicios
			//{
			//	IWebHostBuilder hostBuilder = new WebHostBuilder();

			//	hostBuilder.ConfigureServices(s =>
			//	{
			//		s.AddSingleton(hostBuilder);
			//	});

			//	hostBuilder.UseKestrel()
			//		.UseContentRoot(Directory.GetCurrentDirectory())
			//		.UseStartup<Startup>();

			//	var host = hostBuilder.Build();

			//	host.Run();
			//}
		}
	}
}

