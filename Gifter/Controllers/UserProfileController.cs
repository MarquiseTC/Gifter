using Gifter.Models;
using Gifter.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Gifter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _userProfileRepository;
        public UserProfileController(IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var profiles = _userProfileRepository.GetAll();
            return Ok(profiles);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var profile = _userProfileRepository.GetById(id);
            if (profile == null)
            {
                return NotFound();
            }
            return Ok(profile);
        }

        [HttpGet("{id}/posts")]
        public IActionResult GetPostsByUserId(int id)
        {
            var userProfile = _userProfileRepository.GetByIdWithPosts(id);
            if (userProfile == null)
            {
                return NotFound();
            }

            if (userProfile.Posts == null)
            {
                return NotFound("No posts found for this user");
            }

            return Ok(userProfile.Posts);
        }

        [HttpPost]
        public IActionResult Create(UserProfile profile)
        {
            _userProfileRepository.Add(profile);
            return CreatedAtAction("Get", new { id = profile.Id }, profile);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, UserProfile profile)
        {
            if (id != profile.Id)
            {
                return BadRequest();
            }

            _userProfileRepository.Update(profile);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _userProfileRepository.Delete(id);
            return NoContent();
        }
    }
}

