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
                Game CodBo4Ps4 = new Game("Call Of Duty Black Ops 4", 
                    "The most played series of Call of Duty returns with Call of Duty: Black Ops 4, an all-new gaming experience created for the Black Ops community with more ways to play with friends than ever before.",
                    Console.PLAYSTATION_4, 35.98, 20, 10);

                Game CodBo4Xb1 = new Game("Call Of Duty Black Ops 4",
                    "The most played series of Call of Duty returns with Call of Duty: Black Ops 4, an all-new gaming experience created for the Black Ops community with more ways to play with friends than ever before.", 
                    Console.XBOX_ONE, 26.98, 15, 5);

                Game PkmnDiamondDS = new Game("Pokémon Diamond",
                    "As a new Pokémon trainer, you go on a journey to catch, train, and fight with Pokémon to eventually become the champion of the Pokémon League. Along the way, you must overcome numerous challenges and search for the Pokémon that reigns over time in Pokémon Diamond Version.",
                    Console.NINTENDO_DS, 39.98, 5,2);

                _dbContext.Games.AddRange(CodBo4Ps4, CodBo4Xb1, PkmnDiamondDS);
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
