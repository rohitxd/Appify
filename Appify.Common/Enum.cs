using System;

namespace Appify.Common
{
    public enum EnumErrorCode
    {
        SERVER_GENERIC_ERROR = 0,
        USER_WRONG_EMAIL,
        USER_BLOCKED,
        USER_REJECTED,
        USER_NOTREGISTERED,
        USER_ALREADY_REGISTERED,
        USER_OTP_NOT_VALID,
        USER_INVALID,
        USER_PROFILE_NOT_EXISTS,
        USER_STATE_MAPPING_NOT_PRESENT,
        COUNTRY_ID_NOT_PRESENT,
        STATE_ID_NOT_PRESENT,
        APPLICATION_LIMIT_EXCEEDED,
    }
}
