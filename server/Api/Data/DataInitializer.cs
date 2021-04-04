using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml;
using Console = Api.Models.Console;

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
                XmlDocument xmlDocument = new XmlDocument();
                xmlDocument.Load("Data/Games.xml");
                XmlNodeList gameNodes = xmlDocument.SelectNodes("games/game");

                foreach (XmlNode chldnode in gameNodes)
                {
                        Game game = new Game()
                        {
                            Title = chldnode["title"].InnerText,
                            Description = chldnode["description"].InnerText,
                            Console = (Console)Enum.Parse(typeof(Console), chldnode["console"].InnerText),
                            NewPrice = double.Parse(chldnode["newPrice"].InnerText),
                            UsedPrice = double.Parse(chldnode["usedPrice"].InnerText),
                            NewStock = int.Parse(chldnode["newStock"].InnerText),
                            UsedStock = int.Parse(chldnode["usedStock"].InnerText)
                        };

                    _dbContext.Games.AddRange(game);
                    _dbContext.SaveChanges();
                }
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
