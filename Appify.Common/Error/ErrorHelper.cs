using System;
using System.Collections.Generic;
using System.Text;

namespace Appify.Common.Error
{
    public static class ErrorHelper
    {
        public static ErrorResponse GetErrorResponseFromEnumErrorCode(string errorCode)
        {
            ErrorResponse response = new ErrorResponse();
            response.ErrorCode = EnumErrorCode.SERVER_GENERIC_ERROR;
            response.ErrorMessage = GetMessageFromEnumErrorCode(EnumErrorCode.SERVER_GENERIC_ERROR);
            if (!string.IsNullOrEmpty(errorCode))
            {
                EnumErrorCode enumErrorCode;
                var result = System.Enum.TryParse(errorCode, out enumErrorCode);
                if (result)
                {
                    response.ErrorCode = enumErrorCode;
                    response.ErrorMessage = GetMessageFromEnumErrorCode(enumErrorCode);
                }
            }
            return response;
        }


        private static string GetMessageFromEnumErrorCode(EnumErrorCode enumErrorCode)
        {
            string message = "Server Error";
            switch (enumErrorCode)
            {
                case EnumErrorCode.USER_WRONG_EMAIL:
                    message = "User with given mobile is already registered with another email. Please contact administrator.";
                    break;
                case EnumErrorCode.USER_BLOCKED:
                    message = "User is blocked. Please contact administrator.";
                    break;
                case EnumErrorCode.USER_REJECTED:
                    message = "User  is rejected. Please contact administrator.";
                    break;
                case EnumErrorCode.USER_NOTREGISTERED:
                    message = "User  is not registered. Please register first.";
                    break;
                case EnumErrorCode.USER_ALREADY_REGISTERED:
                    message = "User  is already registered. Please login.";
                    break;
                case EnumErrorCode.USER_OTP_NOT_VALID:
                    message = "The OTP is not valid. Please retry.";
                    break;
                case EnumErrorCode.USER_INVALID:
                    message = "User is no longer valid. Please contact administrator.";
                    break;
                case EnumErrorCode.USER_STATE_MAPPING_NOT_PRESENT:
                    message = "User state is not present. Please contact administrator.";
                    break;
                case EnumErrorCode.COUNTRY_ID_NOT_PRESENT:
                    message = "Country is not provided. Please contact administrator.";
                    break;
                case EnumErrorCode.STATE_ID_NOT_PRESENT:
                    message = "State is not provided. Please contact administrator.";
                    break;
                case EnumErrorCode.APPLICATION_LIMIT_EXCEEDED:
                    message = "Application limit exceeded. Please contact administrator.";
                    break;
                default:
                    message = "Some error occurred";
                    break;

            }
            return message;
        }
    }
}
