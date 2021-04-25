using Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Api.Controllers
{
    [Produces("application/json")]
    [ApiConventionType(typeof(DefaultApiConventions))]
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        private readonly IGameRepository _gameRepository;

        public GamesController(IGameRepository gameRepository)
        {
            _gameRepository = gameRepository;
        }

        /// <summary>
        /// Get all the Games
        /// </summary>
        /// <returns>Array containing all the games</returns>
        [HttpGet("")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IEnumerable<Game> GetAllGames()
        {
            IEnumerable<Game> games = _gameRepository.GetAll().OrderBy(x => x.Title);

            if (games == null)
                throw new ArgumentNullException("No games were found");
            return games;
        }

        /// <summary>
        /// Get the game with given id
        /// </summary>
        /// <param name="id">the id of the game</param>
        /// <returns>A game object</returns>
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Game> GetGame(int id)
        {
            Game game = _gameRepository.GetById(id);

            if (game == null)
                return NotFound();
            return game;
        }

        /// <summary>
        /// Get the games from a console
        /// </summary>
        /// <param name="console">the console of the games: 0 = Playstation 3 | 1 = Playstation 4 | 2 = Playstation 5 | 3 = Playstation Vita |
        /// 4 = Xbox 360 | 5 = Xbox One | 6 = Nintendo DS | 7 = Nintendo 3DS | 8 = Nintendo Switch
        /// </param>
        /// <returns>Array containing all the games from one console</returns>
        [HttpGet("GetAllGamesByConsole/{console}")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IEnumerable<Game> GetAllGamesByConsole(GameConsole console)
        {
            IEnumerable<Game> games = _gameRepository.GetByConsole(console).OrderBy(x => x.Title);

            if (games == null)
                throw new ArgumentNullException("No games were found");
            return games;
        }
    }
}
