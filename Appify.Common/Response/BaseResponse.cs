using System;
using System.Collections.Generic;
using System.Text;

namespace Appify.Common.Response
{
   public class BaseResponse
    {
        public bool IsSuccess { get; set; }
        public DateTime ResponseDateTime { get; set; }
    }
}
