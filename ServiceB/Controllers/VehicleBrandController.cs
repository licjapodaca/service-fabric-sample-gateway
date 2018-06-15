using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;

namespace ServiceB.Controllers
{
	public class VehicleBrandController : ApiController
	{
		public async Task<IHttpActionResult> Get()
		{
			return await Task.Run<IHttpActionResult>(() =>
			{
				var marcas = new List<VehicleBrand>()
				{
					new VehicleBrand { Id = 1, Name = "Ford" },
					new VehicleBrand { Id = 2, Name = "Toyota" },
					new VehicleBrand { Id = 3, Name = "Chrysler" },
					new VehicleBrand { Id = 4, Name = "Nissan" },
					new VehicleBrand { Id = 5, Name = "Kia" }
				};

				return Ok(new { datos = marcas, servidor = "" });
			});
		}
	}

	public class VehicleBrand
	{
		public int Id { get; set; }
		public string Name { get; set; }
	}
}
