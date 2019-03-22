using Appify.Common.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Appify.Common.Response
{
   public class UserLoginResponse : BaseResponse
    {
        public UserLoginDTO Data { get; set; }
    }
}
