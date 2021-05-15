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
    public class GameConsoleController : ControllerBase
    {
        private readonly IGameRepository _gameRepository;

        public GameConsoleController(IGameRepository gameRepository)
        {
            _gameRepository = gameRepository;
        }

        /// <summary>
        /// Get the games from a console
        /// </summary>
        /// <param name="gameConsole">the game console of the games (for example Playstation 4, Nintendo Switch, Xbox One)
        /// </param>
        /// <returns>Array containing all the games from one console</returns>
        [HttpGet("GetAllGamesByConsole/{console}")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IEnumerable<Game> GetAllGamesByGameConsole(string gameConsole)
        {
            IEnumerable<Game> games = _gameRepository.GetByGameConsole(gameConsole).OrderBy(x => x.Title);

            if (games == null)
                throw new ArgumentNullException("No games were found");
            return games;
        }

    }
}
