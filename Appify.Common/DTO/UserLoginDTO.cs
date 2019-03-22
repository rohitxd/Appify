using System;
using System.Collections.Generic;
using System.Text;

namespace Appify.Common.DTO
{
    public class UserLoginDTO
    {
        public long UserLoginId { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
    }
}
