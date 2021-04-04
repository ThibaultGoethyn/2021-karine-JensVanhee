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
        public Console Console { get; set; }

        [Required]
        public double NewPrice { get; set; }

        public double UsedPrice { get; set; }

        [Required]
        public int NewStock { get; set; }

        public int UsedStock { get; set; }
        #endregion

        #region Constructors
        public Game(string title, string description, Console console, double newPrice,  int newStock, int usedStock)
        {
            this.Title = title;
            this.Description = description;
            this.Console = console;
            this.NewPrice = newPrice;
            this.UsedPrice = newPrice * 0.75;
            this.NewStock = newStock;
            this.UsedStock = usedStock;
        }
        #endregion

        #region Methods

        #endregion
    }
}
