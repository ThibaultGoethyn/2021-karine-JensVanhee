using System.Collections.Generic;

namespace Api.Models
{
    public interface IGameRepository
    {
        Game GetById(int id);
        IEnumerable<Game> GetAll();
        IEnumerable<Game> GetByConsole(Console console);
        void Add();
        void Delete();
        void Update();
        void SaveChanges();
    }
}
