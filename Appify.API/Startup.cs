using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Appify.Adapters;
using Appify.Common;
using Appify.Datalayer.Models;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.Swagger;

namespace Appify.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.AddCors();

            services.Configure<FormOptions>(options =>
            {
                options.ValueCountLimit = 20; //default 1024
                options.ValueLengthLimit = int.MaxValue;
                options.MultipartBodyLengthLimit = Int64.MaxValue; // 2147483647; //int.MaxValue; 
            });


            Constants.DB_PATH = Configuration["DB:ConnectionString"];
            if (string.IsNullOrEmpty(Constants.DB_PATH))
            {
                Constants.DB_PATH = @"Server=(local);Database=Appify_Dev;persist security info=True;user id=sa;password=sapass; MultipleActiveResultSets = True; ";
            }
            services.AddDbContext<Appify_DevContext>(options => options.UseSqlServer(Constants.DB_PATH));
            //services.AddDbContext<BussinessDbContext>(options => options.UseSqlServer(""));// options => options.UseSqlServer(connection));

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info
                {
                    Title = "Appify APIs",
                    Version = "v1",
                    Description = "Apis for Web initiative. Unauthourized access forbidden.",
                    TermsOfService = "None",
                    Contact = new Contact { Name = "Rohit", Email = "rohit.singhal71@gmail.com" },
                    License = new License { Name = "License" }
                });
            });

            Action<IMapperConfigurationExpression> config = MapHelper.ConfigureMapper();
            services.AddAutoMapper(config);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseAuthentication();
            app.UseHttpsRedirection();
            app.UseCors(builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            app.UseSwagger();

            //http://localhost:<random_port>/swagger
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Version V1");
            });
            app.UseMvc();
        }
    }
}
