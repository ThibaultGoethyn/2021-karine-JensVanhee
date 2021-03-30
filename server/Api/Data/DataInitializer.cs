using Api.Models;
using System.Linq;

namespace Api.Data
{
    public class DataInitializer
    {
        private readonly Context _dbContext;

        public DataInitializer(Context dbContext)
        {
            _dbContext = dbContext;
        }

        public void InitializeData()
        {
            _dbContext.Database.EnsureDeleted();
            if (_dbContext.Database.EnsureCreated())
            {

            }
            if (!_dbContext.Games.Any())
            {
                Game CodBo4Ps4 = new Game("Call Of Duty: Black Ops 4", "Modern first person shooter game.", Console.PLAYSTATION_4, 29.99, 20, 10);
                _dbContext.Games.AddRange(CodBo4Ps4);
                _dbContext.SaveChanges();
            }
            if (!_dbContext.Customers.Any())
            {
                Customer Danny = new Customer("Danny", "Peterson", "Danny-Peterson@gmail.com", "D@nny123");
                Customer Amber = new Customer("Amber", "Wright", "Amber-Wright@gmail.com", "@mber123");
                Customer Jonathan = new Customer("Jonathan", "Loones", "Jonathan-Loones@gmail.com", "Jon@th@n123");
                _dbContext.Customers.AddRange(Danny, Amber, Jonathan);
                _dbContext.SaveChanges();
            }
        }
    }
}
