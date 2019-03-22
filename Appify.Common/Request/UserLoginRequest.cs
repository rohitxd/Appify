using System;
using System.Collections.Generic;
using System.Text;

namespace Appify.Common.Request
{
    public class UserLoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get; set; }
    }
}
