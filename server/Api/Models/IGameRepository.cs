using System.Collections.Generic;

namespace Api.Models
{
    public interface IGameRepository
    {
        Game GetById(int gameId);
        IEnumerable<Game> GetAll();
        IEnumerable<Game> GetByConsole(GameConsole console);
        IEnumerable<Game> GetByCustomer(Customer customer);

        void Add(Game game);
        void Update(Game game);
        void Delete(Game game);
        void SaveChanges();
    }
}
