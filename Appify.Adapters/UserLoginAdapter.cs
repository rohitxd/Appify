using Appify.Common.Request;
using Appify.Common.Response;
using Appify.Datalayer.Models;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;

namespace Appify.Adapters
{
    public class UserLoginAdapter
    {
        private readonly IMapper mapper;
        private readonly Appify_DevContext context;

        public UserLoginAdapter(IMapper mapper, Appify_DevContext dbContext)
        {

            this.mapper = mapper;
            context = dbContext;
        }


        public async Task<UserLoginResponse> SignIn(UserLoginRequest request)
        {
            UserLoginResponse response = new UserLoginResponse();

            await Task.Run(() =>
           {
               var loginDetails = (from a in context.WebUserLogin
                                   where a.Email.Equals(request.Email) && a.Password.Equals(request.Password) && a.IsActive && !a.IsDeleted
                                   select a).FirstOrDefault();
               if (loginDetails != null)
               {
                   response.Email = loginDetails.Email;
                   response.PhoneNumber = loginDetails.PhoneNumber;
               }
           });
            return response;
        }
    }
}
