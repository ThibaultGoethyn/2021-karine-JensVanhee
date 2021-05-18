using Api.DTOs;
using Api.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
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
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    public class GamesController : ControllerBase
    {
        private readonly IGameRepository _gameRepository;
        private readonly ICustomerRepository _customerRepository;

        public GamesController(IGameRepository gameRepository, ICustomerRepository customerRepository)
        {
            _gameRepository = gameRepository;
            _customerRepository = customerRepository;
        }

        /// <summary>
        /// Get all the Games
        /// </summary>
        /// <returns>Array containing all the games</returns>
        [HttpGet("")]
        [AllowAnonymous]
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

        // POST: api/Games
        /// <summary>
        /// Adds a new game
        /// </summary>
        /// <param name="game">the new game</param>
        [HttpPost]
        public ActionResult<Game> PostGame(GameDTO game)
        {
            Game gameToCreate = new Game()
            {
                Title = game.Title,
                Description = game.Description,
                GameConsole = game.GameConsole,
                NewPrice = game.NewPrice,
                UsedPrice = game.UsedPrice,
                NewStock = game.NewStock,
                UsedStock = game.UsedStock
            };
            _gameRepository.Add(gameToCreate);
            _gameRepository.SaveChanges();
            return CreatedAtAction(nameof(GetGame), new { id = gameToCreate.GameId }, gameToCreate);
        }

        // PUT: api/Games/5
        /// <summary>
        /// Modifies a game
        /// </summary>
        /// <param name="id">id of the game to be modified</param>
        /// <param name="game">the modified game</param>
        /// <returns></returns>
        [HttpPut("{id}")]
        public IActionResult PutGame(int id, Game game)
        {
            if (id != game.GameId)
            {
                return BadRequest();
            }
            _gameRepository.Update(game);
            _gameRepository.SaveChanges();
            return NoContent();
        }

        // DELETE: api/Games/5
        /// <summary>
        /// Deletes a game
        /// </summary>
        /// <param name="id">the id of the game to be deleted</param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public IActionResult DeleteGame(int id)
        {
            Game game = _gameRepository.GetById(id);
            if (game == null)
            {
                return NotFound();
            }
            _gameRepository.Delete(game);
            _gameRepository.SaveChanges();
            return NoContent();
        }
    }
}
