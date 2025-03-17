using Microsoft.AspNetCore.Mvc;
using PasswordManager.Models;

namespace PasswordManager.Controllers  
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignupController : ControllerBase
    {
        [HttpPost]
        public IActionResult PostSignup([FromBody] user request)
        {
            return Ok(new { message = "Signup successful" });
        }
    }


}

