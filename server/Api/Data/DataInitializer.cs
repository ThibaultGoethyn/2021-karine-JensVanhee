using Api.Models;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml;

namespace Api.Data
{
    public class DataInitializer
    {
        private readonly Context _dbContext;
        private readonly UserManager<IdentityUser> _userManager;

        public DataInitializer(Context dbContext, UserManager<IdentityUser> userManager)
        {
            _dbContext = dbContext;
            _userManager = userManager;
        }

        public async Task InitializeData()
        {
            _dbContext.Database.EnsureDeleted();
            if (_dbContext.Database.EnsureCreated())
            {
                List<Game> games = new List<Game>();

                if (!_dbContext.Games.Any())
                {
                    XmlDocument xmlDocument = new XmlDocument();
                    xmlDocument.Load("Data/Games.xml");
                    XmlNodeList gameNodes = xmlDocument.SelectNodes("games/game");

                    foreach (XmlNode chldnode in gameNodes)
                    {
                        Game game = new Game()
                        {
                            Title = chldnode["title"].InnerText,
                            Description = chldnode["description"].InnerText,
                            GameConsole = chldnode["console"].InnerText,
                            NewPrice = double.Parse(chldnode["newPrice"].InnerText),
                            UsedPrice = double.Parse(chldnode["usedPrice"].InnerText),
                            NewStock = int.Parse(chldnode["newStock"].InnerText),
                            UsedStock = int.Parse(chldnode["usedStock"].InnerText)
                        };

                        games.Add(game);
                        _dbContext.Games.AddRange(game);
                        _dbContext.SaveChanges();
                    }
                }

                if (!_dbContext.Customers.Any())
                {
                    Customer Nathan = new Customer("Nathan", "Drake", "Nathan-Drake@gmail.com")
                    {
                        // Uncharted Drakes Fortune, Uncharted 2 Among Thieves, Uncharted 3 Drake's Deception
                        Games = new List<Game> { games[1], games[2], games[3] },
                        Balance = 100.00
                    };
                    await CreateUser(Nathan.Email, "N@th@n123");

                    Customer Danny = new Customer("Danny", "Johanson", "Danny-Johanson@gmail.com")
                    {
                        // Call Of Duty Black Ops II, Marvel's Spider-Man, Call Of Duty Black Ops Cold War [PS4], Pokémon Diamond
                        Games = new List<Game> { games[4], games[6], games[7], games[14] },
                        Balance = 48.54
                    };
                    await CreateUser(Danny.Email, "D@nny123");

                    Customer Jonathan = new Customer("Jonathan", "Loones", "Jonathan-Loones@gmail.com");
                    await CreateUser(Jonathan.Email, "Jon@th@n123");

                    _dbContext.Customers.AddRange(Nathan, Danny, Jonathan);
                    _dbContext.SaveChanges();
                }
            }       
        }

        private async Task CreateUser(string email, string password)
        {
            var user = new IdentityUser { UserName = email, Email = email };
            await _userManager.CreateAsync(user, password);
        }
    }
}
