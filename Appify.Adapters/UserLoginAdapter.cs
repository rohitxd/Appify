using Appify.Common.Request;
using Appify.Common.Response;
using Appify.Datalayer.Models;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using Appify.Common.DTO;
using Appify.Common;

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
                   response.Data = new UserLoginDTO();
                   response.Data.UserLoginId = loginDetails.UserLoginId;
                   response.Data.Email = loginDetails.Email;
                   response.Data.PhoneNumber = loginDetails.PhoneNumber;
               }
           });
            return response;
        }


        public async Task<UserLoginResponse> UserLoginForSystemInternalPurpose(UserLoginRequest request)
        {
            UserLoginResponse response = null;
            await Task.Run(() =>
            {
                var logindata = (from user in context.WebUserLogin
                                 where user.PhoneNumber.Equals(request.PhoneNumber)
                                 && user.Email.Equals(request.Email, StringComparison.CurrentCultureIgnoreCase)
                                 && user.IsDeleted != true
                                 select user).FirstOrDefault();
                if (logindata != null)
                {
                    response = new UserLoginResponse();
                    response.Data = new UserLoginDTO();
                    response.Data.UserLoginId = logindata.UserLoginId;
                    response.Data.Email = logindata.Email;
                    response.Data.PhoneNumber = logindata.PhoneNumber;
                   // response = mapper.Map<UserLoginDetails, UserLoginResponse>(logindata);
                }
                else
                {
                    throw new Exception(EnumErrorCode.USER_NOTREGISTERED.ToString());
                }
            });
            return response;
        }
    }
}
