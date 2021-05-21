using Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _customerRepository;

        public UserController(IUserRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

    }
}
