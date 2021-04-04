using Api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        private readonly IGameRepository _gameRepository;

        public GamesController(IGameRepository gameRepository)
        {
            _gameRepository = gameRepository;
        }

        [HttpGet]
        public IEnumerable<Game> GetAllGames()
        {
            return _gameRepository.GetAll().OrderBy(x => x.Title);
        }

        [HttpGet("{id}")]
        public ActionResult<Game> GetGame(int id)
        {
            Game game = _gameRepository.GetById(id);
            if (game == null)
                return NotFound();
            return game;
        }
    }
}
