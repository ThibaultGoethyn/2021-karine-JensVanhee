using Api.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Api.Data.Repositories
{
    public class GameRepository : IGameRepository
    {
        private readonly GameContext _context;
        private readonly DbSet<Game> _games;

        public GameRepository(GameContext dbContext)
        {
            _context = dbContext;
            _games = dbContext.Games;
        }

        public void Add()
        {
            throw new System.NotImplementedException();
        }

        public void Delete()
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Game> GetAll()
        {
            return _games.Include(g => g.GameId).ToList();
        }

        public IEnumerable<Game> GetByConsole(Console console)
        {
            throw new System.NotImplementedException();
        }

        public Game GetById(int id)
        {
            return _games.Include(g => g.GameId).SingleOrDefault(g => g.GameId == id);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public void Update()
        {
            throw new System.NotImplementedException();
        }
    }
}
