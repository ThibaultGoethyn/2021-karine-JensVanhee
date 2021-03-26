using System.Linq;

namespace Api.Data
{
    public class GameDataInitializer
    {
        private readonly GameContext _dbContext;

        public GameDataInitializer(GameContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void InitializeData()
        {
            _dbContext.Database.EnsureDeleted();
            if (_dbContext.Database.EnsureCreated())
            {

            }
        }
    }
}
