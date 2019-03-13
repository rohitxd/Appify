using Appify.Adapters;
using Appify.Common.Request;
using Appify.Common.Response;
using Appify.Datalayer.Models;
using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.IO;

namespace Appify.API.Controllers
{
    [Route("api/[controller]")]
    public class UserLoginController : Controller
    {
        private readonly IMapper mapper;
        private readonly Appify_DevContext context;
        private IHostingEnvironment _env;


        public UserLoginController(IMapper mapper, Appify_DevContext dbContext, IHostingEnvironment env)
        {
            _env = env;
            this.mapper = mapper;
            context = dbContext;
        }


        [Route("SignIn")]
        [HttpPost]
        public async Task<ActionResult> SignIn([FromBody]UserLoginRequest request)
        {
            try
            {
                UserLoginResponse response = new UserLoginResponse();
                UserLoginAdapter ad = new UserLoginAdapter(mapper, context);
                response = await ad.SignIn(request);
                response.IsSuccess = true;
                response.ResponseDateTime = DateTime.UtcNow;
                return Ok(response);
            }
            catch (Exception ex)
            {
                string msg = ex.Message.ToString();
                return StatusCode((int)HttpStatusCode.InternalServerError, msg);
            }
        }
    }
}
