using System;
using System.Collections.Generic;
using System.Text;

namespace Appify.Common.Error
{
    public class ErrorResponse
    {
        public EnumErrorCode ErrorCode { get; set; }
        public string ErrorMessage { get; set; }
    }
}
