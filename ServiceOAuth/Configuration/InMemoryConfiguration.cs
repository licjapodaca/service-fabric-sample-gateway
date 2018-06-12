using IdentityServer4.Models;
using IdentityServer4.Test;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace ServiceOAuth.Configuration
{
    public class InMemoryConfiguration
    {
		public static IEnumerable<ApiResource> ApiResources()
		{
			return new List<ApiResource>
			{
				new ApiResource("socialnetwork", "Social Network")
				{
					UserClaims = new List<string> { "City", "State" }
				}
			};
		}

		public static IEnumerable<Client> Clients()
		{
			return new[]
			{
				new Client
				{
					ClientId = "socialnetworkclient",
					AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,
					ClientSecrets = { new Secret("secret".Sha256()) },
					AllowedScopes = { "socialnetwork" },
					AccessTokenType = AccessTokenType.Jwt,
					AlwaysSendClientClaims = true
				}
			};
		}

		public static IEnumerable<TestUser> Users()
		{
			return new[]
			{
				new TestUser
				{
					SubjectId = "1",
					Username = "japodaca@bts.com.mx",
					Password = "bts123!",
					Claims = new List<Claim>
					{
						new Claim("City", "Mexicali"),
						new Claim("State", "Baja California")
					}
				}
			};
		}
    }
}
