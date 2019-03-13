using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace Appify.Adapters
{
    public class MapHelper
    {
        public MapHelper()
        {
            //Mapper.Initialize( cfg =>
            //{
            //    cfg.CreateMap<UserLoginDetails, UserLoginResponse>()
            //    .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow))
            //    .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true));

            //    cfg.CreateMap<UserRegisterRequest, UserLoginDetails>()
            //        .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow))
            //        .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true));


            //    cfg.CreateMap<UserRegisterRequest, UserProfileDetails>()
            //    .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow))
            //    .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true));

            //    cfg.CreateMap<UserLoginDetails, UserRegisterResponse>()
            //    .ForMember(dest => dest.UserId, m => m.MapFrom(src => src.UserLoginId))
            //    .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow))
            //    .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true));
            //}
            //    );

            //Mapper.Initialize(cfg => cfg.CreateMap<UserRegisterRequest, UserLoginDetails>());
        }

        public static Action<IMapperConfigurationExpression> ConfigureMapper()
        {
            Action<IMapperConfigurationExpression> action = (cfg) =>
            {
                //              cfg.CreateMap<UserLoginDetails, UserLoginResponse>()
                //              .ForMember(dest => dest.UserId, m => m.MapFrom(src => src.UserLoginId))
                //              .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow))
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true));

                //              cfg.CreateMap<UserRegisterRequest, UserLoginDetails>()
                //              .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow))
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true));


                //              cfg.CreateMap<UserRegisterRequest, UserProfileDetails>()
                //              .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow))
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true));

                //              cfg.CreateMap<UserLoginDetails, UserRegisterResponse>()
                //              .ForMember(dest => dest.UserId, m => m.MapFrom(src => src.UserLoginId))
                //              .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow))
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true));


                //              cfg.CreateMap<AdminLoginDetails, AdminLoginDTO>()
                //              .ForMember(dest => dest.AdminLoginId, m => m.MapFrom(src => src.AdminLoginId))
                //              .ForMember(dest => dest.RoleName, m => m.MapFrom(src => src.Role != null ? src.Role.Role : string.Empty));

                //              cfg.CreateMap<Corporate, CorporateDTO>()
                //              .ForMember(dest => dest.Status, m => m.MapFrom(src => src.Status != null ? src.Status.Status : string.Empty))
                //              .ForMember(dest => dest.Address, m => m.MapFrom(src => new AddressDTO()))
                //              .ForMember(dest => dest.Licenses, m => m.MapFrom(src => new List<CorporateLicenseDTO>()));


                //              cfg.CreateMap<AddressDTO, Address>()
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //              .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //              .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));

                //              cfg.CreateMap<EventRequest, Event>()
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //              .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //              .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));

                //              cfg.CreateMap<Event, EventDTO>()
                //              .ForMember(dest => dest.Status, m => m.MapFrom(src => src.Status != null ? src.Status.Status : string.Empty))
                //              .ForMember(dest => dest.CorporateName, m => m.MapFrom(src => src.Corporate != null ? src.Corporate.Name : string.Empty))
                //              .ForMember(dest => dest.EventContributionType, m => m.MapFrom(src => src.EventContributionType != null ? src.EventContributionType.Type : string.Empty))
                //              .ForMember(dest => dest.Address, m => m.MapFrom(src => AdapterHelper.GetAddressDTO(src.Address)))
                //              .ForMember(dest => dest.Volunteers, m => m.MapFrom(src => new List<EventUsers>()))
                //              .ForMember(dest => dest.GroupCount, m => m.MapFrom(src => src.EventUserMapping.Count(a => a.IsDeleted != true && a.GroupId.HasValue)))
                //              .ForMember(dest => dest.VolunteerCount, m => m.MapFrom(src => src.EventUserMapping.Count(a => a.IsDeleted != true && a.UserLoginId.HasValue)));

                //              cfg.CreateMap<Event, UserEventDto>()
                //              .ForMember(dest => dest.Status, m => m.MapFrom(src => src.Status != null ? src.Status.Status : string.Empty))
                //              .ForMember(dest => dest.CorporateName, m => m.MapFrom(src => src.Corporate != null ? src.Corporate.Name : string.Empty))
                //              .ForMember(dest => dest.EventContributionType, m => m.MapFrom(src => src.EventContributionType != null ? src.EventContributionType.Type : string.Empty))
                //              .ForMember(dest => dest.Address, m => m.MapFrom(src => AdapterHelper.GetAddressDTO(src.Address)))
                //              .ForMember(dest => dest.Volunteers, m => m.MapFrom(src => new List<EventUsers>()))
                //              .ForMember(dest => dest.GroupCount, m => m.MapFrom(src => src.EventUserMapping.Count(a => a.IsDeleted != true && a.GroupId.HasValue)))
                //              .ForMember(dest => dest.VolunteerCount, m => m.MapFrom(src => src.EventUserMapping.Count(a => a.IsDeleted != true && a.UserLoginId.HasValue)));

                //              cfg.CreateMap<CampaignRequest, Campaign>()
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //              .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //              .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));


                //              cfg.CreateMap<Campaign, CampaignDTO>()
                //              .ForMember(dest => dest.Status, m => m.MapFrom(src => src.Status != null ? src.Status.Status : string.Empty))
                //              .ForMember(dest => dest.Country, m => m.MapFrom(src => src.Country != null ? src.Country.Country : string.Empty))
                //              .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));



                //              cfg.CreateMap<TaskRequest, CampaignTask>()
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //              .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //              .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));

                //              cfg.CreateMap<VolunteerRequest, UserProfileDetails>()
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //              .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //              .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));


                //              cfg.CreateMap<MasterState, MasterStateDTO>();

                //              cfg.CreateMap<MasterCity, MasterCityDTO>();

                //              cfg.CreateMap<MasterCountry, MasterCountryDTO>();

                //              cfg.CreateMap<CampaignTask, TaskDTO>()
                //              .ForMember(dest => dest.Status, m => m.MapFrom(src => src.Status != null ? src.Status.Status : string.Empty))
                //              .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));

                //              cfg.CreateMap<UserProfileDetails, VolunteerDTO>()
                //               .ForMember(dest => dest.City, m => m.MapFrom(src => src.City != null ? src.City.Name : string.Empty))
                //              .ForMember(dest => dest.State, m => m.MapFrom(src => src.State != null ? src.State.Name : string.Empty))
                //               .ForMember(dest => dest.Country, m => m.MapFrom(src => src.Country != null ? src.Country.Country : string.Empty));


                //              cfg.CreateMap<Campaign, CampaignResponse>()
                //              .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow))
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true));

                //              cfg.CreateMap<AdminCountryMapping, MasterAdminCountryMappingDTO>();

                //              cfg.CreateMap<MasterCountry, MasterAdminCountryMappingDTO>()
                //              .ForMember(dest => dest.AdminLoginId, m => m.MapFrom(src => src.AdminCountryMapping.Any() ? src.AdminCountryMapping.FirstOrDefault().AdminLoginId : 0));

                //              cfg.CreateMap<TaskRequest, CampaignTask>()
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //              .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //              .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));

                //              cfg.CreateMap<UserVerifyOTPRequest, UserLoginRequest>();
                //              cfg.CreateMap<UserProfileDetails, UserProfileResponse>();

                //              cfg.CreateMap<UserProfileSaveRequest, UserProfileDetails>()
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //              .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //              .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));

                //              cfg.CreateMap<SurveyRequest, MasterSurvey>()
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //              .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //              .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));

                //              cfg.CreateMap<SurveyQuestionDTO, SurveyQuestion>()
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //              .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));

                //              cfg.CreateMap<SurveyQuestionOptionDTO, SurveyQuestionOption>()
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //              .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));

                //              cfg.CreateMap<MasterSurvey, SurveyDTO>()
                //              .ForMember(dest => dest.Status, m => m.MapFrom(src => src.Status.Status));

                //              cfg.CreateMap<SurveyQuestion, SurveyQuestionDTO>();

                //              cfg.CreateMap<SurveyQuestionOption, SurveyQuestionOptionDTO>();

                //              //          cfg.CreateMap<AdminSelectCountryStateCityRequest, MasterCountry>()
                //              //.ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //              // .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //              // .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));

                //              cfg.CreateMap<MasterEventGoal, UserImpactPerGoal>();

                //              cfg.CreateMap<Feedback, EventFeedbackDTO>()
                //              .ForMember(dest => dest.UserLogin, m => m.MapFrom(src => new VolunteerDTO()))
                //              .ForMember(dest => dest.Event, m => m.MapFrom(src => new EventDTO()));

                //              cfg.CreateMap<Event, EventDetailResponse>()
                //               .ForMember(dest => dest.Address, m => m.MapFrom(src => AdapterHelper.GetAddressDTO(src.Address)));

                //              cfg.CreateMap<EventGoalMapping, GoalDto>();

                //              cfg.CreateMap<UserProfileResponse, UserProfileSaveRequest>();

                //              cfg.CreateMap<SurveyRequest, UserSurveyResponse>()
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //              .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //              .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));
                //              cfg.CreateMap<AdminSelectCountryStateCityRequest, MasterCountry>()
                //    .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //     .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //     .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow))
                //     .ForMember(dest => dest.Country, m => m.MapFrom(src => src.CountryName));

                //              cfg.CreateMap<AdminSelectCountryStateCityRequest, AdminCountryMapping>()
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //     .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //     .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));

                //              cfg.CreateMap<MasterEventGoal, UserImpactPerGoal>();

                //              cfg.CreateMap<AdminSelectCountryStateCityRequest, MasterState>()
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //     .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //     .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow))
                //    .ForMember(dest => dest.Name, m => m.MapFrom(src => src.StateName))
                //    .ForMember(dest => dest.CountryId, m => m.MapFrom(src => src.CountryId));



                //              cfg.CreateMap<AdminSelectCountryStateCityRequest, MasterCity>()
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //     .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //     .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow))
                //    .ForMember(dest => dest.Name, m => m.MapFrom(src => src.CityName));

                //              cfg.CreateMap<EventFeedbackDTO, Feedback>()
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //     .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //     .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));


                //              cfg.CreateMap<MasterCity, MasterCityDTO>();

                //              cfg.CreateMap<WallPostDTO, WallPost>()
                //             .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //             .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false));

                //              cfg.CreateMap<MasterCountry, MasterCountryDTO>();

                //              cfg.CreateMap<MasterCompanyRequest, Company>()
                //               .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //     .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //     .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));

                //              cfg.CreateMap<Company, MasterCompanyDTO>();




                //              cfg.CreateMap<WallPostCommentRequest, WallPostComments>()
                //             .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //             .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //             .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));



                //              cfg.CreateMap<WallPostLikeRequest, WallPostLikes>()
                //                 .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //             .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));


                //              cfg.CreateMap<MasterAddNgoRequest, MasterNgo>()
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //             .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //             .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));

                //              cfg.CreateMap<MasterNgo, MasterNgoDTO>();
                //              cfg.CreateMap<MasterUpdateNgoRequest, MasterNgo>()
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //             .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //             .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));



                //              cfg.CreateMap<MasterSosRequest, MasterSoscontacts>()
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //             .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //             .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));

                //              cfg.CreateMap<MasterSosContactUpdateRequest, MasterSoscontacts>()
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //             .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //             .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));


                //              cfg.CreateMap<MasterSoscontacts, MasterSosDTO>();





                //              cfg.CreateMap<WallPost, WallPostDTO>();
                //              cfg.CreateMap<WallPostComments, WallPostCommentDTO>();


                //              cfg.CreateMap<NotificationRequest, Notification>()
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //             .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //             .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));

                //              cfg.CreateMap<Notification, NotificationDTO>();

                //              cfg.CreateMap<PushTokenRequest, PushToken>()
                //              .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //             .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //             .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));

                //              cfg.CreateMap<PushToken, PushTokenDTO>();


                //              cfg.CreateMap<AdminAddCountryStateCityRequest, MasterCountry>()
                //  .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //   .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //   .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow))
                //   .ForMember(dest => dest.Country, m => m.MapFrom(src => src.CountryName));


                //              cfg.CreateMap<AdminAddCountryStateCityRequest, AdminCountryMapping>()
                //         .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //.ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //.ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow));

                //              cfg.CreateMap<AdminAddCountryStateCityRequest, MasterState>()
                // .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //  .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //  .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow))
                //  .ForMember(dest => dest.CountryId, m => m.MapFrom(src => src.CountryId))
                //  .ForMember(dest => dest.Name, m => m.MapFrom(src => src.StateName));

                //              cfg.CreateMap<AdminAddCountryStateCityRequest, MasterCity>()
                //             .ForMember(dest => dest.IsActive, m => m.MapFrom(src => true))
                //    .ForMember(dest => dest.IsDeleted, m => m.MapFrom(src => false))
                //    .ForMember(dest => dest.ModifiedOn, m => m.MapFrom(src => DateTime.UtcNow))
                //   .ForMember(dest => dest.Name, m => m.MapFrom(src => src.CityName));
            };
            return action;
        }


    }
}
