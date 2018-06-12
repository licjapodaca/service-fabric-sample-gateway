using System.IO;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using ServiceOAuth.Configuration;

namespace ServiceOAuth
{
	public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
			services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

			services.AddIdentityServer()
				//.AddDeveloperSigningCredential()
				.AddSigningCredential(new X509Certificate2(string.Format("{0}{1}", Directory.GetCurrentDirectory(), "\\Certificates\\IdentityServer.pfx"), "12345678"))
				.AddInMemoryApiResources(InMemoryConfiguration.ApiResources())
				.AddInMemoryClients(InMemoryConfiguration.Clients())
				.AddTestUsers(InMemoryConfiguration.Users().ToList());

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
			loggerFactory.AddConsole();

			app.UseDeveloperExceptionPage();

			app.UseIdentityServer();

			app.UseStaticFiles();

			app.UseMvcWithDefaultRoute();
		}
    }
}
