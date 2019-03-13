using System;
using System.Collections.Generic;
using System.Text;

namespace Appify.Common.Response
{
   public class UserLoginResponse : BaseResponse
    {
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
    }
}
