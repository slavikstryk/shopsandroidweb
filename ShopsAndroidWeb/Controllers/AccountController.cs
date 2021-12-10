using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ShopsAndroidWeb.Data.Entities.Identity;
using ShopsAndroidWeb.Models;
using ShopsAndroidWeb.Service;

namespace ShopsAndroidWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IJwtTokenService _jwtTokenService;
        private readonly UserManager<AppUser> _userManager;

        public AccountController(UserManager<AppUser> userManager,
            IJwtTokenService jwtTokenService)
        {
            _userManager = userManager;
            _jwtTokenService = jwtTokenService;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody]RegisterViewModel model)
        {
            var user = new AppUser
            {
                Email = model.Email,
                UserName = model.Username,
                PhoneNumber = model.Phone,
                Image = model.Image
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if(!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }
            result = await _userManager.AddToRoleAsync(user, "user");
            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }
            return Ok(new
            {
                token = _jwtTokenService.CreateToken(user)
            });
        }
    }
}
