using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml;
using GameConsole = Api.Models.GameConsole;

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
                            Console = (GameConsole)Enum.Parse(typeof(GameConsole), chldnode["console"].InnerText),
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
                    Customer Nathan = new Customer("Nathan", "Drake", "Nathan-Drake@gmail.com", "N@th@n123")
                    {
                        // Uncharted Drakes Fortune, Uncharted 2 Among Thieves, Uncharted 3 Drake's Deception
                        Games = new List<Game> { games[1], games[2], games[3] },
                        Balance = 100.00
                    };
                    Customer Danny = new Customer("Danny", "Johanson", "Danny-Johanson@gmail.com", "D@nny123")
                    {
                        // Call Of Duty Black Ops II, Marvel's Spider-Man, Call Of Duty Black Ops Cold War [PS4], Pokémon Diamond
                        Games = new List<Game> { games[4], games[6], games[7], games[14] },
                        Balance = 48.54
                    };
                    Customer Amber = new Customer("Amber", "Wright", "Amber-Wright@gmail.com", "@mber123")
                    {
                        // Sackboy A Big Adventure, Playstation All-Stars Battle Royale, Pokémon Diamond, Super Smash Bros. Ultimate
                        Games = new List<Game> { games[10], games[11], games[14], games[16] },
                        Balance = 89.45
                    };
                    Customer Jonathan = new Customer("Jonathan", "Loones", "Jonathan-Loones@gmail.com", "Jon@th@n123");

                    _dbContext.Customers.AddRange(Nathan, Danny, Amber, Jonathan);
                    _dbContext.SaveChanges();
                }
            }       
        }
    }
}
