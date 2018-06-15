using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Ocelot.DependencyInjection;
using Ocelot.Middleware;
using ConfigurationBuilder = Microsoft.Extensions.Configuration.ConfigurationBuilder;

namespace Gateway
{
	public class Startup
	{
		public Startup(IHostingEnvironment env)
		{
			var builder = new ConfigurationBuilder()
			.SetBasePath(env.ContentRootPath)
			.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
			.AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
			.AddJsonFile("configuration.json")
			.AddEnvironmentVariables();

			Configuration = builder.Build();
		}

		public IConfigurationRoot Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddCors();

			var authenticationProviderKey = "TestKey";
			
			services.AddOcelot(Configuration);

			services.AddAuthentication()
				.AddIdentityServerAuthentication(authenticationProviderKey, options =>
				{
					options.Authority = "http://localhost:19081/ServiceFabricApplication/ServiceOAuth";
					options.ApiName = "socialnetwork";
					options.SupportedTokens = SupportedTokens.Jwt;
					options.ApiSecret = "secret";
					options.RequireHttpsMetadata = false;
				});
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
		{
			loggerFactory.AddConsole(Configuration.GetSection("Logging"));

			app.UseCors(builder =>
			{
				builder.WithOrigins("*");
				builder.AllowAnyHeader();
				builder.AllowAnyMethod();
			});

			app.UseOcelot().Wait();
		}
	}
}
