using System.Collections.Generic;
using System.Fabric;
using Microsoft.AspNetCore.Mvc;

namespace ServiceA.Controllers
{
	[Route("api/[controller]")]
    public class ValuesController : Controller
    {
		private readonly StatelessServiceContext context;

		public ValuesController(StatelessServiceContext context)
		{
			this.context = context;
		}

		// GET api/values
		[HttpGet]
        public IEnumerable<string> Get()
        {
			return new string[] { "NodeName", context.NodeContext.NodeName };
		}

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
