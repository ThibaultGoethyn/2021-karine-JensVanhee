using Api.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Api.Data.Repositories
{
    public class GameRepository : IGameRepository
    {
        private readonly Context _context;
        private readonly DbSet<Game> _games;

        public GameRepository(Context dbContext)
        {
            _context = dbContext;
            _games = dbContext.Games;
        }

        public void Add(Game game)
        {
            _games.Add(game);
        }

        public void Delete(Game game)
        {
            _games.Remove(game);
        }

        public IEnumerable<Game> GetAll()
        {
            return _games.ToList();
        }

        public IEnumerable<Game> GetByConsole(GameConsole console)
        {
            return _games.Where(g => g.Console == console).ToList();
        }

        public Game GetById(int gameId)
        {
            return _games.SingleOrDefault(g => g.GameId == gameId);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public void Update(Game game)
        {
            _context.Update(game);
        }
    }
}
