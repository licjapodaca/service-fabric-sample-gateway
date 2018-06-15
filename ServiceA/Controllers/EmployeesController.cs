using System.Collections.Generic;
using System.Fabric;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ServiceA.Controllers
{
	[Route("api/[controller]")]
	public class EmployeesController : Controller
	{
		private readonly StatelessServiceContext context;

		public EmployeesController(StatelessServiceContext context)
		{
			this.context = context;
		}

		[HttpGet]
		public async Task<IActionResult> Get()
		{
			//return new string[] { "NodeName", context.NodeContext.NodeName };
			return await Task.Run<IActionResult>(() =>
			{
				var empleados = new List<Employee>()
				{
					new Employee { Id = 1, Name = "Jorge Apodaca" },
					new Employee { Id = 2, Name = "Gerardo Luque" },
					new Employee { Id = 3, Name = "Alejandro Lopez" },
					new Employee { Id = 4, Name = "Claudia Rosales" },
					new Employee { Id = 5, Name = "Israel Montenegro" }
				};

				return Ok(new { datos = empleados, servidor = context.NodeContext.NodeName });
			});
		}
	}

	public class Employee
	{
		public int Id { get; set; }
		public string Name { get; set; }
	}
}
