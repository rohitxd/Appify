using Appify.Adapters;
using Appify.Common;
using Appify.Common.Error;
using Appify.Common.Request;
using Appify.Common.Response;
using Appify.Datalayer.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Appify.API.Controllers
{
    [Route("api/[controller]")]
    public class TokenController : Controller
    {
        private readonly IMapper mapper;
        private readonly Appify_DevContext context;

        private IConfiguration config;

        public TokenController(IConfiguration config, IMapper mapper, Appify_DevContext dbContext)
        {
            this.config = config;
            this.mapper = mapper;
            context = dbContext;
        }

        [AllowAnonymous]
        [HttpPost]

        [ProducesResponseType(typeof(UserLoginResponse), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(ErrorResponse), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> CreateToken([FromBody]UserLoginRequest request)
        {
            IActionResult response = Unauthorized();

            try
            {
                if (request != null)
                {
                    //Authenticate User
                    var user = await Authenticate(request);

                    if (user != null && user.Data != null)
                    {
                        var tokenString = BuildToken(user.Data.UserLoginId.ToString(), user.Data.Email, EnumPolicyRole.User);
                        response = Ok(new { token = tokenString });
                    }
                }
            }
            catch (Exception ex)
            {
                ErrorResponse errorRespose = ErrorHelper.GetErrorResponseFromEnumErrorCode(ex.Message);
                return StatusCode((int)HttpStatusCode.BadRequest, errorRespose);
            }

            return response;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("BuildToken")]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(ErrorResponse), (int)HttpStatusCode.BadRequest)]
        public string BuildToken(string userId, string email, EnumPolicyRole role)
        {
            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, userId),
                new Claim(JwtRegisteredClaimNames.Email, email),
                new Claim(JwtRegisteredClaimNames.Typ, ((int)role).ToString()),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Secretkey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(config["Jwt:Issuer"],
              config["Jwt:Audience"],
              claims,
              expires: DateTime.UtcNow.AddDays(30),
              signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private async Task<UserLoginResponse> Authenticate(UserLoginRequest request)
        {
            UserLoginResponse loginResponse = null;

            UserLoginAdapter ad = new UserLoginAdapter(mapper, context);
            loginResponse = await ad.UserLoginForSystemInternalPurpose(request);
            return loginResponse;
        }
    }
}
