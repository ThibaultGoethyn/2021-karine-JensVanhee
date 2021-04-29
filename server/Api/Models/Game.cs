using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Api.Models
{
    public class Game
    {
        #region Properties
        [Required]
        public int GameId { get; set; }

        [Required]
        public string Title { get; set; }

        public string Description { get; set; }

        [Required]
        public GameConsole Console { get; set; }

        [Required]
        public double NewPrice { get; set; }

        [Required]
        public double UsedPrice { get; set; }

        [Required]
        public int NewStock { get; set; }

        public int UsedStock { get; set; }

        public ICollection<Customer> Customers { get; set; }
        #endregion

        #region Constructors
        public Game()
        {
        }

        public Game(string title, string description, GameConsole console, double newPrice, double usedPrice, int newStock, int usedStock)
        {
            this.Title = title;
            this.Description = description;
            this.Console = console;
            this.NewPrice = newPrice;
            this.UsedPrice = usedPrice;
            this.NewStock = newStock;
            this.UsedStock = usedStock;
        }
        #endregion

        #region Methods

        #endregion
    }
}
